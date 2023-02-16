function pageLoad() {
    let content = document.getElementById("content");
    content.innerHTML += `<div class="header">
    <p>Restaurant Page</p>
</div>
<div class="navbar">
    <button id="menu">Menu</button>
    <button id="home">Home</button>
    <button id="contact">Contact</button>
</div>
<div class="main"></div>`;
}

export { pageLoad };