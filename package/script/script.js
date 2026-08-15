//헤더 삽입
async function loadHeader (){
    await fetch('/package/components/header.html')
    .then(res => res.text())
    .then(html => {
        document.querySelector('header').innerHTML = html;
    })

    console.log('1')
    activeMenu()
}

async function loadFooter (){
    await fetch('/package/components/footer.html')
    .then(res => res.text())
    .then(html =>{
        document.querySelector('footer').innerHTML=html;
    })
}

function activeMenu (){
    const pathFile = window.location.pathname.split('/').pop();
    const pathName = pathFile.split('.')[0];

    document.querySelectorAll('.header_ul li').forEach(tab => {
        tab.classList.toggle('on', tab.id === pathName);
    });
}

    