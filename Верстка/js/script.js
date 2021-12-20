const header = document.getElementById("myHeader")
const body = document.querySelector('body')
const head = document.querySelectorAll('.nav_link')

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        header.setAttribute('style', 'background: gray;')
      } else{
        header.removeAttribute('style')
      }
}

$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 200); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 200);
        }
        return false; 
    });
  });

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
    });

});

window.addEventListener('scroll', () => {
    const scroll_item = window.scrollY;
    if(window.innerWidth > 768){
        document.querySelectorAll('.section').forEach((element, i) => {
            if(element.offsetTop - document.querySelector('.nav a').clientHeight <= scroll_item){
                document.querySelectorAll('.nav a').forEach((element) => {
                    if(element.classList.contains('active')){
                        element.classList.remove('active')
                    }
                })
                document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active')
            }
        })
    }
})