// $(() => {

$("button").click(function(e) {
    if ($(this).text() == 'Push mi!') {
        $(this).text("Pushed...");
    } else {
        $(this).text("Push mi!");
    }
});
// $(window).on('resize scroll', { user: "Some string" }, (e) => {
//     $('#out1').text('Width: ' + window.innerWidth + '; Height: ' + window.innerHeight);
//     $('#out2').text('Position Y:' + window.scrollY);
//     console.log(e.data.user);
// });

$(window).on({
    resize: () => {
        $('#out1').text('Width: ' + window.innerWidth + '; Height: ' + window.innerHeight);
    },
    scroll: (e) => {
        $('#out2').text('Position Y:' + window.scrollY);
        console.log(e.data.user);
    }
}, { user: "Test string" });

$(window).trigger('scroll');
$(window).trigger('resize');
$('button').trigger('click');

// });