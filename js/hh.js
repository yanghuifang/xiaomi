$(function () {
    $(".one").mouseenter(function () {
        $(".loading").clearQueue().slideDown("slow");
    })
    $(".one").mouseleave(function () {
        $(".loading").clearQueue().slideUp("slow");
    })
    //侧导航
    let lis=$("aside ul li");
    let sons=$("aside ul li .son");
    console.log(lis,sons);
    lis.mouseenter(function () {
        sons.css("display","none");
        $(this).children(".son").css("display","block");
    })
    lis.mouseleave(function () {
        sons.css("display","none");
        // $(this).children(sons).css("display","none");
    })
 //家电
    let parent=$(".tab .tab-1");
    let son=$(".pro-1")
    console.log(parent,son);
    parent.mouseenter(function () {
        let i=$(this).index();
        son.css("display","none").eq(i).css("display","block");
        parent.removeClass("active");
        $(this).addClass("active");
    })

    parent.triggerHandler("mouseenter");


    //banner
    let imgs=$(".site-banner .banner .imgs img");
    let li=$(".site-banner .page li");
    let now=0;
    // let btnl=$(".pushl");
    let btn2=$(".pushr");
    console.log(imgs,li);
    imgs.first().css("zIndex","5");
    li.first().addClass("active");
    let t=setInterval(move,1000);
    function move() {
        now++;
        if (now==imgs.length){
            now=0;
        }
        imgs.css("zIndex",5).eq(now).css("zIndex",10);
        li.removeClass("active").eq(now).addClass("active");
    }
    function movel() {
        now--;
        if (now<0){
            now=imgs.length-1;
        }
        imgs.css("zIndex",5).eq(now).css("zIndex",10);
        li.removeClass("active").eq(now).addClass("active");
    }
    $(".pushl").click(function () {
        movel();
    })
    $(".pushr").click(function () {
        move();
    })
    $(".banner").mouseenter(function () {
        clearInterval(t);
    })
    $(".banner").mouseleave(function () {
        t=setInterval(move,1000);
    })
    $(".pushl,.pushr").mouseenter(function () {
        clearInterval(t);
    })
    $(".pushl,.pushr").mouseleave(function () {
        t=setInterval(move,1000);
    })
    // let j=0;
    // $(".site-banner .page li").click(function () {
    //     imgs.css("zIndex",5).eq(now).css("zIndex",10);
    //     li.removeClass("active").eq(now).addClass("active");
    // })

    //小米闪购
    // let san=$(".san-box-fi");
    let right=$(".hgroup .stat2");
    let left=$(".hgroup .stat1");
    let i=0;
    right.click(function(){
        i++;
        if(i==3){
            i=2;
        }
        else{
            $(".san-box-fi").css("transform","translate("+(-996*i)+"px"+")");
        }
//		-996*ipx

    })
    left.click(function(){
        i--;
        if(i==-1){
            i=0;
        }
        else{
            $(".san-box-fi").css("transform","translate("+(-996*i)+"px"+")");
        }
//		-996*ipx

    })
    //推荐
    let a=0;
    $(".stat4").click(function () {
        a++;
        if(a==3){
            a=2;
        }
        else{
            $(".recomment ul").css("transform","translate("+(-1226*a)+"px"+")");
        }
    })
    $(".stat3").click(function () {
        a--;
        if(a==-1){
            a=0;
        }
        else{
            $(".recomment ul").css("transform","translate("+(-1226*a)+"px"+")");
        }
    })
    //内容banner
    let text1=$(".content ul .con-li1 dl");
    let l=$(".con-li1 .dot .page1");
    console.log(text1);
    let next=0;
    $(".con-li1 .left").click(function(){
        next--;
        if (next<-1){
            next=0;
        }else{
            text1.css("transform","translate("+(291.5*next)+"px"+")");
            l.removeClass("active").eq(next).addClass("active");
        }

    })
    $(".con-li1 .right").click(function(){
        next++;
        if (next==3){
            next=2;
        }else{
            text1.css("left","0");
            l.removeClass("active").eq(next).addClass("active");
        }

    })


})