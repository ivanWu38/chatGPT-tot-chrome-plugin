(async () => {
  try {
    // 直接從 title 標籤抓取對話標題
    let title = "Untitled";

    // 先嘗試從 title 標籤獲取
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.textContent) {
      title = titleElement.textContent.trim();
      // 移除可能的 ChatGPT 後綴
      title = title.replace(/\s*[-|]\s*ChatGPT.*$/i, '').trim();
    }

    // 如果 title 為空或是預設值，嘗試其他選擇器
    if (!title || title === "ChatGPT" || title === "New chat" || title === "") {
      const fallbackSelectors = [
        'h1',
        '[data-testid*="conversation-title"]',
        'div[contenteditable="true"]',
        'div.truncate span'
      ];

      for (const selector of fallbackSelectors) {
        const element = document.querySelector(selector);
        if (element && element.innerText && element.innerText.trim()) {
          title = element.innerText.trim();
          if (title !== "ChatGPT" && title !== "New chat") {
            break;
          }
        }
      }
    }

    // 取得目前頁面 URL
    const url = window.location.href;

    // 組合 Markdown 連結
    const text = `[${title}](${url})`;

    // 複製到剪貼簿
    await navigator.clipboard.writeText(text);

    // 顯示頁面內成功提示
    showSuccessToast("✅ Link Copied");
  } catch (err) {
    console.error("Error copying:", err);
    showSuccessToast("❌ 複製失敗，請重試");
  }
})();

// 顯示成功提示的函數
function showSuccessToast(message) {
  // 移除已存在的提示
  const existingToast = document.getElementById('copy-success-toast');
  if (existingToast) {
    existingToast.remove();
  }

  // 創建提示元素
  const toast = document.createElement('div');
  toast.id = 'copy-success-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10a37f;
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    transition: all 0.3s ease;
  `;

  // 添加到頁面
  document.body.appendChild(toast);

  // 1秒後自動移除
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 1000);
}
