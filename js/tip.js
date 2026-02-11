$(()=>{

    console.log("jqueryTip")



    $(window).on("scroll",()=>{
        const pixel = $(window).scrollTop();
        const altoV = $(window).height() / 1.1  ;
        
        $('.tittle__project').offset() 

        if(pixel >= altoV / 1.1 ){
            $('.tittle__project').addClass('active')
        }else{
            $('.tittle__project').removeClass('active')
        }
        
        
        $('.screen__animation').each(function(){
            let myScreemShots = $(this).offset().top
            
            if(pixel >= myScreemShots - altoV / 1.1){
                $(this).addClass('active')
            }
            else if (pixel < myScreemShots - altoV - 30){
                $(this).removeClass('active')
            }
        })

        $('.footer__li').each(function(){
            let iconsBottomProyect = $(this).offset().top
            if(pixel >= iconsBottomProyect - altoV / .8){
                $(this).addClass('active')
            }else if (pixel < iconsBottomProyect - altoV - 0){
                $(this).removeClass('active')
            }
        })
    })

    let mouseCustom = $('.cursor');

    $(window).mousemove((e)=>{
    
        mouseCustom.css({
            top: e.clientY - mouseCustom.height() / 2,
            left: e.clientX - mouseCustom.width() / 2,
        })
    })

    $(window).mouseleave(()=>{
        mouseCustom.css({
            'opacity' : '0'
        })
    })

    $(window).mouseenter(()=>{
        mouseCustom.css({
            'opacity' : '1'
        })
    })


    $('.create__togetherseconda').mouseover(()=>{
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

    $('.header__litip').mouseover(()=>{
        $('.cursor').addClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "normal"
        })
    })
    $('.header__litip').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : 'difference'
        })
    })

    $('.btn__visitspan').mouseover(()=>{
        $('.cursor').addClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "normal"
        })
    })

    $('.btn__visitspan').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "difference"
        })
    })
})