$(document).ready(function(){
  // 送信ボタン押下時の処理
  $('#push').on('click', function() {
    // テキストエリアの入力内容を変数に格納
    var pushText = $('#pushText').val();
    // ブラウザがNotificationAPIが対応しているか判定する。
    if('Notification' in window) {
      var permission = Notification.permission;

      // push通知承認要求
      var pushRequest = Notification.requestPermission();
      // push通知承認要求承諾メッセージ表示
      UIkit.modal('#checkDialog').show();
      // okボタン押下時のイベントにpush通知を定義する。
      $('#confirmOk').on('click', function(){
        // okボタンが押されるやいなやgoogleトップページに飛ばす
        window.open('https://google.co.jp');
        // googleトップページに移動後、5秒後にメッセージ通知を行う
        setTimeout(function(){
          // メッセージの通知を行う
          pushRequest.then(function(){
            var notification = new Notification(pushText);
          });
        }, 5000);
        // モーダルを閉じる
        UIkit.modal('#checkDialog').hide();
      });
    }
  });
});
