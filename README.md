# Yodobashi Stock Checker

yodobashi.comの検索結果によく使う店舗の在庫状況を表示するChrome Extentionです。

# インストール方法

1. このリポジトリをcloneする
2. chrome://extensions/ を開き、右上の「ディベロッパーモード」にチェックを入れる
3. 同ページの「パッケージ化されていない拡張機能を読み込む」をクリック
4. cloneしたディレクトリを指定する

# 使い方

インストール完了後、yodobashi.comでほしい商品を検索するだけです。

# よく使う店舗の変更
1. script.jsをエディタで開き、以下を直接変更する
```
var myStoreName = "マルチメディアAkiba";
```
2. chrome://extensions/ を開き、リロードリンクをクリックする
