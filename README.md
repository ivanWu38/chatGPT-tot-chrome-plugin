# ChatGPT Copy Link

A simple Chrome extension that allows you to copy ChatGPT conversation titles and URLs in Markdown format with one click.

一鍵複製 ChatGPT 對話標題與 URL，格式為 Markdown 連結的簡單 Chrome 擴展。

ChatGPTの会話タイトルとURLをMarkdown形式で簡単にコピーできるChrome拡張機能。

---

## English

### Features
- 📋 One-click copy ChatGPT conversation title and URL
- 🔗 Automatically formats as Markdown link: `[Title](URL)`
- ✅ Visual success notification on page
- 🚀 Lightweight and fast
- 🎯 Works on all ChatGPT conversation pages

### Installation
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension icon will appear in your toolbar

### Usage
1. Navigate to any ChatGPT conversation page
2. Click the extension icon in your toolbar
3. The conversation title and URL will be automatically copied to your clipboard in Markdown format
4. A success notification will appear briefly on the page
5. Paste anywhere you need the link!

### Example Output
```markdown
[Economic Model Comparison Analysis](https://chatgpt.com/c/68d4a7f1-8320-8327-a5be-860f9527b3e7)
```

---

## 中文

### 功能特色
- 📋 一鍵複製 ChatGPT 對話標題與 URL
- 🔗 自動格式化為 Markdown 連結：`[標題](URL)`
- ✅ 頁面內視覺化成功提示
- 🚀 輕量快速
- 🎯 支援所有 ChatGPT 對話頁面

### 安裝方式
1. 下載或複製此程式庫
2. 開啟 Chrome 瀏覽器並前往 `chrome://extensions/`
3. 在右上角啟用「開發人員模式」
4. 點擊「載入未封裝項目」並選擇擴展資料夾
5. 擴展圖示將出現在工具列中

### 使用方法
1. 導航至任何 ChatGPT 對話頁面
2. 點擊工具列中的擴展圖示
3. 對話標題和 URL 將自動以 Markdown 格式複製到剪貼簿
4. 頁面上會短暫顯示成功通知
5. 隨時貼上需要的地方！

### 輸出範例
```markdown
[經濟模式比較分析](https://chatgpt.com/c/68d4a7f1-8320-8327-a5be-860f9527b3e7)
```

---

## 日本語

### 機能
- 📋 ワンクリックでChatGPTの会話タイトルとURLをコピー
- 🔗 自動的にMarkdown形式でフォーマット：`[タイトル](URL)`
- ✅ ページ内での視覚的な成功通知
- 🚀 軽量で高速
- 🎯 すべてのChatGPT会話ページで動作

### インストール方法
1. このリポジトリをダウンロードまたはクローンする
2. Chromeを開いて`chrome://extensions/`にアクセス
3. 右上の「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリックして拡張機能フォルダを選択
5. 拡張機能のアイコンがツールバーに表示される

### 使用方法
1. ChatGPTの任意の会話ページに移動
2. ツールバーの拡張機能アイコンをクリック
3. 会話タイトルとURLが自動的にMarkdown形式でクリップボードにコピーされる
4. ページに成功通知が短時間表示される
5. 必要な場所にペースト！

### 出力例
```markdown
[経済モデル比較分析](https://chatgpt.com/c/68d4a7f1-8320-8327-a5be-860f9527b3e7)
```

---

## Technical Details | 技術詳細 | 技術詳細

### File Structure | 檔案結構 | ファイル構造
```
chatgpt-copy-link/
├── manifest.json          # Extension configuration
├── background.js          # Background script
├── content.js            # Content script for title extraction
├── icon16.png            # 16x16 icon
├── icon48.png            # 48x48 icon
├── icon128.png           # 128x128 icon
└── README.md             # This file
```

### Permissions | 權限 | 権限
- `activeTab`: Access current tab
- `scripting`: Inject content script
- `clipboardWrite`: Write to clipboard

### Browser Compatibility | 瀏覽器相容性 | ブラウザ対応
- Chrome (Manifest V3)
- Edge (Chromium-based)
- Other Chromium-based browsers

---

## Contributing | 貢獻 | 貢献

Feel free to submit issues and pull requests!

歡迎提交問題和拉取請求！

issueやプルリクエストをお気軽にお送りください！

## License | 授權 | ライセンス

MIT License

---

**Made with ❤️ for better ChatGPT experience**