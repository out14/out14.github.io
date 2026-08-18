
const showList = () => {fetch('/package/data/data.json')
        .then(res =>res.json())
        .then(data =>{
            const list = document.querySelector('.portfolioList');
            data.forEach(element => {
                const li = document.createElement('li');
                li.innerHTML =`
                    <a href="${element.link}" target="_blank">
                        <div class="portfolio_image">
                            <img src="${element.thumbnail}" alt="${element.title}">
                        </div>

                         <div class="portfolio_info">
                            <div class="portfolio_info_type ">
                                ${element.category.map(e=>`
                                    <span class="${e}">${e}</span>
                                `).join('')}
                            </div>
                            <div class="portfolio_info_text">
                                <h3>${element.title}</h3>
                                <p>${element.description}</p>
                            </div>
                        </div>
                    </a>
                `
                list.appendChild(li);
            });


        }) .catch(error => {
            console.error('포트폴리오 데이터를 불러오지 못했습니다.', error);
        });
}

const showFillter = (e) =>{

    if(e==='all'){
        const list = document.querySelector('.portfolioList');
        list.innerHTML=''
        showList()
    }else{
        fetch('/package/data/data.json')
        .then(res=>res.json())
        .then(data=>{
            const list = document.querySelector('.portfolioList');
        
            const filterData = data.filter(i => i.category.includes(e));

            //console.log(filterData,'???',data,'!!',e)
            list.innerHTML=''

            filterData.forEach(element => {
                const li = document.createElement('li');
                li.innerHTML =`
                    <a href="${element.link}" target="_blank">
                        <div class="portfolio_image">
                            <img src="${element.thumbnail}" alt="${element.title}">
                        </div>

                        <div class="portfolio_info">
                            <div class="portfolio_info_type ">
                                ${element.category.map(e=>`
                                    <span class="${e}">${e}</span>
                                `).join('')}
                            </div>
                            <div class="portfolio_info_text">
                                <h3>${element.title}</h3>
                                <p>${element.description}</p>
                            </div>
                        </div>
                    </a>
                `
                list.appendChild(li);
            });

        })
    }

}

showFillter()
showList()
