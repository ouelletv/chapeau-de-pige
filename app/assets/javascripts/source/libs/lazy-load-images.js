/** @module boilerplate/lazy-load-images */

/**
 * Exemple
 * <img data-src='https://url-vers-image.png' class='js-lazy'>
 * <script>lazyload.observe('.js-lazy');</script>
 */

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const io = new IntersectionObserver(
  entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!target.src && isIntersecting) {
        target.src = target.dataset.src
        target.removeAttribute('data-src')
        io.unobserve(target)
      }
    })
  }
)

/**
 * Start observing
 * @param {DOMString} selector
 * @param {number} threshold - Se fier à la doc pour les options de threshold(optional, default to 0)
 */
export const observe = (selector, threshold = 0) => {
  [...document.querySelectorAll(selector)].forEach((img) => {
    io.observe(img)
  }, { threshold })
}

