(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{166:function(t,n,e){"use strict";t.exports=function(t,n){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||n?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},168:function(t,n,e){var content=e(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("dbe300fa",content,!0,{sourceMap:!1})},172:function(t,n){t.exports=function(t){if(!t.webpackPolyfill){var n=Object.create(t);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},178:function(t,n,e){"use strict";var o=e(168);e.n(o).a},179:function(t,n,e){(t.exports=e(26)(!1)).push([t.i,".module-educational-platform-section {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700 !important;\n  background-image: linear-gradient(90deg, #00b141, #8dd010);\n}\n.module-educational-platform-section__container {\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n}\n.module-educational-platform-section__title-box {\n    font-family: 'Montserrat', sans-serif !important;\n    font-weight: 700;\n}\n.module-educational-platform-section__start-text {\n    color: #ffffff;\n    font-size: 5.5rem;\n    line-height: 75px;\n    margin-bottom: 12vh;\n    overflow: hidden;\n}\n.module-educational-platform-section__link a {\n    color: #ffffff;\n    text-decoration: none;\n}\n.module-educational-platform-section__scroll-icon-wrapper {\n    position: relative;\n}\n.module-educational-platform-section__scroll-icon {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 80px;\n    color: #ffffff;\n}\n.module-educational-platform-section__scroll-icon span {\n      font-size: 1.4rem;\n      font-weight: 700;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n      height: 35px;\n}\n.module-educational-platform-section__scroll-icon span:nth-child(2) {\n        font-size: 0.9rem;\n        margin-left: 40px;\n}\n.module-educational-platform-section__scroll-icon svg {\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      left: 0;\n      top: 0;\n}\n.module-educational-platform-section__scroll-icon svg:first-child {\n        animation: mousemove 3s infinite;\n}\n.module-educational-platform-section__scroll-icon path,\n    .module-educational-platform-section__scroll-icon g {\n      color: #ffffff;\n}\n.module-educational-platform-section__image-wrapper {\n    position: absolute;\n    right: 150px;\n    top: 25vh;\n    z-index: 3;\n}\n.module-educational-platform-section__image {\n    width: 500px;\n    height: 500px;\n}\n@media (max-width: 960px) {\n.module-educational-platform-section__start-text {\n    margin-top: 4vh;\n    margin-bottom: 20px;\n    padding-top: 80px;\n}\n.module-educational-platform-section__image-wrapper {\n    top: auto;\n    bottom: 0;\n    right: 5%;\n}\n.module-educational-platform-section__scroll-icon {\n    margin-top: 20px;\n}\n}\n@media (max-width: 600px) {\n.module-educational-platform-section__start-text {\n    font-size: 3rem;\n    line-height: 50px;\n    margin-top: 4vh;\n    padding-top: 80px;\n}\n.module-educational-platform-section__image {\n    width: 400px;\n    height: 400px;\n}\n}\n@media (max-width: 450px) {\n.module-educational-platform-section__image-wrapper {\n    right: 5%;\n}\n.module-educational-platform-section__image {\n    width: 300px;\n    height: 300px;\n}\n}\n",""])},180:function(t,n,e){var content=e(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("5fb45e16",content,!0,{sourceMap:!1})},204:function(t,n,e){"use strict";var o=e(162),l=e(165),c=e.n(l),r=e(160),d=e(164),m=e(161),f={components:{SectionTitle:d.a,FloatingContact:m.a},props:{showSection:{type:Boolean}},data:function(){return{scrollIcon:r.a.scrollIcon("#ffffff"),sectionName:"<div>Module of the</div><div>educational</div><div>platform</div>",floatingContactColor:"#ffffff",floatingContactLetterColor:"#ffffff"}},mounted:function(){this.mouseMove()},methods:{mouseMove:function(){c()(document).mousemove(function(t){c()("#educational-platform").each(function(n,element){var e=t.clientX/c()(window).width()-.5;o.b.to(element,1,{x:60*e,ease:Power1.easeOut})})})},enterText:function(element,t){o.c.fromTo(element,.9,{y:"155%"},{ease:o.a.easeOut,y:"0%",onComplete:t})},leaveText:function(element,t){o.c.to(element,.9,{y:"-155%",ease:o.a.easeOut,delay:.1,onComplete:t})}}},_=(e(178),e(13)),component=Object(_.a)(f,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"module-educational-platform-section"},[e("v-container",{staticClass:"module-educational-platform-section__container",attrs:{"align-center":t.$vuetify.breakpoint.mdAndUp}},[e("v-layout",{staticStyle:{"z-index":"100"},attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs10:t.$vuetify.breakpoint.smAndUp,xs12:t.$vuetify.breakpoint.xsOnly,"offset-xs1":t.$vuetify.breakpoint.smAndUp}},[e("div",{staticClass:"module-educational-platform-section__title-box"},[e("div",{staticClass:"module-educational-platform-section__start-text"},[e("div",{staticClass:"font-weight-bold",domProps:{innerHTML:t._s(t.sectionName)}})]),t._v(" "),"index"===t.$route.name?e("div",{staticClass:"module-educational-platform-section__link cursor-pointer",class:{"mt-5":t.$vuetify.breakpoint.smAndDown}},[e("nuxt-link",{attrs:{to:"/project-educational-platform"}},[t._v("Show me this project")])],1):e("div",{staticClass:"module-educational-platform-section__scroll-icon-wrapper"},[e("div",{staticClass:"module-educational-platform-section__scroll-icon",domProps:{innerHTML:t._s(t.scrollIcon)}})])])])],1),t._v(" "),e("div",{staticClass:"module-educational-platform-section__image-wrapper"},[e("img",{staticClass:"module-educational-platform-section__image",attrs:{src:"/img/educational-platform/education-1-education-png-1500_1224.png"}})])],1)],1)},[],!1,null,null,null);n.a=component.exports},221:function(t,n,e){"use strict";var o=e(180);e.n(o).a},222:function(t,n,e){n=t.exports=e(26)(!1);var o=e(166)(e(223));n.push([t.i,".module-educational-platform-section-page {\n  font-family: 'Montserrat', sans-serif !important;\n}\n.module-educational-platform-section-page__description {\n    margin-top: 100vh;\n    width: 100%;\n    min-height: 100vh;\n}\n.module-educational-platform-section-page__title {\n    font-size: 5.5rem;\n    line-height: 75px;\n    color: #212529;\n}\n.module-educational-platform-section-page__column-title {\n    color: #adadad;\n}\n.module-educational-platform-section-page__text {\n    font-size: 1.3rem;\n    color: #797979;\n}\n.module-educational-platform-section-page__technologies {\n    width: 100%;\n    margin-bottom: 60px;\n}\n.module-educational-platform-section-page__technology {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.module-educational-platform-section-page__technology-icon-wrapper svg {\n    width: 50px;\n    height: 50px;\n}\n.module-educational-platform-section-page__background {\n    width: 100%;\n    height: 100vh;\n    background-image: url("+o+");\n    background-size: cover;\n    background-position: center;\n}\n@media (max-width: 960px) {\n.module-educational-platform-section-page__title {\n    margin-top: 4vh;\n}\n}\n@media (max-width: 600px) {\n.module-educational-platform-section-page__title {\n    font-size: 3rem;\n    line-height: 50px;\n}\n.module-educational-platform-section-page__text {\n    font-size: 0.9rem !important;\n}\n.module-educational-platform-section-page__technology-icon {\n    max-height: 30px;\n    max-width: 30px;\n}\n.module-educational-platform-section-page__technology-name {\n    font-size: 12px;\n}\n}\n@media (max-width: 430px) {\n.module-educational-platform-section-page__technology-icon {\n    max-height: 25px;\n    max-width: 25px;\n}\n.module-educational-platform-section-page__technology-name {\n    font-size: 8px;\n}\n}\n",""])},223:function(t,n,e){t.exports=e.p+"img/a10648d.jpg"},305:function(t,n,e){"use strict";e.r(n);var o=e(160),l={components:{ModuleEducationalPlatform:e(204).a},data:function(){return{name:"Module of the educational platform",mainDescription:"The project represents a module for the training courses. A user has an opportunity to view lessons, take tests after the lessons, evaluate and comment the course. The responsibilities included the development of the following sections of the control panel: Authors, Courses, Materials, Lessons, Distribution templates.",technologies:[{name:"REACT",icon:o.a.react},{name:"REACT NATIVE",icon:o.a.reactNative}]}}},c=(e(221),e(13)),r={components:{ModuleEducationalPlatformPage:Object(c.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"module-educational-platform-section-page"},[e("ModuleEducationalPlatform",{attrs:{showSection:!0}}),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__description pt-5 pb-5"},[e("v-container",[e("v-layout",{attrs:{"justify-center":""}},[e("v-flex",{staticClass:"hidden-xs-only",attrs:{xs8:""}},[e("div",{staticClass:"module-educational-platform-section-page__title font-weight-bold mt-5 mb-5"},[t._v(t._s(t.name))]),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__text"},[t._v(t._s(t.mainDescription))]),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__column-title mt-5 mb-3"},[t._v("Technologies")]),t._v(" "),e("v-layout",{staticClass:"module-educational-platform-section-page__technologies pb-4",attrs:{row:"",wrap:"","align-center":""}},t._l(t.technologies,function(n,o){return e("div",{key:o,staticClass:"module-educational-platform-section-page__technology mr-5"},[e("div",{staticClass:"module-educational-platform-section-page__technology-icon-wrapper",domProps:{innerHTML:t._s(n.icon)}}),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__technology-name"},[t._v(t._s(n.name))])])}),0)],1),t._v(" "),e("v-flex",{staticClass:"hidden-sm-and-up",attrs:{xs12:""}},[e("div",{staticClass:"module-educational-platform-section-page__title font-weight-bold mt-5 mb-5"},[t._v(t._s(t.name))]),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__text"},[t._v(t._s(t.mainDescription))]),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__column-title mt-5 mb-3"},[t._v("Technologies")]),t._v(" "),e("v-layout",{staticClass:"module-educational-platform-section-page__technologies pb-4",attrs:{row:"",wrap:""}},t._l(t.technologies,function(n,o){return e("div",{key:o,staticClass:"module-educational-platform-section-page__technology mr-3"},[e("div",{staticClass:"module-educational-platform-section-page__technology-icon-wrapper",domProps:{innerHTML:t._s(n.icon)}}),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__technology-name"},[t._v(t._s(n.name))])])}),0)],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"module-educational-platform-section-page__background"})],1)},[],!1,null,null,null).exports}},d=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("ModuleEducationalPlatformPage")},[],!1,null,null,null);n.default=d.exports}}]);