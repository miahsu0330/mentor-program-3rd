#!/bin/bash

# echo $0   ./github.sh
# -ne       不等於
# $#        傳入參數的長度
# exit      中斷程式，等於 return

# 如果傳入參數的長度不等於 1 的話
if [ $# -ne 1 ]; then

    # 打印 執行方式 ./github.sh <username>
    echo "執行方式： $0 <username>"

    #中斷程式並回傳 1 給系統
    exit 1
fi


# curl      發送 request；詳細說明：https://blog.techbridge.cc/2019/02/01/linux-curl-command-tutorial/
# 

# -s 選項可關閉curl的一般執行過程訊息
curl -s "https://api.github.com/users/$1" | \
        # $4 第四個參數 "followers": 0,
        awk -F'"' '
            /\"name\":/ {
                print "使用者的名稱："$4
            }
            /\"bio\":/{
                print "自介："$4    
            }
            /\"location\":/{
                print "居住地："$4
            }
            /\"blog\":/{
                print "部落格："$4
            }
            '
exit 0


