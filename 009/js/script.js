let animTime = 500;
let modal = $('#modalDiv');
let oldDiv = null;
$('.someDiv').on({
    click: function(e) {
        if (oldDiv) {
            oldDiv.css('opacity', 1);
        }
        let jthis = $(this);
        modal.css({
            'top': jthis.offset().top,
            'left': jthis.offset().left,
            'width': jthis.width(),
            'height': jthis.height(),
            'display': 'block',
            'background-image': jthis.css('background-image'),
            'opacity': 1
        });
        jthis.css('opacity', 0);

        modal
            .animate({ 'height': 400, 'width': 400 }, {
                duration: 1000,
                queue: false,
                specialEasing: {
                    // height: 'linear',
                    height: 'swing',
                    // width: 'linear'
                    width: 'swing'
                }
            })
            .animate({ 'top': (window.innerHeight - 400) / 2, 'left': (window.innerWidth - 400) / 2 }, {
                duration: 1000,
                queue: false,
                specialEasing: {
                    // height: 'linear',
                    height: 'swing',
                    // width: 'linear'
                    width: 'swing'
                }
            });
        oldDiv = jthis;
    }
});
$('#modalDiv').click(function(e) {
    // $(this).hide(animTime);
});