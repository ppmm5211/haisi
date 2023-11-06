
/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update|Host\/Info).*$ url script-response-body http://fk.gjds.vip/shenhu/b.js

^http[s]?:\/\/.*\.douyin123\.cc url script-request-header http://fk.gjds.vip/shenhu/t.js


[mitm]
hostname = *douyin123*


***************************************/


var objc = JSON.parse($response.body);

    objc = {
  {   "status" : true,   "result" : {     "mobile" : "by~海思",     "no_agents" : 1,     "sales_page" : "https://t.me/123",     "expired_time" : 1749383454,     "expired_days" : 798,     "sales_page_online" : "https://t.me/123",     "contect_info" : ""   } }
    }
  }
}


$done({body : JSON.stringify(objc)});