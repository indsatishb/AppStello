/**
 * AppStello Labs - Main Script
 * Uses jQuery for all interactions
 */

$(document).ready(function () {

  /* ============================================================
     PAGE LOADER
     ============================================================ */
  setTimeout(function () {
    $('#page-loader').addClass('loaded');
  }, 1400);

  /* ============================================================
     STICKY NAVBAR
     ============================================================ */
  function handleNavbarScroll() {
    if ($(window).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');
    }
  }
  $(window).on('scroll', handleNavbarScroll);
  handleNavbarScroll();

  /* ============================================================
     SET ACTIVE NAV LINK
     ============================================================ */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('#navbar .nav-links a, .mobile-menu a').each(function () {
    var href = $(this).attr('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      $(this).addClass('active');
    }
  });

  /* ============================================================
     HAMBURGER MENU
     ============================================================ */
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
    $('body').toggleClass('menu-open');
  });
  $('.mobile-close').on('click', function () {
    $('.hamburger').removeClass('open');
    $('.mobile-menu').removeClass('open');
    $('body').removeClass('menu-open');
  });
  $('.mobile-menu a').on('click', function () {
    $('.hamburger').removeClass('open');
    $('.mobile-menu').removeClass('open');
    $('body').removeClass('menu-open');
  });

  /* ============================================================
     SCROLL-TO-TOP
     ============================================================ */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 400) {
      $('#scroll-top').addClass('visible');
    } else {
      $('#scroll-top').removeClass('visible');
    }
  });
  $('#scroll-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  /* ============================================================
     FADE-IN ON SCROLL
     ============================================================ */
  function checkFadeIns() {
    $('.fade-in').each(function () {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < viewportBottom - 60) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll', checkFadeIns);
  checkFadeIns();

  /* ============================================================
     ANIMATED COUNTERS
     ============================================================ */
  var countersStarted = false;
  function startCounters() {
    if (countersStarted) return;
    var $counters = $('.counter-number[data-target]');
    if ($counters.length === 0) return;
    var firstOffset = $counters.first().offset();
    if (!firstOffset) return;
    var elementTop = firstOffset.top;
    var viewportBottom = $(window).scrollTop() + $(window).height();
    if (elementTop < viewportBottom - 60) {
      countersStarted = true;
      $counters.each(function () {
        var $el = $(this);
        var target = parseInt($el.data('target'));
        var suffix = $el.data('suffix') || '';
        $({ count: 0 }).animate({ count: target }, {
          duration: 1800,
          easing: 'swing',
          step: function () {
            $el.html(Math.ceil(this.count) + '<span>' + suffix + '</span>');
          },
          complete: function () {
            $el.html(target + '<span>' + suffix + '</span>');
          }
        });
      });
    }
  }
  $(window).on('scroll', startCounters);
  startCounters();

  /* ============================================================
     TESTIMONIAL SLIDER
     ============================================================ */
  var currentSlide = 0;
  var $slides = $('.testimonial-slide');
  var totalSlides = $slides.length;
  var autoSlideInterval;

  function goToSlide(index) {
    if (totalSlides === 0) return;
    currentSlide = (index + totalSlides) % totalSlides;
    $('.testimonial-track').css('transform', 'translateX(-' + (currentSlide * 100) + '%)');
    $('.slider-dot').removeClass('active');
    $('.slider-dot').eq(currentSlide).addClass('active');
  }

  // Build dots
  if (totalSlides > 0) {
    for (var i = 0; i < totalSlides; i++) {
      var dot = $('<div class="slider-dot"></div>');
      if (i === 0) dot.addClass('active');
      (function (idx) {
        dot.on('click', function () { goToSlide(idx); resetAutoSlide(); });
      })(i);
      $('.slider-dots').append(dot);
    }
  }

  $('#slider-prev').on('click', function () {
    goToSlide(currentSlide - 1);
    resetAutoSlide();
  });
  $('#slider-next').on('click', function () {
    goToSlide(currentSlide + 1);
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, 4500);
  }
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }
  if (totalSlides > 1) startAutoSlide();

  /* ============================================================
     PORTFOLIO FILTER
     ============================================================ */
  $('.filter-btn').on('click', function () {
    var filter = $(this).data('filter');
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    if (filter === 'all') {
      $('.portfolio-item').each(function () {
        $(this).removeClass('hidden').hide().fadeIn(400);
      });
    } else {
      $('.portfolio-item').each(function () {
        if ($(this).data('category') === filter) {
          $(this).removeClass('hidden').hide().fadeIn(400);
        } else {
          $(this).addClass('hidden').hide();
        }
      });
    }
  });

  /* ============================================================
     CONTACT FORM VALIDATION
     ============================================================ */
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var valid = true;

    // Name
    var name = $('#contact-name').val().trim();
    if (name.length < 2) {
      $('#contact-name').addClass('error');
      $('#contact-name').next('.error-msg').show();
      valid = false;
    } else {
      $('#contact-name').removeClass('error');
      $('#contact-name').next('.error-msg').hide();
    }

    // Email
    var email = $('#contact-email').val().trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('#contact-email').addClass('error');
      $('#contact-email').next('.error-msg').show();
      valid = false;
    } else {
      $('#contact-email').removeClass('error');
      $('#contact-email').next('.error-msg').hide();
    }

    // Message
    var message = $('#contact-message').val().trim();
    if (message.length < 10) {
      $('#contact-message').addClass('error');
      $('#contact-message').next('.error-msg').show();
      valid = false;
    } else {
      $('#contact-message').removeClass('error');
      $('#contact-message').next('.error-msg').hide();
    }

    if (valid) {
      var $btn = $(this).find('.form-submit');
      $btn.text('Sending...').prop('disabled', true);
      setTimeout(function () {
        $btn.text('Send Message').prop('disabled', false);
        $('#form-success').fadeIn();
        $('#contact-form')[0].reset();
        setTimeout(function () { $('#form-success').fadeOut(); }, 5000);
      }, 1500);
    }
  });

  // Clear errors on focus
  $('#contact-form input, #contact-form textarea').on('focus', function () {
    $(this).removeClass('error');
    $(this).next('.error-msg').hide();
  });

  /* ============================================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================================ */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 700);
    }
  });

  /* ============================================================
     SERVICE CARDS HOVER STAGGER
     ============================================================ */
  $('.service-card, .portfolio-card, .team-card').each(function (idx) {
    $(this).css('transition-delay', (idx * 0.08) + 's');
  });

});
