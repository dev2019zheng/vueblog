# !/usr/bin/env sh

set -e

yarn build

cd blog/.vuepress/dist


git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:dev2019zheng/vueblog.git master:gh-pages

cd -