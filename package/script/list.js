
fetch('/package/data/data.json')
    .then(res =>res.json())
    .then(data =>{
        const list = document.querySelector('.portfolioList');
        data.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML =`
                <a href="#">
                    <div class="portfolio-image">
                        <img src="${element.image}" alt="${element.title}">
                    </div>

                    <div class="portfolio-info">
                        <span>${element.category}</span>
                        <h3>${element.title}</h3>
                        <p>${element.description}</p>
                    </div>
                </a>
            `
            list.appendChild(li);
        });


})