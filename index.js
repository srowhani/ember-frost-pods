/* globals module */

'use strict'

module.exports = {
  name: 'ember-frost-pods',
  init: function (app) {
    this.options = this.options || {}
    this.options.babel = this.options.babel || {}
    this.options.babel.optional = this.options.babel.optional || []

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators')
    }
    this._super.init && this._super.init.apply(this, arguments)
  },
  included: function (app) {
    this._super.included(app)
  }
}
