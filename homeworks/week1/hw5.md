## 請解釋後端與前端的差異。

#### 前端

##### 網頁上看得到的東西都是前端

* 處理資料的呈現。
* 使用者介面互動。
* 網站效能調校。
* 確保網站最大化還原設計稿，各種載具體驗一致。

#### 後端

##### 網頁上看不到的

* 資料庫的串接設計。
* 處理伺服器效能。
* 應用程式介面（AIP）開發。



## 假設我今天去 Google 首頁搜尋框打上：JavaScrit 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 收到 request 後建立連線到 server。
2. server 解析請求並傳到資料庫。
3. 在資料庫找尋關鍵字「JavaScrit」。
4. 將找到的資料從資料庫取出回傳 response。
5. 瀏覽器解析 response。
6. 印於瀏覽器中。

參考資料：[在瀏覽器輸入網址並送出後，到底發生了什麼事？](https://cythilya.github.io/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/)

## 請列舉出 5 個 command line 指令並且說明功用

1. #### cd

切換目前資料夾位置。

變化型：
* 回到 home 目錄： `cd ~`
* 回到 根 目錄： `cd /`
* 回到上一層： `cd ..`

2. #### ls

列出所有檔案。

變化型：
* 列出檔案詳細的資訊：`cd ~`

3. #### echo

印出字串到 Terminal。

進階用法：
* 印出字串到 檔案： `echo hello >> text.txt`


4. #### grep

抓取特定的關鍵字，類似搜尋的功能。


5. #### cat（catenate）

將檔案內容顯示於 Terminal。

