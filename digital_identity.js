//GET BROWSER
function getBrowser() {
    const ua = navigator.userAgent;
    if (ua.includes("Edg")) return "Edge";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Safari")) return "Safari";
    return "Unknown";
}
//GET OS
function getOS() {
    const platform = navigator.platform;
    if (platform.includes("Win"))
        return "Windows";
    if (platform.includes("Linux"))
        return "Linux";
    if (platform.includes("Mac"))
        return "MacOS";
    return "Unknown";
}
//GET LANG
function getLanguage() {
    return navigator.language;
}

// RENDER LOCAL DATA
document.getElementById("visitor-browser")
.textContent = getBrowser();

document.getElementById("visitor-os")
.textContent = getOS();

document.getElementById("visitor-language")
.textContent = getLanguage();

// GET IP & GEO
async function loadVisitorIdentity() {
    try {
        const response = await fetch("/api/ipinfo");

        const data = await response.json();

        document.getElementById("visitor-ip")
        .textContent = data.ip || "Unknown";

        document.getElementById("visitor-location")
        .textContent = `${data.city}, ${data.region}, ${data.country}`;

    }
    catch(error){
        console.error(error);

        document.getElementById("visitor-ip")
        .textContent = "Unavailable";

        document.getElementById("visitor-location")
        .textContent = "Unavailable";
    }
}
loadVisitorIdentity();
