const { I, aboutPage, mainPage } = inject();

module.exports = {

    // locators

    noResultIcon: '//div[@class="errorPage_headerImg"]',
    noResultTextTitle: '//div[@class="errorPage_content"]//div[contains(@class,"contentTitle")]',
    noResultTextDescription: '//div[@class="errorPage_content"]//div[contains(@class,"contentDescription")]',

    // methods

    async typeInTheSearch(dataTable, state) {
        state.expectedTitle = dataTable.parse().hashes()[0].expectedTitle
        state.expectedDescription = dataTable.parse().hashes()[0].expectedDescription
        I.fillField('//html/body/app-desktop/div[1]/div/sports-left-menu/sports-list-menu/sports-search-bar/div/form/div/bcdk-input-base/input', dataTable.parse().hashes()[0].input);
        I.waitForElement(this.noResultIcon, 20);
        state.currentTextTitle = await I.grabTextFrom(this.noResultTextTitle);
        state.currentTextDescription = await I.grabTextFrom(this.noResultTextDescription);
    },

    validateContent(state) {
        I.assertContain(state.currentTextTitle, state.expectedTitle);
        I.assertContain(state.currentDescription, state.expectedDescription);
    }
}
