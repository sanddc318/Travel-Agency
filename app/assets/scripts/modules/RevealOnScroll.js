import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = $('.feature-item')
    this.hideInitally()
    this.createWaypoints()
  }

  hideInitally() {
    this.itemsToReveal.addClass('reveal-item')
  }

  createWaypoints() {
    this.itemsToReveal.each(function() {
      let currItem = this

      new Waypoint({
        element: currItem,
        handler: function() {
          $(currItem).addClass('reveal-item--is-visible')
        },
        offset: '80%'
      })
    })
  }
}

export default RevealOnScroll
