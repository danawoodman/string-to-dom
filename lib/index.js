'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stringToDom;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isElement = require('is-element');

var _isElement2 = _interopRequireDefault(_isElement);

/**
 * Adds the given valid HTML string to the page and returns the
 * resultant DOM node.
 *
 * @todo Allow user to specify target node, default to document.body
 * @param {String} html The HTML string to insert
 * @param {?HTMLElement} [target=document.body] The optional target element to add HTML to
 * @returns {HTMLElement} The DOM node that was inserted
 */

function stringToDom(html, target) {
  if (target && !(0, _isElement2['default'])(target)) {
    throw new TypeError('target must be a valid HTML element');
  } else {
    target = document.body;
  }

  console.log(target.outerHTML);

  target.insertAdjacentHTML('afterbegin', html);
  return target.children[0];
}

module.exports = exports['default'];
