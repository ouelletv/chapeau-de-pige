/** @module boilerplate/debounce */

/**
 * @class
 * @param {function} cb - callback
 * @param {number} wait - wait time value
 * @param {boolean} immediate
 * @returns {function}
 */
const debounce = (cb, wait, immediate) => {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) cb.apply(this, args)
    }, wait)
    if (immediate && !timeout) cb.apply(this, [...args])
  }
}

export default debounce