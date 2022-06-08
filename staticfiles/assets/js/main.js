(function () {
  var move = $("#move");
  document.querySelector('.nav-links').querySelectorAll('li').forEach(item => {
    item.onmouseenter = function (event) {
      move.css({
        opacity: 1,
        left: this.offsetLeft + 'px',
        width: this.offsetWidth + 'px'
      })
    }
    item.onmouseleave = function (event) {
      move.css({
        opacity: 0,
      })
    }
  })
})();

$(function () {
  $(document).ready(function () {
    $('#teachers ._hidden').slideUp(1)
    $('#teachers .card .name span.fas').click(function () {
      $(this).parent().parent().children().eq(1).slideToggle(200)
      $(this).toggleClass('rotate')
    })
    $('#faq .hidden').slideUp();
    $('#faq .collapse[button]').click(function (e) {
      $(this).parent().parent().children().eq(1).slideToggle(200);
      $(this).parent().parent().toggleClass('active');
    })
    $('#faq li:not(.active) .question').click(function (e) {
      if ($(this).parent().parent().hasClass('active')) {
        current = window.scrollY;
      }
      $(this).parent().parent().children().eq(1).slideToggle(200);
      $(this).parent().parent().toggleClass('active');
    })
  })
  $('.burger').click(e => {
    $('header .nav-links').slideToggle();
  })
  $('#hideform').click(e => {
    $('#contact #col').toggle(1000);
    document.querySelectorAll('#contact .absolute.img')[1].classList.toggle('_')

  })
  $('.modal-container').hide();
  if (window.location) {
    var course = location.hash.split('#course').slice(1)[0];
    if (course) {
      $('#courses .cards .card').eq(+course - 1).find('button').click()
    }
  }
  $("#closemodal").click(e => {
    $('.modal-container .modal').hide(500);
    setTimeout(() => {
      $('.modal-container').hide();
    }, 200)
  })
})

function showModal(self, img, title, content, type, dur) {
  console.log(self)
  var _img = self.querySelector('img');
  var _title = self.querySelector('.title span');
  var _content = self.querySelector('.details');
  var _type = self.querySelector('.type');
  var _dur = self.querySelector('.dur');
  _img.src = img;
  _title.innerText = title;
  _content.innerText = content;
  _type.innerHTML = `<span class="marked">Type: </span>` + type;
  _dur.innerHTML = `<span class="marked">Time: </span>` + dur;
  $('.modal-container').show();
  $('.modal-container .modal').show()
}

(function () {
  var courses = document.querySelectorAll('#courses .cards .card');
  var links = document.querySelectorAll('#coursesLink a')
  links.forEach((link, i) => {
    link.href = '#course' + (i + 1)
  });
  courses.forEach((item, index) => {
    links[index].onclick = function (e) {
      var top = document.querySelector('#courses').offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      })
      setTimeout(() => {
        item.querySelector('button').click();
      }, 1000)
    }
  })
})()

$('img').each(() => {
  $(this).attr('draggable', false)
})

$("#splide2").flickity({
  arrows: false,
  autoPlay: true,
  wrapAround: true,
})

$("#splide3").flickity({
  pageDots: innerWidth < 768 ? true : false,
  autoPlay: true
})

$("#splide4").flickity({
  autoPlay: true,
  wrapAround: true,
})

$("#splide1").flickity()

$("#splide5").flickity({
  autoPlay: true,
  arrows: false,
  wrapAround: true,
})