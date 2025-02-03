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

    
})