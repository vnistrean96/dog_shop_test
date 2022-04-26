

class DogShop {
    breedInfo;
    nickInfo;
    priceInfo;
    imageinfo;
    numberOfDogs;

    static fillTheForm(fieldName, inputText) {

    switch(fieldName){
        case 'Breed' : 
            cy.get('.flex-large input[name=\'breed\']').type(inputText);
            this.breedInfo = inputText;
            break;
        case 'Nick' :
            cy.get('.flex-large input[name=\'nick\']').type(inputText);
            this.nickInfo = inputText;
            break;
        case 'Price' :
            cy.get('.flex-large input[name=\'price\']').type(inputText);
            this.priceInfo = inputText;
            break;
        case 'Image' :
            cy.get('.flex-large input[name=\'url\']').type(inputText);
            this.imageinfo = inputText;
            break;
    };
}

 static fillTheDuplicatedForm(fieldName) {
        
    switch(fieldName){
        case 'Breed' : 
            // const formInputBreed = formInputs + '[name='/breed/']'
            cy.get('.flex-large input[name=\'breed\']').type(this.breedInfo);
            break;
        case 'Nick' :
            cy.get('.flex-large input[name=\'nick\']').type(this.nickInfo);
            break;
        case 'Price' :
            cy.get('.flex-large input[name=\'price\']').type(this.priceInfo);
            break;
        case 'Image' :
            cy.get('.flex-large input[name=\'url\']').type(this.imageinfo);
            break;
    };
}

    static checkIfDogWasAdded(){
        cy.get('.flex-large td').contains(this.breedInfo)
        cy.get('.flex-large td').contains(this.nickInfo)
        cy.get('.flex-large td').contains(this.priceInfo)
    }

    static clickOnButton(buttonType){
        switch(buttonType){
            case 'Add':
                cy.get('#root > div > div > div:nth-child(1) > form > button').trigger('mouseover').click();
                break;
            case 'Edit':
                cy.get('#root > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(5) > button:nth-child(1)').trigger('mouseover').click();
                break;
            case 'Delete':
                cy.get('#root > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(5) > button:nth-child(2)').trigger('mouseover').click();
                break;
            case 'Update':
                cy.get('#root > div > div > div:nth-child(1) > form > button:nth-child(9)').trigger('mouseover').click();
                break;
            case 'Cancel':
                cy.get('#root > div > div > div:nth-child(1) > form > button.button.muted-button').trigger('mouseover').click();
                break;
            }
    }

    static checkEditInputs(){
        cy.get('.flex-large input[name=\'breed\']').then(($breed) => {
            this.breedInfo === $breed.text()
          })
        cy.get('.flex-large input[name=\'nick\']').then(($nick) => {
            this.nickInfo === $nick.text()
          })
        cy.get('.flex-large input[name=\'price\']').then(($price) => {
            this.priceInfo === $price.text()
          })
    }

    static checkIfDogsInfoIsUpdated(isOrIsNot){
        const text = `${isOrIsNot}`
        if(text.includes('not')){
            cy.get('.flex-large td').contains('UpdBreed').should('not.exist')
            cy.get('.flex-large td').contains('UpdNick').should('not.exist')
            cy.get('.flex-large td').contains('111').should('not.exist')
        } else {
            cy.get('.flex-large td').contains('UpdBreed')
            cy.get('.flex-large td').contains('UpdNick')
            cy.get('.flex-large td').contains('111')
        }
    }

    static checkColumnsIfDisplayed(columnNames){
        const text = `${columnNames}`.split(', ')
        text.forEach(verifyEachColumn)
        function verifyEachColumn(item) {
            cy.get('.flex-large thead').contains(item)
          }
    }

    static checkIfDogsInfoIsDeleted(){
        cy.get('.flex-large td').contains(this.breedInfo).should('not.exist');
        cy.get('.flex-large td').contains(this.nickInfo).should('not.exist');
    }

    static checkIfAddFormIsChangedWithEditForm(){
        cy.get('#root > div > div > div:nth-child(1) > h2').contains('Edit')
    }

    static saveDogInformation(){
        cy.get('.flex-large tr:nth-child(1) > td:nth-child(1)').then(($breed) => {
            this.breedInfo = $breed.text()
          })
        cy.get('.flex-large tr:nth-child(1) > td:nth-child(2)').then(($nick) => {
            this.nickInfo = $nick.text()
          })
        cy.get('.flex-large tr:nth-child(1) > td:nth-child(3)').then(($price) => {
            this.priceInfo = $price.text()
          })
        cy.get('.flex-large tr:nth-child(1) > td:nth-child(4)').then(($image) => {
            this.imageinfo = $image.text()
          })

    }

    static dogsDataTableHasNoData(){
        cy.get('.flex-large td').contains('No data')
    }

    static checkNumberOfDogs(){
        cy.get('.flex-large').then(($table) => {
            expect($table.find('tr').length).to.equal(this.numberOfDogs)
          })
    }

    static saveNumberOfDogs(){
        cy.get(".flex-large").find("tr").then((row) => {
        this.numberOfDogs = row.length
    });
    }

    static deleteAllDogs(){
        cy.get('#root > div > div > div > table> tbody > tr > td > button:nth-child(2)').each(() => {
            DogShop.clickOnButton('Delete')
        })
    }

}

export default DogShop