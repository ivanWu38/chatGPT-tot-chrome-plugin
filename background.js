chrome.action.onClicked.addListener((tab) => {
  if (!tab?.id) return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "SHOW_NOTIFICATION") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon128.png", // 使用 128x128，顯示更清晰
      title: "ChatGPT Copy Link",
      message: request.message
    }, (notificationId) => {
      // 2 秒後自動清除
      setTimeout(() => {
        chrome.notifications.clear(notificationId);
      }, 2000);
    });
  }
});
