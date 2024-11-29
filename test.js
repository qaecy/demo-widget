const parent = document.getElementById("qaecy-widget");

const btn = document.getElementById("my-test-btn");
const div = document.getElementById("my-content-window");

parent.appendChild(btn);
parent.appendChild(div);

btn.addEventListener("click", () => {
    div.innerHTML = "Clicked the button";
});

window.addEventListener("qaecyEvents", async (event) => {
    const {name, payload} = event.detail;
    console.log("Hello from Sharepoint");
    div.innerHTML = "This is from SharePoint";
})