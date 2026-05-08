const navLinks = document.querySelectorAll("nav ul li a");

const sections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = this.getAttribute("href").substring(1);

        sections.forEach(section => {

            section.classList.remove("active");

        });

        document.getElementById(target).classList.add("active");

    });

});