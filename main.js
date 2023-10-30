// let inputs1 = document.f1.name1
// let inputs2 = document.f1.name2



// function myFunc(){
//     if (inputs1.value == "2") {
//         inputs2.value = "q-siz"
//     }else  if (inputs1.value == "3") {
//         inputs2.value = "q"
//     } else  if (inputs1.value == "4") {
//         inputs2.value = "y"
//     } else  if (inputs1.value == "5") {
//         inputs2.value = "a"
//     }    
// }


// function myFunc2(){
//     if (inputs2.value == "q-siz") {
//         inputs1.value = "2"
//     }else  if (inputs2.value == "q") {
//         inputs1.value = "3"
//     } else  if (inputs2.value == "y") {
//         inputs1.value = "4"
//     } else  if (inputs2.value == "a") {
//         inputs1.value = "5"
//     }    
// }
let formSelect = document.querySelector(".form__select")
let formInput = document.querySelector(".form__input")


formSelect.addEventListener("change", e => {
    let inputValue = e.target.value

    if (inputValue == "Argentina") {
        formInput.value = "+54 "
    }else if (inputValue == "Azerbaijan") {
        formInput.value = "+994 "
    }else if (inputValue == "Belarus") {
        formInput.value = "+375 "
    }else if (inputValue == "Bolivia") {
        formInput.value = "+591 "
    }else if (inputValue == "Congo") {
        formInput.value = "+242 "
    }else if (inputValue == "Egypt") {
        formInput.value = "+20 "
    }else if (inputValue == "Estonia") {
        formInput.value = "+272 "
    }else if (inputValue == "Japan") {
        formInput.value = "+81 "
    }else if (inputValue == "Luxembourg") {
        formInput.value = "+352 "
    }else if (inputValue == "France") {
        formInput.value = "+33 "
    }else if (inputValue == "HongKong") {
        formInput.value = "+852 "
    }else if (inputValue == "Mexico") {
        formInput.value = "+52 "
    }else if (inputValue == "San Marino") {
        formInput.value = "+378 "
    }
    
    else if (inputValue == "Morocco") {
        formInput.value = "+212 "
    }else if (inputValue == "Pakistan") {
        formInput.value = "+92 "
    }else if (inputValue == "Germany") {
        formInput.value = "+49 "
    }else if (inputValue == "Italy") {
        formInput.value = "+29 "
    }else if (inputValue == "Peru") {
        formInput.value = "+51 "
    }else if (inputValue == "Syria") {
        formInput.value = "+963 "
    }else if (inputValue == "Tajikistan") {
        formInput.value = "+992 "
    }else if (inputValue == "Turkey") {
        formInput.value = "+90 "
    }else if (inputValue == "Turkmenistan") {
        formInput.value = "+993 "
    }else if (inputValue == "Zambia") {
        formInput.value = "+260 "
    }else if (inputValue == "Uruguay") {
        formInput.value = "+598 "
    }
})