
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
sihai.data.status = "true";
sihai.data.code = "86";
sihai.data.mobile = "13813813888";
sihai.data.uid = "100006508";
sihai.data.token = "74c171eb71039aa7e58f91e286fc5ebb;
sihai.data.code = "0";  
}

if ($request.url.indexOf(my) != -1){
sihai.data.status = "true";
sihai.data.mobile = "by~海思";
sihai.data.expired_time = "1749383454";
sihai.data.expired_days = "798;
sihai.data.code = "0";  
}
$done({body : JSON.stringify(sihai)});
