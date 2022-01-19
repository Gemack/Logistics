// Sticky menu effect with Vanilla Javascript
window.addEventListener('scroll', ()=>{
    // select the nav which we want to be sticked, recall we created a class stick in the
    // html file and styled with CSS
    let nav = document.querySelector('nav')
    // At what point we want the nav to stick we chosed 620
   let x=  nav.classList.toggle('sticky',window.scrollY > 620);
})

// Smooth scrolling effect with Jquery

$(document).ready(()=>{


    // we select the button
    $('.LogisticsJS').click(()=>{
        // Where we want to scrolled to
        $('html, body').animate({scrollTop:$('.section6').offset().top},1500)
    })

    $('.morejs').click(()=>{
        $('html, body').animate({scrollTop:$('.js-section1').offset().top},1500)
    })
    
//  Nav bar smooth scrolling
    $('a').on('click', function(event){
           //  we checked for #(hash)
       if(this.hash !==""){
           event.preventDefault()
        //    we assign Hash in all nav links
           let hash = this.hash;
        //    we add animation on scroll
           $('html, body').animate({scrollTop: $(hash).offset().top},1500,function(){
               window.location.hash = hash;
           })
       }
    })
    // Animation with jquery and animate css
    
$(window).scroll(()=>{
    //  scroll to where we want the animation to trigger
    if($(document).scrollTop() > 500){
        //  we remove a class that hide the element initial
        //  the dispay class was set to display none
        $('.box1').removeClass('display')
        //  we add class from the animate css
        $('.box1').addClass('animated fadeIn')
    }
   
})

$(window).scroll(()=>{
    if($(document).scrollTop() > 1300){
        $('.s3b1').addClass('animated fadeInUp')
    }
   
})

$(window).scroll(()=>{
    if($(document).scrollTop() > 1700){ 
        $('.s4b').addClass('animated fadeInUp')
    }
   
})
$(window).scroll(()=>{
    if($(document).scrollTop() > 2850){ 
        $('.s6fb1').addClass('animated pulse')
    }
   
})

  
    
})






