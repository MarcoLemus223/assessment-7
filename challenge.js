//1.
    let numbers = [1, 3, 21, -21, 5]
    let results = true

    function addToZero() {
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] === 0)
            results = false
        }
    }
    console.log(addToZero[3, 21])

//2.
    function uniqueCharsCheck(word){
        let uniqueChars = new Set([])
        for(let i = 0; i < word.length; i++){
            uniqueChars.add(word[i])
        }
        return uniqueChars.size === word.length
    }

    console.log(uniqueCharsCheck('Monday'))
    console.log(uniqueCharsCheck('Moonday'))

//3.
    function isPangram(string){
        let strArr = string.toLowerCase()
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

        for(let i = 0; i < alphabet.length; i++){
            if(strArr.indexOf(alphabet[i]) < 0){
                return false
            }
        }
        return true
    }

    console.log(isPangram('The quick bronw fox jumps over the lazy dog'))
    console.log(isPangram('I like catsk, but not mice'))



//4.
    function findLongestWord(str){
        let array1 = str.match(/\w[a-z]{0,}/gi)
        let result = array1[0]
        
        for(let i = 1; i < array1.length; i++){
            if(result.length < array1[i].length){
                result = array1[i]
            }
        }
        return result
    }

    console.log(findLongestWord('Hello World'))