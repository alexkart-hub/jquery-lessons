$('h1').css('cursor', 'pointer');
let img = $('.foto');
let start = {
    'top': img.offset().top,
    'left': img.offset().left,
    'width': img.width(),
    'height': img.height(),
    'opacity': 0
};
$('h1').on({
    click: function(e) {
        if (img.css('width') != '300px') {
            img.animate({
                    'opacity': 1,
                    'top': (window.innerHeight - 200) / 2,
                    'left': (window.innerWidth - 300) / 2,
                    // 'width': 300,
                    // 'height': 200
                }, {
                    duration: 600,
                    queue: false,
                    specialEasing: {
                        // height: 'linear',
                        height: 'swing',
                        // width: 'linear'
                        width: 'swing'
                    }
                })
                .animate({
                    // 'top': (window.innerHeight - 200) / 2,
                    // 'left': (window.innerWidth - 300) / 2,
                    'width': 300,
                    'height': 200
                }, {
                    duration: 1000,
                    queue: true,
                    specialEasing: {
                        // height: 'linear',
                        height: 'swing',
                        // width: 'linear'
                        width: 'swing'
                    }
                });
        } else {
            img
                .animate({
                    'top': start.top,
                    'width': start.width,
                    'opacity': start.opacity
                }, {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                        // height: 'linear',
                        height: 'swing',
                        // width: 'linear'
                        width: 'swing'
                    }
                })
                .animate({
                    'left': start.left,
                    'height': start.height
                }, {
                    duration: 700,
                    queue: true,
                    specialEasing: {
                        // height: 'linear',
                        height: 'swing',
                        // width: 'linear'
                        width: 'swing'
                    }
                });
        }
    }
});
img.on({
    click: function(e) {
        $(this)
            .animate({
                'top': start.top,
                'width': start.width,
                'opacity': start.opacity
            }, {
                duration: 1000,
                queue: false,
                specialEasing: {
                    // height: 'linear',
                    height: 'swing',
                    // width: 'linear'
                    width: 'swing'
                }
            })
            .animate({
                'left': start.left,
                'height': start.height
            }, {
                duration: 700,
                queue: true,
                specialEasing: {
                    // height: 'linear',
                    height: 'swing',
                    // width: 'linear'
                    width: 'swing'
                }
            });

    }
});