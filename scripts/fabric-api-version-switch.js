chrome.storage.sync.get(["fabric_api_version"], function (result) {
  if (typeof result.fabric_api_version === "undefined") {
    console.log("fabric_api_version is not defined in storage");
    return;
  }

  if (!location.href.includes(result.fabric_api_version)) {
    location.href = location.href.replace(/fabric-api-[0-9\.]+\+[0-9\.]+/, result.fabric_api_version);
  }
});
