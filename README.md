# QR Menu Clone

<img width="100%" height="auto" src="https://i.postimg.cc/ZnY2Hdvd/QR-Menu-Cover.jpg" alt="QR-Menu-Cover">

**Цель разработки проекта.** Снижение риска распространения вирусов, передающихся контактным путем, при помощи использования QR-кода, благодаря сканированию которого гости заведений смогут просматривать электронное меню ресторана и формировать заказы на своих индивидуальных девайсах. Приложение позволит сократить расходы, автоматизировать процесс взаимодействия между поставщиком услуг и клиентом.

## Используемые технологии в процессе разработки (Server Side):

* node.js - является оптимальным решением для реализации бекэнда, когда JS позволяет писать и фронтенд, и сервер, но есть и свои особенности, связанные с однопоточностью JS.

* express - веб-фреймворк для приложений Node.js.

* i18n - библиотека для интернационализации приложения.<br>
  **Применение:** Перевод ответов от сервера в зависимости от выбора языка системы.

* socket.io - библиотека для обмена данными в режиме реального времени.<br>
  **Применение:** Обработка заказов в реальном времени. Изменение графиков и содержимого таблиц с заказами.

* mongoDB - кросс-платформенная, документо-ориентированная база данных, обеспечивающая высокую производительность и легкую масштабируемость.

* Mongoose - библиотека, позволяющая определять схемы со строго типизированными данными.

* bcrypt - хеш-функция, используемая для защищенного хранения паролей.
**Применение:** Шифрование паролей при регистрации.

* qrcode - генератор QR-кода / 2D-штрих-кода.
**Применение:** Генерация QR-кода заведения.

* uniqid - пакет для создания уникальных идентификаторов на основе текущего времени, имени процесса и машины.

* morgan & winston - логирование приложения на node.js
**Применение:** логирование http запросов и ошибок


## Используемые технологии в процессе разработки (Admin Side):

* react - выбрали, как библиотеку, с которой все члены команды уже имели опыт работы. В целом, с остальными библиотеками, фреймворками и технологиями большей частью работали впервые, так что основной мотивацией было попробовать их в работе, определиться с рациональностью дальнейшего применения.

* recharts - библиотека для создания графиков и диаграмм.

* redux/redux-saga, благодаря построенной структуре, значительно облегчал контроль состояния и получения/отправления данных.

* ant design - в условиях отсутствия дизайнера был хорошим выбором, дающим возможность сосредоточиться на функциональности приложения.
**Применение:** выдержанное в едином стиле приложение.

* axios - библиотека для выполнения HTTP-запросов к API.

* moment.js - библиотека для работы с датой и временем.

* socket.io - библиотека для обмена данными в режиме реального времени.

* sortable.js - библиотека, позволяющая создавать списки, которые можно изменять, перетаскивая элементы.

* prop-types - проверка типов в React.

* uuid - легковесная кросс-платформенная безопасная библиотека для создания RFC4122 UUIDs.


## Используемые технологии в процессе разработки (Client Side):

* react - выбрали, как библиотеку, с которой все члены команды уже имели опыт работы. В целом, с остальными библиотеками, фреймворками и технологиями большей частью работали впервые, так что основной мотивацией было попробовать их в работе, определиться с рациональностью дальнейшего применения.

* typescript - строго типизированный язык программирования, надмножество языков ECMAScript.

* ant design - в условиях отсутствия дизайнера был хорошим выбором, дающим возможность сосредоточиться на функциональности приложения.

* axios - библиотека для выполнения HTTP-запросов к API.


# Запуск проекта

## Запуск отдельных модулей

### Server Side:
```sh
$ cd server/
```
```sh
$ npm i
```
```sh
$ npm run server
```

### Admin Side:
```sh
$ cd admin/
```
```sh
$ npm i
```
```sh
$ npm start
```

### Client Side:
```sh
$ cd client/
```
```sh
$ npm i
```
```sh
$ npm start
```

## Параллельный запуск всех модулей

Для параллельного запуска нескольких npm скриптов при разработке используется пакет — **concurrently**.

- npm install - установка всех зависимостей (admin / client / server)

- npm start - запуск серверной, клиентской и административной частей приложения (полный зпуск приложения) в режиме разработки.



