"use strict"

console.log("Jquery")

let name = 'jeff'
console.log('my name is ' + name)


$(()=>{
    $('.close__all').on("click",()=> {
        $('.cookies__close').addClass('activo')
        console.log('funciona')
    });


    $('.btn__accept').on("click",()=>{
        $('.cookies__all').addClass('active')
    })


    $('.button__click').on("click",()=>{
        $('.section__cont').addClass('active')
        $('.section__header').addClass('active')
        $('.skill__flex').addClass('active')
        console.log("abre skill")
    })

    $('.section__close ').on("click",()=>{
        $('.section__cont').removeClass('active')

    })
    $('.section__switch').on("click",()=>{
        $('.section__switch').toggleClass('active')        
        $('.margin__left').toggleClass('activecolor__skills')
        $('.section__skillsinfo').toggleClass('active')
        $('.color__createtogether').toggleClass('active')
    })
    
    $('.burguer__movil').on('click',()=>{
        $('.bg__menumovil').toggleClass('active')
        $('.lines__js').toggleClass('active')
        $('.burguer__movil').toggleClass('active')
        $('.menu__movila').toggleClass('active')
        $('.menumovil__iconsa').toggleClass('active')
        $('.bg__logomenumovilimg').toggleClass('active')
    })

    $('.menu__movilli').on('click',()=>{
        console.log('click??')

        $('.bg__menumovil').removeClass('active')
        $('.burguer__movil').removeClass('active')
        $('.lines__js').removeClass('active')
        $('.menu__movila').removeClass('active')
        $('.menumovil__iconsa').removeClass('active')
        $('.bg__logomenumovilimg').toggleClass('active')

    })

    $(window).on("scroll",()=>{
        let position = $(window).scrollTop()
        let altov = $(window).height() / 1.2
        

        let top = $('.laswork__font').offset() 

            if(position >= altov / 1.2){
                $('.laswork__font').addClass('active')
            }else{
                $('.laswork__font').removeClass('active')
            }

        $('.hexagon__li').each(function(){

            let topHexagon = $(this).offset().top 

            if( position >= topHexagon - altov / 1 ){
                $(this).addClass('active')
            }else if (position < topHexagon - altov  - 30){
                $(this).removeClass('active')
            }
        })
        
        $('.footer__li').each(function(){
            let iconsBottom = $(this).offset().top
            if( position >= iconsBottom - altov /.8 ){
                $(this).addClass('active')
            }else if( position < iconsBottom - altov){
                $(this).removeClass('active')
            }
            console.log( {position})
        })

        $('.footer__me').offset()
        if(position >= altov /.7){
            $('.footer__me').addClass('active')
        }else{
            $('.footer__me').removeClass('active')
        }

        

        
    })
//MOUSE CUSTOM START
    let mouse = $('.cursor');
    $(window).mousemove((e)=>{
        if(window.matchMedia("(min-width: 960px)").matches){
            mouse.css({
                top: e.clientY - mouse.height() / 2,
                left: e.clientX - mouse.width() / 2,
                
            })
        }
        
    })
    $(window).mouseleave(()=>{
        mouse.css({
            "opacity" : '0'
        })
    }) 
    $(window).mouseenter(()=>{
        mouse.css({
            "opacity" : '1'
        })
    })  
    
    $('.menu__li').mouseover(()=>{
        $('.cursor').addClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode":"normal"
        })
    })
    $('.menu__li').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode":"difference"
        })
    })

    $('.hexagon__li').mouseover(()=>{
        $('.cursor').addClass('cursorhand__active')
    })

    $('.hexagon__li').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
    })

    $('.btn__accept').mouseover(()=>{
        $('.cursor').addClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "normal"
        })
    })
    $('.btn__accept').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "difference"
        })
    })

    $('.close__cont').mouseover(()=>{
        $('.cursor').addClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "normal"
        })
    })

    $('.close__cont').mouseleave(()=>{
        $('.cursor').removeClass('cursorhand__active')
        $('.cursor').css({
            "mix-blend-mode" : "difference"
        })
    })

    $('.info__levano').mouseover(()=>{
        $('.cursor').addClass('cursorwidthactive')

        
    })
    $('.info__levano').mouseleave(()=>{
        $('.cursor').removeClass('cursorwidthactive')

        
    })

    $('.info__gino').mouseover(()=>{
        $('.cursor').addClass('cursorwidthactive')
    })

    $('.info__gino').mouseleave(()=>{
        $('.cursor').removeClass('cursorwidthactive')
    })

    
//MOUSE CUSTOM END

$(window).on('scroll',()=>{
    if($(document).scrollTop() > 700 ){
        console.log('scrollTop')
        $('.desenfoque').addClass('turquesa')
    }else{
        $('.desenfoque').removeClass('turquesa')
    }
})

})


