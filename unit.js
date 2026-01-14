let inputEl=document.getElementById("InputNum")
let convertBtn=document.getElementById("convert")
const ulEl=document.getElementById("ul-el")
const ulEl1=document.getElementById("ul-el1")
const ulEl2=document.getElementById("ul-el2")

convertBtn.addEventListener('click',function() {
    convertLength (Number(inputEl.value))
    convertVolume (Number(inputEl.value))
    convertMass (Number(inputEl.value))
})

function convertLength(value){
    let ftm=value/3.281
    let mtf=value*3.281
    ulEl.innerHTML=`
    <p>
    ${value} meters = ${mtf.toFixed(3)} feet | ${value} feet = ${ftm.toFixed(3)} meters
    </p>
    `
}

function convertVolume(value){
    let ltg=value/3.785
    let gtl=value*3.785
    ulEl1.innerHTML=`
    <p>
    ${value} litres = ${ltg.toFixed(3)} grams | ${value} grams = ${gtl.toFixed(3)} litres
    </p>
    `
}

function convertMass(value){
    let kgtp=value*2.205
    let ptkg=value/2.205
    ulEl2.innerHTML=`
    <p>
    ${value} kilograms = ${kgtp.toFixed(3)} pounds | ${value} pounds = ${ptkg.toFixed(3)} kilograms
    </p>
    `
}