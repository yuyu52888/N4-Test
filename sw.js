const CACHE_NAME = 'n4-quiz-v1.0.1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // 注意：不包含 question_bank.js，讓它動態更新
];

// 安裝Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker 安裝中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('快取開啟，正在快取基本文件');
        return cache.addAll(urlsToCache).catch(error => {
          console.error('快取失敗:', error);
        });
      })
  );
  // 跳過等待，立即激活
  self.skipWaiting();
});

// 激活Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker 激活');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 刪除舊版本的快取
          if (cacheName !== CACHE_NAME) {
            console.log('刪除舊快取:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // 聲明控制所有客戶端
      return self.clients.claim();
    })
  );
});

// 攔截請求
self.addEventListener('fetch', event => {
  // 只處理 GET 請求
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  
  // 特別處理題庫文件 - 網路優先策略
  if (requestUrl.pathname.includes('question_bank.js')) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // 檢查回應是否有效
          if (networkResponse.status === 200) {
            // 更新快取中的題庫
            caches.open(CACHE_NAME)
              .then(cache => {
                console.log('更新題庫快取');
                cache.put(event.request, networkResponse.clone());
              })
              .catch(error => {
                console.error('更新題庫快取失敗:', error);
              });
          }
          return networkResponse;
        })
        .catch(async () => {
          // 如果網路失敗，使用快取的版本
          console.log('網路失敗，使用快取題庫');
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // 如果快取中也沒有，返回錯誤回應
          return new Response('無法加載題庫', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        })
    );
  } 
  // 處理 HTML 導航請求 - 網路優先
  else if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // 快取新的 HTML 回應
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => {
          // 回退到快取
          return caches.match(event.request) || 
                 caches.match('./index.html');
        })
    );
  }
  // 其他靜態資源 - 快取優先策略
  else {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // 不在快取中，從網路獲取
          return fetch(event.request)
            .then(networkResponse => {
              // 檢查是否為有效回應
              if (networkResponse.status === 200) {
                // 快取新的資源
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(event.request, responseClone));
              }
              return networkResponse;
            })
            .catch(error => {
              console.error('獲取資源失敗:', error);
              // 可以返回一個預設的回應或錯誤頁面
              if (event.request.destination === 'image') {
                // 對於圖片，可以返回一個預設圖片
                return new Response('', { status: 404 });
              }
              return new Response('網路錯誤', { status: 503 });
            });
        })
    );
  }
});

// 後台同步（可選功能）
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('後台同步執行');
    // 可以在這裡執行後台同步任務
  }
});

// 處理推送通知（可選功能）
self.addEventListener('push', event => {
  const options = {
    body: event.data?.text() || '日文N4測驗有新內容！',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: '開始測驗',
        icon: './icon-192.png'
      },
      {
        action: 'close',
        title: '關閉',
        icon: './icon-192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('日文N4測驗', options)
  );
});

// 處理通知點擊
self.addEventListener('notificationclick', event => {
  console.log('通知被點擊', event.notification.tag);
  event.notification.close();

  if (event.action === 'explore') {
    // 用戶點擊了「開始測驗」
    event.waitUntil(
      clients.openWindow('./')
    );
  } else {
    // 用戶點擊了通知本身
    event.waitUntil(
      clients.matchAll({type: 'window'}).then(windowClients => {
        // 檢查是否已經有打開的窗口
        for (let client of windowClients) {
          if (client.url === './' && 'focus' in client) {
            return client.focus();
          }
        }
        // 如果沒有，打開新窗口
        if (clients.openWindow) {
          return clients.openWindow('./');
        }
      })
    );
  }
});