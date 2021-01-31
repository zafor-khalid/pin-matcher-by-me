

function generatePin() {
    const pin = (Math.random() * 10000).toFixed();
    if (pin.length != 4)
        generatePin();
    else
        document.getElementById("generatePinDisplay").value = pin;
    document.getElementById("regenerate").style.display = "none";
    document.getElementById("tryleftPara").style.display = "block";
    document.getElementById("tryLeft").innerText = 3;
    document.getElementById("usrPinDisplay").value = "";


}


function usrPin(char) {
    let inputChar = document.getElementById("usrPinDisplay");
    if (char == 'C') {
        inputChar.value = "";
    }
    else if (char == '<') {
        inputChar.value = inputChar.value.slice(0, inputChar.value.length - 1);
    }
    else
        inputChar.value += char;
}

function isMatch() {
    let uPin = document.getElementById("usrPinDisplay");
    let gPin = document.getElementById("generatePinDisplay");
    if (uPin.value === gPin.value) {
        document.getElementById("pinMatched").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
        if (document.getElementById("tryLeft").innerText > 0) {
            setTimeout(function () {
                uPin.value = "", gPin.value = "";
                document.getElementById("pinMatched").style.display = "none";
                document.getElementById("tryAgain").style.display = "none";
            }, 5000);
        }
    }
    else {
        if (document.getElementById("tryLeft").innerText > 1) {
            document.getElementById("tryAgain").style.display = "block";
            document.getElementById("tryLeft").innerText =
                document.getElementById("tryLeft").innerText - 1;
            uPin.value = "";
        }
        else {
            document.getElementById("tryAgain").style.display = "none";
            document.getElementById("regenerate").style.display = "block";
            document.getElementById("tryleftPara").style.display = "none";
        }
    }

}; 
