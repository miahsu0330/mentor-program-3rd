## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。


## 請問什麼是盒模型（box modal）
打開開發者工具 computed 可以看到 box modal
主要的功能在於，清楚的看到目前所指的元素在瀏覽器中實際的 margin border padding 及 寬高，還有渲染的 CSS 
我們通常會設定以下CSS 讓 border 算在元素內
``` css       
*, ::after, ::before {
    box-sizing: border-box;

}
```

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* block：元素以區塊方式呈現，可設定寬高及上下距離。
* inline：元素在同一行呈現，寬度不足時才換行，無法設定寬高及上下距離。
* inline-block：元素在同一行呈現，寬度不足時才換行，但可以設定寬高及上下距離。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

* static：元素靜止不動的狀態，不會根據設定重新定位，是默認屬性。
* relative：元素停留在原位置，但當設定 top left right bottom 時，會以原位置做基準重新定位。
* absolute：元素會浮起，會往上找父元素是否非 static 做相對定位，若找到 body 都沒有就會以 body 做定位。
* fixed：元素會浮起，以 body 做定位。