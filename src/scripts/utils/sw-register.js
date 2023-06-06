import * as WorkboxWindow from "workbox-window";

const swRegister = () => {
  if (!("serviceWorker" in navigator)) {
    console.log("Service Worker not supported in the browser");
    return;
  }

  const wb = new WorkboxWindow.Workbox("./sw.bundle.js");

  wb.register()
    .then(() => {
      console.log("Registered");
    })
    .catch((error) => {
      console.log("Failed to Register", error);
    });
};
export default swRegister;
