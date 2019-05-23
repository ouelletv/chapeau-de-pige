/** @module boilerplate/domready */

/**
 * Wait for dom ready and execute callback
 * @param {function} callback
 */
export default function domready (callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
}
