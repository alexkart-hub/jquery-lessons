function queryTime() {
    $.ajax({
        url: "php/data.php",
        cache: false,
        success: function(html) {
            $('#out1').html(html);
        }
    });
}
setInterval("queryTime()", 1000);

$('#mailSend').submit(function() {
    let str = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: "php/hello.php",
        data: str,
        success: function(html) {
            $('#out2').html(html);
        }
    });
    return false;
});