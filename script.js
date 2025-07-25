const typewriter = new Typewriter (
    document.getElementById('typewriter'),{
        loop: true,
        delay: 75
    }
);

typewriter
.typeString("Frontend Developer")
.pauseFor("2000")
.deleteAll()
.typeString("UI/UX Designer")
.pauseFor("2000")
.deleteAll()
.typeString("Clean Code Lover")
.pauseFor("2000")
.deleteAll()
.typeString("Let's Work Together")
.pauseFor("2000")
.deleteAll()
.start();

// Initialize AOS  
AOS.init({  
  duration: 1000,  
  easing: "ease-out",  
  once: false,  
});