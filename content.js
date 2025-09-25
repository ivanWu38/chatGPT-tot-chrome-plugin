(async () => {
  try {
    // 嘗試抓取對話標題，若抓不到則給預設
    const titleElement = document.querySelector("div.truncate span");
    const title = titleElement ? titleElement.innerText.trim() : "Untitled";

    // 取得目前頁面 URL
    const url = window.location.href;

    // 組合 Markdown 連結
    const text = `[${title}](${url})`;

    // 複製到剪貼簿
    await navigator.clipboard.writeText(text);

    // 顯示通知
    chrome.runtime.sendMessage({
      type: "SHOW_NOTIFICATION",
      message: "✅ copy link success"
    });
  } catch (err) {
    console.error("Error copying:", err);
    chrome.runtime.sendMessage({
      type: "SHOW_NOTIFICATION",
      message: "❌ copy failed, please try again"
    });
  }
})();
