import $ from 'jquery'
import smoothScroll from 'jquery-smooth-scroll'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyNav {
  constructor(els) {
    this.lazyImages = $('.lazyload')
    this.itemsToDarken = els
    this.navTriggerElement = $('#our-beginning')
    this.createNavWaypoint()

    this.pageSections = $('.page-section')
    this.navLinks = $('.primary-nav a')
    this.createPageSectionWaypoints()
    this.addSmoothScrolling()
    this.refreshWaypoints()
  }

  addSmoothScrolling() {
    this.navLinks.smoothScroll()
  }

  refreshWaypoints() {
    this.lazyImages.on('load', () => Waypoint.refreshAll())
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

  createPageSectionWaypoints() {
    this.pageSections.each(index => {
      new Waypoint({
        element: this.pageSections[index],
        offset: '15%',
        handler: direction => {
          if (direction === 'down') {
            let matchingNavLink = this.pageSections[index].getAttribute(
              'data-matching-link'
            )

            this.navLinks.removeClass('is-current-link')
            $(matchingNavLink).addClass('is-current-link')
          }
        }
      })

      new Waypoint({
        element: this.pageSections[index],
        offset: '-40%',
        handler: direction => {
          if (direction === 'up') {
            let matchingNavLink = this.pageSections[index].getAttribute(
              'data-matching-link'
            )

            this.navLinks.removeClass('is-current-link')
            $(matchingNavLink).addClass('is-current-link')
          }
        }
      })
    })
  }
}

export default StickyNav
