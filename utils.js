var xss = require('xss');

/**
 * XSS模块配置
 */
var xssOptions = {
  whiteList: {
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    hr: [],
    span: [],
    strong: [],
    b: [],
    i: [],
    br: [],
    p: [],
    pre: ['class'],
    code: [],
    a: ['target', 'href', 'title'],
    img: ['src', 'alt', 'title'],
    div: [],
    table: ['width', 'border'],
    tr: [],
    td: ['width', 'colspan'],
    th: ['width', 'colspan'],
    tbody: [],
    thead: [],
    ul: [],
    li: [],
    ol: [],
    dl: [],
    dt: [],
    em: [],
    cite: [],
    section: [],
    header: [],
    footer: [],
    blockquote: [],
    audio: ['autoplay', 'controls', 'loop', 'preload', 'src'],
    video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width']
  }
};
/**
 * 过滤XSS攻击代码
 *
 * @param {string} html
 * @return {string}
 */
exports.xss = function (html) {
  return xss(html, xssOptions);
};