(window.webpackJsonp=window.webpackJsonp||[]).push([[18,1],{167:function(n,t,e){var content=e(175);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(21).default)("3770e2f2",content,!0,{sourceMap:!1})},170:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o={location:"Minsk / Belarus",email:"bazn.dev[at]gmail.com",phone:"+375 29 84 27 540"}},174:function(n,t,e){"use strict";var o=e(167);e.n(o).a},175:function(n,t,e){(n.exports=e(20)(!1)).push([n.i,".floating__contact {\n  z-index: 99;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 50px;\n}\n.floating__contact ul {\n  display: -ms-flexbox;\n  display: flex;\n}\n.floating__contact ul li,\n.floating__contact ul a {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-align: left;\n  margin-right: 40px;\n  color: #545454;\n  text-decoration: none;\n  transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n@media (max-width: 960px) {\n.floating__contact {\n    margin-bottom: 50px;\n}\n.floating__contact ul li,\n  .floating__contact ul a {\n    font-size: 0.85rem;\n    margin-right: 10px;\n}\n}\n@media (max-width: 600px) {\n.floating__contact {\n    width: 100%;\n    left: 0;\n    margin-bottom: 30px;\n    margin-left: calc(24px + 3%);\n}\n.floating__contact ul a {\n    font-size: 0.85rem;\n}\n}\n@media (max-width: 350px) {\n.floating__contact {\n    margin-bottom: 20px;\n}\n.floating__contact ul {\n    display: block;\n}\n}\n",""])},176:function(n,t,e){"use strict";e.r(t);e(71);var o=e(170),c={data:function(){return{email:o.a.email,phone:o.a.phone}},props:{floatingContactColor:{type:String},floatingContactLetterColor:{type:String}},computed:{formattedPhoneForCall:function(){return this.phone.replace(/\s+/g,"")}}},l=(e(174),e(9)),component=Object(l.a)(c,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"floating__contact"},[e("ul",[e("li",[e("span",{style:{color:n.floatingContactLetterColor}},[n._v("m:")]),n._v(" "),e("a",{style:{color:n.floatingContactColor},attrs:{href:"mailto:"+n.email}},[n._v(n._s(n.email)+".")])]),n._v(" "),e("li",[e("span",{style:{color:n.floatingContactLetterColor}},[n._v("p:")]),n._v(" "),e("a",{style:{color:n.floatingContactColor},attrs:{href:"tel:"+n.formattedPhoneForCall}},[n._v(n._s(n.phone))])])])])},[],!1,null,null,null);t.default=component.exports},177:function(n,t,e){var content=e(216);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(21).default)("a44e271a",content,!0,{sourceMap:!1})},178:function(n,t,e){var content=e(218);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(21).default)("13f0df94",content,!0,{sourceMap:!1})},215:function(n,t,e){"use strict";var o=e(177);e.n(o).a},216:function(n,t,e){(n.exports=e(20)(!1)).push([n.i,".network-game-application-section {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700 !important;\n  background: linear-gradient(to top right, #bfdbae, #8fbc72);\n}\n.network-game-application-section__container {\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n}\n.network-game-application-section__title-box {\n    font-family: 'Montserrat', sans-serif !important;\n    font-weight: 700;\n}\n.network-game-application-section__start-text {\n    color: #ffffff;\n    font-size: 5.5rem;\n    line-height: 75px;\n    margin-bottom: 12vh;\n    letter-spacing: -2px;\n}\n.network-game-application-section__link a {\n    color: #ffffff;\n    text-decoration: none;\n}\n.network-game-application-section__scroll-icon-wrapper {\n    position: relative;\n}\n.network-game-application-section__scroll-icon {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 80px;\n}\n.network-game-application-section__scroll-icon span {\n      color: #ffffff;\n      font-size: 1.4rem;\n      font-weight: 700;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n      height: 35px;\n}\n.network-game-application-section__scroll-icon span:nth-child(2) {\n        font-size: 0.9rem;\n        margin-left: 40px;\n}\n.network-game-application-section__scroll-icon svg {\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      left: 0;\n      top: 0;\n}\n.network-game-application-section__scroll-icon svg:first-child {\n        animation: mousemove 3s infinite;\n}\n.network-game-application-section__image-wrapper1, .network-game-application-section__image-wrapper2, .network-game-application-section__image-wrapper3 {\n    position: absolute;\n}\n.network-game-application-section__image-wrapper1 {\n    right: 150px;\n    top: 10%;\n    z-index: 3;\n}\n.network-game-application-section__image-wrapper2 {\n    right: 150px;\n    z-index: 3;\n    bottom: 10%;\n}\n.network-game-application-section__image-wrapper3 {\n    right: -20px;\n    z-index: 0;\n    bottom: -7px;\n}\n.network-game-application-section__image1 {\n    width: 400px;\n}\n.network-game-application-section__image2 {\n    width: 300px;\n}\n.network-game-application-section__image3 {\n    height: 100vh;\n    opacity: 0.2;\n}\n@media (max-width: 960px) {\n.network-game-application-section__start-text {\n    margin-top: 4vh;\n    margin-bottom: 20px;\n    padding-top: 80px;\n}\n.network-game-application-section__image-wrapper2 {\n    top: auto;\n    bottom: 5vh;\n    right: 5%;\n}\n.network-game-application-section__scroll-icon {\n    margin-top: 20px;\n}\n}\n@media (max-width: 600px) {\n.network-game-application-section__start-text {\n    font-size: 3rem;\n    line-height: 50px;\n    margin-top: 4vh;\n    padding-top: 80px;\n}\n.network-game-application-section__image2 {\n    width: 250px;\n}\n}\n@media (max-width: 450px) {\n.network-game-application-section__image-wrapper2 {\n    right: 5%;\n}\n.network-game-application-section__image2 {\n    width: 200px;\n}\n}\n",""])},217:function(n,t,e){"use strict";var o=e(178);e.n(o).a},218:function(n,t,e){t=n.exports=e(20)(!1);var o=e(103)(e(219));t.push([n.i,".network-game-application-section-page {\n  font-family: 'Montserrat', sans-serif !important;\n}\n.network-game-application-section-page__description {\n    margin-top: 100vh;\n    width: 100%;\n    min-height: 100vh;\n}\n.network-game-application-section-page__title {\n    font-size: 5rem;\n    line-height: 75px;\n    color: #212529;\n}\n.network-game-application-section-page__column-title {\n    color: #adadad;\n}\n.network-game-application-section-page__text {\n    font-size: 1.3rem;\n    color: #797979;\n    font-weight: 200;\n}\n.network-game-application-section-page__technologies {\n    width: 100%;\n    margin-bottom: 60px;\n}\n.network-game-application-section-page__technology {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.network-game-application-section-page__technology-icon-wrapper svg {\n    width: 50px;\n    height: 50px;\n}\n.network-game-application-section-page__background {\n    width: 100%;\n    height: 100vh;\n    background-image: url("+o+");\n    background-size: cover;\n    background-position: center;\n}\n@media (max-width: 960px) {\n.network-game-application-section-page__title {\n    margin-top: 4vh;\n}\n}\n@media (max-width: 600px) {\n.network-game-application-section-page__title {\n    font-size: 3rem;\n    line-height: 50px;\n}\n.network-game-application-section-page__text {\n    font-size: 0.9rem !important;\n}\n.network-game-application-section-page__technology-icon {\n    max-height: 30px;\n    max-width: 30px;\n}\n.network-game-application-section-page__technology-name {\n    font-size: 12px;\n}\n}\n@media (max-width: 430px) {\n.network-game-application-section-page__technology-icon {\n    max-height: 25px;\n    max-width: 25px;\n}\n.network-game-application-section-page__technology-name {\n    font-size: 8px;\n}\n}\n",""])},219:function(n,t,e){n.exports=e.p+"img/0a4367f.jpg"},316:function(n,t,e){"use strict";e.r(t);var o=e(70),c=e(168),l=e(169),r=e.n(l),m={components:{FloatingContact:e(176).default},props:{showSection:{type:Boolean}},data:function(){return{scrollIcon:o.a.scrollIcon("#ffffff"),sectionName:"<div>Network game</div><div>application</div>",floatingContactColor:"#ffffff",floatingContactLetterColor:"#ffffff"}},mounted:function(){this.mouseMove()},methods:{mouseMove:function(){r()(document).mousemove(function(n){r()("#network-game1").each(function(t,element){var e=n.clientX/r()(window).width()-.5;c.c.to(element,1,{x:60*e,ease:Power1.easeOut})}),r()("#network-game2").each(function(t,element){var e=n.clientX/r()(window).width()-.5;c.c.to(element,1,{x:-40*e,ease:Power1.easeOut})})})},enterText:function(n,t){c.d.fromTo(n,.9,{y:"155%"},{ease:c.b.easeOut,y:"0%",onComplete:t})},leaveText:function(n,t){c.d.to(n,.9,{y:"-155%",ease:c.b.easeOut,delay:.1,onComplete:t})}}},_=(e(215),e(9)),f={components:{NetworkGameApplication:Object(_.a)(m,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"network-game-application-section"},[e("v-container",{staticClass:"network-game-application-section__container",attrs:{"align-center":n.$vuetify.breakpoint.mdAndUp}},[e("v-layout",{staticStyle:{"z-index":"100"},attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs10:n.$vuetify.breakpoint.smAndUp,xs12:n.$vuetify.breakpoint.xsOnly,"offset-xs1":n.$vuetify.breakpoint.smAndUp}},[e("div",{staticClass:"network-game-application-section__title-box"},[e("div",{staticClass:"network-game-application-section__start-text"},[e("div",{staticClass:"font-weight-bold",domProps:{innerHTML:n._s(n.sectionName)}})]),n._v(" "),"index"===n.$route.name?e("div",{staticClass:"network-game-application-section__link cursor-pointer",class:{"mt-5":n.$vuetify.breakpoint.smAndDown}},[e("nuxt-link",{staticClass:"network-game-application-section__link",attrs:{to:"/network-game"}},[n._v("Show me this project")])],1):e("div",{staticClass:"network-game-application-section__scroll-icon-wrapper"},[e("div",{staticClass:"network-game-application-section__scroll-icon",domProps:{innerHTML:n._s(n.scrollIcon)}})])])])],1),n._v(" "),n.$vuetify.breakpoint.mdAndUp?e("div",{staticClass:"network-game-application-section__image-wrapper1"},[e("img",{staticClass:"network-game-application-section__image1",attrs:{src:"/img/network-game-application/392-3921922_monopoly-logo-image-monopoly-logo-jpg.png"}})]):n._e(),n._v(" "),e("div",{staticClass:"network-game-application-section__image-wrapper2",attrs:{id:"network-game1"}},[e("img",{staticClass:"network-game-application-section__image2",attrs:{src:"/img/network-game-application/kisspng-rich-uncle-pennybags-monopoly-painting-canvas-graf-5cb565c1db4be2.6011530215553919378983.png"}})]),n._v(" "),e("div",{staticClass:"network-game-application-section__image-wrapper3",attrs:{id:"network-game2"}},[e("img",{staticClass:"network-game-application-section__image3",attrs:{src:"/img/network-game-application/vector-city-clipart-1.png"}})])],1)],1)},[],!1,null,null,null).exports},data:function(){return{name:"Network game application",mainDescription:'Design, development and test automation of web application (thick client) based on the board game "Monopoly". Implemented networking support to the game. The client and server part are implemented using frontend technologies. OOP approach is used in the application. The tests coverage degree of code is more than 75%. On this project the full cycle of Continuous Integration was embedded.',technologies:[{name:"HTML5",icon:o.a.html5},{name:"CSS",icon:o.a.css3},{name:"JAVASCRIPT",icon:o.a.javascript},{name:"JQUERY",icon:o.a.jquery},{name:"NODE.JS",icon:o.a.nodejs},{name:"MONGODB",icon:o.a.mongodb}]}}},d=(e(217),{components:{NetworkGameApplicationPage:Object(_.a)(f,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"network-game-application-section-page"},[e("NetworkGameApplication",{attrs:{showSection:!0}}),n._v(" "),e("div",{staticClass:"network-game-application-section-page__description pt-5 pb-5"},[e("v-container",[e("v-layout",{attrs:{"justify-center":""}},[e("v-flex",{staticClass:"hidden-xs-only",attrs:{xs8:""}},[e("div",{staticClass:"network-game-application-section-page__title font-weight-bold mt-5 mb-5"},[n._v(n._s(n.name))]),n._v(" "),e("div",{staticClass:"network-game-application-section-page__text"},[n._v(n._s(n.mainDescription))]),n._v(" "),e("div",{staticClass:"network-game-application-section-page__column-title mt-5 mb-3"},[n._v("Technologies")]),n._v(" "),e("v-layout",{staticClass:"network-game-application-section-page__technologies pb-4",attrs:{row:"",wrap:"","align-center":""}},n._l(n.technologies,function(t,o){return e("div",{key:o,staticClass:"network-game-application-section-page__technology mr-5 mb-3"},[e("div",{staticClass:"network-game-application-section-page__technology-icon-wrapper",domProps:{innerHTML:n._s(t.icon)}}),n._v(" "),e("div",{staticClass:"network-game-application-section-page__technology-name"},[n._v(n._s(t.name))])])}),0)],1),n._v(" "),e("v-flex",{staticClass:"hidden-sm-and-up",attrs:{xs12:""}},[e("div",{staticClass:"network-game-application-section-page__title font-weight-bold mt-5 mb-5"},[n._v(n._s(n.name))]),n._v(" "),e("div",{staticClass:"network-game-application-section-page__text"},[n._v(n._s(n.mainDescription))]),n._v(" "),e("div",{staticClass:"network-game-application-section-page__column-title mt-5 mb-3"},[n._v("Technologies")]),n._v(" "),e("v-layout",{staticClass:"network-game-application-section-page__technologies pb-4",attrs:{row:"",wrap:"","align-center":""}},n._l(n.technologies,function(t,o){return e("div",{key:o,staticClass:"network-game-application-section-page__technology mr-3 mb-3"},[e("div",{staticClass:"network-game-application-section-page__technology-icon-wrapper",domProps:{innerHTML:n._s(t.icon)}}),n._v(" "),e("div",{staticClass:"network-game-application-section-page__technology-name"},[n._v(n._s(t.name))])])}),0)],1)],1)],1)],1),n._v(" "),e("div",{staticClass:"network-game-application-section-page__background"})],1)},[],!1,null,null,null).exports}}),w=Object(_.a)(d,function(){var n=this.$createElement;return(this._self._c||n)("NetworkGameApplicationPage")},[],!1,null,null,null);t.default=w.exports}}]);