/**************************************
[rewrite_local]

^http[s]?:\/\/.+\/api(\/video\/report_item?|\/live\/room\/detail?|\/video\/related?|\/video\/detail|\/social\/posts_info).*$ url script-request-header https://raw.githubusercontent.com/ppmm5211/haisi/main/token.js

[mitm]
hostname = dfhapi.h8h4h.com

***************************************/
var headers = $request.headers;

headers['authorization'] = 'bearer 74f971f7251dd4a4c403e1a5f6fdeabb';

$done({headers: headers}
