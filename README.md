# Platzon
Platzon is a language made from a platzi course

## Description
* If a word ends with 'ar', it removes those letters
* If starts with 'z', it puts 'pe' at the end
* If the final word have length greater than 10, it must be divide in two parts and join them by dash
* If the word is palindrome, it will return a upper-lower switching word

## Installing
Run `npm install platzon`

## Using
```
import platzon from 'platzon'

platzon('Sugar') // Sug
platzon('Zebra') // Zebrape
platzon('Zeppelin') // Zeppe-linpe
platzon('Extraordinary') // Extraor-dinary
platzon('Sometemos') // SoMeTeMoS
```
## Credits
Luis Fuentes

## License
[MIT](https://opensource.org/licenses/MIT)
