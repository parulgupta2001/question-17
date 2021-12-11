const checkBtn = document.querySelector("#checkbtn")
const outPut = document.querySelector("#output")

var obj1 = {
    name: "ram ",
    power: "2500",
    yuga: "Treta"
}
var obj2 = {
    name: "krishna ",
    power: "2325",
    yuga: "Dwapar"
}

function checkPower() {
    if (obj1.power > obj2.power) {
        outPut.innerText = obj1.name
    } else {
        outPut.innerText = obj2.name
    }
}


function totalPower () {
    var totalPowerObj1 = obj1.power + obj1.name.length*35   ;
    var totalPowerObj2 = obj2.power + obj2.name.length*35  ;

    if (totalPowerObj1>totalPowerObj2) {
        outPut.innerText = obj1.name ;

    }else{
        outPut.innerText = obj2.name
    }
}


function checkCharacter() {
    if (obj1.name.length * 35 > obj2.name.length * 35) {
        outPut.innerText = obj1.name
 } else {
        outPut.innerText = obj2.name
        

    }
}
checkBtn.addEventListener("click", totalPower)
