'use strict'

const Message = require('ssr-fieldkit-message')

/**
 * @constructor
 */
function Fieldkit () {

}

/**
 * @return {Message}
 */
Fieldkit.prototype.message = function () {
  return new Message()
}

module.exports = Fieldkit
