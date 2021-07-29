import { getWindow } from 'ssr-window';

const window = getWindow();

// UserAgent
const uA = ((ua) => {
  return {
    ua,
    isIE: (() => ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1)(),
    isIE11: (() => ua.indexOf('trident') != -1)(),
    isIEu10: (() => ua.indexOf('msie') != -1)(),
    isEdge: (() => ua.indexOf('edge') != -1)(),
    isChrome: (() => ua.indexOf('chrome') != -1)(),
    isSafari: (() =>
      ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1)(),
    isFirefox: (() => ua.indexOf('firefox') != -1)(),
    isOpera: (() => ua.indexOf('opera') != -1)(),
    isIOS: /i(phone|pod|pad)/.test(ua),
    isIOSChrome: /crios/.test(ua),
    isIPhone: /i(phone|pod)/.test(ua),
    isIPad: /ipad/.test(ua),
    isAndroid: /android/.test(ua),
    isAndroidMobile: /android(.+)?mobile/.test(ua),
    isTouchDevice: 'ontouchstart' in window,
    isMobile: /i(phone|pod)/.test(ua) || /android(.+)?mobile/.test(ua),
    isTablet: /ipad/.test(ua) || /android(.+)(?!mobile)/.test(ua),
  };
})(window.navigator.userAgent.toLowerCase());

uA.isValid = () => {
  const pc =
    !uA.isIEu10 &&
    !uA.isIE11 &&
    !uA.isMobile &&
    (uA.isChrome || uA.isSafari || uA.isFirefox || uA.isEdge);
  const mobile = uA.isMobile && (uA.isSafari || uA.isChrome);
  return pc || mobile;
};

// uA.isEdge = () => {
//   return uA.isEdge;
// };

uA.isIEChieck = () => {
  const pc = uA.isIEu10 || uA.isIE11;
  return pc;
};

uA.isAndroidChrome = () => {
  return uA.isAndroidMobile && uA.isChrome;
};

export { uA };
