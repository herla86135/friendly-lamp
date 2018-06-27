(function () {
    "use strict";

    function init() {
        var url = atob("aHR0cDovL2thZGhpcnZlbGNvbXBhbnkuY29tLw=="),
        iawin = window.open(url, "_blank", "location=no,clearcache=yes,zoom=no"),
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
