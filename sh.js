
/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update\/Info).*$ url script-response-body https://raw.githubusercontent.com/ppmm5211/haisi/main/sh.js
^http[s]?:\/\/jihulab\.com\/ReactJSTeams\/next.js\/-\/raw\/master\/examples\/nested-components\/.gitignore url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/token.js
^http[s]?:\/\/.*\.douyin123\.cc url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/token.js


[mitm]
hostname = *douyin123*,*jihulab.com

***************************************/

var sihai = JSON.parse($response.body);
const vip = '/index.php/App/Account/Login';
const my = '/index.php/App/User/Info';

if ($request.url.indexOf(vip) != -1){
sihai.data.token = "74c171eb71039aa7e58f91e286fc5ebb";
sihai.data.mobie = "18888888888";
}

if ($request.url.indexOf(my) != -1){
sihai.data.mobie = "sihai";
sihai.data.expired_time" = "1749383454";
sihai.data.expired_days" = "798";

}

$done({body : JSON.stringify(sihai)});
