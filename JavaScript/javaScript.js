   //бургер
    const iconMenu = document.querySelector('.menu_icon');
  if(iconMenu){
    const ourMenu = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle("animate");
      ourMenu.classList.toggle("open");
    });

  }
// шапка при скролле
  window.onscroll = function showHeader () {
  	var header = document.querySelector('header');
 	if (window.pageYOffset > 1){
 		header.classList.add('header_fixed');
}else{
	header.classList.remove('header_fixed');
  }
}



// Прелоад
document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done');
		}
	}, 1000);

}


// const time = 2000;
// const step = 3;

// function outNum(num, elem) {
// 	let l = document.querySelector('#' + elem);
// 	n = 0;
// 	let t = Math.round(time/(num/step));
// 	let interval = setInterval(() => {
// 		n = n + step;
// 		if(n == num) {
// 			clearInterval(interval)
// 		}
// 		l.innerHTML = n;
// 	},
// 		t);
// }

// outNum(90, 'skillhtml');





//клик меню
$(document).ready(function() {
    $('li a').click(function(){
      $('li a').removeClass('active-menu');
      $(this).addClass('active-menu');
    })
  });


//аккордеон

let accordeon = $('.js_accordeon'),
    accordeonItems = $('.js_accordeon_item'),
    accordeonBtn = $('.js_accordeon_btn');

accordeonBtn.on('click', function() {
  if(!$(this).hasClass('js_active')) {
    // если у кнопки нет класса js_active, то у ВСЕХ кнопок и элементов убираем класс js_active
    accordeonBtn.removeClass('js_active')
    accordeonItems.removeClass('js_active')

    // и даем этот класс js_active той кнопке, которую кликнули и элементу соответсвующему
    $(this).addClass('js_active')
    $(this).closest('.js_accordeon_item').addClass('js_active')
  } else {
    // если у кнопки есть класс js_active, то убираем класс js_active у этой кнопки, которую кликнули и элемента соответсвующего
    $(this).removeClass('js_active')
    $(this).closest('.js_accordeon_item').removeClass('js_active')
  }
}) 

//слайдер
$(document).ready(function(){
      $('.my_project').slick({
       dots: true,
       arrows: false,
  	   infinite: true,
  	   speed: 1000,
  	   autoplay: true,
  	   autospeed: 1000,
  	   slidesToShow: 2,
  	   slidesToScroll: 1,

              responsive: [{
    breakpoint: 1200,
    settings: {
        slidesToShow: 1, 
        slidesToScroll: 1,
    }
}]
      });
    });