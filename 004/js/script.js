$(() => {
    $(window).resize((e) => {
        $('#out1').text("Width: " + window.innerWidth + "; Height:" + window.innerHeight);
    });
    $(window).scroll((e) => {
        $('#out2').text("Position Y: " + window.scrollY);
    });
    $("button").click(function(e) {
        if ($(this).text() == 'Push mi!') {
            $(this).text("Pushed...");
        } else {
            $(this).text("Push mi!");
        }
    });
});