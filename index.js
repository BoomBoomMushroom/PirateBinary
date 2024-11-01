
const engIn = document.getElementById("EnglishInput")
const argIn = document.getElementById("ArgInput")
const autoConvertCheckbox = document.getElementById("autoConvert")

var wasLastInputArg = false

function convert(){
    if(wasLastInputArg){
        engIn.value = argToText(argIn.value)
    }
    else{
        argIn.value = textToArg(engIn.value)
    }
}

function textToArg(text){
    output = ""
    for (let i = 0; i < text.length; i++) {
        binary = text[i].charCodeAt(0).toString(2)
        if(i != 0){ output += " " } // add a space before each letter
        output += "A";
        for(let j = 0; j < binary.length; j++){
            output += binary[j] == 0 ? "r" : "R"
        }
        output
    }

    return output
}
function argToText(arg){
    let letters = arg.split(" ")
    let output = ""

    for (let i = 0; i < letters.length; i++) {
        let binary = ""
        for(let j = 1; j < letters[i].length; j++){
            let binaryLetter = letters[i][j]
            if(binaryLetter != "r" && binaryLetter != "R"){ return "Input isn't valid Pirate Encoding!" }
            
            binary += binaryLetter == "R" ? "1" : "0"
        }

        char = String.fromCharCode(parseInt(binary, 2))
        output += char
    }

    return output
}

engIn.addEventListener('input', () => {
    wasLastInputArg = false
    if(autoConvertCheckbox.checked){
        convert()
    }
});

argIn.addEventListener('input', () => {
    wasLastInputArg = true
    if(autoConvertCheckbox.checked){
        convert()
    }
});