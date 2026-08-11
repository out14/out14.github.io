
const showList = () => {fetch('/package/data/data.json')
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


        }) .catch(error => {
            console.error('포트폴리오 데이터를 불러오지 못했습니다.', error);
        });
}
