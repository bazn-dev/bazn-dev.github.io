(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(e,o,n){"use strict";e.exports=function(e,o){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||o?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},181:function(e,o){e.exports=function(e){if(!e.webpackPolyfill){var o=Object.create(e);o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),Object.defineProperty(o,"exports",{enumerable:!0}),o.webpackPolyfill=1}return o}},195:function(e,o,n){var content=n(234);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("4f1f4818",content,!0,{sourceMap:!1})},233:function(e,o,n){"use strict";var r=n(195);n.n(r).a},234:function(e,o,n){o=e.exports=n(17)(!1);var r=n(176)(n(235));o.push([e.i,".service-food-group-ordering-section-page {\n  font-family: 'Montserrat', sans-serif !important;\n}\n.service-food-group-ordering-section-page__description {\n    margin-top: 100vh;\n    width: 100%;\n    min-height: 100vh;\n}\n.service-food-group-ordering-section-page__title {\n    font-size: 5rem;\n    line-height: 75px;\n    color: #212529;\n}\n.service-food-group-ordering-section-page__column-title {\n    color: #adadad;\n}\n.service-food-group-ordering-section-page__text {\n    font-size: 1.3rem;\n    color: #797979;\n    font-weight: 200;\n}\n.service-food-group-ordering-section-page__technologies {\n    width: 100%;\n    margin-bottom: 60px;\n}\n.service-food-group-ordering-section-page__technology {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.service-food-group-ordering-section-page__technology-icon-wrapper svg {\n    width: 50px;\n    height: 50px;\n}\n.service-food-group-ordering-section-page__background {\n    width: 100%;\n    height: 100vh;\n    background-image: url("+r+");\n    background-size: cover;\n    background-position: center;\n}\n@media (max-width: 960px) {\n.service-food-group-ordering-section-page__title {\n    margin-top: 4vh;\n}\n}\n@media (max-width: 600px) {\n.service-food-group-ordering-section-page__title {\n    font-size: 3rem;\n    line-height: 50px;\n}\n.service-food-group-ordering-section-page__text {\n    font-size: 0.9rem !important;\n}\n.service-food-group-ordering-section-page__technology-icon {\n    max-height: 30px;\n    max-width: 30px;\n}\n.service-food-group-ordering-section-page__technology-name {\n    font-size: 12px;\n}\n}\n@media (max-width: 430px) {\n.service-food-group-ordering-section-page__technology-icon {\n    max-height: 25px;\n    max-width: 25px;\n}\n.service-food-group-ordering-section-page__technology-name {\n    font-size: 8px;\n}\n}\n",""])},235:function(e,o,n){e.exports=n.p+"img/93a8f92.jpg"},311:function(e,o,n){"use strict";n.r(o);var r=n(167),t={components:{ServiceFoodGroupOrdering:n(218).a},data:function(){return{name:"Web service for food group ordering",mainDescription:"Design and development of web service for food group ordering. Web service was designed for company employees as a service for the creation of common food order. The authorization through Facebook and Vkontakte was implemented. There was the ability to view menus and to order the food from such food delivery services as eda.by, Tempo Pizza and others. The chat for communication within the group was realized.",technologies:[{name:"HTML5",icon:r.a.html5},{name:"CSS",icon:r.a.css3},{name:"JAVASCRIPT",icon:r.a.javascript},{name:"NODE.JS",icon:r.a.nodejs},{name:"MONGODB",icon:r.a.mongodb}]}}},c=(n(233),n(5)),d={components:{ServiceFoodGroupOrderingPage:Object(c.a)(t,function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{},[n("ServiceFoodGroupOrdering",{attrs:{showSection:!0}}),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__description pt-5 pb-5"},[n("v-container",[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{staticClass:"hidden-xs-only",attrs:{xs8:""}},[n("div",{staticClass:"service-food-group-ordering-section-page__title font-weight-bold mt-5 mb-5"},[e._v(e._s(e.name))]),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__text"},[e._v(e._s(e.mainDescription))]),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__column-title mt-5 mb-3"},[e._v("Technologies")]),e._v(" "),n("v-layout",{staticClass:"service-food-group-ordering-section-page__technologies pb-4",attrs:{row:"",wrap:"","align-center":""}},e._l(e.technologies,function(o,r){return n("div",{key:r,staticClass:"service-food-group-ordering-section-page__technology mr-5 mb-3"},[n("div",{staticClass:"service-food-group-ordering-section-page__technology-icon-wrapper mb",domProps:{innerHTML:e._s(o.icon)}}),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__technology-name"},[e._v(e._s(o.name))])])}),0)],1),e._v(" "),n("v-flex",{staticClass:"hidden-sm-and-up",attrs:{xs12:""}},[n("div",{staticClass:"service-food-group-ordering-section-page__title font-weight-bold mt-5 mb-5"},[e._v(e._s(e.name))]),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__text"},[e._v(e._s(e.mainDescription))]),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__column-title mt-5 mb-3"},[e._v("Technologies")]),e._v(" "),n("v-layout",{staticClass:"service-food-group-ordering-section-page__technologies pb-4",attrs:{row:"",wrap:"","align-center":""}},e._l(e.technologies,function(o,r){return n("div",{key:r,staticClass:"service-food-group-ordering-section-page__technology mr-3 mb-3"},[n("div",{staticClass:"service-food-group-ordering-section-page__technology-icon-wrapper mb",domProps:{innerHTML:e._s(o.icon)}}),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__technology-name"},[e._v(e._s(o.name))])])}),0)],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"service-food-group-ordering-section-page__background"})],1)},[],!1,null,null,null).exports}},l=Object(c.a)(d,function(){var e=this.$createElement;return(this._self._c||e)("ServiceFoodGroupOrderingPage")},[],!1,null,null,null);o.default=l.exports}}]);