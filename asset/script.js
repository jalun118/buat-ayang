const BtnMau = document.querySelector(".btn-mau");
const BtnNot = document.querySelector(".btn-not");
const C_Alert = document.querySelector(".alert-1");
const Bg_Alert = document.querySelector(".bg-alert");
const BtnClose = document.querySelector(".btn-close");

BtnMau.addEventListener("click", () => {
    if (C_Alert.classList != "show") {
        C_Alert.classList.add("show");
    }
});

BtnClose.addEventListener("click", () => {
    if (C_Alert.classList != "show") {
        C_Alert.classList.remove("show");
        open("next.html", "_parent")
    }
});
C_Alert.addEventListener("click", () => {
    if (C_Alert.classList != "show") {
        C_Alert.classList.remove("show");
        open("next.html", "_parent")
    }
});


function processUser() {
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    temp = parameters[1].split("=");
    p = unescape(temp[1]);
    document.getElementById("dari").innerHTML = l;
    document.getElementById("untuk").innerHTML = p;
}

processUser();



// BtnMau.addEventListener("click", () => {
//     alert("I LOVE YOU ((>ω< ))")
//     open("asset/next.html", "_parent")
// });

BtnNot.addEventListener("click", () => {
    let RandX = Math.floor(Math.random() * 300);
    let RandY = Math.floor(Math.random() * 100);
    BtnNot.style.transform = `translateX(${RandX}px) translateY(${RandY}px)`;
    // console.log(`ok ${RandX}px`)
});