(async () => {
    try {
      // 取得標題（根據你提供的 DOM 結構）
      const titleElement = document.querySelector("div.truncate span");
      const title = titleElement ? titleElement.innerText.trim() : "Untitled";
  
      // 取得 URL
      const url = window.location.href;
  
      // 組合 Markdown 格式
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
    }
  })();
  