$(".card").hide();

$(".name").on("mouseover",function(){
    var id = $(this).attr("id");
    GetData(id);
});
$(".name").on("mouseout",function(){
    $(".card").hide();
    $(".icon").attr('src',''); 
    $('.cname').html('');
    $('.weibo').html('微博:');
    $('.info').html('个人介绍:');
    $('.follow').html('关注:');
    $('.follower').html('粉丝:');
   
});


/**
 * 发送异步请求
 * @param {string} id 用户id
 */
function GetData(id){
            $.getJSON("http://localhost:1337/user/detail?uid="+id+"&callback=?",  
                function(usrData) {
                    putData(usrData); 
                    showCard();
                }  
            );
}
