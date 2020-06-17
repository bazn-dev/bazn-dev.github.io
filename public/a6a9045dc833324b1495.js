(window.webpackJsonp=window.webpackJsonp||[]).push([[31,30],{171:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6c09762f",content,!0,{sourceMap:!1})},194:function(t,e,n){"use strict";var o=n(171);n.n(o).a},195:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".real-state-sale-app-section {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700 !important;\n  background-color: #d6d6d6;\n  overflow: hidden;\n}\n.real-state-sale-app-section__container {\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n}\n.real-state-sale-app-section__title-box {\n    font-family: 'Montserrat', sans-serif !important;\n    font-weight: 700;\n}\n.real-state-sale-app-section__short-description {\n    font-size: 1rem;\n    font-weight: 700 !important;\n    color: rgba(255, 255, 255, 0.6);\n}\n.real-state-sale-app-section__start-text {\n    color: #ffffff;\n    font-size: 4.5rem;\n    font-weight: 800 !important;\n    line-height: 75px;\n}\n.real-state-sale-app-section__colored-dot {\n    color: #f4e63b;\n}\n.real-state-sale-app-section__short-info {\n    font-size: 0.9rem;\n}\n.real-state-sale-app-section__short-info-title {\n    color: #000000;\n}\n.real-state-sale-app-section__short-info-text {\n    color: #ffffff;\n}\n.real-state-sale-app-section__link a {\n    color: #ffffff;\n    text-decoration: none;\n    cursor: pointer;\n    transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n.real-state-sale-app-section__link a:hover {\n      color: #4531ff;\n}\n.real-state-sale-app-section__image-wrapper, .real-state-sale-app-section__image-wrapper2 {\n    position: absolute;\n    z-index: 3;\n}\n.real-state-sale-app-section__image-wrapper {\n    right: 0;\n    bottom: -7px;\n}\n.real-state-sale-app-section__image-wrapper2 {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    right: 100px;\n    bottom: 5%;\n}\n.real-state-sale-app-section__image {\n    width: 100%;\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n}\n.real-state-sale-app-section__image2 {\n    width: 45vw;\n}\n@media (max-width: 1264px) {\n.real-state-sale-app-section__start-text {\n    font-size: 4rem;\n    line-height: 60px;\n}\n.real-state-sale-app-section__image2 {\n    width: 40vw;\n}\n}\n@media (max-width: 960px) {\n.real-state-sale-app-section__start-text {\n    margin-top: 4vh;\n    padding-top: 80px;\n}\n.real-state-sale-app-section__image-wrapper {\n    width: 100%;\n    top: auto;\n}\n.real-state-sale-app-section__image-wrapper2 {\n    right: 50px;\n    bottom: 5%;\n}\n.real-state-sale-app-section__image2 {\n    width: 70vw;\n}\n}\n@media (max-width: 600px) {\n.real-state-sale-app-section__start-text {\n    font-size: 3rem;\n    line-height: 50px;\n    padding-top: 40px;\n}\n.real-state-sale-app-section__image-wrapper2 {\n    left: -6%;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    bottom: 5%;\n}\n.real-state-sale-app-section__image2 {\n    width: 80vw;\n}\n}\n",""])},311:function(t,e,n){"use strict";n.r(e);var o=n(168),r=n(169),l=n.n(r),c=n(70),f={props:{showSection:{type:Boolean}},data:function(){return{scrollIcon:c.a.scrollIcon("#ffffff"),sectionName:'<div>We simplify</div><div>housing search<span class="real-state-sale-app-section__colored-dot">.</span></div>',shortDescription:"Web application for real estate purchase and sale.",industry:"Real Estate",services:"<div>UX/UI Design,</div><div>Frontend Development,</div><div>Backend Development</div>",stack:"Vue, Java, MongoDB",floatingContactColor:"#ffffff",floatingContactLetterColor:"#ffffff"}},mounted:function(){this.mouseMove()},methods:{mouseMove:function(){l()(document).mousemove(function(t){l()("#real-estate-sale-app").each(function(e,element){var n=t.clientX/l()(window).width()-.5;o.c.to(element,1,{x:20*n,ease:o.a.easeOut})})})},enterText:function(t,e){o.d.fromTo(t,.9,{y:"155%"},{ease:o.b.easeOut,y:"0%",onComplete:e})},leaveText:function(t,e){o.d.to(t,.9,{y:"-155%",ease:o.b.easeOut,delay:.1,onComplete:e})}}},_=(n(194),n(9)),component=Object(_.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"real-state-sale-app-section"},[n("v-container",{staticClass:"real-state-sale-app-section__container",attrs:{"align-center":t.$vuetify.breakpoint.mdAndUp}},[n("v-layout",{staticStyle:{"z-index":"100","margin-left":"5%","margin-right":"5%"},attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"real-state-sale-app-section__title-box"},[n("div",{staticClass:"real-state-sale-app-section__start-text mb-5"},[n("div",{staticClass:"font-weight-bold",domProps:{innerHTML:t._s(t.sectionName)}})]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-layout",{staticClass:"real-state-sale-app-section__short-info",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"mr-4",attrs:{xs4:"",sm4:"",md2:"",lg1:""}},[n("div",{staticClass:"real-state-sale-app-section__short-info-title mb-2"},[t._v("Industry")]),t._v(" "),n("div",{staticClass:"real-state-sale-app-section__short-info-text"},[t._v(t._s(t.industry))])]),t._v(" "),n("v-flex",{staticClass:"mr-3",attrs:{xs4:"",sm4:"",md3:"",lg2:""}},[n("div",{staticClass:"real-state-sale-app-section__short-info-title mb-2"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"real-state-sale-app-section__short-info-text",domProps:{innerHTML:t._s(t.services)}})]),t._v(" "),n("v-flex",{attrs:{xs4:"",sm4:"",md3:"",lg2:""}},[n("div",{staticClass:"real-state-sale-app-section__short-info-title mb-2"},[t._v("Tech stack")]),t._v(" "),n("div",{staticClass:"real-state-sale-app-section__short-info-text",domProps:{innerHTML:t._s(t.stack)}})])],1):t._e(),t._v(" "),"index"===t.$route.name?n("div",{staticClass:"real-state-sale-app-section__link cursor-pointer mt-5"},[n("nuxt-link",{attrs:{to:"/real-estate-sale"}},[t._v("More details")])],1):n("div",{staticClass:"scroll-icon-wrapper mt-5"},[n("div",{staticClass:"scroll-icon",domProps:{innerHTML:t._s(t.scrollIcon)}})])],1)])],1),t._v(" "),n("div",{staticClass:"real-state-sale-app-section__image-wrapper"},[n("img",{staticClass:"real-state-sale-app-section__image",attrs:{src:"/img/real-estate-sale-app/house-png-house-png-2880.png"}})]),t._v(" "),n("div",{staticClass:"real-state-sale-app-section__image-wrapper2",attrs:{id:"real-estate-sale-app"}},[n("img",{staticClass:"real-state-sale-app-section__image2",attrs:{src:"/img/mockups/real-estate-sale-app/Landing + search.png"}})])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);