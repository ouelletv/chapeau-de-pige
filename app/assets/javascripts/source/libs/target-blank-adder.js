/* eslint-disable no-undef */
/**
 * Target blank adder auto init and wait for domready
 * @module boilerplate/target-blank-adder
 */

import domready from '../vendors/domready'

// Auto initialization
export default (() => {
  domready(() => {
    window.DOMAIN_REGEX = /[a-z0-9]+\.(com|org|ca|qc\.ca|gouv\.qc\.ca|net|info|biz|edu|gov|us|fr)$/

    window.domainWithoutSubdomain = function(domainWithSubdomain) {
      const matches = domainWithSubdomain.match(DOMAIN_REGEX)
      if (matches) {
        return matches[0]
      } else {
        return null
      }
    };

    [...document.querySelectorAll('a')].forEach((link) => {
      if (
        !link.className.match(/fancybox|videos/) &&
        !link.getAttribute('data-no-blank') &&
        !link.href.match(/^(javascript:|mailto:)/) &&
        (
          domainWithoutSubdomain(link.hostname) !== domainWithoutSubdomain(location.hostname) ||
          link.href.match(/\.(docx?|xlsx?|pptx?|pdf|eps|zip|vsd|vxd|rar|wma|mov|avi|wmv|mp3|mp4|mpg|mpeg|mpeg4|m4a|m4v|f4v|flv|csv|xml|ogg|oga|ogv|webm|jpg|jpeg|png|gif|webp|svg|ico|txt|css|js)$/)
        )
      ) {
        link.target = '_blank'
        link.className += link.className.indexOf('externe' === -1) ? ' externe' : ''
      }
    })
  })
})()