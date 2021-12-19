#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

cd .vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:caimingsunny/caimingsunny.github.io.git master:gh-pages

cd -