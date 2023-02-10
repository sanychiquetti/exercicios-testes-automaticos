/// <reference types="cypress" />

describe("Work with hooks", () => {

    before(() => {
        console.log('before')
    })

    beforeEach(() => {
        console.log('before each')
    })

    after(() => {
        console.log('after')
    })

    afterEach(() => {
        console.log('after each')
    })

    it('test one', () =>{
        console.log('test one');
    })

    it('test two', () =>{
        console.log('test two');
    })

    describe('Internal describe', () => {

        beforeEach(() => {
            console.log('before each internal describe')
        })

        afterEach(() => {
            console.log("after each with internal describe")
        })

        it('test three', () => {
            console.log('test three');
        })

        it('test four', () => {
            console.log('test four');
        })
    })

})