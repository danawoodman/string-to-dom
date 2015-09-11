import isElement from 'is-element'

/**
 * Adds the given valid HTML string to the page and returns the
 * resultant DOM node.
 *
 * @param {String} html The HTML string to insert
 * @param {HTMLElement} [target=document.body] The optional target element to add HTML to
 * @returns {HTMLElement} The DOM node that was inserted
 * @throws {TypeError} Will throw a TypeError if `html` is invalid/badly formatted
 * @throws {TypeError} Will throw a TypeError if `target` is provided but is not a valid HTMLElement
 * @module stringToDom
 * @todo Add `position` support
 */
export default function stringToDom(html, target) {
  if (!target) {
    target = document.body
  } else if (target && !isElement(target)) {
    throw new TypeError('target must be a valid HTML element')
  }

  target.insertAdjacentHTML('afterbegin', html)

  const elm = target.children[0]

  // Invalid HTML will result in an empty string
  if (!elm) {
    throw new TypeError('invalid HTML string provided so no DOM was created')
  }

  return elm
}
