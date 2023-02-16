import { clearMain } from "./clearMain"

function loadMenu() {
    clearMain();
    let main = document.querySelector(".main");
    main.innerHTML = `<h1>Menu</h1>
    <hr>
    <div>
        <h3>McDonald's Filet-O-Fish</h3>
        <img src="https://img.huffingtonpost.com/asset/5cd7313321000058007a6da9.jpeg?ops=scalefit_720_noupscale&format=webp" 
        alt="filet o fish">
    </div>
    <hr>
    <div>
        <h3>Krabby Patty</h3>
        <img src="https://i.ytimg.com/vi/kd6p8ojmKFw/maxresdefault.jpg" alt="krabby patty">
    </div>
    <hr>
    <div>
        <h3>Glass of water from London</h3>
        <img src="https://img2.thejournal.ie/article/1359758/river?version=1359768&width=1340" alt="dirty water">
    </div>`;
}

export {loadMenu}