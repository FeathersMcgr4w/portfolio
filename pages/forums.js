const RESULTS_PER_PAGE = 10;
let currentPage = 1;
let forums = [];

//LOAD TXT
async function loadForums(){
    const response =
    await fetch("../data/forums.txt");

    const text = await response.text();

    forums =
    text
        .split("\n")
        .map(item => item.trim())
        .filter(item => item !== "");

    renderPage();
}

//RENDER PAGE
function renderPage(){
    const container =
    document.getElementById("forumsContainer");

    container.innerHTML = "";
    const start = (currentPage - 1) * RESULTS_PER_PAGE;
    const end = start + RESULTS_PER_PAGE;
    const currentItems = forums.slice(start, end);

    currentItems.forEach(url => {
        const isOnion = url.includes(".onion");
        container.innerHTML += `
        <div class="cyber-row-blog">
            <div class="project-icon">
                <img src="${
                    isOnion
                    ? '../img/icon/tor_onion_icon.webp'
                    : '../img/abstract_geometry/abstract_geometric_globe.webp'
                }">
            </div>

            <div class="project-title">
                ${
                    isOnion
                    ? '# OnionLand'
                    : '# ClearNet'
                }
            </div>

            <div class="project-description">
                ${url}
            </div>

            <div>
                <a href="${url}" class="red-button" target="_blank">EXPLORE</a>
            </div>
        </div>
        `;
    });

    updatePagination();
}

//UPDATE PAGINATION
function updatePagination(){
    const totalPages =
    Math.ceil(
        forums.length /
        RESULTS_PER_PAGE
    );

    document
    .getElementById("pageInfo")
    .textContent =
    `Page ${currentPage} / ${totalPages}`;
}

//BUTTONS
document
.getElementById("nextBtn")
.addEventListener("click", () => {

    const totalPages =
    Math.ceil(
        forums.length /
        RESULTS_PER_PAGE
    );

    if(currentPage < totalPages){
        currentPage++;
        renderPage();
    }
});

document
.getElementById("prevBtn")
.addEventListener("click", () => {

    if(currentPage > 1){
        currentPage--;
        renderPage();
    }
});

//INIT
loadForums();
