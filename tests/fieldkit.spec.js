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
    it('should decode messages', done => {
      const f = new Fieldkit()
      const m = f.message('Zrrg zr va 5 Zvahgrf va gur fgnvepnfr.')
      expect(m.decode()).to.equal('Meet me in 5 Minutes in the staircase.')
      done()
    })
  })
})
