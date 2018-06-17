import $ from 'jquery'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

new MobileMenu()
const featureItems = new RevealOnScroll($('.feature-item'), '85%')
const testimonials = new RevealOnScroll($('.testimonial'), '60%')
