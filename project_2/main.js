$('document').ready(() => {
  setTimeout(() => {
    $('.preloader').fadeOut(200);
  }, 3000);
  var typed = new Typed('.name', {
    strings: ['Developer', 'Designer', 'Programmer'],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity
  });
  let portfolioData = [
    {
      src: 'https://www.xenith.com.au/wp-content/uploads/2014/06/preview5.png',
      type: 'web'
    },
    {
      src: 'https://farsodehomidi.ir/wp-content/uploads/2014/06/preview4.png',
      type: 'web'
    },
    {
      src:
        'https://farsodehomidi.ir/wp-content/uploads/2014/06/preview3-815x458.png',
      type: 'app'
    },
    {
      src:
        'https://cdn.a3rev.com/wp-content/uploads/2015/04/01210525/a3-Portfolio-Item-Switcher-Add-on-1.png',
      type: 'web'
    },
    {
      src:
        'http://myexplained.com/wp-content/uploads/2015/06/explainer-video-sample.jpg',
      type: 'app'
    },
    {
      src:
        'https://s3.envato.com/files/258785419/Previews/04_Roundy_desktop_portfolio_item.png',
      type: 'ui'
    },
    {
      src:
        'https://s3.envato.com/files/229566529/Pagina%20Preview/05_02_Coming-soon.jpg',
      type: 'ui'
    },
    {
      src:
        'https://s3.envato.com/files/260641157/Preview/01_7_Split_screen_3.jpg',
      type: 'ui'
    },
    {
      src: 'https://www.newstechnologyservices.com/images/portfolio/big1.jpg',
      type: 'misc'
    },
    {
      src: 'https://www.newstechnologyservices.com/images/portfolio/big1.jpg',
      type: 'misc'
    },
    {
      src: 'https://www.newstechnologyservices.com/images/portfolio/big1.jpg',
      type: 'misc'
    },
    {
      src: 'https://www.newstechnologyservices.com/images/portfolio/big1.jpg',
      type: 'misc'
    }
  ];
  let data = '';

  portfolioData
    .map((p, i) => {
      data += `<div class='grid-item ${
        p.type
      }' ><img data-lightbox="image-${i}" data-title="My caption" src='${
        p.src
      }' />
      <div class='overlay'>
        <span class="icon" title="View Item">
          <i class="fa fa-search"></i>
        </span>
      </div></div>`;
    })
    .join('');

  $('.grid')
    .html(data)
    .isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      percentPosition: true
    });

  $('.filter-btn').on('click', e => {
    $('.grid').isotope({ filter: e.target.dataset.filter });
  });

  // $('.grid').on('mouseover', e => $(e.target).css('border', '2px solid red'));
});
