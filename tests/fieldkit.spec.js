'use strict'

/* global describe, it */

const Fieldkit = require('../')
const Message = require('ssr-fieldkit-message')
const expect = require('chai').expect

describe('Fieldkit', () => {
  describe('.message()', () => {
    it('should return a message object', done => {
      const f = new Fieldkit()
      expect(f.message()).to.be.instanceof(Message)
      done()
    })
  })
})
