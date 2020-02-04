$('.btn').on({
    click: function(e) {
        switch ($(this).text()) {
            case 'hide':
                {
                    $('#div-id1').hide();
                    $(this).text('show');
                    break;
                }
            case 'show':
                {
                    $('#div-id1').show();
                    $(this).text('hide');
                    break;
                }
            case 'fadeOut':
                {
                    $('#div-id2').fadeOut();
                    $(this).text('fadeIn');
                    break;
                }
            case 'fadeIn':
                {
                    $('#div-id2').fadeIn();
                    $(this).text('fadeOut');
                    break;
                }
            case 'fadeTo10%':
                {
                    $('#div-id3').fadeTo(1000, .1);
                    $(this).text('fadeTo100%');
                    break;
                }
            case 'fadeTo100%':
                {
                    $('#div-id3').fadeTo(1000, 1);
                    $(this).text('fadeTo10%');
                    break;
                }
            case 'fadeToggle':
                {
                    $('#div-id4').fadeToggle();
                    break;
                }
            case 'slideUp':
                {
                    $('#div-id5').slideUp();
                    $(this).text('slideDown');
                    break;
                }
            case 'slideDown':
                {
                    $('#div-id5').slideDown();
                    $(this).text('slideUp');
                    break;
                }
            case 'slideToggle':
                {
                    $('#div-id5').slideToggle();
                    break;
                }
        }
    }
});
let animTime = 500;
$('.someDiv').on({
    click: function(e) {
        let modal = $('#modalDiv');
        let bgImg = modal.css('background-image');
        modal.css({
            'top': (window.innerHeight - modal.height()) / 2,
            'left': (window.innerWidth - modal.width()) / 2,
            'background-image': $(e.target).css('background-image')
        });
        if (modal.css('display') == 'none') {
            modal.show(animTime);
        } else if (modal.css('background-image') == bgImg) {
            modal.hide(animTime);
        }
    }
});
$('#modalDiv').click(function(e) {
    $(this).hide(animTime);
});