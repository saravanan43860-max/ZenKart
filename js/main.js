(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    function renderCartItems() {
        var products = [
            { image: 'img/product-1.jpg', name: 'Product Name', price: 150 },
            { image: 'img/product-2.jpg', name: 'Product Name', price: 150 },
            { image: 'img/product-3.jpg', name: 'Product Name', price: 150 },
            { image: 'img/product-4.jpg', name: 'Product Name', price: 150 },
            { image: 'img/product-5.jpg', name: 'Product Name', price: 150 }
        ];

        var rows = products.map(function (product) {
            return '<tr>' +
                '<td class="align-middle"><img src="' + product.image + '" alt="" style="width: 50px;"> ' + product.name + '</td>' +
                '<td class="align-middle">$' + product.price + '</td>' +
                '<td class="align-middle">' +
                    '<div class="input-group quantity mx-auto" style="width: 100px;">' +
                        '<div class="input-group-btn">' +
                            '<button class="btn btn-sm btn-primary btn-minus"><i class="fa fa-minus"></i></button>' +
                        '</div>' +
                        '<input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1">' +
                        '<div class="input-group-btn">' +
                            '<button class="btn btn-sm btn-primary btn-plus"><i class="fa fa-plus"></i></button>' +
                        '</div>' +
                    '</div>' +
                '</td>' +
                '<td class="align-middle">$' + product.price + '</td>' +
                '<td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>' +
            '</tr>';
        }).join('');

        $('#cartItems').html(rows);
    }

    renderCartItems();

    // Product Quantity
    $(document).on('click', '.quantity button', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        var newVal;

        if (button.hasClass('btn-plus')) {
            newVal = parseFloat(oldValue) + 1;
        } else if (parseFloat(oldValue) > 0) {
            newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }

        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

