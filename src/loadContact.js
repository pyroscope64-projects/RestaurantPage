import { clearMain } from "./clearMain"

function loadContact() {
    clearMain();
    let main = document.querySelector(".main");
    main.innerHTML = `<h1>Contact us</h1>
    <hr>
    <div>
        <h3>Send us a letter</h3>
        <p>5 Restaurant Road, Cicily, Rome</p>
    </div>
    <hr>
    <div>
        <h3>Send us an email</h3>
        <p>RestaurantRoadRestaurant@restaurant.com</p>
    </div>
    <hr>
    <div>
        <h3>Come visit us in person</h3>
        <p>the address is already there</p>
    </div>
    <hr>
    <div>
        <h3>Thanks for visiting!!!!</h3>
    </div>`;
}

export { loadContact }