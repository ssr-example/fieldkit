'use strict'

const Message = require('ssr-fieldkit-message')

/**
 * @constructor
 */
function Fieldkit () {

}

/**
 * @param {String} text of the message
 * @return {Message}
 */
Fieldkit.prototype.message = function (text) {
  return new Message(text)
}

module.exports = Fieldkit
