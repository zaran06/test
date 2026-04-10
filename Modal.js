export class Modal {
  constructor(idModalWindow) {
    this.modal = document.getElementById(idModalWindow);
    this.closeButton = this.modal.querySelector(".close-btn");
    this.handleClose = () => this.close();
    this.initClose();
  }

  open() {
    this.modal.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  initClose() {
    if (this.closeButton) {
      this.closeButton.addEventListener("click", this.handleClose);
    }
  }
}
