import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('page-stats', {
  tagName: 'div.stats',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
      const name = currentUser.get('name');
      const trust_level = currentUser.get('trust_level');
      
    var likes;
    var topic_count;
    var time_read;
    var bookmark_count;  
    var days_visited;
  
    $.ajax({
    url: "/users/"+ username +"/summary.json" ,
    dataType: 'json',
    async: false,
    success: function(data) {
    likes = data.user_summary.likes_received;	
    topic_count = data.user_summary.topic_count;	
    time_read  = data.user_summary.time_read;
    bookmark_count  = data.user_summary.bookmark_count;
    days_visited = data.user_summary.days_visited;

   }
  }); 

  var  rez;
  var  shcala;
  var  location;
  var  bio_excerpt;
  var  signature_url;
  var  date_of_birth;  
  
  var my_loc; 
  var my_bio;
  var my_sig;
  var my_bir;
   
  $.ajax({
  url: "/u/"+ username +".json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
  
  location = data.user.location;
  bio_excerpt = data.user.bio_excerpt;
  signature_url = data.user.custom_fields.signature_url;
  date_of_birth = data.user.date_of_birth;
   
   if (location) {  my_loc = '25';} else { my_loc = '0';}
   if (bio_excerpt) { my_bio = '25';} else { my_bio = '0';}
   if (signature_url) { my_sig = '25';} else { my_sig = '0';}
   if (date_of_birth) { my_bir = '25';} else { my_bir = '0';}
   
   rez = +my_loc + +my_bio  + +my_sig  + +my_bir;
    if (rez === 100) { shcala = '';    } else { 

    shcala = ' Заполненность профиля: <span style="color: #f56400;">'+ rez +'% </span><br> <div class="progress-bar"><span class="progress-bar-fill" style="width:'+ rez +'%"></span></div> <small><a target="_blank" href="https://toxu.ru/u/'+ username +'/preferences/profile">Заполните профиль</a> и получите награду!<br>О себе, местоположение, день рождения и личные интересы.</small><br><br>   '; 
    
    }
 
 }
 });

var gramota;	    
var ids;
var badges;
	    
$.ajax({
  url: "/user-badges/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
  badges = data.user_badges;
   
  for (var t = 0; t < badges.length; t++) {
  ids = badges[t].badge_id;
  if ( ids == 104) { gramota = '';  } else { 

 gramota = '<br>Воспользуйтесь личными сообщениями и <b>получите грамоту</b>, отправив <i>Боту</i> письмо.<br><br><center><img src="https://toxu.ru/uploads/default/original/2X/5/51cdae2910fe5d42d632123ab373a5c20e876eee.jpg" alt="Грамота">' + 
'<br><i>Пример: грамоты выданной аккаунту Toxu</i><br><br><a target="_blank" href="http://toxu.ru/new-message?username=ToxBot&amp;title=Привет%20Бот!&amp;body=@ToxBot%20старт%20новый%20пользователь%20" class="gramota">+ Получить грамоту</a></center><br><br>';	  
   
  }
  }

  }
  });	    
	    
	    
	    
if (trust_level === 0) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 class="t1">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #45A163;"><b>Посетитель!</b></span><br>

<p><strong>Миссия Toxu</strong>  — делиться знаниями. Мы очень тщательно относимся к качеству вопросов и ответов. И стремимся к достижению этой цели путем создания лучшего сайта вопросов и ответов в сети.</p>

<span class="excerpt">Администрация приветствует полные и развернутые ответы. Обратите внимание, что необходимо подробно обосновать свою точку зрения.  Прочтите подробно один из главных вопросов: 
<a target="_blank" href="https://toxu.ru/t/pochemu-moj-otvet-udalen-skryt/159">почему мой вопрос/ответ удален/скрыт?</a>
<br>
<i>"Бросание" кратких реплик - недопустимо!</i>
</span>
  <br><br> ${shcala}

 Вы можете:
	  
<br><ul><il>- Настроить дизайн под себя. У нас несколько вариантов дизайна.</il><br>
<il>- Выбрать собственную центральную страницу.</il><br>

<br>Хотите такую?<br>
<img src="https://toxu.ru/uploads/default/optimized/2X/2/2c1a9d268d50a3c02e9770b57e49a6ee0094d5bd_1_690x243.gif" alt="Category"><br>


<il>Для этого настройте <a target="_blank" href="https://toxu.ru/u/${username}/preferences/interface">Главную страницу по умолчанию.</a></il></ul>

<br> <br>
Вы можете публиковать (и видеть) дополнительные вопросы и ответы, при условии вступления в соответствующие <a target="_blank" href="https://toxu.ru/groups">Группы</a>. 
 Вступайте в них!


	 <br>  <br> 

<h3 class="t3">Ссылка на мой профиль</h3>
<span class="excerpt"><small>https://toxu.ru/u/${username}/summary</small></span>
<a target="_blank" href="https://toxu.ru/u/${username}/summary"><small><i>- посмотреть</i></small></a>
<br>или<br>
<span class="excerpt"><small>https://toxu.ru/qa/${username}</small></span>
<a target="_blank" href="https://toxu.ru/qa/${username}"><small><i>- посмотреть</i></small></a><br>
<i>В зависимости от сайта, ссылки будет выглядеть по разному. Второй вариант, это карточка профиля (урезанная версия).</i>
<br><br>Или html (для html страниц)<br>
<span class="excerpt"><small>&lt;a href="https://toxu.ru/u/${username}/summary" target="_blank"&gt;${name} (@${username}) — на Toxu.ru&lt;/a&gt;</small></span>
<br><br>
<i>Это будет выглядеть так:</i>
<br>
<a title="${name} (@${username}) — на Toxu.ru" href="https://toxu.ru/u/${username}/summary">${name} (@${username}) — на Toxu.ru</a>
<br><br>

</div>`}));
 }

     
if (trust_level === 1) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 class="t1">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #335599;"><b>Пользователь!</b></span><br><br>
${shcala}
Теперь Вы можете задавать вопросы и отвечать во всех разделах, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!
Ознакомьтесь более подробно с главным нашим документом: <a target="_blank" href="https://toxu.ru/t/poleznye-i-bespoleznye-otvety/202">Политикой полезности.</a> 
Это поможет вам приблизится к следующему уровню доверия и откроет новые возможности на сайте.
<br><br>
Вам доступны <a target="_blank" href="https://toxu.ru/u/${username}/messages">личные сообщения</a>. 


${gramota}


<i>Еще Вы можете:</i> <a target="_blank" href="https://toxu.ru/u/${username}/preferences/interface">настроить дизайн</a> 
и выбрать центральную страницу сайта для себя. И <a target="_blank" href="https://toxu.ru/t/sajt-toxu-ru-v-seti/2031">присоединиться</a> к любой группе в социальных сетях, 
где представлен наш сайт.<br>   
<br>
   
Во всплывающем окне: <b>пожаловаться</b> (под вопросом/ответом), появилась возможность обращаться к пользователю напрямую, минуя администрацию.  
Для уточнения вопроса/ответа или продолжение личной беседы в почтовом разделе.<br>
<img class="img" src="https://toxu.ru/uploads/default/optimized/2X/b/be1d524e3ebb32339bb14781c34a5c6eb1679bef_1_690x224.gif" alt="Личные-сообщения" width="590" height="200">
<br> <br> 

<h3 class="t3">Ссылка на мой профиль</h3>
<span class="excerpt"><small>https://toxu.ru/u/${username}/summary</small></span>
<a target="_blank" href="https://toxu.ru/u/${username}/summary"><small><i>- посмотреть</i></small></a>
<br>или<br>
<span class="excerpt"><small>https://toxu.ru/qa/${username}</small></span>
<a target="_blank" href="https://toxu.ru/qa/${username}"><small><i>- посмотреть</i></small></a><br>
<i>В зависимости от сайта, ссылки будет выглядеть по разному. Второй вариант, это карточка профиля (урезанная версия).</i>
<br><br>Или html (для html страниц)<br>
<span class="excerpt"><small>&lt;a href="https://toxu.ru/u/${username}/summary" target="_blank"&gt;${name} (@${username}) — на Toxu.ru&lt;/a&gt;</small></span>
<br><br>
<i>Это будет выглядеть так:</i>
<br>
<a title="${name} (@${username}) — на Toxu.ru" href="https://toxu.ru/u/${username}/summary">${name} (@${username}) — на Toxu.ru</a>
<br><br>

</div>`}));
 }
 
 
if (trust_level === 2) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 class="t1">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #4dc1c0;"><b>Участник!</b></span><br><br>
${shcala}
Теперь Вы можете писать во все разделы, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!
Вам стали доступны групповые и <a target="_blank" href="https://toxu.ru/u/${username}/messages">личные сообщения</a>, 
<a target="_blank" href="https://toxu.ru/u/${username}/invited/pending">инвайт система</a>, приглашение пользователей в вопросы и некоторые другие возможности.
<br><br>
Во всплывающем окне: <b>пожаловаться</b> (под вопросом/ответом), появилась возможность обращаться к пользователю напрямую, минуя администрацию.  
Для уточнения вопроса/ответа или продолжения личной беседы в почтовом разделе.<br>
<img class="img" src="https://toxu.ru/uploads/default/optimized/2X/b/be1d524e3ebb32339bb14781c34a5c6eb1679bef_1_690x224.gif" alt="Личные-сообщения" width="590" height="200">
<br>
В вопросах и ответах появилась кнопка: <b>Пригласить</b><br>
<img class="img" src="https://toxu.ru/uploads/default/original/2X/e/ebaabc2e2a3092fd609c886b3b9beb221da11cb5.gif" alt="Пригласить" width="590" height="100">
<br>До уровня: <b>Постоялец (3)</b> 
<div><div class="progress-bar"><span class="progress-bar-fill" style="width: ${days_visited}%"></span></div>
<br> <br> 

${gramota}


<h3 class="t3">Ссылка на мой профиль</h3>
<span class="excerpt"><small>https://toxu.ru/u/${username}/summary</small></span>
<a target="_blank" href="https://toxu.ru/u/${username}/summary"><small><i>- посмотреть</i></small></a>
<br>или<br>
<span class="excerpt"><small>https://toxu.ru/qa/${username}</small></span>
<a target="_blank" href="https://toxu.ru/qa/${username}"><small><i>- посмотреть</i></small></a><br>
<i>В зависимости от сайта, ссылки будет выглядеть по разному. Второй вариант, это карточка профиля (урезанная версия).</i>
<br><br>Или html (для html страниц)<br>
<span class="excerpt"><small>&lt;a href="https://toxu.ru/u/${username}/summary" target="_blank"&gt;${name} (@${username}) — на Toxu.ru&lt;/a&gt;</small></span>
<br><br>
<i>Это будет выглядеть так:</i>
<br>
<a title="${name} (@${username}) — на Toxu.ru" href="https://toxu.ru/u/${username}/summary">${name} (@${username}) — на Toxu.ru</a>
<br><br>


</div>`}));
 }


if (trust_level === 3) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 class="t1">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #f38844;"><b>Постоялец!</b></span><br><br>
${shcala}
Теперь Вы можете писать во все разделы, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!
Вам  стала доступна возможность <b>редактировать</b> вопросы, вносить и добавлять различные теги, менять категорию.<br>

<img class="img" src="/uploads/default/original/2X/9/9f1380a89edd873b73fe8d7f4032151e27e93eb1.gif" alt="Редактирование-вопроса" width="650" height="100"><br>
Создавать вопросы/темы для коллективной работы в режиме Wiki.<br>
<img class="img" src="/uploads/default/original/2X/c/c9e035ffdf1a64efb60d38aa7a372086c28295e7.gif" alt="Add-Wiki" width="383" height="146"><br>
Писать в раздел <a href="https://toxu.ru/c/toxu/blog" target="_blank">блог</a><br><b>Обязательно ознакомьтесь</b> со следующими материалами: 
<br> - <a target="_blank" href="https://toxu.ru/t/vojna-pravok-na-toxu/1281">война правок</a> на сайте; 
<br> - <a target="_blank" href="https://toxu.ru/t/kakovy-rekomendaczii-i-politika-dlya-redaktirovaniya-voprosa-na-toxu-ru/934">каковы рекомендации и политика для 
 редактирования вопроса</a>.<br> <br> 


${gramota}

<h3 class="t3">Ссылка на мой профиль</h3>
<span class="excerpt"><small>https://toxu.ru/u/${username}/summary</small></span>
<a target="_blank" href="https://toxu.ru/u/${username}/summary"><small><i>- посмотреть</i></small></a>
<br>или<br>
<span class="excerpt"><small>https://toxu.ru/qa/${username}</small></span>
<a target="_blank" href="https://toxu.ru/qa/${username}"><small><i>- посмотреть</i></small></a><br>
<i>В зависимости от сайта, ссылки будет выглядеть по разному. Второй вариант, это карточка профиля (урезанная версия).</i>
<br><br>Или html (для html страниц)<br>
<span class="excerpt"><small>&lt;a href="https://toxu.ru/u/${username}/summary" target="_blank"&gt;${name} (@${username}) — на Toxu.ru&lt;/a&gt;</small></span>
<br><br>
<i>Это будет выглядеть так:</i>
<br>
<a title="${name} (@${username}) — на Toxu.ru" href="https://toxu.ru/u/${username}/summary">${name} (@${username}) — на Toxu.ru</a>
<br><br>


</div>`}));
 }



if (trust_level === 4) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 class="t1">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #f56400;"><b>Лидер!</b></span><br><br>
${shcala}
Вам стал доступен раздел: <a target="_blank" href="https://toxu.ru/c/moder">Модераторский</a>. Ознакомьтесь с материалом в нем.
Теперь вам доступны практически все возможности системы и вы можете принимать активное участие в развитии сайта.<br><br>
<b>Смелее предлагайте</b> свои идеи, и мы сделаем ресурс лучше!<br>
<img class="img" src="https://toxu.ru/uploads/default/original/2X/6/6d31dd3cefe0a112c68dfbf60c6a66bd827df2f2.jpg" alt="Toxu" width="455" height="324"><br>

<b>Вносите предложения:</b> по переводам, дизайну, юзабилити и т.д. <br> <br> 
А еще, <a target="_blank"  href="https://toxu.ru/chess"><b>играйте в шахматы!</b></a><br> <br>


<h3 class="t3">Ссылка на мой профиль</h3>
<span class="excerpt"><small>https://toxu.ru/u/${username}/summary</small></span>
<a target="_blank" href="https://toxu.ru/u/${username}/summary"><small><i>- посмотреть</i></small></a>
<br>или<br>
<span class="excerpt"><small>https://toxu.ru/qa/${username}</small></span>
<a target="_blank" href="https://toxu.ru/qa/${username}"><small><i>- посмотреть</i></small></a><br>
<i>В зависимости от сайта, ссылки будет выглядеть по разному. Второй вариант, это карточка профиля (урезанная версия).</i>
<br><br>Или html (для html страниц)<br>
<span class="excerpt"><small>&lt;a href="https://toxu.ru/u/${username}/summary" target="_blank"&gt;${name} (@${username}) — на Toxu.ru&lt;/a&gt;</small></span>
<br><br>
<i>Это будет выглядеть так:</i>
<br>
<a title="${name} (@${username}) — на Toxu.ru" href="https://toxu.ru/u/${username}/summary">${name} (@${username}) — на Toxu.ru</a>
<br><br>

</div>`}));
 }


   
} else { 

    contents.push(
    new RawHtml({ html: `<div class="id"><br><br><center>Содержание страницы доступно только после авторизации</center><br><br></div>`}));

        }

return contents;

}
});
