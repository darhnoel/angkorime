(function () {
  function platformText() {
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      return navigator.userAgentData.platform;
    }
    return navigator.platform || navigator.userAgent || "";
  }

  function detectedPlatform() {
    var platform = platformText().toLowerCase();
    if (platform.indexOf("win") !== -1) {
      return "windows";
    }
    if (platform.indexOf("linux") !== -1 || platform.indexOf("ubuntu") !== -1) {
      return "linux";
    }
    return "";
  }

  function promoteDownload(platform) {
    if (!platform) {
      return;
    }

    var buttons = document.querySelectorAll("[data-download-platform]");
    buttons.forEach(function (button) {
      var isPrimary = button.dataset.downloadPlatform === platform;
      button.classList.toggle("primary", isPrimary);
      button.classList.toggle("secondary", !isPrimary);
      button.style.order = isPrimary ? "0" : "1";
    });
  }

  promoteDownload(detectedPlatform());
})();
