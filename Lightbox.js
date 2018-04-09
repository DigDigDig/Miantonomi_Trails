var boxZoom = false;

function UpdateLightBox() {
    console.log("Document Ready")

    $(".thumb").on("click", function () {
        console.log("Lightbox Clicked")
        $(".backDrop").animate({
            "opacity": ".70"
        }, 50);
        $(".box").animate({
            "opacity": "1.0"
        }, 50);
        $(".backDrop, .box").css("display", "block");
        console.log("Thumb Clicked")
        var largeImage = $(this).attr("src");
        $(".largeImage").attr({
            src: largeImage
        });
    });

    $(".close, .backDrop").on("click", function () {
        closeBox();
    });

    function closeBox() {
        $(".backDrop, .box").animate({
            "opacity": "0"
        }, 50, function () {
            $(".backDrop, .box").css("display", "none");
            $(".box").css({ "height": "90%", "left" : "20%", "top" : "5%"});
        });
        boxZoom = false;
    }
    $(".box").on("click", function () {
        console.log("box Click")
            if (!boxZoom) {
                $(".box").css({"height": "auto"});
                console.log("box zoom was false")  
                boxZoom = true;
            } else {
                $(".box").css({"height": "90%", "left" : "20%", "top" : "5%"});
                console.log("box zoom was true")
                boxZoom = false;
            }
        //boxZoom = !boxZoom;
    })
};
