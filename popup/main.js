/**
 * @type {HTMLInputElement}
 */
const fabricValue = document.getElementById("fabric-value");
const yarnValue = document.getElementById("yarn-value");

chrome.storage.sync.get(["fabric_api_version"], function (result) {
  if (typeof result === "undefined") return;
  fabricValue.value = result.fabric_api_version;
});

document.getElementById("fabric-api-version").addEventListener("click", function () {
  fetch(`https://maven.fabricmc.net/docs/${fabricValue.value}/`).then(function (r) {
    console.log(r);
    if (r.status === 404) {
      alert(`"ERROR: \`${fabricValue.value}\` is not a valid version."`);
    } else {
      chrome.storage.sync.set({ fabric_api_version: fabricValue.value }, function () {
        alert("Fabric API version set");
      });
    }
  });
});
document.getElementById("yarn-build-id").addEventListener("click", function () {
  fetch(`https://maven.fabricmc.net/docs/${yarnValue.value}/`).then(function (r) {
    console.log(r);
    if (r.status === 404) {
      alert(`"ERROR: \`${yarnValue.value}\` is not a valid version."`);
    } else {
      chrome.storage.sync.set({ yarn_build_id: yarnValue.value }, function () {
        alert("Yarn version set");
      });
    }
  });
});
