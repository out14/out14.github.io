//헤더 삽입
async function loadHeader (){
    await fetch('/package/components/header.html')
    .then(res => res.text())
    .then(html => {
        document.querySelector('header').innerHTML = html;
    })

    activeMenu()
}
//푸터 삽입
async function loadFooter (){
    await fetch('/package/components/footer.html')
    .then(res => res.text())
    .then(html =>{
        document.querySelector('footer').innerHTML=html;
    })
}

//헤더메뉴
function activeMenu (){
    const pathFile = window.location.pathname.split('/').pop();
    const pathName = pathFile.split('.')[0];
    console.log('??',pathName)
    if(pathName===''){
        document.querySelector('.header_ul li')
            .querySelector('a').classList.add('on')
    }else{
        document.querySelectorAll('.header_ul li').forEach(tab => {
            const tabLink = tab.querySelector('a')
            tabLink.classList.toggle('on', tab.id === pathName);
            
        });
    }
    
}

//헤더모달
function headerModal (){
    document.querySelector('.header_modal').classList.toggle('on')
    document.querySelector('.header_ham').classList.toggle('on')
}

//메인 포플 리스트
async function mainPort(){
    await fetch('/package/data/data.json')
    .then(res=>res.json())
    .then(data=>{
        const list =document.querySelector('.swiper-wrapper');
        data.forEach(element=>{
                const div = document.createElement('div');
                div.classList.add('swiper-slide')
                div.innerHTML =`
                    
                        <div class="portfolio_image">
                            <img src="${element.thumbnail}" alt="${element.title}">
                        </div>

                         <div class="portfolio_info">
                            <div class="portfolio_info_type ">
                                ${element.category.map(e=>`
                                    <span class="${e}">${e}</span>
                                `).join('')}
                            </div>
                            <div class="portfolio_info_cnt">
                                <div class="portfolio_info_text">
                                    <h3>${element.title}</h3>
                                    <p>${element.description}</p>
                                </div>
                                <a class="portfolio_info_btn" href="${element.link}" target="_blank">
                                    <span></span>    
                                </a>
                            </div>
                        </div>
                    
                `
                list.appendChild(div);
        })
    })

    const swiper = new Swiper('.swiper', {
        slidesPerView : 1,
	      spaceBetween : 20,
	      slidesPerGroup : 1,
        centeredSlides: false,    //센터모드
	      threshold:100, //마우스 스와이프 민감도	
        navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
        },
        pagination : {   // 페이저 버튼 사용자 설정
            el : '.pagination',  // 페이저 버튼을 담을 태그 설정
            clickable : true,  // 버튼 클릭 여부
            type : 'bullets', // 버튼 모양 결정 "bullets", "fraction" 
            renderBullet : function (index, className) {  // className이 기본값이 들어가게 필수 설정
                return '<a href="#" class="' + className + '">' + (index + 1) + '</a>'
            },
            renderFraction: function (currentClass, totalClass) { // type이 fraction일 때 사용
                return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
            }
        },
	      breakpoints:{
            480:{
              slidesPerView : 2,
            },

            768 : {
              //768px 이하의 크기에서 옵션 값 
              slidesPerView : 2,
            },
            1024 : {
              slidesPerView : 3,
              //1024px 이하의 크기에서 옵션 값 
            },
            1200 : {
              slidesPerView : 3,
              //1024px 이하의 크기에서 옵션 값 
            }
        }
      });
}

loadHeader();
loadFooter();
mainPort();

    