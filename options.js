$(function(){
  // セーブボタンが押されたら、
  // ローカルストレージに保存する。
  $("#save").click(function () {
    // console.log('store_name = '+ $("#store_name").val());
    localStorage["store_name"] = $("#store_name").val();
  });

  var storeListUrl = 'http://www.yodobashi.com/ec/store/list/?gclid=CP6nkP2gtccCFYQDvAod7HMM_w'
  $.ajax({
      url: storeListUrl,
  }).done(function (data) {
      $(data).find(".childNav > li").each(function () {
        if($(this).text().match(/コンシェルジェ/)) {
          return true;
        }
        //console.log($(this).text());
        $('#store_name').append($('<option>').attr({value: $(this).text()}).text($(this).text()));
      });
      if (localStorage["store_name"]) {
        //console.log('localStorage store_name='+localStorage["store_name"]);
        $('#store_name').val(localStorage["store_name"]);
      }else{
        $('#store_name').val('ヨドバシ・ドット・コム');
        localStorage["store_name"] = $("#store_name").val();
      }
  }).fail(function (data) {
  });
});

