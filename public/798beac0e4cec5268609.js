(window.webpackJsonp=window.webpackJsonp||[]).push([[26,1],{167:function(n,t,o){var content=o(175);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(21).default)("3770e2f2",content,!0,{sourceMap:!1})},170:function(n,t,o){"use strict";o.d(t,"a",function(){return e});var e={location:"Minsk / Belarus",email:"bazn.dev[at]gmail.com",phone:"+375 29 84 27 540"}},174:function(n,t,o){"use strict";var e=o(167);o.n(e).a},175:function(n,t,o){(n.exports=o(20)(!1)).push([n.i,".floating__contact {\n  z-index: 105;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 50px;\n}\n.floating__contact ul {\n  display: -ms-flexbox;\n  display: flex;\n}\n.floating__contact ul li,\n.floating__contact ul a {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-align: left;\n  margin-right: 40px;\n  color: #545454;\n  text-decoration: none;\n  transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n@media (max-width: 960px) {\n.floating__contact {\n    margin-bottom: 50px;\n}\n.floating__contact ul li,\n  .floating__contact ul a {\n    font-size: 0.85rem;\n    margin-right: 10px;\n}\n}\n@media (max-width: 600px) {\n.floating__contact {\n    width: 100%;\n    left: 0;\n    margin-bottom: 30px;\n    margin-left: calc(24px + 3%);\n}\n.floating__contact ul a {\n    font-size: 0.85rem;\n}\n}\n@media (max-width: 350px) {\n.floating__contact {\n    margin-bottom: 20px;\n}\n.floating__contact ul {\n    display: block;\n}\n}\n",""])},176:function(n,t,o){"use strict";o.r(t);o(71);var e=o(170),l={data:function(){return{email:e.a.email,phone:e.a.phone}},props:{floatingContactColor:{type:String},floatingContactLetterColor:{type:String}},computed:{formattedPhoneForCall:function(){return this.phone.replace(/\s+/g,"")}}},c=(o(174),o(9)),component=Object(c.a)(l,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"floating__contact"},[o("ul",[o("li",[o("span",{style:{color:n.floatingContactLetterColor}},[n._v("m:")]),n._v(" "),o("a",{style:{color:n.floatingContactColor},attrs:{href:"mailto:"+n.email}},[n._v(n._s(n.email)+".")])]),n._v(" "),o("li",[o("span",{style:{color:n.floatingContactLetterColor}},[n._v("p:")]),n._v(" "),o("a",{style:{color:n.floatingContactColor},attrs:{href:"tel:"+n.formattedPhoneForCall}},[n._v(n._s(n.phone))])])])])},[],!1,null,null,null);t.default=component.exports},186:function(n,t,o){var content=o(237);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(21).default)("dbe300fa",content,!0,{sourceMap:!1})},236:function(n,t,o){"use strict";var e=o(186);o.n(e).a},237:function(n,t,o){(n.exports=o(20)(!1)).push([n.i,".module-educational-platform-section {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700 !important;\n  background-image: linear-gradient(90deg, #00b141, #8dd010);\n}\n.module-educational-platform-section__container {\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n}\n.module-educational-platform-section__title-box {\n    font-family: 'Montserrat', sans-serif !important;\n    font-weight: 700;\n}\n.module-educational-platform-section__start-text {\n    color: #ffffff;\n    font-size: 5.5rem;\n    line-height: 75px;\n    margin-bottom: 12vh;\n    overflow: hidden;\n    letter-spacing: -2px;\n}\n.module-educational-platform-section__link a {\n    color: #ffffff;\n    text-decoration: none;\n}\n.module-educational-platform-section__scroll-icon-wrapper {\n    position: relative;\n}\n.module-educational-platform-section__scroll-icon {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 80px;\n    color: #ffffff;\n}\n.module-educational-platform-section__scroll-icon span {\n      font-size: 1.4rem;\n      font-weight: 700;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n      height: 35px;\n}\n.module-educational-platform-section__scroll-icon span:nth-child(2) {\n        font-size: 0.9rem;\n        margin-left: 40px;\n}\n.module-educational-platform-section__scroll-icon svg {\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      left: 0;\n      top: 0;\n}\n.module-educational-platform-section__scroll-icon svg:first-child {\n        animation: mousemove 3s infinite;\n}\n.module-educational-platform-section__scroll-icon path,\n    .module-educational-platform-section__scroll-icon g {\n      color: #ffffff;\n}\n.module-educational-platform-section__image-wrapper {\n    position: absolute;\n    right: 150px;\n    top: 25vh;\n    z-index: 3;\n}\n.module-educational-platform-section__image {\n    width: 500px;\n    height: 500px;\n}\n@media (max-width: 960px) {\n.module-educational-platform-section__start-text {\n    margin-top: 4vh;\n    margin-bottom: 20px;\n    padding-top: 80px;\n}\n.module-educational-platform-section__image-wrapper {\n    top: auto;\n    bottom: 0;\n    right: 5%;\n}\n.module-educational-platform-section__scroll-icon {\n    margin-top: 20px;\n}\n}\n@media (max-width: 600px) {\n.module-educational-platform-section__start-text {\n    font-size: 3rem;\n    line-height: 50px;\n    margin-top: 4vh;\n    padding-top: 80px;\n}\n.module-educational-platform-section__image {\n    width: 400px;\n    height: 400px;\n}\n}\n@media (max-width: 450px) {\n.module-educational-platform-section__image-wrapper {\n    right: 5%;\n}\n.module-educational-platform-section__image {\n    width: 300px;\n    height: 300px;\n}\n}\n",""])},324:function(n,t,o){"use strict";o.r(t);var e=o(168),l=o(169),c=o.n(l),r=o(70),f={components:{FloatingContact:o(176).default},props:{showSection:{type:Boolean}},data:function(){return{scrollIcon:r.a.scrollIcon("#ffffff"),sectionName:"<div>Module of the</div><div>educational</div><div>platform</div>",floatingContactColor:"#ffffff",floatingContactLetterColor:"#ffffff"}},mounted:function(){this.mouseMove()},methods:{mouseMove:function(){c()(document).mousemove(function(n){c()("#educational-platform").each(function(t,element){var o=n.clientX/c()(window).width()-.5;e.c.to(element,1,{x:60*o,ease:Power1.easeOut})})})},enterText:function(element,n){e.d.fromTo(element,.9,{y:"155%"},{ease:e.b.easeOut,y:"0%",onComplete:n})},leaveText:function(element,n){e.d.to(element,.9,{y:"-155%",ease:e.b.easeOut,delay:.1,onComplete:n})}}},m=(o(236),o(9)),component=Object(m.a)(f,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("section",{staticClass:"module-educational-platform-section"},[o("v-container",{staticClass:"module-educational-platform-section__container",attrs:{"align-center":n.$vuetify.breakpoint.mdAndUp}},[o("v-layout",{staticStyle:{"z-index":"100"},attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs10:n.$vuetify.breakpoint.smAndUp,xs12:n.$vuetify.breakpoint.xsOnly,"offset-xs1":n.$vuetify.breakpoint.smAndUp}},[o("div",{staticClass:"module-educational-platform-section__title-box"},[o("div",{staticClass:"module-educational-platform-section__start-text"},[o("div",{staticClass:"font-weight-bold",domProps:{innerHTML:n._s(n.sectionName)}})]),n._v(" "),"index"===n.$route.name?o("div",{staticClass:"module-educational-platform-section__link cursor-pointer",class:{"mt-5":n.$vuetify.breakpoint.smAndDown}},[o("nuxt-link",{attrs:{to:"/project-educational-platform"}},[n._v("Show me this project")])],1):o("div",{staticClass:"module-educational-platform-section__scroll-icon-wrapper"},[o("div",{staticClass:"module-educational-platform-section__scroll-icon",domProps:{innerHTML:n._s(n.scrollIcon)}})])])])],1),n._v(" "),o("div",{staticClass:"module-educational-platform-section__image-wrapper"},[o("img",{staticClass:"module-educational-platform-section__image",attrs:{src:"/img/educational-platform/education-1-education-png-1500_1224.png"}})])],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);