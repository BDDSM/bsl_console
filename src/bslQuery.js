define([], function () {
    bslQuery = {
        "functions": {
            "РазностьДат": {
                "name": "РАЗНОСТЬДАТ",
                "name_en": "DATEDIFF",
                "description": "Функция предназначена для получения разницы между двумя датами. Рассчитывает календарную разницу между двумя датами, поэтому ее нельзя использовать в местах, где необходимо рассчитать количество банковских или рабочих дней между двумя датами.",
                "returns": "Тип: Число. Разность между датами в заданном типе.",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ВычитаемаяДата, ИсходнаяДата, ТипРазности): Число",
                        "Параметры": {
                            "ВычитаемаяДата": "Дата, вычитаемая дата",
                            "ИсходнаяДата": "Дата, исходная дата",
                            "ТипРазности": "Тип разности, одно из: СЕКУНДА, МИНУТа, ЧАС, ДЕНЬ, МЕСЯЦ, КВАРТАЛ, ГОД"
                        }
                    }
                }
            },
            "Год": {
                "name": "ГОД",
                "name_en": "YEAR",
                "description": "Данная функция предназначена для вычисления номера года из значения типа Дата",
                "returns": "Тип: Число. Год",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "Квартал": {
                "name": "КВАРТАЛ",
                "name_en": "QUARTER",
                "description": "Данная функция предназначена для вычисления номера квартала из значения типа Дата",
                "returns": "Тип: Число. Номер квартала находится в диапазоне 1 – 4",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "Месяц": {
                "name": "МЕСЯЦ",
                "name_en": "MONTH",
                "description": "Данная функция предназначена для вычисления номера месяца из значения типа Дата",
                "returns": "Тип: Число. Номер месяца находится в диапазоне 1 – 12",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "ДеньГода": {
                "name": "ДЕНЬГОДА",
                "name_en": "DAYOFYEAR",
                "description": "Данная функция предназначена для вычисления дня года из значения типа Дата",
                "returns": "Тип: Число. День года находится в диапазоне 1 – 366",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "День": {
                "name": "ДЕНЬ",
                "name_en": "DAY",
                "description": "Данная функция предназначена для вычисления дня месяца из значения типа Дата",
                "returns": "Тип: Число. День месяца находится в диапазоне 1 – 31",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "Неделя": {
                "name": "НЕДЕЛЯ",
                "name_en": "WEEK",
                "description": "Данная функция предназначена для вычисления номера недели года из значения типа Дата",
                "returns": "Тип: Число. Номер недели года",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "ДеньНедели": {
                "name": "ДЕНЬНЕДЕЛИ",
                "name_en": "WEEKDAY",
                "description": "Данная функция предназначена для вычисления дня недели из значения типа Дата",
                "returns": "Тип: Число. День недели находится в диапазоне 1 (понедельник) – 7 (воскресенье)",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "Час": {
                "name": "ЧАС",
                "name_en": "HOUR",
                "description": "Данная функция предназначена для вычисления часа суток из значения типа Дата",
                "returns": "Тип: Число. Час суток находится в диапазоне 0 – 23",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "Минута": {
                "name": "МИНУТА",
                "name_en": "MINUTE",
                "description": "Данная функция предназначена для вычисления минуты часа из значения типа Дата",
                "returns": "Тип: Число. Минута часа находится в диапазоне 0 – 59",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "Секунда": {
                "name": "СЕКУНДА",
                "name_en": "SECOND",
                "description": "Данная функция предназначена для вычисления секунды минуты из значения типа Дата",
                "returns": "Тип: Число. Секунда минуты находится в диапазоне 0 – 59",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Дата): Число",
                        "Параметры": {
                            "Дата": "Выражение, имеющее тип Дата"                            
                        }
                    }
                }
            },
            "НачалоПериода": {
                "name": "НАЧАЛОПЕРИОДА",
                "name_en": "BEGINOFPERIOD",
                "description": "Функция предназначена для получения даты начала периода по дате, принадлежащей этому периоду",
                "returns": "Тип: Дата. Начало периода в заданном типе",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ДатаПериода, ТипПериода): Дата",
                        "Параметры": {
                            "ДатаПериода": "Дата, выражение, указывающее дату периода",
                            "ТипПериода": "Тип периода, одно из: МИНУТА, ЧАС, ДЕНЬ, НЕДЕЛЯ, МЕСЯЦ, КВАРТАЛ, ГОД, ДЕКАДА, ПОЛУГОДИЕ"
                        }
                    }
                }
            },
            "КонецПериода": {
                "name": "КОНЕЦПЕРИОДА",
                "name_en": "ENDOFPERIOD",
                "description": "Функция предназначена для получения даты окончания периода по дате, принадлежащей этому периоду",
                "returns": "Тип: Дата. Конец периода в заданном типе",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ДатаПериода, ТипПериода): Дата",
                        "Параметры": {
                            "ДатаПериода": "Дата, выражение, указывающее дату периода",
                            "ТипПериода": "Тип периода, одно из: МИНУТА, ЧАС, ДЕНЬ, НЕДЕЛЯ, МЕСЯЦ, КВАРТАЛ, ГОД, ДЕКАДА, ПОЛУГОДИЕ"
                        }
                    }
                }
            },
            "ДобавитьКДате": {
                "name": "ДОБАВИТЬКДАТЕ",
                "name_en": "DATEADD",
                "description": "Функция предназначена для прибавления к дате некоторой величины.",
                "returns": "Тип: Дата. Новое значение даты",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ИсходнаяДата, ТипПериода, ВеличинаУвеличения): Дата",
                        "Параметры": {
                            "ИсходнаяДата": "Дата, исходная дата, к значению которой требуется добавить заданную величину, определяемую вторым и третьим параметрами",
                            "ТипПериода": "тип увеличения – одно из: СЕКУНДА, МИНУТА, ЧАС, ДЕНЬ, НЕДЕЛЯ, МЕСЯЦ, КВАРТАЛ, ГОД, ДЕКАДА, ПОЛУГОДИЕ. При выборе значения ДЕКАДА к исходной дате будет добавлено количество дней, умноженное на 10",
                            "ВеличинаУвеличения": "Число, величина, на которую требуется увеличить дату, задаваемую первым параметром (дробная часть игнорируется)"
                        }
                    }
                }
            },
            "Подстрока": {
                "name": "ПОДСТРОКА",
                "name_en": "SUBSTRING",
                "description": "Данная функция предназначена для выделения подстроки из строки",
                "returns": "Тип: Строка. Новое значение строки",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ИсходнаяСтрока, НачальныйНомер, ЧислоСимволов): Дата",
                        "Параметры": {
                            "ИсходнаяДата": "Строка, исходная строка, из которой необходимо получить подстроку",
                            "НачальныйНомер": "Число, позиция символа, с которого начинается выделяемая из строки подстрока",
                            "ЧислоСимволов": "Число, длина выделяемой подстроки"
                        }
                    }
                }
            },
            "Сумма": {
                "name": "СУММА",
                "name_en": "SUM",
                "description": "Функция вычисляет арифметическую сумму всех попавших в выборку значений поля",
                "returns": "Тип: Число, Сумма всех числовых значений поля",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Число): Число",
                        "Параметры": {
                            "Число": "Числовое значение, сумму которого необходимо вычислить"
                        }
                    }
                }
            },
            "Минимум": {
                "name": "МИНИМУМ",
                "name_en": "MIN",
                "description": "Функция вычисляет минимальное значение из всех попавших в выборку значений поля",
                "returns": "Минимальное полученное значение",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Значение): Произвольный",
                        "Параметры": {
                            "Значение": "В качестве параметра функции можно указывать выражения, содержащие значения любого типа. Не может применяться к выражениям с типом ХранилищеЗначения и Строкам неограниченной длины."
                        }
                    }
                }
            },
            "Максимум": {
                "name": "МАКСИМУМ",
                "name_en": "MAX",
                "description": "Функция вычисляет максимальное значение из всех попавших в выборку значений поля",
                "returns": "Максимальное полученное значение",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Значение): Произвольный",
                        "Параметры": {
                            "Значение": "В качестве параметра функции можно указывать выражения, содержащие значения любого типа. Не может применяться к выражениям с типом ХранилищеЗначения и Строкам неограниченной длины."
                        }
                    }
                }
            },
            "Среднее": {
                "name": "СРЕДНЕЕ",
                "name_en": "AVG",
                "description": "Функция вычисляет среднее значение всех попавших в выборку значений поля.",
                "returns": "Тип: Число, Среднее значение всех числовых значений поля",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Число): Число",
                        "Параметры": {
                            "Число": "Числовое значение, для которого необходимо вычислить среднее значение"
                        }
                    }
                }
            },
            "Количество": {
                "name": "КОЛИЧЕСТВО",
                "name_en": "COUNT",
                "description": "Функция подсчитывает количество значений поля, указанного в параметре, попавших в выборку. В отличие от других агрегатных функций функция КОЛИЧЕСТВО допускает три способа использования",
                "returns": "Тип: Число, количество полученных значений",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Значение): Число",
                        "Параметры": {
                            "Значение": "Значение произвольного типа, количество которого необходимо подсчитать"
                        }
                    },
                    "Различные": {
                        "СтрокаПараметров": "(РАЗЛИЧНЫЕ Значение): Число",
                        "Параметры": {
                            "Значение": "Значение произвольного типа, количество различных которого необходимо подсчитать"
                        }
                    },
                    "ОбщееКоличество": {
                        "СтрокаПараметров": "(*): Число",
                        "Параметры": {
                            "*": "Для подсчета общего количества строк в запросе"
                        }
                    }
                }
            },
            "АвтономерЗаписи": {
                "name": "АВТОНОМЕРЗАПИСИ",
                "name_en": "RECORDAUTONUMBER",
                "description": "Данная функция может быть использована в списке выборки при создании временной таблицы для создания поля с уникальным, последовательно возрастающим значением во временной таблице",
                "returns": "Тип: Число, Уникальный номер записи временной таблицы"
            },
            "ЕстьNull": {
                "name": "ЕСТЬNULL",
                "name_en": "ISNULL",
                "description": "Функция предназначена для замены значения NULL на другое значение",
                "returns": "Тип: Произвольный, значение первого параметра, в случае, если первый параметр не содержит значение NULL, значение второго параметра в противном случае.",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ПроверяемыйПараметр, ЗначениеЕслиNULL): Произвольный",
                        "Параметры": {
                            "ПроверяемыйПараметр": "Произвольный, значение проверяемого параметра, которое будет возвращено, если он не равен NULL",
                            "ЗначениеЕслиNULL": "Произвольный, значение, которое будет возвращено, если проверяемый параметр равен NULL"
                        }
                    }
                }
            },
            "Представление": {
                "name": "ПРЕДСТАВЛЕНИЕ",
                "name_en": "PRESENTATION",
                "description": "Данная функция предназначена для получения строкового представления значения произвольного типа. Результат работы функции не может быть использован внутри других функций, за исключением функции ПРЕДСТАВЛЕНИЕ",
                "returns": "Тип: Строка, Строковое представление переданного значения",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Значение): Строка",
                        "Параметры": {
                            "Значение": "Произвольное значение, для которого необходимо получить строковое представление"                            
                        }
                    }
                }
            },
            "ПредставлениеСсылки": {
                "name": "ПРЕДСТАВЛЕНИЕССЫЛКИ",
                "name_en": "REFPRESENTATION",
                "description": "Позволяет получать представление ссылочного значения",
                "returns": "Тип: Строка, Строковое представление переданной ссылки",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Ссылка): Строка",
                        "Параметры": {
                            "Ссылка": "Ссылка, для которой необходимо получить строковое представление"
                        }
                    }
                }
            },
            "ТипЗначения": {
                "name": "ТИПЗНАЧЕНИЯ",
                "name_en": "VALUETYPE",
                "description": "Функция определения типа значения в запросе.",
                "returns": "Тип значения",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Значение): Тип",
                        "Параметры": {
                            "Значение": "Значение, для которого необходимо определить тип"
                        }
                    }
                }
            },
            "СгриппированоПо": {
                "name": "СГРУППИРОВАНОПО",
                "name_en": "GROUPEDBY",
                "description": "Функция предназначена для различения наборов, по которым ведется группировка.",
                "returns": "Булево, ИСТИНА - для записей, которые были получены для группировки по этому полю, ЛОЖЬ - в противном случае",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Выражение): Булево",
                        "Параметры": {
                            "Выражение": "Столбец или выражение, которое содержит столбец в предложении СГРУППИРОВАТЬ ПО"
                        }
                    }
                }
            },
            "ДатаВремя": {
                "name": "ДАТАВРЕМЯ",
                "name_en": "DATETIME",
                "description": "Функция для получения даты на основании переданных значений года, месяца, дня месяца и т.д.",
                "returns": "Дата, полученное значение даты",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(Год, Месяц, ДеньМесяца, Час?, Минута?, Сукунда?): Дата",
                        "Параметры": {
                            "Год": "Число, значение года для получения даты",
                            "Месяц": "Число, значение месяца для получения даты (1-12)",
                            "ДеньМесяца": "Число, значение дня месяца для получения даты (1-31)",
                            "Час": "Число, значение часа для получения даты (0-23)",
                            "Минута": "Число, значение минуты для получения даты (0-59)",
                            "Сукунда": "Число, значение секунды для получения даты (0-59)"
                        }
                    }
                }
            },
            "Значение": {
                "name": "ЗНАЧЕНИЕ",
                "name_en": "VALUE",
                "description": "Функция для получения значений перечислений, а также предопределенных значений и пустых ссылок для справочников, планов видов характеристик, планов счетов, планов видов расчетов",
                "returns": "Значение перечисления / предопределенное значение / пустая ссылка",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ПредставлениеЗначения): Произвольный",
                        "Параметры": {
                            "ПредставлениеЗначения": "Представление значения, для которого необходмо получить значение"
                        }
                    }
                }
            },
            "Тип": {
                "name": "ТИП",
                "name_en": "TYPE",
                "description": "Функция для получения типа по указанному имени типа",
                "returns": "Тип",
                "signature": {
                    "default": {
                        "СтрокаПараметров": "(ИмяТипа): Тип",
                        "Параметры": {
                            "ИмяТипа": "Имя примитивного типа, либо имя таблицы, тип ссылки которой нужно получить"
                        }
                    }
                }
            }
        },
        "values" : {
            "Справочник": {
                "ref": "catalogs"
            },
            "Документ": {
                "ref": "documents"
            },
            "Перечисление": {
                "ref": "enums"
            }
        }
    }
});