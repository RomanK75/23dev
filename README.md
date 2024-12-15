# Тестовое задание
Запустить локально - npm run start
За основу взят шаблон

![Screenshot](./src/assets/form.png)
## 1. Форма регистрации
Реализовать html-страницу с формой регистрации. Список полей формы:
* Имя
* Фамилия
* Email
* Пароль
* Подтверждение пароля
* Дата рождения

Также должна присутствовать кнопка "Отправить". Ко всем полям должны быть соответствующие заголовки. Требований по расположению формы, заголовков и полей ввода нет.

## 2. Валидация полей
Реализовать валидацию полей формы средствами Javascript. Требования к валидации полей формы:

* Поля Имя и Фамилия содержат только допустимые символы для имени и фамилии и должны иметь адекватное ограничение по длине. Адекватность длины придется обосновывать.
* Поле Электронный адрес должно содержать только валидный email-адрес.
* Значения полей Пароль и Подтверждение пароля должны совпадать.
* Минимальная длина пароля 8 символов. Пароль должен содержать минимум одну цифру, по одной заглавной и строчную буквы и один символ.
* Возраст пользователя на момент регистрации в форме должен быть не младше 18 лет.
* Валидация данных должна происходить после ввода данных пользователем.
* Кнопка "Отправить" должна быть заблокирована свойством "disabled", пока пользователь не введёт валидные значения.
* Пользователь должен иметь возможность понять ошибку(и) и исправить их с минимальным количеством попыток.

## Требования к реализации:

1. В качестве дизайна необходимо использовать один из макетов в фигме. Верстка должна максимально соответствовать макету и требованиям ТЗ (иметь все необходимые поля) и быть адаптивной.

2. Использование любых JS-фреймворков категорически неприемлемо. Разрешено использование только CSS фреймворков.

3. Использование любых примеров, найденных в интернете, которые реализуют ту или иную часть задания, категорически неприемлемо.

4. Код должен запуститься в браузерах Firefox, Chrome и Edge последних версий.

5. Типы элементов формы должны соответствовать вводимым значениям.

6. HTML-код страницы должен проходить валидацию через https://validator.w3.org/. Все предупреждения, ошибки и предложения по оптимизации должны быть устранены.

7. Каждый элемент формы должен иметь атрибут id, включая сообщения, используемые для валидации.

## Именование элементов формы:
* id="rst-name"
* id="last-name"
* id="email"
* id="password"
* id="password-conrm"
* id="birth-day"
* id="form-button"

## Дополнительные требования:
* По результатам валидации, теги form и все элементы формы (теги input/textarea/etc) дополняются классом "invalid" в случае невалидности формы/элемента формы и "valid" в случае валидности.
* Сразу после валидного заполнения формы кнопка отправки должна быть разблокирована, т.е. не требуется делать клик вне формы для разблокировки кнопки.

## Результат
Результат задания отправить ссылкой на github, с понятной инструкцией как открыть и запустить проект и ссылкой на выбранный макет (при использовании), на почту hr@23devs.com.

**Желаем удачи!**
