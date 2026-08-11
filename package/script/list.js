
const showList = (() => {fetch('/package/data/data.json')
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

                         <div class="portfolio_info">
                            <div class="portfolio_info_type ${element.category}">
                                <span>${element.category}</span>
                            </div>
                            <h3>${element.title}</h3>
                            <p>${element.description}</p>
                        </div>
                    </a>
                `
                list.appendChild(li);
            });


})
})
