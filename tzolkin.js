/* ==========================================
OSEBNA KODA ČASA™
CORE ENGINE
========================================== */

function calculateTzolkinKin(dateInput){

    const dateParts = dateInput.split("-");

    const date = new Date(Date.UTC(
        parseInt(dateParts[0]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[2])
    ));

    const refDate = new Date(Date.UTC(1800,0,1));
    const refKin = 114;
    const msPerDay = 1000 * 60 * 60 * 24;

    const daysSince =
        Math.floor((date - refDate) / msPerDay);

    const kin =
        ((refKin - 1 + daysSince) % 260 + 260) % 260 + 1;

    return kin;
}


function calculateSoulFrequency(){

    const fullName =
        document.getElementById("fullName").value.trim();

    const birthDate =
        document.getElementById("birthDate").value;

    const email =
        document.getElementById("email").value.trim();

    const gdpr =
        document.getElementById("gdprConsent").checked;

    const resultDiv =
        document.getElementById("result");

    if(!fullName || !birthDate || !email || !gdpr){
        alert("Prosim izpolni vsa polja in potrdi soglasje.");
        return;
    }

    // email capture
    saveEmail(email);

    // PORTAL START
    showPortalSequence(() => {

        const kin = calculateTzolkinKin(birthDate);
        const tone = ((kin - 1) % 13) + 1;
        const sign = ((kin - 1) % 20) + 1;

        const toneText = tzolkinNumbers[tone - 1];
        const toneImg = tzolkinNumberImages[tone - 1];

        const signName = tzolkinSigns[sign - 1];
        const signImg = tzolkinSignImages[sign - 1];
        const signDescription = tzolkinSignDescriptions[sign - 1];

        resultDiv.innerHTML = `
            <div class="reading-card">
                <div class="reading-header">
                    <span class="reading-label">OSEBNA KODA ČASA™</span>
                    <h2>${fullName}</h2>
                </div>

                <div class="kin-display">KIN ${kin}</div>

                <img src="${toneImg}" class="number-img">
                <p class="frequency">${toneText}</p>

                <img src="${signImg}" class="sign-img">

                <h3>${signName}</h3>

                <p class="reading-text">${signDescription}</p>
            </div>
        `;

        resultDiv.classList.add("show");

        resultDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
}


function saveEmail(email){
    console.log("Email captured:", email);
}


/* HERO PARALLAX */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");
    if(!hero) return;

    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.4 + "px";
});


/* PORTAL ANIMATION */

function showPortalSequence(callback){

    const portal = document.getElementById("portal");
    const sound = document.getElementById("portalSound");

    if(!portal) return;

    portal.classList.add("show");

    // sound (safe play)
    if(sound){
        sound.currentTime = 0;
        sound.play().catch(()=>{});
    }

    const text = portal.querySelector(".portal-text");

    setTimeout(() => {
        if(text) text.innerText = "Povezujem tvojo frekvenco...";
    }, 700);

    setTimeout(() => {
        if(text) text.innerText = "Koda Časa se aktivira...";
    }, 1400);

    setTimeout(() => {
        portal.classList.remove("show");
        if(callback) callback();
    }, 1800);
}


/* SERVICE WORKER */

if("serviceWorker" in navigator){

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("sw.js")
            .then(() => {
                console.log("Service Worker aktiviran");
            });

    });

}