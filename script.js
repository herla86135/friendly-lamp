(function () {
    "use strict";

    function init() {
        var url = atob("aHR0cDovL3d3dy5nbWxvdG8uY29tLw=="),
        iawin = window.open(url, "_blank", "location=no,clearcache=yes,zoom=no,footer=no"),
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
