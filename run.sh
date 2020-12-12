echo Please enter a name:
read _REPLACE
cp Scrape.js scrapecopy.js
find scrapecopy.js -exec sed -i "" "s/\(.*\)NAME\(.*\)/\1$_REPLACE\2/" {} \;
mongo --quiet < scrapecopy.js
rm scrapecopy.js
mongoexport --collection=out --out=out.json
