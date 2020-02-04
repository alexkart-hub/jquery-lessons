$('#btn1').on({
    click: function(e) {
        let textOut1 = $('#out1').text();
        switch (textOut1) {
            case '':
                {
                    $('.list').unwrap();
                    $('.list').wrapInner('<div class="wrapper"></div>');
                    $('#out1').text('.wrapInner()');
                    break;
                }
            case '.wrapInner()':
                {
                    $('li').unwrap();
                    $('.list').wrapAll('<div class="wrapper"></div>');
                    $('#out1').text('.wrapAll()');
                    break;
                }
            case '.wrapAll()':
                {
                    $('.list').unwrap();
                    $('.list').wrap('<div class="wrapper"></div>');
                    $('#out1').text('.wrap()');
                    break;
                }
            case '.wrap()':
                {
                    $('.list').unwrap();
                    $('li').wrapAll('<div class="wrapper"></div>');
                    $('#out1').text('$("li").wrapAll()');
                    break;
                }
            case '$("li").wrapAll()':
                {

                    $('li').unwrap();
                    $('.li-second').appendTo('.second');
                    $('#out1').text('');
                    break;
                }
        }
    }
});

$('#btn-append').on({
    click: function(e) {

    }
});


// $('.list').wrap('<div class="wrapper"></div>');