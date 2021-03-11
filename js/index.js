$(function(){
    let flag =0;
    $('.title').click(function(){
        flag++;
        if($(document).width()<=990){
            $(this).parent('li').siblings('.list-li').slideToggle()
            if(flag%2!=0){
                $(this).children('img').attr('src','images/ioc2.png')
            }else{
                $(this).children('img').attr('src','images/ioc1.png')
            }
        }
    })



    // .title{
    //     background-image: url(../images/ioc1.png);
    //     background-position: right center;
    //     background-repeat: no-repeat;
    // }
})