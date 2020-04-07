## 請以自己的話解釋 API 是什麼
API 就像是餐廳裡的服務員，將顧客所點的餐點傳到廚房，廚房做好餐點後，服務員將餐點交給顧客。顧客只能點有存在菜單上的菜色，因此菜單就像是 API 文件讓顧客了解廚房能做什麼事情。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

* 201：請求成功並且伺服器創建了新的資源。
* 408：請求超時。可在隨時提交一次請求且無需修改。
* 503：伺服器暫時無法處理。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


### 餐廳 API 入門

2020-04-07 更新。

#### 介紹
餐廳 API 提供了全台灣餐廳資料的工具，並提供基本的 CRUD 功能。


#### API 文件
Base URL：https://taiwan-restaurants.herokuapp.com
| 說明 |Method|path|參數|範例|
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳資料  |GET    |/restaurants       |_limit:限制回傳資料數量|/restaurants?_limit=5|
| 獲取單一餐廳資料  |GET    |/restaurants/:id   |無                     |/restaurants/mamamia|
| 刪除餐廳資料     |DELETE |/restaurants/:id    |無                    |                    |
| 新增餐廳資料     |POST   |/restaurants        |name: 餐廳名           |                   |
| 更改餐廳資料     |PATCH   |/restaurants/:id    |name: 餐廳名 （必要參數） |                   |

