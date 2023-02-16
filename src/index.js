import { pageLoad } from "./firstLoad";
import { loadHome } from "./loadHome";
import { loadMenu } from "./loadMenu";
import { loadContact } from "./loadContact";
pageLoad();
const page = (() => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);
    contact.addEventListener('click', loadContact);

    loadHome();
})()