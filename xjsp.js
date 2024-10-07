/**************************************
[rewrite_local]

https://cwt98ehs.cqict.cn/vod/* url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/xjsp.js

[mitm]
hostname =cwt98ehs.cqict.cn

***************************************/
var headers = $request.headers;

headers['X-Cookie-Auth']= '3534663432336164303563653336636439376637323935306433643736656231';

$done({headers: headers}
