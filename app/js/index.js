var Layout = function(){
    
    var navbarScroll = function(){
     var header = $('#desktop-header'); 
     var headerHeigth = $('header').height();
     $(window).bind('scroll', function() {
          // var navHeight = $(window).height() + 100;
          if ($(window).scrollTop() > headerHeigth) {
             header.removeClass('top').addClass('not-top');
             if($(window).width() > 767){
                $('header').css('background','black')
             }
          } else {
             header.removeClass('not-top').addClass('top');
              if($(window).width() > 767){
                $('header').css('background','transparent')
             }
          }
      });
    }

    var mobileMenuButton = function(){
      $(".menu-trigger, .navigation").click(function(){
        $("#mobile-menu").toggleClass('show-mobile-menu');
      })
      $(".menu-trigger, .navigation").click(function(){
      
        $(".top-menu").toggleClass('top-animate');
        $(".mid-menu").toggleClass('mid-animate');
        $(".bottom-menu").toggleClass('bottom-animate');
      });
      $(".menu-trigger, .navigation").on('click', function(){
          $('body').toggleClass('over-active');
      })
    }

    var useMobileLink = function(){
      var link = $('#mobile-menu a');
      var mobileMenu = $('#mobile-menu');
      link.on('click',function(event){
        event.preventDefault();
        mobileMenu.removeClass('show-mobile-menu');
        $(".top-menu").removeClass('top-animate');
        $(".mid-menu").removeClass('mid-animate');
        $(".bottom-menu").removeClass('bottom-animate');
      })
    }

    var initialHeightTopBlock = function(){
      var height = $(window).height();
      $('#top-block').css({
        'minHeight': 0,
        'maxHeight': 'none',
        'height': height
      });
    }

    var showTeamItemData = function(){
      var item = $('.team-item img');
      item.on('touchstart', function(){
       
      })
      item.on('touchsend', function(){

      })
    }

    var scroll = function(){
        var links = $('.link');
        var mobileLinks= $("#mobile-navigation a");
        $("#navigation, #mobile-navigation").on("click","a", function (event) {
            $('body').removeClass('over-active');
            event.preventDefault();
            for( var i = 0 ; i < links.length; i++ ){
                var el = $(links[i]);
                el.removeClass('active');
            }
            
            var link = $(this).addClass('active');
            for( var i = 0 ; i < mobileLinks.length; i++ ){
                var el = $(mobileLinks[i]);
                el.removeClass('active');
            }
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body, html').animate({scrollTop: top},1000);
        });
    }

    return {
        initScroll : function(){
          scroll();
        },
        initNavbarScroll : function(){
            navbarScroll();
        },
        initMobileMenuButton: function(){
            mobileMenuButton();
        },
        initUseMobileLink: function(){
            useMobileLink();
        },
        initInitialHeightTopBlock: function(){
            initialHeightTopBlock();
        },
        initShowTeamItemData: function(){
            showTeamItemData();
        },
        init: function(){
            this.initScroll();
            this.initShowTeamItemData();
            this.initNavbarScroll();
            this.initMobileMenuButton();
            this.initUseMobileLink();
            this.initInitialHeightTopBlock();
        }
    }
}();
