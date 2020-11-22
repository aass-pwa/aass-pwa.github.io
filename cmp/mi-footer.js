class MiFooter extends HTMLElement{
	connectedCallBack(){
	    this.innerHTML = /* html*/ 
		Copyright &copy; Andrea Abigail Sánchez Sánchez;
	}
}
customElements.define("mi-footer", MiFooter);
