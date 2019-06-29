window.onload = () => {
  new Vue({
    el: '#app',
    data: {
      projects: [
        { name: 'Online Learning', link: '/project_1/', img: 'project1.jpg' },
        { name: 'Portfolio', link: '/project_2/', img: 'portfolio.jpg' },
        { name: 'Todo Vue', link: '/project_3/', img: 'project3.jpg' },
        { name: 'Not Done Yet', link: '#', img: 'working.jpg' },
        { name: 'Not Done Yet', link: '#', img: 'working.jpg' }
      ]
    }
  });
};
