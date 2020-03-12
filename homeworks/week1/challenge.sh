#!/bin/bash

#設定開始的數字
counter='1'

#功能說明
echo  '建立' $counter '到' $1 '檔案名稱';

#迴圈 -le 直到 
while [ $counter -le $1 ]
do
    #建立檔案
    touch "$counter.js";

    #參數++
    (( counter++ ))
done

#功能結束說明
echo "檔案建立完成";

