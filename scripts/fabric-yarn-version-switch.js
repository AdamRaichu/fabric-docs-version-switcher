chrome.storage.sync.get(["yarn_build_id"], function (result) {
  if (typeof result.yarn_build_id === "undefined") {
    console.log("yarn_build_id is not defined in storage");
    return;
  }

  if (!location.href.includes(result.yarn_build_id)) {
    location.href = location.href.replace(/yarn-(([0-9\.]+(-rc[0-9])?)|([0-9]{2}[a-z]{1}[0-9]{2}[a-z]))\+build\.[0-9]+/, result.yarn_build_id);
  }
});
