import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import AppPage from '../AppPage'
import DogShop from '../DogShop'

When('I open application', () => {
    AppPage.visit()
})

Then('I should see main page', () => {
    cy.get('#root').should('be.visible')
})

Then('editing columns have old dogs data', () => {
    DogShop.checkEditInputs();
})

Then('form is changed with Edit title', () => {
    DogShop.checkIfAddFormIsChangedWithEditForm();
})

Then('dogs information {string} updated on View table', (isOrIsNot) => {
    DogShop.checkIfDogsInfoIsUpdated(isOrIsNot) 
})

Then('dogs information is deleted from the View table', () => {
    DogShop.checkIfDogsInfoIsDeleted() 
})

Then('dogs view have the following columns {string}', (columnNames) => {
    DogShop.checkColumnsIfDisplayed(columnNames) 
})

When('I fill adding form with data about the dog', () => {
    DogShop.fillTheForm('Breed', 'Julea');
    DogShop.fillTheForm('Nick', 'ak');
    DogShop.fillTheForm('Price', '1002');
    DogShop.fillTheForm('Image', 'http://www.mutkut.com/wp-content/uploads/2015/12/Loving-You-White-Dog-Display-Picture-300x300.jpg');
})

When('I click on {word} button', (buttonType) => {
    DogShop.clickOnButton(buttonType)
})

When('I save dogs information', () => {
    DogShop.saveDogInformation()
})

Then('the dog information is added with success', () => {
     DogShop.checkIfDogWasAdded();
})

When('I update information from the form', () => {
    DogShop.fillTheForm('Breed', 'UpdBreed');
    DogShop.fillTheForm('Nick', 'UpdNick');
    DogShop.fillTheForm('Price', '111');
})

When('I fill adding form with duplicated data about the dog', () => {
    DogShop.fillTheDuplicatedForm('Breed')
    DogShop.fillTheDuplicatedForm('Nick')
    DogShop.fillTheDuplicatedForm('Price')
})

When('I click on {word} price button', (buttonType) => {
    DogShop.clickOnButton(buttonType)
})

When('I delete all dogs information from data table', () => {
    DogShop.deleteAllDogs()
})

Then('Dogs data table has no data', () => {
    DogShop.dogsDataTableHasNoData()
})

When('I fill adding form with data about the dog without image', () => {
    DogShop.fillTheForm('Breed', 'Julea')
    DogShop.fillTheForm('Nick', 'ak')
    DogShop.fillTheForm('Price', '1002')
})

When('I fill adding form without {string} data about the dog', (mandatoryField) => {
    const text = `${mandatoryField}`
    DogShop.saveNumberOfDogs()
    switch(text){
        case 'Breed':
            DogShop.fillTheForm('Nick', 'tuca');
            DogShop.fillTheForm('Price', '1002');
            break;
        case 'Nick':
            DogShop.fillTheForm('Breed', 'Pitbull');
            DogShop.fillTheForm('Price', '1002');
            break;
        case 'Price':
            DogShop.fillTheForm('Breed', 'Pitbull');
            DogShop.fillTheForm('Nick', 'tuca');
            break;
    }
})

Then('the dog information is not added', () => {
    DogShop.checkNumberOfDogs()
})


