function showSection(sectionId){

    const sections = document.querySelectorAll('.page-section');

    sections.forEach(section => {

        section.classList.remove('active');

        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";

    });

    setTimeout(() => {

        const activeSection = document.getElementById(sectionId);

        activeSection.classList.add('active');

        setTimeout(() => {

            activeSection.style.opacity = "1";
            activeSection.style.transform = "translateY(0)";

        }, 50);

    }, 250);

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

}