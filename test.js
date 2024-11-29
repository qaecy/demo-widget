const parent = document.getElementById("qaecy-widget");
if(parent === undefined) console.error("No Element with id 'qaecy-widget'!");

const btn = document.createElement("button")
btn.setAttribute("id", "my-test-btn");
btn.innerHTML = "Sync";
const div = document.createElement("div")
div.setAttribute("id", "my-content-window");

parent.appendChild(btn);
parent.appendChild(div);

const syncEvent = new CustomEvent("qaecySync", {
    detail: {
      name: "syncAll",
      payload: {},
    },
});

btn.addEventListener("click", () => {
    div.innerHTML = "Syncing sharepoint site";
    window.dispatchEvent(syncEvent);
});

window.addEventListener("qaecyEvents", async (event) => {
    const {name, payload} = event.detail;
    console.log("Hello from Sharepoint");
    div.innerHTML = "This is from SharePoint";
})