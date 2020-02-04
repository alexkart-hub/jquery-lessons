$('<img>', {
        src: 'img/logo.png',
        alt: 'logo.png',
        title: 'Основы jQuery. Создание элементов',
        // click: function(e) {
        //     $(this).toggleClass("selectedImage");
        // },
        on: {
            click: function(e) {
                $(this).toggleClass("selectedImage");
            }
        }
    })
    .css({
        'padding': '20px',
        'border': '1px solid red'
    })
    .appendTo('.out');