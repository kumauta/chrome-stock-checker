$(function(){
  // セーブボタンが押されたら、
  // ローカルストレージに保存する。
  $("#save").click(function () {
    localStorage["store_name"] = $("#store_name").val();
  });

  // オプション画面の初期値を設定する
  if (localStorage["store_name"]) {
    $("#store_name").val(localStorage["store_name"]);
  }
});

