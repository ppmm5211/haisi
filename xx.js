
/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update\/Info).*$ url script-response-body https://raw.githubusercontent.com/ppmm5211/haisi/main/xx.js



[mitm]
hostname = *douyin123*

***************************************/

const vip = "/index.php/App/Account/Login";
const my = "/index.php/App/User/Info";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(vip) != -1){
obj.result = {
    "mobile": "13813813888",
    "uid": "100006508",
    "token": "74c171eb71039aa7e58f91e286fc5ebb"
    
  }, 
body = JSON.stringify(obj);
};
$done({body});
  
