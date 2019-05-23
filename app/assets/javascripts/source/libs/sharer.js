/** @module boilerplate/sharer */

import capitalize from './capitalize'
import domready from '../vendors/domready'

// bind click on link
const openModal = (el, title, params) => {
  el.addEventListener('click', function(e){
    var href = e.target.href
    e.preventDefault()
    window.open(href, title, params)
  })
}

/** window modal visual parameters */
export const window_params = "toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,width=600,height=400,resizable=1"

/** Will search with theses namespaces */
export const shareables = ['facebook', 'twitter']

/**
 * Open a new window on `.js-share-[shareables]-link` clicks
 * @function sharer
 * @param {array} namespaces - Override default namespaces
 * @param {string} params - Override default window_params
 */
export default function (namespaces = shareables, params = window_params) {
  domready(() => {
    namespaces.forEach((s) => {
      [...document.querySelectorAll(`.js-share-${s}-link`)].forEach(e => openModal(e, capitalize(s), params))
    })
  })
}
