import $ from 'jquery'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyNav from './modules/StickyNav'

new MobileMenu()
new StickyNav($('.site-header, .site-header__logo'))
const featureItems = new RevealOnScroll($('.feature-item'), '85%')
const testimonials = new RevealOnScroll($('.testimonial'), '60%')
