const Fadein = () => {

  const fadeins = Array.from(document.querySelectorAll('.sc-f'));
  fadeins.forEach(dom => {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!dom.classList.contains('show'))
          dom.classList.add('show')
      }
    }).observe(dom)
  })

}
export default Fadein

