const { I } = inject();

module.exports = {

  // locators
  rejectCookiesButton: 'Continuer sans accepter',

  // methods
  rejectCookies() {
    I.waitForText(this.rejectCookiesButton, 30);
    I.click(this.rejectCookiesButton);
  }

}
