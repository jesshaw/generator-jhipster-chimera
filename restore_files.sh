#!/bin/bash

# 指定包含文件路径的文件名
input_file=".restorefiles"

# 循环读取文件中的每一行
while IFS= read -r file
do
    # 删除文件或目录
    rm -rf $file
done < "$input_file"

