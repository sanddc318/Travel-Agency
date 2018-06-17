import $ from 'jquery'

class Modal {
  constructor() {
    this.modal = $('.modal')
    this.openModalButton = $('.open-modal')
    this.closeModalButton = $('.modal__close')
    this.events()
  }

  events() {
    this.openModalButton.click(this.openModal.bind(this))

    this.closeModalButton.click(this.closeModal.bind(this))

    $(document).keyup(this.keypressHandler.bind(this))
  }

  openModal() {
    this.modal.addClass('modal--is-visible')
    return false
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible')
  }

  keypressHandler(e) {
    if (e.keyCode === 27 || e.keyCode === 8) {
      this.closeModal()
    }
  }
}

export default Modal
