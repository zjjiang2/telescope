const jsdom = require('jsdom');

const { JSDOM } = jsdom;


exports.run = async function (html) {
  const dom = new JSDOM(html);
  const result = dom.window.document.querySelector('body').textContent;

  return Promise.resolve(result);
};