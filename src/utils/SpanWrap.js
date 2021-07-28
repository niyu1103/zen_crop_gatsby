const SpanWrap = () => {
  let spanWrapText = "";
  const ttlEns = Array.from(document.querySelectorAll('.sec-ttl-en'));
  ttlEns.forEach(dom => {
    const text = dom.childNodes[0].textContent.replace(/\r?\n/g, '');
    dom.innerHTML = spanWrapText + text.split('').reduce((acc, v) => {
      return acc + `<span>${v}</span>`
    }, "");
  })
}
export default SpanWrap
