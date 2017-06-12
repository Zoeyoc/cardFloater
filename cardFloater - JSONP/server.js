var http=require("http");
var fs = require("fs");
var path = require("path");
var urllib = require('url')
var server=http.createServer(function(req,res){
    if(req.url!=="/favicon.ico"){
    	var params = urllib.parse(req.url,true);
 		if(params.query&&params.query.callback){
 			str=fs.readFileSync(path.join(__dirname, "user.json"), "utf-8");
       		var jsonpData =  params.query.callback + '(' + findUsr(str,params.query.uid) + ')';//jsonp
        	res.end(jsonpData);
 		}
        

    }
});
server.listen(1337,"localhost",function(){
    console.log("开始监听...");
});


/**
 * 解析url参数并以对象形式返回
 * @param {string} url 
 * @return {object} 返回url参数对象
 */
function GetRequest(url) { 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(url.indexOf("?")+1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	return theRequest; 
} 
/**
 * 查找用户JSON数据并返回
 * @param  {string} str 所有用户的JSON数据
 * @param  {string} uid 需要查找的用户的uid
 * @return {string}     所查找用户的JSON数据
 */
function findUsr(str,uid) {
	var arr = JSON.parse(str);
	for(var i in arr){
		if(uid == arr[i].data.uid){
			var usr = JSON.stringify(arr[i]);
			return usr;
		};
		
	};
}