const FadeinScroll = () => {
  const mainVisual = document.querySelector('.main-visual');
  const homeMainScroll = document.querySelector('.home-main-scroll');
  const options = {
    threshold: [0.8],
  }

  const observer = new IntersectionObserver((entries) => {
    // console.log(entries[0]);
    if (entries[0].intersectionRatio > 0.8) {
      homeMainScroll.classList.add('show');
    } else {
      homeMainScroll.classList.remove('show');
    }
  }, options);

  observer.observe(mainVisual);

  console.log('FadeinScroll!!!');

  // fadeins.forEach(dom => {
  //   new IntersectionObserver(([e]) => {
  //     if (e.isIntersecting) {
  //       if (!dom.classList.contains('show'))
  //         dom.classList.add('show')
  //     }
  //   }).observe(dom)
  // })

}
export default FadeinScroll

