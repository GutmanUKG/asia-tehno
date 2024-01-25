document.addEventListener('DOMContentLoaded', ()=>{
    const overlay = document.querySelector('.overlay');
    const sideBar = document.querySelector('.sidebar');
    const body = document.querySelector('body');
    const headerMenuBtn = document.querySelector('.header-menu--btn');
    try {
        const btnCloseSideBar = sideBar.querySelector('.btn-close');
    }catch (e) {
        
    }
   
    //Баннер на главной
    $('.banner-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    //Популярные товары
    $('.slider-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.slider-btn--prev'),
        nextArrow: $('.slider-btn--next'),
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
    //Работы
    $('.works-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.slider-work--prev'),
        nextArrow: $('.slider-work--next')
    });
    //Новости
    $('.news-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.slider-news--prev'),
        nextArrow: $('.slider-news--next')
    });
    //Брэнды
    $('.brands-list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.slider-brands--prev'),
        nextArrow: $('.slider-brands--next')
    });


    try{
        if(body.clientWidth < 1024){
            $('.grid_menu-list').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
               
                // prevArrow: $('.slider-brands--prev'),
                // nextArrow: $('.slider-brands--next')
            });
        }
    }catch(e){

    }

    function clearClass(elements, activeClass){
        console.log(elements)
        let i = elements.length;
        while (i--){
            elements[i].classList.remove(activeClass);
        }
    }
    headerMenuBtn.addEventListener('mouseenter', ()=>{
        sideBar.classList.add('active');
        overlay.classList.add('active');
    });

   try {
       btnCloseSideBar.addEventListener('click', (e)=>{
           e.preventDefault();
           sideBar.classList.remove('active');
           overlay.classList.remove('active');

       });
   }catch (e) {

   }
   try {
       (function () {
           let btns = sideBar.querySelectorAll('.sidebar-top-btn'),
               sidebarCategory = sideBar.querySelector('.sidebar-category'),
               sidebarBrands = sideBar.querySelector('.sidebar-brands');

           btns.forEach((item, id)=>{
               item.addEventListener('click', (e)=>{
                   e.preventDefault();
                   clearClass(btns, 'active');
                   item.classList.add('active');
                   if(id == 0){
                       sidebarCategory.classList.add('sidebar-list--active');
                       sidebarBrands.classList.remove('sidebar-list--active');
                   }else{
                       sidebarCategory.classList.remove('sidebar-list--active');
                       sidebarBrands.classList.add('sidebar-list--active');
                   }
               })
           });
       }());
   }catch (e) {

   }
    try {
        overlay.addEventListener('click', ()=>{
            sideBar.classList.remove('active');
            overlay.classList.remove('active');

        });
    }catch (e) {
        
    }
  

    function ShowMore(parentNodes,listElement, triggerBtn, activeClass, countElement = 4) {
        let parentList = document.querySelectorAll(parentNodes);
        parentList.forEach(item=>{
            let elements = item.querySelectorAll(listElement)
            let btn = item.querySelector(triggerBtn);
            let i = elements.length
            if(i > countElement){
                btn.addEventListener('click', (e) => {
                   e.preventDefault();
                   item.classList.toggle(activeClass);
                    if(item.classList.contains(activeClass)){
                        btn.textContent = 'Скрыть';
                        btn.classList.add('active');
                    }else{
                        btn.textContent = 'Показать все';
                        btn.classList.remove('active');
                    }
               })
            }else{
                btn.style.display = 'none';
            }
        })
    }
    //Показать еще в меню
    ShowMore('.sidebar-menu', 'li', '.show-more', 'sidebar-menu--active', 4);


    //Переключение типа формы

    const formFooter = document.querySelector('.form_footer'),
        formSelector = formFooter.querySelector('.form-selector'),
        inputSelector = formSelector.querySelectorAll('input'),
        inputNoIp = formFooter.querySelector('.no_ip');

    inputSelector.forEach(item=>{
        item.addEventListener('click', ()=>{
            console.log(item.id)
            if(item.id == 'ur'){
                inputNoIp.style.display = 'block'
            }else {
                inputNoIp.style.display = 'none'
            }
        })
    })


    const catalogTopFilter = document.querySelector('.catalog-top_filter'),
        topFilterItem = catalogTopFilter.querySelectorAll('.top_filter--item');
    topFilterItem.forEach(item=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault()
            clearClass(topFilterItem, 'top_filter--item-active')
            item.classList.add('top_filter--item-active')
        })
    })
});