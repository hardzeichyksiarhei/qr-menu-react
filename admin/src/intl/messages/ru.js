import LOCALES from '../locales'

export default {
  [LOCALES.ru]: {
    // Auth
    Authorization: 'Авторизация',
    Email: 'E-mail',
    Password: 'Пароль',
    RepeatPassword: 'Пароль ещё раз',
    SignIn: 'Войти',
    Register: 'Зарегистрироваться',
    PleaseConfirmPassword: 'Пожалуйста подтвердите свой пароль!',
    ConfirmPassword: 'Подтвердите пароль',
    ResendLink: 'Послать ссылку повторно',
    EmailVerify: 'Подтверждение email',
    ResendVerLink: 'Повторно послать email для верификации',
    ResetPassword: 'Сброс пароля',
    SendPasswordResetLink: 'Отправить ссылку для сброса пароля',
    PinCode: 'ПИН код',
    EnterYourPin: 'Введите ПИН',
    YourPinIsIncorrect: 'Неверный ПИН ',
    Registration: 'Регистрация',
    HaveAnAccount: 'Уже есть учетная запись?',
    DoNothaveAnAccount: 'У вас нет учетной записи?',
    CreateAnAccount: 'Создать аккаунт',
    SignUp: 'Зарегистрироваться',
    ForgotYourPassword: 'Забыли пароль?',
    SessionExpired: 'Сессия истекла',
    LogoutFromAdminPanelSuccess:
      'Выход из панели администрирования прошел успешно. Чтобы войти в панель администрирования, нажмите кнопку «Войти».',
    InvalidCredentials: 'Неверные учетные данные',
    UserWithEmailExists: 'Пользователь с этим email уже существует',
    WeSentYouVerificationLinkSent:
      'Мы отправили вам электронное письмо со ссылкой для подтверждения.',
    ResetPasswordLinkSent: 'Мы отправили вам электронное письмо со ссылкой для сброса пароля.',
    NewPassword: 'Новый пароль',
    RepeatNewPassword: 'Повторите новый пароль',
    PasswordUpdatedSuccess: 'Пароль успешно обновлен',
    VerificationLinkSent: 'Ссылка для подтверждения отправлена',
    VerificationLinkNotSent: 'Ссылка для подтверждения не отправлена',
    VerifyEmail: 'Подтвердить email',
    UserVerifiedAlreadt: 'Пользователь уже подтвержден',
    VerifyEmailFailed: 'Подтвердить email не удалось',
    TwoPasswordIsNotSame: 'Два введенных вами пароля не совпадают!',
    // Admin layout
    // Global UI
    ChangesDiscard: 'В меню внесены изменения! Пожалуйста, сохраните изменения или отклоните их.',
    Yes: 'Да',
    No: 'Нет',
    AreYouSureToDeleteThisItem: 'Вы уверены что хотите удалить этот элемент?',
    Edit: 'Изменить',
    Description: 'Описание',
    Duplicate: 'Дублировать',
    Delete: 'Удалить',
    MoveToTrash: 'Перенести в корзину',
    Menu: 'Меню',
    Discard: 'Отклонить',
    Cancel: 'Отмена',
    CreateMenu: 'Создать меню',
    Settings: 'Настройки',
    Logout: 'Выйти',
    Save: 'Сохранить',
    Download: 'Загрузить',
    // Admin layout
    Dashboard: 'Главная панель',
    MyMenus: 'Мои меню',
    TrashMenu: 'Удаленное меню',
    TrashMenus: 'Удаленные меню',
    Profile: 'Профиль',
    MyProfile: 'Мой профиль',
    // Dashboard
    HistoryOrders: 'История заказов',
    View: 'Обзор',
    QRCode: 'QR код',
    // Settings
    Open: 'ОТКРЫТО',
    Close: 'ЗАКРЫТО',
    Background: 'Фон',
    Sunday: 'Воскресенье',
    Monday: 'Понедельник',
    Tuesday: 'Вторник',
    Wednesday: 'Среда',
    Thursday: 'Четверг',
    Friday: 'Пятница',
    Saturday: 'Суббота',
    MapsLink: 'Ссылка на карту (необязательно)',
    AddMaps: 'Добавьте ссылку google maps в ваш ресторан',
    RestaurantAddress: 'Адрес ресторана',
    AddRestaurantAddress: 'Добавьте адрес ресторона',
    AddMessengerNumber: 'Добавьте номер мессенджера',
    Messenger: 'Мессенджер (необязательно)',
    AddShortDescription: 'Добавьте краткое описание',
    ShortDescription: 'Краткое описание (необязательно)',
    AddDetailedDescription: 'Добавьте подробное описание',
    FullDescription: 'Полное описание (необязательно)',
    OpeningHours: 'Часы работы',
    SelectPhoto: 'Выбрать фото',
    Logo: 'Логотип',
    Region: 'Региональные',
    RegionSettings: 'Региональные настройки',
    Country: 'Страна',
    SelectCountry: 'Выберите страну',
    SelectCurrency: 'Выберите валюту',
    DefaultCurrency: 'Валюта по умолчанию',
    TimeFormat: 'Формат времени',
    AddRestaurantName: 'Добавьте название ресторана',
    AddCompanyName: 'Добавьте название компании',
    Supplier: 'Поставщик',
    SupplierSettings: 'Настройки поставщика',
    CompanyLegalName: 'Юридическое название компании (необязательно)',
    RestaurantName: 'Название ресторана',
    OptionalPhone: 'Телефон (необязательно)',
    OptionalWebsite: 'Сайт (необязательно)',
    AddWebsite: 'Добавьте сайт',
    AddPhone: 'Добавьте телефон',
    Belarus: 'Беларусь',
    Poland: 'Польша',
    FormatTimeWithNumber: '{num} часовой пояс',
    // Menus
    Visible: 'Видимость',
    CreateCategory: 'Создание категории',
    EditCategory: 'Изменение категории',
    CreateDish: 'Создание блюда',
    EditDish: 'Изменение блюда',
    CopyOf: 'Скопировано с',
    tags: 'тэга',
    allergens: 'алергена',
    ingredients: 'ингридиента',
    notSaved: 'не сохранено',
    Tags: 'Тэги',
    Price: 'Стоимость',
    Allergens: 'Алергены',
    Ingredients: 'Ингридиенты',
    InternalId: 'Внутрений ID',
    Category: 'Категория',
    items: 'позиций',
    categories: 'категорий',
    Unpublished: 'Неопубликованно',
    EnergyVisible: 'Отображение энергии',
    PriceVisible: 'Отображение цены',
    InternalComment: 'Внутрений комментарий',
    Title: 'Заголовок',
    Photo: 'Фото',
    EnabledToOrder: 'Включить в заказ',
    Published: 'Опубликовано',
    Categories: 'Категории',
    Dishes: 'Блюда',
    AddNew: 'Добавить новое',
    Menus: 'Меню',
    AddMenu: 'Добавить меню',
    // Orders
    Orders: 'Заказы',
    // Validation
    PasswordConfirmed: 'Подтверждение пароля не совпадает',
    FieldRequired: 'Обязательное поле',
    MailRequired: 'Email обязателен',
    Mail: 'Адрес эл. почты должен быть действительным.',
    MinPassword: 'Пароль должен содержать не менее {number} букв.',
    // Validation Backend
    LoginFailed: 'Войти не удалось! Проверьте учетные данные для аутентификации',
    UserWithThisLoginAlreadyExists: 'Пользователь с этой почтой уже существует',
  },
}
