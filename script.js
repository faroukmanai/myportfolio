TweenMax.staggerFrom("nav ul li",1, {
    opacity:0,
    x:-40,
    ease: Power3.easeInOut
}, 0.1)

TweenMax.staggerFrom("switch-mode",1, {
    opacity:0,
    x:80
    // ease: Power3.easeInOut
}, 0.1)
TweenMax.from(".header-text",1, {
    opacity:0,
    delay: 1,
    x:-60,
    ease: Expo.easeInOut
})
TweenMax.from(".profile-pic",1, {
    opacity:0,
    delay: 1.3,
    x:80,
    ease: Expo.easeInOut
})
TweenMax.from("svg",2, {
    opacity:0,
    x:80,
    ease: Expo.easeInOut
})
anime({
    targets: '.line-drawing-demo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

document.addEventListener("DOMContentLoaded", function() {

    // Fonction pour gérer le défilement fluide
    function smoothScroll(event, targetId) {
        event.preventDefault(); // Empêchez le comportement par défaut du lien
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // Obtenez le lien "À propos" et "Projets"
    const aboutLink = document.querySelector('a[href="#about"]');
    const projectLink = document.querySelector('a[href="#projects"]');
    const contactLink = document.querySelector('a[href="#contact"]');

    // Ajoutez un écouteur d'événements
    aboutLink.addEventListener("click", function(e) {
        smoothScroll(e, "about");
    });

    // Écouteur d'événements pour "Projets"
    projectLink.addEventListener("click", function(e) {
        smoothScroll(e, "projects");
    });

    // Écouteur d'événements pour "contact"
    contactLink.addEventListener("click", function(e) {
        smoothScroll(e, "contact");
    });


    // Pour le bouton modedark
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
      document.body.classList.toggle("dark");
      
      // Pour la navigation
      document.querySelectorAll('nav ul li a').forEach((element) => {
        element.classList.toggle('dark');
      });
  
      const svgText = document.querySelector('#svgText');
      if (document.body.classList.contains("dark")) {
        svgText.setAttribute('fill', 'url(#dark-wave)');
      } else {
        svgText.setAttribute('fill', 'url(#wave)');
      }

    const linkedinIcon = document.querySelector(".linkedin-icon img");
    const githubIcon = document.querySelector(".github-icon img");

    if (document.body.classList.contains("dark")) {
        
        linkedinIcon.style.background = "transparent";
        githubIcon.style.background = "transparent";
    } else {
        linkedinIcon.src = "https://s2.svgbox.net/social.svg?ic=linkedin&color=000";
        githubIcon.src = "https://s2.svgbox.net/social.svg?ic=github&color=000";
    }


    });
 
  
    // Fetch data from JSON file
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Get the container where cards will be appended
            const cardContainer = document.querySelector('.projects');

            // Loop through each data object and create HTML for cards
            data.forEach(item => {
                const cardHTML = `
                    <div class="card">
                        <img src="${item.imgSrc}" class="card-img" alt="${item.title}">
                        <div class="card-body">
                            <div>
                                <h1 class="card-title">${item.title}</h1>
                                <small class="card-sub-title">${item.subTitle}</small>
                            </div>
                            <p class="card-info">${item.info}</p>
                            <a href="${item.site}" class="button" target="_blank">Visitez le site</a>
                        </div>
                    </div>
                `;

                // Append card HTML to the container
                cardContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => {
            console.error("There was an error fetching the data:", error);
        });
});
// document.addEventListener("DOMContentLoaded", function() {
//     // Pour le bouton
//     const button = document.querySelector("button");
//     button.addEventListener("click", function() {
//       document.body.classList.toggle("dark");
//     });
    
//   });
  