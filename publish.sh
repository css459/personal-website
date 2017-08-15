#!/bin/bash
#
# Cole Smith
# publish.sh
#
# Builds site and publishes it to github
#

npm run build
git clone git@github.com:css459/css459.github.io.git
rsync -avh --delete build/ css459.github.io/
cd css459.github.io/
git add -A
git commit -m "Updated files"
git push origin master
cd ..
rm -rf css459.github.io/
