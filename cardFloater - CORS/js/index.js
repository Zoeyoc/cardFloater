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
            $.ajax({  
                url:"http://localhost:1336/user/detail?uid="+id, 
                type: "GET",  
                async : true,  
                dataType : "json",  
                success : function(usrData) {
                    putData(usrData); 
                    showCard();
                }  
            });
}
