
var xx , yy;
$('.name').on("mouseover",function(e){getXY(e)}); 

/**
 * 将传递过来的用户数据显示到卡片上
 * @param  {object} usrData 用户数据
 */
function putData(usrData) {
	$(".icon").attr('src','img/'+usrData.data.uid+'.jpg'); 
	$('.cname').html(usrData.data.nickname);
	$('.weibo').html('微博:'+usrData.data.nickname);
	$('.info').html('个人介绍:'+usrData.data.bio);
	$('.follow').html('关注:'+usrData.data.following);
	$('.follower').html('粉丝:'+usrData.data.followers);
}
/**
 * 获取事件坐标
 * @param  {Object} e 事件对象
 */
function getXY(e) {
		xx=e.pageX;
		yy=e.pageY;
}



/**
 * 将隐藏的卡片显示出来
 *
 */
function showCard() { 
	if(yy<140){
		$('#cardDown').css({
			"left":xx-83,
			"top":yy+27
		});
		$('#cardDown').show();

	}
	if(yy>140){
		$('#cardUp').css({
			"left":xx-85,
			"top":yy-155
		});
		$('#cardUp').show();

	}
}