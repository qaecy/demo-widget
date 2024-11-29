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
      payload: {
        lastSync: "2024-11-29T09:00:00Z"
      },
    },
});

btn.addEventListener("click", () => {
    div.innerHTML = "Syncing sharepoint site";
    console.log(syncEvent);
    window.dispatchEvent(syncEvent);
});

window.addEventListener("qaecyEvents", async (event) => {
    const {name, payload} = event.detail;

    if(name === "filesToSync"){
        console.log("Widget received files to sync");
        const fileNames = payload.files.map(f => f.name).join(",");
        div.innerHTML = `Got ${payload.files.length} files from SharePoint (${fileNames})`;
    }
})