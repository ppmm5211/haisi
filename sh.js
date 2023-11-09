
/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update\/Info).*$ url script-response-body https://raw.githubusercontent.com/ppmm5211/haisi/main/sh.js

^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/User\/Info.*$ url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/token.js


[mitm]
hostname = *douyin123*

***************************************/

const vip = "/index.php/App/Account/Login";
const my = "/index.php/App/User/Info";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(vip) != -1){
obj.data.status = "true";
obj.data.result["code"] = "86";
obj.data.result["mobile"] = "13813813888";
obj.data.result["uid"] = "100006508";
obj.data.result["token"] = "74c171eb71039aa7e58f91e286fc5ebb";
obj.data.code = "0";  
}

if ($request.url.indexOf(my) != -1){
obj.data.status = "true";
obj.data.result[mobile"] = "by~海思";
obj.data.result["no_agents"] = "1";
obj.data.result["expired_time"] = "1749383454";
obj.data.result["expired_days"] = "798";
}
$done({body : JSON.stringify(obj)});
