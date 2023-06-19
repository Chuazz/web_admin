## Yêu cầu hệ thống

-  Node v18.14.x

## Môi trường

-  Visual Studio Code

## Sau khi clone dự án

-  Tạo file .env thêm nội dung sau

```
    DATABASE_URL="mysql://[user_name]:[password]@localhost:3306/mobile_store"
```

-  Tải các thư viện, migrate database

```
    npm install
    npx prisma migrate dev
```

## Chạy dự án

```
    npm run dev
```
