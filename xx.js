
/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update).*$ url script-response-body https://raw.githubusercontent.com/ppmm5211/haisi/main/xx.js
^http[s]?:\/\/.*\.douyin123\.cc url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/token.js

[mitm]
hostname = *douyin123*

***************************************/

const vip = "/index.php/App/Account/Login";
const my = "/index.php/App/User/Info";
const xn = "/index.php/App/Index/Update";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(vip) != -1){
obj.status = true,
obj.result = {
    "mobile": "13813813888",
    "uid": "100006507",
    "token": "67b504be52f6e4244ed115d5315dfe80"   
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
obj.info = {
              {
    "image": "https://raw.githubusercontent.com/ppmm52111/QX/main/1A33EFB5-5E36-4BEC-9D3A-7AA618E3A686.jpeg",
    "url": "https://t.me/didi6661"
       }  
  },
body = JSON.stringify(obj);
}   
$done({body});
  
