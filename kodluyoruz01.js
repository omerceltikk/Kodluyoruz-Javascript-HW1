let userName = prompt("Kullanıcı Adınızı Giriniz :")

let text1 = document.querySelector("#myName")
    text1.innerHTML = `${userName}`


function tarihSaat() {
    let tarih = new Date().toLocaleDateString();
let clock01 = new Date().toLocaleTimeString();


let clock = document.querySelector("#myClock")

clock.innerHTML = `${tarih} - ${clock01}`

}
setInterval(tarihSaat, 1000)

