$(function () {

    $(".cartNavInner").each(function () {
        appendDiscontinued(this);
    });

    $(".stockOpen").each(function () {
        var stockLink = "http://www.yodobashi.com/" + $(this).attr('rel');
        getStock(stockLink, this);
    });
});

function getStock(stockUrl, target) {
    $.ajax({
        url: stockUrl,
    }).done(function (data) {
        var myStoreName = "マルチメディアAkiba";
        var stock = "在庫なし";
        $(data).find(".storeInfoUnit").each(function () {
            var storeName = $(this).find(".storeName").text();
            if (storeName == myStoreName) {
                stock = $(this).find(".uiIconTxtS").text();
            }
        });
        $(target).html(myStoreName + ":" + stock);
    }).fail(function (data) {
    });
}

function appendDiscontinued(target) {
    var newInput = $(target).html() + "<input type='hidden' name='discontinued' value='false'>";
    $(target).html(newInput);
}
