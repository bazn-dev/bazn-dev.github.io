(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{183:function(e,t,n){var content=n(231);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("20c2479c",content,!0,{sourceMap:!1})},230:function(e,t,n){"use strict";var o=n(183);n.n(o).a},231:function(e,t,n){(e.exports=n(20)(!1)).push([e.i,".home-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100);\n  overflow: hidden;\n  z-index: 99;\n}\n",""])},319:function(e,t,n){"use strict";n.r(t);var o=n(5),c=n(168),r=n(229),l=n.n(r),v=n(14),h={components:{RealEstateSaleApp:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,311))},ServiceFoodGroupOrdering:function(){return Promise.all([n.e(0),n.e(35)]).then(n.bind(null,313))},ServiceBookingFlights:function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,312))},FloatingNameSection:function(){return n.e(38).then(n.bind(null,331))},FloatingSocials:function(){return n.e(3).then(n.bind(null,321))},FloatingText:function(){return n.e(4).then(n.bind(null,322))},ComingSoon:function(){return n.e(29).then(n.bind(null,332))},Start:function(){return n.e(37).then(n.bind(null,333))},AboutUs:function(){return n.e(27).then(n.bind(null,334))},Benefits:function(){return n.e(28).then(n.bind(null,335))},Services:function(){return n.e(36).then(n.bind(null,336))},Contacts:function(){return Promise.all([n.e(6),n.e(5)]).then(n.bind(null,320))}},data:function(){return{showSection:!0,isScrolling:!1,activeSection:0,upScroll:!1}},computed:Object(o.a)({},Object(v.b)(["isLoading","sectionName","sections","activeSectionNumber"])),watch:{activeSection:function(){this.showSection=!1},activeSectionNumber:function(e){this.activeSection=e}},created:function(){this.activeSection=this.activeSectionNumber},mounted:function(){this.scrollHandler()},methods:{increaseActiveSection:function(){var e=this;this.upScroll=!0,this.isScrolling=!0,this.activeSection++,this.$store.dispatch("setSectionActive",this.activeSection),setTimeout(function(){e.isScrolling=!1},2e3)},decreaseActiveSection:function(){var e=this;this.upScroll=!1,this.isScrolling=!0,this.activeSection--,this.$store.dispatch("setSectionActive",this.activeSection),setTimeout(function(){e.isScrolling=!1},2e3)},sectionEnter:function(element,e){this.isScrolling?c.d.fromTo(element,1.5,{transform:"translatey(".concat(this.upScroll?"100%":"-100%",")")},{ease:CustomEase.create("custom","M0,0 C0.77,0 0.175,1 1,1"),transform:"translatey(0%)",onComplete:e}):c.d.fromTo(element,0,{opacity:0},{ease:CustomEase.create("custom","M0,0 C0.77,0 0.175,1 1,1"),opacity:1,onComplete:e})},afterSectionEnter:function(element){},sectionLeave:function(element,e){var t=this;this.isScrolling?c.d.to(element,1.5,{ease:CustomEase.create("custom","M0,0 C0.77,0 0.175,1 1,1"),transform:"translatey(".concat(this.upScroll?"-100%":"100%",")"),onComplete:e}):c.d.fromTo(element,0,{opacity:0},{ease:CustomEase.create("custom","M0,0 C0.77,0 0.175,1 1,1"),opacity:1,onComplete:e}),setTimeout(function(){t.showSection=!0},500)},scrollHandler:function(){var e=this,t=this,n=document.getElementById("home"),o=new l.a(n,{inputClass:l.a.TouchInput});n.addEventListener("wheel",function(n){n.preventDefault(),n.deltaY<0&&!e.isScrolling&&e.activeSection>0?t.decreaseActiveSection():n.deltaY>0&&!e.isScrolling&&e.activeSection<e.sections.length-1&&t.increaseActiveSection()}),o.get("pan").set({direction:l.a.DIRECTION_ALL}),o.on("panup",function(e){!t.isScrolling&&t.activeSection<t.sections.length-1&&t.increaseActiveSection()}),o.on("pandown",function(e){!t.isScrolling&&t.activeSection>0&&t.decreaseActiveSection()})},setActiveSection:function(e){this.$store.dispatch("setSectionActive",e)}}},S=(n(230),n(9)),m={components:{HomePage:Object(S.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-page",attrs:{id:"home"}},[n("FloatingSocials",{attrs:{floatingColors:e.sections[e.activeSection].caseColor,hoverColor:"bright-sky-blue2"}}),e._v(" "),n("FloatingText",{attrs:{floatingColors:e.sections[e.activeSection].caseColor}}),e._v(" "),n("transition-group",{attrs:{appear:"",css:!1},on:{appear:e.sectionEnter,enter:e.sectionEnter,afterEnter:e.afterSectionEnter,leave:e.sectionLeave}},[n("Start",{directives:[{name:"show",rawName:"v-show",value:0===e.activeSection,expression:"activeSection === 0"}],key:"0"}),e._v(" "),n("AboutUs",{directives:[{name:"show",rawName:"v-show",value:1===e.activeSection,expression:"activeSection === 1"}],key:"1"}),e._v(" "),n("Benefits",{directives:[{name:"show",rawName:"v-show",value:2===e.activeSection,expression:"activeSection === 2"}],key:"2"}),e._v(" "),n("ServiceBookingFlights",{directives:[{name:"show",rawName:"v-show",value:3===e.activeSection,expression:"activeSection === 3"}],key:"3",attrs:{showSection:e.showSection}}),e._v(" "),n("ServiceFoodGroupOrdering",{directives:[{name:"show",rawName:"v-show",value:4===e.activeSection,expression:"activeSection === 4"}],key:"4",attrs:{showSection:e.showSection}}),e._v(" "),n("RealEstateSaleApp",{directives:[{name:"show",rawName:"v-show",value:5===e.activeSection,expression:"activeSection === 5"}],key:"5",attrs:{showSection:e.showSection}}),e._v(" "),n("Services",{directives:[{name:"show",rawName:"v-show",value:6===e.activeSection,expression:"activeSection === 6"}],key:"6"}),e._v(" "),n("Contacts",{directives:[{name:"show",rawName:"v-show",value:7===e.activeSection,expression:"activeSection === 7"}],key:"7"})],1)],1)},[],!1,null,null,null).exports}},f=Object(S.a)(m,function(){var e=this.$createElement;return(this._self._c||e)("HomePage")},[],!1,null,null,null);t.default=f.exports}}]);