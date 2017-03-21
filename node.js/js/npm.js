/*
NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
*/


//交互式解释器
REPL 命令

ctrl + c - 退出当前终端。
ctrl + c 按下两次 - 退出 Node REPL。
ctrl + d - 退出 Node REPL.
向上/向下 键 - 查看输入的历史命令
tab 键 - 列出当前命令
.help - 列出使用命令
.break - 退出多行表达式
.clear - 退出多行表达式
.save filename - 保存当前的 Node REPL 会话到指定文件
.load filename - 载入当前 Node REPL 会话的文件内容。