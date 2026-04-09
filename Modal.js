export class Modal {
  constructor(idModalWindow) {
    this.modal = document.getElementById(idModalWindow);
    const closeButton = this.modal.querySelector(".close-btn");
    closeButton.addEventListener("click", () => {
      this.close();
    });
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
}
