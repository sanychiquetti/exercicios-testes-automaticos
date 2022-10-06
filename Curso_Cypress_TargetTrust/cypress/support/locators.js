const locators = {
    LOGIN: {
        TF_WORKSPACE: '#workspace',
        TF_USER: '#username',
        TF_PASSWORD: '#password',
        BTN_ACCESS: '#submit_button',
        MESSAGE_ERROR: '.nm-text'
    },
    MAIN: {
        IMG_MENU: '.icon-menu',
        MENU_LOCALS: '[href="/CenterWeb/serviceLocal"]',
    },
    LIST_LOCAL: {
        BTN_NEW_LOCAL: '#addServiceLocal',
        TF_SEARCH: '#genericFilter',
        BTN_SEARCH: '#serviceLocalList_doSearch'

    },
    DETAIL_LOCAL: {
        TF_DESCRIPTION: '#serviceLocal_description',
        TF_CORPORATE_NAME: '#serviceLocal_corporateName',
        TF_CELL_PHONE_STD: '#serviceLocal_cellphoneStd',
        TF_CELL_PHONE_NUMBER: '#serviceLocal_cellphoneNumber',
        TF_ALTERNATIVE_IDENTIFIER: '#serviceLocal_alternativeIdentifier',
        TF_COUNTRY: '#serviceLocal_country',
        TF_STATE: '#serviceLocal_state',
        TF_CITY: '#serviceLocal_city',
        TF_CITY_NEGHBORHOOD: '#serviceLocal_cityNeighborhood',
        BTN_SAVE: '#formServiceLocal_doSave'
    }
}
export default locators;