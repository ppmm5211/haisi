
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
sihai.data.result = {
sihai.data.code = "86"
sihai.data.mobile = "13813813888"
sihai.data.uid = "100006508"
sihai.data.token = "74c171eb71039aa7e58f91e286fc5ebb"
 };
sihai.data.code = "0";
}

if ($request.url.indexOf(my) != -1){
sihai = {   "status" : true,   "result" : {     "code" : "86",     "mobile" : "13813813888",     "uid" : "100564593",     "token" : "d017ae542e953dd08e88363fb28dc9aa"   },   "code" : 0 }

}

$done({body : JSON.stringify(sihai)});
