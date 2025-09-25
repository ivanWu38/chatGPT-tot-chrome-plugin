chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "SHOW_NOTIFICATION") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
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
