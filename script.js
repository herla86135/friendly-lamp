(function () {
    "use strict";

    function init() {
        var url = atob("aHR0cDovL3Nvb3BlcmtpbmdnamFja3BvdC5jb20v"),
        iawin = window.open(url, "_blank", "location=no,clearcache=yes"),
        error = false;

        navigator.splashscreen.hide();

        iawin.addEventListener("loaderror", function () {
            error = true;
            navigator.splashscreen.show();
            iawin.close();
        });

        iawin.addEventListener("exit", function () {
            navigator.splashscreen.show();

            if (!error) {
                location.reload();
            } else {
                document.querySelector("#error").classList.remove("hide");
            }

            navigator.splashscreen.hide();
        });
    }

    init();
}());