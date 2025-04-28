# GoITeens Project

Це readme нашого проєкту, тут будуть основна інформація щодо нашого проєкту та шпаргалка по GitHub.

## Учасники

Тім лід - Олег (oleg21062010@gmail.com) (секції: timer, modal)  
Скрам мастер - Даша (d.remen2009@gmail.com) (секція: news)  
Розробник - Марк (isaev24102011@gmail.com) (секція: series)  
Розробник - Міша (fff650625@gmail.com) (секції: trailer, faq + footer)  
Розробник - Макар (makar2009on@gmail.com) (секції: editions, controller)  
Розробник - Назар (asagacka@gmail.com) (секція: header)

## Figma

Посилання на наш макет фігма, не забудьте зробити собі копію щоб з ним нормально працювати: https://www.figma.com/design/WPk5N8ONd0DGuKWBUjkS6i/Untitled?node-id=0-1&p=f&t=9emrWAVbzA61Ycxr-0  
Посилання на макет де сайт розподілено на 9 секцій: https://www.figma.com/design/4PhrxoD04992Fl5jZpdAah/GoITeens-Project?node-id=0-1&p=f&t=EGLb6GcA20QL3WiK-0  
І також референс готового сайту який робили інші учні Сергія: https://66f04310085bf4d338cb9c8c--fascinating-brioche-34f82c.netlify.app/

## Trello

Посилання на нашу трелло дошку, там скрам мастер буде висатвляти всім задачі щодо проєкту: https://trello.com/b/7Pc4wKjC/project-3

## Шпаргалка GitHub

Спочатку треба склонувати репозиторій у свою папку:

```
git clone https://github.com/oleh-yaroshenko/project.git
cd project
```

Потім треба створити свою гілку:

```
git checkout -b [назва гілки типу oleh або dasha]
```

Далі ви пишете потрібний код і після того як зробили якусь задачу пишемо це щоб відправити код у репозиторій:

```
git add .
git commit -m “[коментар типу зробив хедер]”
git push origin [назва гілки]
```

Потім ви заходите на гітхаб і натискаєте Compare & pull request => Create pull request і після цього повідомляєте мене і я перевірю правильність коду

Потім перед кожним разом коли робити іншу задачу пишете цей код щоб підтягнути дані з репозиторія до свого проєкту (папки):

```
git fetch origin
git merge origin/main
```

Додатково:

Щоб перевірити на якій ви зараз гілці:

```
git branch
```

Щоб перейти на іншу яка вже існує:

```
git checkout [назва гілки]
```

Щоб прибрати код який ви не запушили:

```
git restore .
```

## Правила написання коду

Обовʼязково використовуємо методологію BEM. Тобто робимо назви класів в порядку наслідування елементів через "-" і перед елементами у яких немає дітей ставимо "\_\_". Це все робимо для того, щоб не повторювалися класи і не було ніяких проблем у коді.

```
<header class="header">
    <ul class="header-ul">
        <li class="header-ul-li">
            <a href="#" class="header-ul-li__a"></a>
        </li>
        <li class="header-ul-li">
            <a href="#" class="header-ul-li__a"></a>
        </li>
        <li class="header-ul-li">
            <a href="#" class="header-ul-li__a"></a>
        </li>
        <li class="header-ul-li">
            <a href="#" class="header-ul-li__a"></a>
        </li>
    </ul>
</header>
```

Також працюємо лише у своїй частині коду, чужий ко не чіпаємо без дозволу. У файлах `index.html` `style.css` та `script.js` є коментарі які позначають куди саме писати код відповідно до кожної секції сайту. Прохання не видаляти коментарі.

Ще один момент це те, що стилізацію сайту треба робити під екран 1920px використовуючи інструменти розробника. Адаптив, слава богу, робити не треба.
