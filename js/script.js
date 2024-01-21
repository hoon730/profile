//새로고침시 화면 최상단 이동
window.onload = function(){
    setTimeout(function(){
        scrollTo(0,0);
    }, 1)
}
//마우스 포인터 움직이기
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
})
//메인 클릭시 이벤트
const mtitSpan = document.querySelectorAll(".main .m_tit span");
const btn = document.querySelectorAll(".btn");
window.addEventListener("click", function(){
    document.querySelector("body").style.overflow = "scroll";
    cursor.classList.add("show");
    document.querySelector("#wrap").style.cursor = "default";
    document.querySelector(".main").classList.add("show");
    btn.forEach(ele => {
        ele.style.opacity = 1;
    })
    mtitSpan.forEach((item, index) => {
        setTimeout(function(){
            item.classList.add("show");
        }, 60*(index+1))
    })
});
//Home, About, work 버튼 enter/leave
const navBtn = document.querySelectorAll(".main nav a");
for(var i = 0;i < navBtn.length;i++){
    navBtn[i].addEventListener("mouseenter",function(e){
        e.preventDefault();
        var target = this.querySelectorAll("span");
        // console.log(target)
        target.forEach((item, index) => {
            setTimeout(function(){
                item.classList.add("show")
            }, 30*(index+1))
        })
    })
    navBtn[i].addEventListener("mouseleave",function(e){
        e.preventDefault();
        var target = this.querySelectorAll("span");
        target.forEach(span => {
            span.classList.remove("show");
        })
    })
}
 //Home, About, work 버튼 animate
const arti = document.querySelectorAll("section article")
navBtn.forEach((btn, index) => {
    btn.addEventListener("click", function(){
        var target = this;
        // console.log(target)
        const section = arti[index];
        // console.log(section)
        const offset = section.offsetTop;
        // console.log(offset)
        window.scrollTo({top:offset, behavior:"smooth"})
    })
})
//스크롤시 발생하는 이벤트
window.addEventListener("scroll",function(){
    var wScroll = this.scrollY;
    // console.log(wScroll)
    //intro
    //i_head
    var iHeadDiv = document.querySelectorAll(".intro .i_head>div");
    var iInfoP = document.querySelectorAll(".intro .i_info>div>p")
    if(wScroll >= arti[1].offsetTop - window.innerHeight/2){
        iHeadDiv.forEach((item, index) => {
            setTimeout(function(){
                item.classList.add("show");
            },80*(index+1))
        })
    }
    if(wScroll >= arti[1].offsetTop - window.innerHeight/6){
        iInfoP.forEach((item, index) => {
            setTimeout(function(){
                item.classList.add("show");
            },80*(index+1))
        })
    }
    //wave1
    var wave1 = document.querySelector(".wave1");
    var wave1Txt = document.querySelectorAll(".wave1 .tit .txt span");
    if(wScroll >= arti[2].offsetTop - window.innerHeight/4){
        wave1Txt.forEach((item, index) => {
            setTimeout(function(){
                item.classList.add("show");
            },20*(index+1))
        })
        wave1.classList.add("show");
    }
    //wave2
    var wave2Figure = document.querySelector(".wave2 figure");
    if(wScroll >= arti[3].offsetTop - window.innerHeight/4){
        wave2Figure.classList.add("show");
    }
    //dcmall1
    var dcmall1Txt = document.querySelectorAll(".dcmall1 .tit .txt span");
    if(wScroll >= arti[4].offsetTop - window.innerHeight/4){
        dcmall1Txt.forEach((item, index) => {
            setTimeout(function(){
                item.classList.add("show");
            },20*(index+1))
        })
    }
    //dcmall1 txt_l, txt_r
    if(wScroll >= arti[4].offsetTop){
        var span = document.querySelector(".dcmall1 .tit .txt>div>div>span");
        var spanvalue = window.getComputedStyle(span);
        var font = spanvalue.getPropertyValue("font-size").split('.',1)/2;
        console.log(font)
        var txt_L = document.querySelectorAll(".dcmall1 .tit .txt .txt_l>div");
        var txt_R = document.querySelectorAll(".dcmall1 .tit .txt .txt_r>div");

        txt_L.forEach((item, index) =>{
            setTimeout(function(){
                item.style.transform = "translateX(-"+font+"px)"
            },100*(index+1))
        })
        txt_R.forEach((item, index) => {
            setTimeout(function(){
                item.style.transform = "translateX("+font+"px)"
            },100*(index+1))
        })
    }

    //dcmall2
    var dcmall2Figure = document.querySelector(".dcmall2 figure");
    if(wScroll >= arti[5].offsetTop - window.innerHeight/4){
        dcmall2Figure.classList.add("show");
    }
    //spana1
    var spana1 = document.querySelector(".spana1");
    var spana1Txt = document.querySelectorAll(".spana1 .tit .txt span");
    if(wScroll >= arti[6].offsetTop - window.innerHeight/4){
        spana1Txt.forEach((item, index) => {
            setTimeout(function(){
                item.classList.add("show")
            },20*(index+1))
        })
        spana1.classList.add("show");
    }
    //spana2
    var spana2Figure = document.querySelector(".spana2 figure");
    if(wScroll >= arti[7].offsetTop - window.innerHeight/4){
        spana2Figure.classList.add("show");
    }
    //end
    if(wScroll >= arti[8].offsetTop - window.innerHeight/4){
        document.querySelector(".end").classList.add("show");
    }
}) 
//card 움직임
const card = document.querySelectorAll("article figure .img .img_box");
card.forEach(ele => {
    ele.addEventListener("mousemove",function(e){
        var x = e.offsetX;
        var y = e.offsetY;

        var rotateY = -1/5 * x + 30;
        var rotateX = 4/30 * y - 30;

        ele.style.transform = "perspective(1280px) rotateX("+rotateX+"deg) rotateY("+rotateY+"deg"
    })
})
//처음으로 돌아가기
var endBtt = document.querySelector(".end .btt");
endBtt.addEventListener("click",function(e){
    e.preventDefault();
    window.scrollTo({top:0, behavior:"smooth"})
})