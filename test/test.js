const expect = require('chai').expect
const platzon = require('../dist/src/platzon').default

describe('#platzon', function(){
    it('If a word ends with \'ar\', it removes those letters', function(){
        const translation = platzon('Programar')
        const translation2 = platzon('Sugar')
        
        expect(translation).to.equal('Program')
        expect(translation2).to.equal('Sug')
    })

    it('If starts with \'z\', it puts \'pe\' at the end', function(){        
        const translation2 = platzon('Zarponear')
        
        expect(translation2).to.equal('Zarponepe')
    })

    it('If the final word have length greater than 10, it must be divide in two parts and join them by dash', function(){
        const translation = platzon('Extraordinary')
        const translation2 = platzon('Acknowledgment')
        const translation3 = platzon('Zeppelin')

        expect(translation).to.equal('Extraor-dinary')
        expect(translation2).to.equal('Acknowl-edgment')
        expect(translation3).to.equal('Zeppe-linpe')
    })

    it('If the word is palindrome, it will return a upper-lower switching word', function(){
        const translation = platzon('Sometemos')
        const translation2 = platzon('Reconocer')

        expect(translation).to.equal('SoMeTeMoS')
        expect(translation2).to.equal('ReCoNoCeR')
    })
})