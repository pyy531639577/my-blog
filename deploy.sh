#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 码云打开1下面的注释，部署到Github,打开2下面的注释，同时注释vue.config.js 中 publicPath: process.env.NODE_ENV === 'production' ? '/blog/' : '/'
# 1.部署到码云
# git push -f git@gitee.com:JuWaiRenDian/blog.git master
# 2.部署到Github
git push -f git@github.com:pyy531639577/pyy531639577.github.io.git master

cd -
