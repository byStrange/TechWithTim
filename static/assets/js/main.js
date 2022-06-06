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


var len1 = $('#splide4 .cards .card').length;
var len2 = $('#splide3 .cards .card').length;
var len3 = $('#splide2 .cards .card').length;
var len4 = $('#splide1 .cards .card').length;
// Splides
var splide = new Splide('#splide4', {
  type: 'loop',
  padding: '5rem',
  perPage: 2,
  focus: 'center',
  gap: '20px',
  autoplay: true,
  arrows: true,
  perMove: 1,
  breakpoints: {
    767: {
      perPage: 1,
      padding: 0,
      gap: 0,
      autoWidth: false
    },
    1950: {
      perPage: len1 <= 3 ? len1 : 4,
      autoWidth: true
    },
    1500: {
      perPage: 2,
      autoWidth: true
    },
  }
});
splide.mount();


var splide2 = new Splide('#splide3', {
  padding: '5rem',
  gap: '15px',
  perMove: 1,
  perPage: 1,
  arrows: true,
  autoplay: true,
  breakpoints: {
    767: {
      perPage: 1,
      padding: 0,
      gap: 0,
      autoWidth: false
    },
    1950: {
      perPage: len2 <= 3 ? len2 : 4,
    },
    1200: {
      perPage: 1
    },
    1500: {
      perPage: 2
    },

  }
});
splide2.mount()

var splide3 = new Splide('#splide2', {
  padding: '5rem',
  gap: '15px',
  arrows: false,
  autoplay: true,
  breakpoints: {
    767: {
      perPage: 1,
      padding: 0,
      autoWidth: true,
      arrows: false
    },
    1950: {
      perPage: len3 <= 3 ? len3 : 4,
      focus: 'center'
    },
    1700: {
      perPage: 2,
    },
    1200: {
      perPage: 1,
    },
  }
});
splide3.mount()
var splide5 = new Splide("#splide5", {
  type:  innerWidth < 768 ? 'slide' : 'loop',
  padding: '5rem',
  perPage: 2,
  focus: 'center',
  gap: '20px',
  autoplay: true,
  arrows: false,
  perMove: 1,
  breakpoints: {
    767: {
      perPage: 1,
      padding: 0,
      gap: 0,
      autoWidth: false
    },
    1950: {
      perPage: len1 <= 3 ? len1 : 4,
      autoWidth: true
    },
    1500: {
      perPage: 2,
      autoWidth: true
    },
  }
}).mount()
var splide1 = new Splide('#splide1', {
  perMove: 1,
  padding: '5rem',
  gap: '25px',
  perPage: 1,
  autoWidth: true,
  arrows: false,
  autoplay: true,
  breakpoints: {
    767: {
      perPage: 1,
      gap: 0,
      padding: 0,
      autoWidth: false,
    },
    1950: {
      perPage: len4 <= 3 ? len4 : 4,
      autoWidth: true
    },
    1500: {
      perPage: 1,
      autoWidth: true
    },

  }
});
splide1.mount()
