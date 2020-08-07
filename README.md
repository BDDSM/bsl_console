# Консоль кода для 1С 8.3 (Управляемые и обычные формы)

Для работы внутри 1С требуется версия платформы не ниже **8.3.14.1565** 

![](https://github.com/salexdv/git_images/blob/master/bslconsole_view.png?raw=true)

## Как работает?
На основе [Monaco editor](https://github.com/Microsoft/monaco-editor)

## Основные возможности:
* Подсветка синтаксиса языка 1С
* Подсветка языка запросов
* Автокомплит для глобальных перечислений и функций
* Автокомплит для метаданных (Справочники, Документы и т.п.)
* Автокомплит для объектов метаданных (СправочникСсылка, ДокументОбъект и т.п.)
* Подсказка параметров конструкторов и методов
* Подсказка для типов
* Вставка готовых блоков кода (сниппеты)
* Вызов конструктора запроса и конструктора форматной строки
* Загрузка пользовательских функций и сниппетов
* Выделение строки, при выполнении которой произошла ошибка
* Сворачивание циклов, условий и текстов запросов
* Всплывающие подсказки для глобальных функций, перечислений и классов
* Подсказки через точку для реквизитов типа справочники/документы
* Подсказки через точку для объектов типа ТаблицаЗначений/Массив/РезультатЗапроса/ДвоичныеДанные и др., в том числе для объектов, полученных через методы других объектов.

## Как запускать?
1. Для запуска в браузере достаточно открыть **index.html** из каталога **src**, либо воспользоваться [ссылкой](https://salexdv.github.io/bsl_console/src/index.html)
2. Для запуска в 1С можно использовать обработку **console.epf**, выкладываемую в [релизах](https://github.com/salexdv/bsl_console/releases) или сделать свою.

## Функции для взаимодействия с 1С:Предприятием

| Функция                        | Описание                                                                                      |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| `setText`                      | Устанавливает переданный текст в текущую или определенную позицию                             |
| `getText`                      | Возвращает весь текст из окна редактора                                                       |
| `eraseText`                    | Удаляет весь текст редактора                                                                  |
| `getQuery`                     | Определяет текст запроса в текущей позиции и возвращает его вместе с областью текста          |
| `getFormatString`              | Определяет текст форматной строки в текущей позиции                                           |
| `updateMetadata`               | Обновляет через JSON структуру метаданных (Справочники/Документы/пр.)                         |
| `updateSnippets`               | Обновляет пользовательские сниппеты                                                           |
| `updateCustomFunctions`        | Обновляет пользовательские функции                                                            |
| `setTheme`                     | Установка темы редактора `bsl-white`, `bsl-white-query`, `bsl-dark`, `bsl-dark-query`         |
| `setReadOnly`                  | Устанавливает/снимает режим *Только просмотр*                                                 |
| `switchLang`                   | Переключает язык подсказок с английского на русский и обратно                                 |
| `addComment`                   | Добавляет комментарий к текущему блоку кода                                                   |
| `removeComment`                | Удаляет комментарий у текущего блока                                                          |
| `markError`                    | Индикация ошибки в указанной строке                                                           |
| `findText`                     | Возвращает номер строки, в которой находится заданный текст                                   |
| `init`                         | Инициализация редактора с передачей версии платформы                                          |
| `enableQuickSuggestions`       | Включает/выключает режим быстрых подсказок                                                    |
| `minimap`  				     | Включает/выключает отображение карты кода                                                     |

## Проверенные платформы:
* 8.3.15.1830
* 8.3.16.1148
* 8.3.17.1386
* 8.3.18.891

## Известные проблемы:
* На платформах до 8.3.16 могут не работать горячие клавиши CTRL+C, CTRL+V и CTRL+Z и т.п.
* На платформах до 8.3.18 команды копировать/вставить работают только в пределах окна редактора
* В веб-клиенте недоступно любое взаимодействие редактора и 1С. Можно попробовать только набор кода. Иногда для этого в браузере надо предварительно открыть данную [ссылку](https://salexdv.github.io/bsl_console/src/index.html)
* Работа в linux на данный момент не поддерживается.
* Из-за особенностей реализации подсказка через точку для реквизитов ссылочного типа работает только тогда, когда подсказываемый реквизит выбран через Enter

## Благодарности
Выражаю благодарность команде [1c-syntax](https://github.com/1c-syntax) и их [проекту для VSCode](https://github.com/1c-syntax/vsc-language-1c-bsl) за подробное описание внутренних конструкций языка в JSON, а также за коллекцию сниппетов.
