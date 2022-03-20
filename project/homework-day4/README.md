# HomeWork_Day4

姓名：余思娴

QQ：3450414733
## 感想
- 本次作业在上一次用LocalStorage实现数据持久化的基础上，进一步尝试使用webpack。功能上主要注意的点，一是点击按钮时获取表单并使用dom动态生成表格结点，显示在网页上，二是点击上传按钮时不仅要显示，也要将数据存储在本地的localStorage，三是在window.onload的时候要注意读取localStorage将以存储的数据显示在列表上。
- webpack配置过程中遇到了许许多多奇奇怪怪的问题（主要是版本问题）最后跟着官方文档和这篇博客的指导下才终于用webpack打包起来了。也很感谢这篇博客：https://blog.csdn.net/weixin_43974265/article/details/112677595
- less真是个好东西！准备学着多用用www
- 在线预览地址
    - 本次作业：https://cosine.ren/html/homework-day4/index.html
    - 全部作业：https://cosine.ren/index.php/%e5%89%8d%e7%ab%af%e5%ad%a6%e4%b9%a0/

## 预习作业：

1. 使用前几节课的知识，尝试实现如图所示的功能
 - 输入姓名、年龄后，点击“保存”按钮，即添加一行数据到列表。可多次添加
 - 列表形式展现已添加的多行数据
 - 点击上传，则以数组形式输出列表数据

2. 初阶练习：
在本地搭建node环境，安装webpack。并尝试使用webpack-dev-server搭建运行环境，调试自己的前端项目；
 
3. 进阶练习：
尝试将项目中的css改为使用less预处理器编写，并通过webpack实现.less文件的运行

参考文档：

    https://webpack.js.org/
    https://github.com/webpack/webpack-dev-server
    http://lesscss.org/
    https://webpack.js.org/loaders/less-loader/#root

## 注意事项
记得修改 README.md 中的姓名与 QQ号方便兑奖与统计

fork 仓库后修改自己仓库文件就好，不需要 Pull Request