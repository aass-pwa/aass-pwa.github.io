class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Andrea Abigail Sánchez Sánchez`;
  }
}
customElements.define("mi-footer", MiFooter);
