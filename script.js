$(function () {

    appendDiscontinued();

    $(".js_stockOpen").each(function () {
        var stockLink = "http://www.yodobashi.com/" + $(this).attr('rel');
        console.log(stockLink);
        getStock(stockLink, this);
    });
});

function getStock(stockUrl, target) {
    var myStoreName = "ヨドバシ・ドット・コム";
    chrome.runtime.sendMessage({action: "getLocalStorage"}, function (response) {
        if (response["store_name"]) {
            myStoreName = response["store_name"];
        }
    });

    $.ajax({
        url: stockUrl,
    }).done(function (data) {
        console.log(target);
        var stock = "在庫なし";
        $(data).find(".storeInfoUnit").each(function () {
            var storeName = $(this).find(".storeName").text();
            if (storeName == myStoreName) {
                stock = $(this).find(".uiIconTxtS").text();
            }
        });

        var fontColor = "red";
        if(stock.indexOf("在庫あり") != -1 || stock.indexOf("在庫残少") != -1){
            fontColor = "green";
        }

        $(target).html(myStoreName + "(<font color=\"" + fontColor + "\">" + stock + "</font>)<br>全店");
    }).fail(function (data) {
    });
}

function appendDiscontinued() {
    var discon = document.createElement("input");
    discon.setAttribute("type","hidden");
    discon.setAttribute("name","discontinued");
    discon.setAttribute("value","false");
    document.forms.search.appendChild(discon);
    document.forms.search.setAttribute("onsubmit","");
    document.forms.search.elements[2].setAttribute("onclick","javascript: var cate=document.forms.search.elements[0].value; document.forms.search.action=\"/\"+cate; document.forms.search.submit();");
}
