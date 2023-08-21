# バージョン

- Rails: 7.0.7
- Next.js: 13.4.10
- postgres:15.3
- redis: 7.0

# 資料格納

https://drive.google.com/drive/folders/1sIkCeZTOISP3FMXs6uZOnj9wonfI2XcF

# 環境構築

```
docker compose build
```

イメージ取得とコンテナ作成

```
docker compose run --rm api rails db:create
```

DB 作成

```
docker compose run --rm api rails db:migrate
```
DB 読み込み

```
docker compose run --rm api rails db:seed
```
初期データ追加

```
docker compose run --rm front yarn install
```

yarn のインストール

```
docker compose up
```

# next.js と Rails の立ち上げ

Front
http://localhost:3001/
ts
eslint
approuter
tailwind

api
http://localhost:3000/
