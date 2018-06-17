import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyNav {
  constructor(els) {
    this.itemsToDarken = els
    this.navTriggerElement = $('#our-beginning')
    this.createNavWaypoint()
  }

  createNavWaypoint() {
    this.itemsToDarken.each(index => {
      new Waypoint({
        element: this.navTriggerElement[0],
        offset: '10%',
        handler: direction => {
          if (direction === 'down') {
            $(this.itemsToDarken[index]).addClass('--dark')
          } else {
            $(this.itemsToDarken[index]).removeClass('--dark')
          }
        }
      })
    })
  }
}

export default StickyNav
