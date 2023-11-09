
/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update\/Info).*$ url script-response-body https://raw.githubusercontent.com/ppmm5211/haisi/main/sh.js

^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/User\/Info.*$url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/token.js


[mitm]
hostname = *douyin123*

***************************************/

var sihai = JSON.parse($response.body);
const vip = '/index.php/App/Account/Login';
const my = '/index.php/App/User/Info';

if ($request.url.indexOf(vip) != -1){
sihai = {"status" : true,   "result" : {     "mobile" : "by~海思",     "no_agents" : 1,     "sales_page" : "https://t.me/123",     "expired_time" : 1749383454,     "expired_days" : 798,     "sales_page_online" : "https://t.me/123",     "contect_info" : ""   }
}

if ($request.url.indexOf(my) != -1){
sihai = {   "status" : true,   "result" : {     "code" : "86",     "mobile" : "13813813888",     "uid" : "100564593",     "token" : "d017ae542e953dd08e88363fb28dc9aa"   },   "code" : 0 }

}

$done({body : JSON.stringify(sihai)});
