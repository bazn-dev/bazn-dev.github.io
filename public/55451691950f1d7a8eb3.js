(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{196:function(t,n,o){var content=o(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("402a1893",content,!0,{sourceMap:!1})},284:function(t,n,o){"use strict";var e=o(196);o.n(e).a},285:function(t,n,o){(t.exports=o(27)(!1)).push([t.i,".start-section {\n  font-family: 'Montserrat', sans-serif !important;\n  background-color: #fcfcfc;\n  background-size: cover;\n  background-position: center;\n}\n.start-section__cases {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 50vw;\n    height: 100vh;\n    background-color: #00CCF7;\n}\n.start-section__container {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    z-index: 100;\n}\n.start-section__pre-start-text {\n    color: #8e8e8e !important;\n    font-size: 1rem;\n    font-weight: 700 !important;\n}\n.start-section__start-text {\n    color: #191919;\n    font-family: 'Montserrat', sans-serif !important;\n    font-size: 4.5rem;\n    font-weight: 900 !important;\n    line-height: 75px;\n}\n.start-section__colored-dot {\n    color: #191919;\n}\n.start-section__scroll-icon-wrapper {\n    position: absolute;\n    bottom: 30px;\n    left: calc(50vw - 15px);\n}\n.start-section__scroll-icon {\n    display: -ms-flexbox;\n    display: flex;\n}\n.start-section__scroll-icon span {\n      font-size: 1.4rem;\n      font-weight: 700;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n      height: 35px;\n}\n.start-section__scroll-icon span:nth-child(2) {\n        font-size: 0.9rem;\n        margin-left: 40px;\n}\n.start-section__scroll-icon svg {\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      left: 0;\n      top: 0;\n}\n.start-section__scroll-icon svg:first-child {\n        animation: mousemove 3s infinite;\n}\n.start-section__btn-contact {\n    border: 2px solid #00CCF7;\n    background-color: #00CCF7 !important;\n    color: #ffffff !important;\n    box-shadow: none !important;\n    margin-left: 0 !important;\n    padding: 0 16px !important;\n}\n.start-section__btn-contact:hover {\n      background-color: transparent !important;\n      color: #00CCF7 !important;\n}\n.start-section__btn-contact:hover:before {\n        background-color: transparent !important;\n}\n@media (max-width: 960px) {\n.start-section .start-section__btn-contact {\n      font-size: 12px;\n}\n}\n@media (max-width: 600px) {\n.start-section {\n      background-image: none;\n}\n.start-section__start-text {\n        font-size: 2.5rem;\n        line-height: 45px;\n}\n.start-section__btn-contact {\n        border: 2px solid #00CCF7;\n        background-color: #00CCF7 !important;\n        color: #191919 !important;\n}\n.start-section__btn-contact:before {\n          background-color: #00CCF7 !important;\n}\n.start-section__btn-contact:hover {\n          background-color: transparent !important;\n          color: #00CCF7 !important;\n}\n.start-section__btn-contact:hover:before {\n            background-color: transparent !important;\n}\n}\n",""])},312:function(t,n,o){"use strict";o.r(n);var e=o(5),r=o(69),c=o(9),l=o(70),_={mixins:[r.a],components:{FloatingContact:function(){return o.e(1).then(o.bind(null,302))},FloatingFooter:function(){return o.e(14).then(o.bind(null,315))}},data:function(){return{scrollIcon:l.a.scrollIconStart("#191919"),floatingContactColor:"#545454",floatingContactLetterColor:"#191919",title:{en:["Web and Mobile",'Application Development<span class="start-section__colored-dot">.</span>'],ru:["Веб и Мобильная",'разработка приложений<span class="start-section__colored-dot">.</span>']},subtitle:{en:"LET’S WORK TOGETHER",ru:"ДАВАЙТЕ НАЧНЕМ РАБОТАТЬ ВМЕСТЕ"},contactUsBtn:{en:"Contact Us",ru:"Напишите нам"}}},computed:Object(e.a)({},Object(c.b)(["isLoading","sections"])),methods:{setActiveSection:function(t){this.$store.dispatch("setSectionActive",t)}}},d=(o(284),o(15)),component=Object(d.a)(_,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"start-section"},[o("v-container",{staticClass:"start-section__container",attrs:{"align-center":""}},[o("v-layout",{staticStyle:{"margin-left":"5%","margin-right":"5%"},attrs:{row:"",wrap:""}},[o("v-flex",{staticStyle:{position:"relative"},attrs:{xs12:""}},[o("div",{staticClass:"start-section__section-title-box"},[o("div",{staticClass:"start-section__pre-start-text font-weight-bold",domProps:{innerHTML:t._s(t.getLangText(t.subtitle))}}),t._v(" "),t._l(t.getLangText(t.title),function(line,n){return o("div",{key:n,staticClass:"start-section__start-text",domProps:{innerHTML:t._s(line)}})})],2),t._v(" "),o("v-btn",{staticClass:"start-section__btn-contact mt-5",attrs:{round:"",large:"",dark:""},on:{click:function(n){return t.setActiveSection(t.sections.length-1)}}},[t._v(t._s(t.getLangText(t.contactUsBtn)))])],1)],1),t._v(" "),o("FloatingFooter")],1),t._v(" "),o("FloatingContact",{attrs:{floatingContactColor:t.floatingContactColor,floatingContactLetterColor:t.floatingContactLetterColor}}),t._v(" "),o("div",{staticClass:"start-section__scroll-icon-wrapper hidden-sm-and-down"},[o("div",{staticClass:"start-section__scroll-icon",domProps:{innerHTML:t._s(t.scrollIcon)}})])],1)},[],!1,null,null,null);n.default=component.exports}}]);