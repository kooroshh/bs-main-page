document.addEventListener("DOMContentLoaded",()=>{

    function menuScroll(){
        let navMenu = document.querySelector(".nav-menu");

        if(window.scrollY > 50){
            navMenu.classList.add("is-scrolling");
        }else{
            navMenu.classList.remove("is-scrolling");
        }

    }

    menuScroll();
    window.addEventListener("scroll",menuScroll)
    


    let sideNav = document.getElementById("navbar");

    sideNav.addEventListener("show.bs.collapse",()=>{
        console.log("Showed");
        
        let navMenu = document.querySelector(".nav-menu");
        navMenu.classList.add("menu-is-open");
    })

    sideNav.addEventListener("hide.bs.collapse",()=>{
        let navMenu = document.querySelector(".nav-menu");
        navMenu.classList.remove("menu-is-open");
    })

    function checkMenu(){
        if(!(window.innerWidth <= 992)){
            let navMenu = document.querySelector(".nav-menu");
            navMenu.classList.remove("menu-is-open");

            let collapse = new bootstrap.Collapse(sideNav, {
                toggle: false
            });
            
            collapse.hide();
        }
    }

    window.addEventListener("resize",checkMenu);


    let comments = $(".comments");

    if(comments && $.fn.owlCarousel){
        comments.owlCarousel({
            rtl: true,
            nav: true,
            items: 1,
            dots: false,
            navText: ["<span class='ti-arrow-left'></span>", "<span class='ti-arrow-right'></span>"]
        });
    }
    

    let gallery = $(".img-gallery");

    if(gallery && $.fn.owlCarousel){
        gallery.owlCarousel({
            rtl: true,
            nav: false,
            items: 3,
            dots: true,
            center: true,
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }



    
})