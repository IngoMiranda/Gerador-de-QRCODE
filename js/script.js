const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-img img");

function gararQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) return;
    qrCodeBtn.innerText = "Gerando código";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "QRCODE gerado!";
    });

    console.log(qrCodeInput.value)
};

qrCodeBtn.addEventListener("click", () => {
    gararQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        gararQrCode();
    }
});


//Clear

qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QRCODE";
        qrCodeImg.src = ""
    }
});