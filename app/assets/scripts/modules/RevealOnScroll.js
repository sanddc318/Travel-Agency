import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els
    this.offsetPerc = offset
    this.hideInitally()
    this.createWaypoints()
  }

  hideInitally() {
    this.itemsToReveal.addClass('reveal-item')
  }

  createWaypoints() {
    this.itemsToReveal.each(index => {
      new Waypoint({
        element: this.itemsToReveal[index],
        offset: this.offsetPerc,
        handler: () => {
          $(this.itemsToReveal[index]).addClass('reveal-item--is-visible')
        }
      })
    })
  }
}

export default RevealOnScroll
