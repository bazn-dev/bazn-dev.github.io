(window.webpackJsonp=window.webpackJsonp||[]).push([[34,33],{172:function(n,t,e){var content=e(199);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(21).default)("21fd110d",content,!0,{sourceMap:!1})},198:function(n,t,e){"use strict";var o=e(172);e.n(o).a},199:function(n,t,e){(n.exports=e(20)(!1)).push([n.i,"@keyframes pulse {\n0% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);\n}\n70% {\n    box-shadow: 0 0 0 500px rgba(255, 255, 255, 0);\n}\n100% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n}\n}\n.pulse {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 0 rgba(255, 255, 255, 0.4);\n  animation: pulse 2s infinite;\n  z-index: -1;\n}\n.service-booking-flights-section {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700 !important;\n  background: linear-gradient(to top right, #95ddf6, #092e74);\n  overflow: hidden;\n}\n.service-booking-flights-section__container {\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n}\n.service-booking-flights-section__title-box {\n    font-family: 'Montserrat', sans-serif !important;\n    font-weight: 700;\n}\n.service-booking-flights-section__short-description {\n    font-size: 1rem;\n    font-weight: 700 !important;\n    color: rgba(255, 255, 255, 0.6);\n}\n.service-booking-flights-section__start-text {\n    color: #ffffff;\n    font-size: 4.5rem;\n    font-weight: 800 !important;\n    line-height: 75px;\n}\n.service-booking-flights-section__colored-dot {\n    color: #F2EB00;\n}\n.service-booking-flights-section__short-info {\n    font-size: 0.9rem;\n}\n.service-booking-flights-section__short-info-title {\n    color: #000000;\n}\n.service-booking-flights-section__short-info-text {\n    color: #ffffff;\n}\n.service-booking-flights-section__link a {\n    color: #ffffff;\n    text-decoration: none;\n    cursor: pointer;\n    transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n.service-booking-flights-section__link a:hover {\n      color: #F2EB00;\n}\n.service-booking-flights-section__image-wrapper1, .service-booking-flights-section__image-wrapper2, .service-booking-flights-section__image-wrapper3 {\n    position: absolute;\n    z-index: 3;\n}\n.service-booking-flights-section__image-wrapper1 {\n    right: 0;\n    top: 30%;\n}\n.service-booking-flights-section__image-wrapper2 {\n    right: 100px;\n    top: 60%;\n}\n.service-booking-flights-section__image-wrapper3 {\n    right: -10%;\n    bottom: -10%;\n}\n.service-booking-flights-section__image1, .service-booking-flights-section__image2 {\n    width: 100vh;\n}\n.service-booking-flights-section__image3 {\n    height: 100vh;\n}\n@media (max-width: 1264px) {\n.service-booking-flights-section__start-text {\n    font-size: 4rem;\n    line-height: 60px;\n}\n.service-booking-flights-section__image-wrapper3 {\n    right: -10%;\n    bottom: -10%;\n}\n.service-booking-flights-section__image3 {\n    height: 80vh;\n}\n}\n@media (max-width: 960px) {\n.service-booking-flights-section__short-description {\n    margin-top: 4vh;\n    padding-top: 80px;\n}\n.service-booking-flights-section__image-wrapper1,\n  .service-booking-flights-section__image-wrapper2,\n  .service-booking-flights-section__image-wrapper3 {\n    top: auto;\n}\n.service-booking-flights-section__image-wrapper1 {\n    bottom: 5vh;\n    right: -10%;\n}\n.service-booking-flights-section__image-wrapper2 {\n    bottom: 10px;\n    right: 5%;\n}\n.service-booking-flights-section__image-wrapper3 {\n    bottom: -20%;\n}\n.service-booking-flights-section__image3 {\n    height: 80vh;\n}\n}\n@media (max-width: 600px) {\n.service-booking-flights-section__short-description {\n    padding-top: 40px;\n}\n.service-booking-flights-section__start-text {\n    font-size: 3rem;\n    line-height: 50px;\n}\n.service-booking-flights-section__image1 {\n    width: 500px;\n}\n.service-booking-flights-section__image2 {\n    width: 500px;\n}\n.service-booking-flights-section__image3 {\n    height: 70vh;\n}\n.service-booking-flights-section__image-wrapper3 {\n    right: -30%;\n}\n}\n@media (max-width: 450px) {\n.service-booking-flights-section__image-wrapper1 {\n    right: -15%;\n}\n.service-booking-flights-section__image-wrapper2 {\n    right: 0;\n}\n.service-booking-flights-section__image1,\n  .service-booking-flights-section__image2 {\n    width: 400px;\n}\n.service-booking-flights-section__image-wrapper3 {\n    right: -40%;\n}\n}\n@media (max-width: 350px) {\n.service-booking-flights-section__image-wrapper3 {\n    right: -60%;\n}\n}\n",""])},313:function(n,t,e){"use strict";e.r(t);var o=e(168),r=e(169),c=e.n(r),l=e(70),f={props:{showSection:{type:Boolean}},data:function(){return{scrollIcon:l.a.scrollIcon("#ffffff"),sectionName:'<div>Find the most</div><div>profitable flights<span class="service-booking-flights-section__colored-dot">.</span></div>',shortDescription:"Mobile application for booking flights.",industry:"Airlines",services:"<div>Mobile Development,</div><div>Backend Development</div>",stack:"Android, iOS, Flutter, Java, Python, PHP, MySQL",floatingContactColor:"#ffffff",floatingContactLetterColor:"#ffffff"}},mounted:function(){this.mouseMove()},methods:{mouseMove:function(){c()(document).mousemove(function(n){c()("#booking-flights1").each(function(t,element){var e=n.clientX/c()(window).width()-.5;o.c.to(element,1,{x:60*e,ease:o.a.easeOut})}),c()("#booking-flights2").each(function(t,element){var e=n.clientX/c()(window).width()-.5;o.c.to(element,1,{x:-40*e,ease:o.a.easeOut})}),c()("#booking-flights3").each(function(t,element){var e=n.clientX/c()(window).width()-.5;o.c.to(element,1,{x:20*e,ease:o.a.easeOut})})})},enterText:function(n,t){o.d.fromTo(n,.9,{y:"155%"},{ease:o.b.easeOut,y:"0%",onComplete:t})},leaveText:function(n,t){o.d.to(n,.9,{y:"-155%",ease:o.b.easeOut,delay:.1,onComplete:t})}}},h=(e(198),e(9)),component=Object(h.a)(f,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"service-booking-flights-section"},[e("v-container",{staticClass:"service-booking-flights-section__container",attrs:{"align-center":n.$vuetify.breakpoint.mdAndUp}},[e("v-layout",{staticStyle:{"z-index":"100","margin-left":"5%","margin-right":"5%"},attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"service-booking-flights-section__title-box"},[e("div",{staticClass:"service-booking-flights-section__short-description",domProps:{innerHTML:n._s(n.shortDescription)}}),n._v(" "),e("div",{staticClass:"service-booking-flights-section__start-text mb-5"},[e("div",{staticClass:"font-weight-bold",domProps:{innerHTML:n._s(n.sectionName)}})]),n._v(" "),n.$vuetify.breakpoint.mdAndUp?e("v-layout",{staticClass:"service-booking-flights-section__short-info",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"mr-4",attrs:{xs4:"",sm4:"",md2:"",lg1:""}},[e("div",{staticClass:"service-booking-flights-section__short-info-title mb-2"},[n._v("Industry")]),n._v(" "),e("div",{staticClass:"service-booking-flights-section__short-info-text"},[n._v(n._s(n.industry))])]),n._v(" "),e("v-flex",{staticClass:"mr-3",attrs:{xs4:"",sm4:"",md3:"",lg2:""}},[e("div",{staticClass:"service-booking-flights-section__short-info-title mb-2"},[n._v("Services")]),n._v(" "),e("div",{staticClass:"service-booking-flights-section__short-info-text",domProps:{innerHTML:n._s(n.services)}})]),n._v(" "),e("v-flex",{attrs:{xs4:"",sm4:"",md3:"",lg2:""}},[e("div",{staticClass:"service-booking-flights-section__short-info-title mb-2"},[n._v("Tech stack")]),n._v(" "),e("div",{staticClass:"service-booking-flights-section__short-info-text",domProps:{innerHTML:n._s(n.stack)}})])],1):n._e(),n._v(" "),"index"===n.$route.name?e("div",{staticClass:"service-booking-flights-section__link cursor-pointer mt-5"},[e("nuxt-link",{attrs:{to:"/service-booking-flights"}},[n._v("Show me this project")])],1):e("div",{staticClass:"scroll-icon-wrapper mt-5"},[e("div",{staticClass:"scroll-icon",domProps:{innerHTML:n._s(n.scrollIcon)}})])],1)])],1),n._v(" "),e("div",{staticClass:"service-booking-flights-section__image-wrapper1",attrs:{id:"booking-flights1"}},[e("img",{staticClass:"service-booking-flights-section__image1",attrs:{src:"/img/booking-flights/cloud.png"}})]),n._v(" "),e("div",{staticClass:"service-booking-flights-section__image-wrapper2",attrs:{id:"booking-flights2"}},[e("img",{staticClass:"service-booking-flights-section__image2",attrs:{src:"/img/booking-flights/cloud2.png"}})]),n._v(" "),e("div",{staticClass:"service-booking-flights-section__image-wrapper3",attrs:{id:"booking-flights3"}},[e("div",{staticClass:"pulse"}),n._v(" "),e("img",{staticClass:"service-booking-flights-section__image3",attrs:{src:"/img/mockups/booking-flights/main.png"}})])],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);