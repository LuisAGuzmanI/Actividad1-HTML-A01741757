(function(e){function a(a){for(var n,c,l=a[0],d=a[1],s=a[2],u=0,p=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);i&&i(a);while(p.length)p.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,l=1;l<t.length;l++){var d=t[l];0!==o[d]&&(n=!1)}n&&(r.splice(a--,1),e=c(c.s=t[0]))}return e}var n={},o={app:0},r=[];function c(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)c.d(t,n,function(a){return e[a]}.bind(null,n));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var s=0;s<l.length;s++)a(l[s]);var i=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},1793:function(e,a,t){"use strict";t("61b9")},"3e6c":function(e,a,t){"use strict";t("a0aa")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),o=t("b32d"),r=t.n(o),c=Object(n["e"])('<header><nav class="navbar navbar-expand-lg navbar-dark bg-dark"><div class="container-fluid"><a class="navbar-brand" href="https://vuejs.org/"><img src="'+r.a+'" alt="" width="30" height="24"></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/wallpaper">Wallpaper</a></li></ul></div></div></nav></header>',1);function l(e,a,t,o,r,l){var d=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["c"])("div",null,[c,Object(n["g"])(d)])}var d={name:"App"},s=(t("6fd7"),t("6b0d")),i=t.n(s);const u=i()(d,[["render",l]]);var p=u,b=t("6c02"),m=t("87a0"),v=t.n(m),f=t("6ac5"),h=t.n(f),j=t("db77"),g=t.n(j),O=function(e){return Object(n["s"])("data-v-7d168822"),e=e(),Object(n["q"])(),e},y=O((function(){return Object(n["d"])("h1",{style:{"padding-top":"10px"},class:"display-5 fw-bold"}," Mini Tutorial de Vue ",-1)})),q=O((function(){return Object(n["d"])("hr",null,null,-1)})),x={class:"px-4 py-5 my-5 text-center"},C={class:"col-lg-6 mx-auto"},w=O((function(){return Object(n["d"])("p",{class:"lead mb-4"},[Object(n["f"])(" Esta página es un tutorial pequeño de cómo hacer una aplicación sencilla con Vue.js"),Object(n["d"])("br"),Object(n["f"])(" Parte de esto es para yo mismo recordar cómo funciona, así que seguramente lean lo que yo mismo vaya redescubriendo :D ")],-1)})),V=O((function(){return Object(n["d"])("h3",null,"¿Qué es Vue?",-1)})),D=O((function(){return Object(n["d"])("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nhBVL41-_Cw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)})),k=Object(n["e"])('<p class="lead mb-4" data-v-7d168822> Vue.js es un framework de JavaScript creado por Evan You basado en componentes para la construcción de interfaces de usuario simples y complejas. <br data-v-7d168822> Una de las características fundamentales de Vue son los Single-File Components (archivos *.vue) los cuales encapsulan una template de HTML, estilos en CSS y la lógica del componente en JavaScript, permitiendo crear bloques de código reusables para la creación de interfaces de usuario. </p><section data-v-7d168822><h3 data-v-7d168822>¿Cómo empezar a crear una aplicación con Vue?</h3><br data-v-7d168822><p class="lead mb-4" data-v-7d168822> Empezar es muy sencillo, sólamente sigue los siguientes pasos: <ol data-v-7d168822><li data-v-7d168822>Descarga el Vue CLI, encontrarás cómo aquí: <a href="https://vuejs.org/guide/scaling-up/tooling.html#vue-cli" data-v-7d168822>Vue-CLI</a></li><li data-v-7d168822>Ejecuta el comando &quot;vue create nombre-de-tu-proyecto&quot; en la consola de comandos. <br data-v-7d168822> Esto creará un proyecto básico de Vue que podrás modificar.</li><li data-v-7d168822>Elige la versión de Vue con la que quieras trabajar (Yo usé Vue 3) <br data-v-7d168822> Deja todo en default a no ser que sepas que estás haciendo</li><li data-v-7d168822>Dirigete a la carpeta del proyecto con el comando &quot;cd nombre-de-tu-proyecto&quot;</li><li data-v-7d168822>Corre la aplicación en un servidor local con &quot;npm run serve&quot;</li><li data-v-7d168822>Abre la carpeta con tu IDE de preferencia y empieza a trabajar!</li></ol></p></section><hr data-v-7d168822>',3),E=Object(n["e"])('<hr data-v-7d168822><h1 class="display-5 fw-bold" data-v-7d168822> Counter!... Vanilla! </h1><p class="lead mb-4" data-v-7d168822> Para esta actividad hice una recreación de este compomente con Vanilla JS y HTML. Como no puedo insertarlo dentro de esta página de Vue, te dejaré el código para verlo en la carpeta &quot;CounterVanilla&quot; del repositorio de esta página, solo bajalo y correlo en el navegador como un archivo html normal. <br data-v-7d168822></p><a href="https://github.com/LuisAGuzmanI/Actividad1-HTML-A01741757/tree/main/CounterVanilla" data-v-7d168822>Puedes encontrarlo aquí</a><hr data-v-7d168822><h3 data-v-7d168822>¿Cómo funciona?</h3><p class="lead mb-4" data-v-7d168822>Ahora trataré de explicar cada uno de los elementos de este componente, para que se hagan una idea de como funciona.</p><h4 data-v-7d168822>Template</h4><p class="lead mb-4" data-v-7d168822> La template es tu lienzo, es un archivo html como los que ya conoces, Vue sirve para hacerlo dinamico de manera sencilla. Estos son algunos puntos importantes a destacar. <br data-v-7d168822></p><h5 data-v-7d168822>Variables entre 2 llaves</h5>',10),S={class:"lead mb-4"},z=Object(n["f"])(" Si viste el video, sabrás que Vue maneja de manera nativa elementos reactivos, es decir, que si cambian los datos, automaticamente se renderiza en el DOM. "),L=O((function(){return Object(n["d"])("br",null,null,-1)})),N=Object(n["f"])(" Las variables tienen información que me intereza mostrar en la pantalla, y que posiblemente cambien con el tiempo, así que para mostrarlos "),P=O((function(){return Object(n["d"])("br",null,null,-1)})),T=Object(n["f"])(" simplemente las pongo entre una tag de html y 2 llaves y ahí se renderizará la información contenida en la variable, como si yo mismo lo hubiera puesto ahí. "),A=O((function(){return Object(n["d"])("br",null,null,-1)})),I=Object(n["f"])(' Por lo tanto, si mi variable "titulo" contiene la palabra "Counter!", al momento de renderizarlo sería lo mismo poner: '),B=O((function(){return Object(n["d"])("br",null,null,-1)})),M=O((function(){return Object(n["d"])("br",null,null,-1)})),_=Object(n["f"])(" <h1> Counter! </h1>"),H=O((function(){return Object(n["d"])("br",null,null,-1)})),J=Object(n["f"])(" que: "),W=O((function(){return Object(n["d"])("br",null,null,-1)})),Y=O((function(){return Object(n["d"])("br",null,null,-1)})),G=Object(n["f"])(),R=O((function(){return Object(n["d"])("br",null,null,-1)})),U=O((function(){return Object(n["d"])("br",null,null,-1)})),F=Object(n["f"])(" El primero está mostrando la variable 'counter' que contiene el numero que cambia cuando pulsas los botones, y el segundo está mostrando la variable "),Q=O((function(){return Object(n["d"])("br",null,null,-1)})),K=Object(n["f"])(" 'incDec' que contiene el numero que aparece dentro de los botones. "),X=Object(n["e"])('<h5 data-v-7d168822>Escuchar eventos</h5><p class="lead mb-4" data-v-7d168822> Cuando pulsas los botones, el número se actualiza, Vue hace este proceso de mandar a llamar una variable extremadamente sencillo. <br data-v-7d168822> Con la directiva &#39;@click&#39; el elemento &#39;button&#39; mandará a llamar a una función en particular cuando se clickee el elemento. <br data-v-7d168822> El botón de la derecha manda a llamar a la función &#39;increase()&#39; y el de la derecha manda a llamar a la función &#39;decrease()&#39;. <br data-v-7d168822> Luego discutiremos que hace cada una de estas funciones. </p><h5 data-v-7d168822>Inputs del usuario</h5><p class="lead mb-4" data-v-7d168822> La caja de input hace algo interesante, si se dan cuenta, el valor en los botones se actualiza el valor al momento en el que escriben un numero, sin necesidad de darle enter. <br data-v-7d168822> Esto se llama &#39;data-binding&#39;, que básicamente significa que cuando cambia nuestro input, automaticamente cambia nuestro componente. <br data-v-7d168822> Para vincular una variable con un input, escribimos &#39;v-model:&quot;incDec&quot;&#39;, y ahora la variable está vinculada con los cambios que sufra la caja de input,<br data-v-7d168822> y se verán reflejados de manera automatica. </p><img src="'+v.a+'" alt="Template" data-v-7d168822><h4 data-v-7d168822>Script</h4><p class="lead mb-4" data-v-7d168822>El script es donde incorporamos la lógica de nuestro componente, aquí es donde damos el paso más allá de una página estatica.</p><h5 data-v-7d168822>Props</h5><p class="lead mb-4" data-v-7d168822> Las propiedades son como los &quot;parametros&quot; de nuestro componente. Cuando inserto el componente, puedo decir, por ejemplo &#39; title=&quot;Counter!&quot; &#39;. <br data-v-7d168822> Entonces cada vez que apareza la variable &#39; title &#39; aparecerá el string &quot;Counter!&quot;. Esto es muy util si hay diferentes instacias del mismo componente. <br data-v-7d168822></p><h5 data-v-7d168822>Data</h5><p class="lead mb-4" data-v-7d168822> Estas son las variables que manejaré dentro de mi componente: &#39;counter&#39; y &#39;incDec&#39;. <br data-v-7d168822> Aquí las declaro con un valor default, &#39;10&#39; (O el valor default de la propiedad &#39;start&#39;) para &#39;counter&#39; y &#39;1&#39; para &#39;incDec&#39;. </p><h5 data-v-7d168822>Methods</h5><p class="lead mb-4" data-v-7d168822> Estas son las funciones que usaré para modificar mis variables, aquí explicaré que hacen las funciones &#39;increase()&#39; y &#39;decrease()&#39; de las que hablé antes. <br data-v-7d168822> Básicamente sumo o resto el valor en la variable &#39;incDec&#39; a la variable &#39;counter&#39; e igualo el resultado a &#39;counter&#39;. <br data-v-7d168822> El &#39;!isNaN(this.incDec)&#39; es solo para asegurarme que no trate de sumar un string, porque alteraría el funcionamiento de la página. </p><img src="'+h.a+'" alt="Template" data-v-7d168822><h4 data-v-7d168822>Style</h4><p class="lead mb-4" data-v-7d168822> No hay mucho que decir aquí, esto es para que el componente se vea lindo, aquí lo dejé simple, pero definitivamente se ve mejor que el html por defecto. <br data-v-7d168822> Estos estilos aplican a todos los subcomponentes del componente, si quieres se apliquen solo a este componente puedes poner la palabra reservada &#39;scoped&#39; <br data-v-7d168822> dentro de la tag que abre los estilos: &lt;style scoped&gt; ... &lt;/style&gt;<br data-v-7d168822></p><img src="'+g.a+'" alt="Template" data-v-7d168822><p class="lead mb-4" data-v-7d168822>Y eso es todo. Ahora puedes empezar a programar una aplicación sencilla con Vue.js</p> <br data-v-7d168822> <br data-v-7d168822><p class="lead mb-4" data-v-7d168822>Y aquí va una tabla con mis 5 numeros favoritos porque se me olvidó que la página tenía que llevar una tabla :p</p><table style="" data-v-7d168822><thead data-v-7d168822><tr data-v-7d168822><th data-v-7d168822>Posición</th><th data-v-7d168822>Numero</th></tr></thead><tbody data-v-7d168822><tr data-v-7d168822><td data-v-7d168822>1º</td><td data-v-7d168822>3</td></tr><tr data-v-7d168822><td data-v-7d168822>2º</td><td data-v-7d168822>π</td></tr><tr data-v-7d168822><td data-v-7d168822>3º</td><td data-v-7d168822>Raiz de 2</td></tr><tr data-v-7d168822><td data-v-7d168822>4º</td><td data-v-7d168822>0</td></tr><tr data-v-7d168822><td data-v-7d168822>5º</td><td data-v-7d168822>103</td></tr></tbody></table>',24),Z=Object(n["e"])('<div class="container" data-v-7d168822><footer class="py-1 my-4" data-v-7d168822><ul class="nav justify-content-center border-bottom pb-3 mb-3" data-v-7d168822><li class="nav-item" data-v-7d168822><a href="https://github.com/LuisAGuzmanI/Actividad1-HTML-A01741757" class="nav-link px-2 text-muted" data-v-7d168822>Webpage GitHub Repository</a></li></ul><p class="text-center text-muted" data-v-7d168822>© 2022 Luis Ángel Guzmán Iribe - A01741757</p></footer></div>',1);function $(e,a,t,o,r,c){var l=Object(n["v"])("counter");return Object(n["p"])(),Object(n["c"])("div",null,[Object(n["d"])("main",null,[y,q,Object(n["d"])("div",x,[Object(n["d"])("div",C,[w,V,D,k,Object(n["g"])(l),E,Object(n["d"])("p",S,[z,L,N,P,T,A,I,B,M,_,H,J,W,Object(n["f"])(" <h1> "+Object(n["x"])(r.openBrackets+" titulo "+r.closeBrackets)+" </h1> ",1),Y,G,R,Object(n["f"])(" Lo mismo sucede con "+Object(n["x"])(r.openBrackets+" counter "+r.closeBrackets)+" y "+Object(n["x"])(r.openBrackets+" incDec "+r.closeBrackets)+" ",1),U,F,Q,K]),X])])]),Z])}var ee={class:"display-5 fw-bold"},ae=Object(n["d"])("p",{class:"lead mb-4"},[Object(n["f"])(" Este es un componente, uno muy sencillo, pero servirá para que te des una idea basica de como funciona una componente de Vue. "),Object(n["d"])("br"),Object(n["f"])(" Puedes alterar el número en el centro tocando los botones para sumar y restar, y modificar la cantidad en los botones introduciendo un número en la caja de abajo. ")],-1),te={class:"d-grid gap-2 d-sm-flex justify-content-sm-center"},ne={class:"lead mb-4"},oe=Object(n["f"])(" Cambia la operación: ");function re(e,a,t,o,r,c){return Object(n["p"])(),Object(n["c"])("div",null,[Object(n["d"])("h1",ee,Object(n["x"])(t.title),1),ae,Object(n["d"])("h3",null,Object(n["x"])(r.counter),1),Object(n["d"])("div",te,[Object(n["d"])("button",{onClick:a[0]||(a[0]=function(){return c.decrease&&c.decrease.apply(c,arguments)})}," -"+Object(n["x"])(r.incDec),1),Object(n["d"])("button",{onClick:a[1]||(a[1]=function(){return c.increase&&c.increase.apply(c,arguments)})}," +"+Object(n["x"])(r.incDec),1)]),Object(n["d"])("form",{onSubmit:a[3]||(a[3]=Object(n["C"])((function(){return c.funcionVacia&&c.funcionVacia.apply(c,arguments)}),["prevent"])),style:{"margin-top":"15px"}},[Object(n["d"])("label",ne,[oe,Object(n["B"])(Object(n["d"])("input",{type:"number","onUpdate:modelValue":a[2]||(a[2]=function(e){return r.incDec=e}),placeholder:"Ingresa un Numero"},null,512),[[n["z"],r.incDec]])])],32)])}t("a9e3");var ce={name:"Counter",props:{title:{type:String,default:"Counter!"},start:{type:Number,default:10}},data:function(){return{counter:this.start,incDec:1}},methods:{increase:function(){this.counter+=isNaN(this.incDec)?0:this.incDec},decrease:function(){this.counter-=isNaN(this.incDec)?0:this.incDec},funcionVacia:function(){}}};t("ae81");const le=i()(ce,[["render",re]]);var de=le,se={name:"Inicio",beforeCreate:function(){document.body.className="inicio"},components:{Counter:de},props:{msg:String},data:function(){return{openBrackets:"{{",closeBrackets:"}}"}}};t("3e6c");const ie=i()(se,[["render",$],["__scopeId","data-v-7d168822"]]);var ue=ie,pe=function(e){return Object(n["s"])("data-v-e32c01e2"),e=e(),Object(n["q"])(),e},be=pe((function(){return Object(n["d"])("h1",{class:"display-5 fw-bold"},"El Wallpaper de mi laptop, ¿Apoco no está padre?",-1)})),me=[be];function ve(e,a,t,o,r,c){return Object(n["p"])(),Object(n["c"])("div",null,me)}var fe={name:"Wallpaper",beforeCreate:function(){document.body.className="wallpaper"}};t("1793");const he=i()(fe,[["render",ve],["__scopeId","data-v-e32c01e2"]]);var je=he,ge=[{path:"/",name:"Inicio",component:ue},{path:"/wallpaper",name:"Wallpaper",component:je}],Oe=Object(b["a"])({history:Object(b["b"])(),routes:ge}),ye=Oe;t("ab8b"),t("7b17");Object(n["b"])(p).use(ye).mount("#app")},"61b9":function(e,a,t){},"6ac5":function(e,a,t){e.exports=t.p+"img/ComponentScript.8b01ace1.png"},"6fd7":function(e,a,t){"use strict";t("ce9b")},8434:function(e,a,t){},"87a0":function(e,a,t){e.exports=t.p+"img/ComponentTemplate.518a598b.png"},a0aa:function(e,a,t){},ae81:function(e,a,t){"use strict";t("8434")},b32d:function(e,a,t){e.exports=t.p+"img/vue-js-1.69cedcf3.svg"},ce9b:function(e,a,t){},db77:function(e,a,t){e.exports=t.p+"img/ComponentStyle.e2a29dcf.png"}});
//# sourceMappingURL=app.ba857d1f.js.map