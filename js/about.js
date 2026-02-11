$(()=>{
    console.log("Jquery-about")


    let mouseAbout = $('.cursor');
    $(window).mousemove((e)=>{
        
        mouseAbout.css({
            top: e.clientY - mouseAbout.height() /2,
            left: e.clientX - mouseAbout.width() /2 ,
        })
    })
    $(window).mouseleave(()=>{
        mouseAbout.css({
            'opacity' : '0'
        })
    })

    $(window).mouseenter(()=>{
        mouseAbout.css({
            'opacity' : '1'
        })
    })
    $('.create__togetherseconda').mouseover(()=>{
        console.log('todo bien?')
        $('.cursor').addClass('cursorhand__active')
        
        $('.cursor').css({
            "mix-blend-mode" : 'normal'
        })
        
    })

    $('.create__togetherseconda').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode": 'difference'
        })
    })
    $('.header__litip').mouseenter(()=>{
        $('.cursor').addClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "normal"
        })
    })

    $('.header__litip').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "difference"
        })
    })


    $(window).on("scroll",()=>{
        let position = $(window).scrollTop();
        let altoV = $(window).height() ;

        $('.footer__li').each(function(){
            let iconsAbout = $(this).offset().top
            if( position >= iconsAbout - altoV /.9 ){
                $(this).addClass('active')
            }else if (position < iconsAbout - altoV){
                $(this).removeClass('active')
            }
        })
        $('.screen__animation').each(function(){
            let myScreemShots = $(this).offset().top

            if(window.matchMedia("(max-width: 2000px)").matches){
                $(this).css({
                    "opacity" : '1',
                    "transform" : "translateY(0em)"
                })
            } else if (position >= myScreemShots - altoV / 1.2){
                $(this).addClass('active')
            }else if (position < myScreemShots - altoV - 30){
                $(this).removeClass('active')
            }
            
        })

    })

    
})