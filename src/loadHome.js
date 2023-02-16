import { clearMain } from "./clearMain"

function loadHome() {
    clearMain();
    let main = document.querySelector(".main");
    main.innerHTML += `<h1>The Restaurant Page</h1>
    <hr>
    <div>
        <h3>About us:</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Qui quibusdam perferendis itaque eius explicabo impedit pariatur
            iste maiores nisi molestiae aliquid excepturi, voluptate quidem,
            quos quis at maxime. Iusto, similique.</p>
    </div>
    <hr>
    <div>
        <h3>Opening/Closing Times:</h3>
        <p>Monday: 10am to 5pm</p>
        <p>Tuesday: 10am to 5pm</p>
        <p>Wednesday: 10am to 5pm</p>
        <p>Thursday: 10am to 5pm</p>
        <p>Friday: 10am to 5pm</p>
        <p>Saturday: 10am to 7pm</p>
        <p>Sunday: 1pm to 4pm</p>
    </div>
    <hr>
    <div>
        <h3>Location:</h3>
        <p>5 Restaurant Road, Cicily, Rome</p>
    </div>`;
}

export { loadHome }