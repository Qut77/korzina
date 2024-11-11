$(document).ready(function() {
    let totalCount = 0;

    // Добавление товара в корзину
    $('.addToCart').click(function() {
        const productName = $(this).data('product');
        const productImage = $(this).siblings('img').attr('src');
        $('#cart').append(
            '<li class="cart-item">' +
                '<img src="' + productImage + '" alt="' + productName + '" style="width: 100px; height: 150px;">' +
                productName +
                '<button class="removeFromCart">Удалить</button>' +
            '</li>'
        );
        totalCount++;
        $('#totalCount').text(totalCount);
    });

    // Удаление товара из корзины при нажатии на кнопку "Удалить"
    $('#cart').on('click', '.removeFromCart', function() {
        $(this).closest('.cart-item').remove();
        totalCount--;
        $('#totalCount').text(totalCount);
    });
});