$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.banter-loader');
    $loader.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
  });