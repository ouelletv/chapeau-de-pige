/** @module boilerplate/capitalize */

/**
 *
 * @function capitalize
 * @param {string} word - Word to capitalize
 * @return {string} Capitalized word
 */
export default function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}