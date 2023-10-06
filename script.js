TweenMax.staggerFrom("nav ul li",1, {
    opacity:0,
    x:-40,
    ease: Power3.easeInOut
}, 0.1)

TweenMax.from(".header-text",1, {
    opacity:0,
    delay: 1.3,
    x:-60,
    ease: Expo.easeInOut
})
TweenMax.from(".profile-pic",1, {
    opacity:0,
    delay: 2,
    x:80,
    ease: Expo.easeInOut
})
TweenMax.from("svg",2, {
    opacity:0,
    x:80,
    ease: Expo.easeInOut
})

document.addEventListener("DOMContentLoaded", function() {
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