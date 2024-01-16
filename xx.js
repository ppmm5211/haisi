
/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update|Host\/Info).*$ url script-response-body https://raw.githubusercontent.com/ppmm5211/haisi/main/xx.js
^http[s]?:\/\/.*\.douyin123\.cc url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/token.js

[mitm]
hostname = *douyin123*

***************************************/

const vip = "/index.php/App/Account/Login";
const my = "/index.php/App/User/Info";
const xn = "/index.php/App/Index/Update";
const zz = "/index.php/App/Host/Info";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(vip) != -1){
obj.status = true,
obj.result = {
    "mobile": "13813813888",
    "uid": "100006507",
    "token": "b067c4db9a04cc43a646b6a8b6250f39"   
  },
obj.code = 0
body = JSON.stringify(obj);
};
if ($request.url.indexOf(my) != -1){
obj.status = true,
obj.result = {
    "mobile": "by~海思",
    "expired_time": 1749383454,
    "expired_days": 888   
  },
body = JSON.stringify(obj);
};
if ($request.url.indexOf(xn) != -1){
obj.status = true,
obj.ad.image = "https://raw.githubusercontent.com/ppmm5211/haisi/main/23ED760C-4983-4C26-B8EE-79B2BEDFDE69.jpeg",
obj.ad.url = "https://t.me/zhiyin666" 

body = JSON.stringify(obj);
};
if ($request.url.indexOf(zz) != -1){
obj.status = false,
obj.msg = "请联系Tg群:https://t.me/zhiyin666赞助获取最新脚本",
obj.code = 0
body = JSON.stringify(obj);
};
$done({body});
  
