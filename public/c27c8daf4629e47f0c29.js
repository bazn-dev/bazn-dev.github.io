(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{172:function(e,t,n){var content=n(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("20c2479c",content,!0,{sourceMap:!1})},212:function(e,t,n){"use strict";var o=n(172);n.n(o).a},213:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,".home-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100);\n  overflow: hidden;\n  z-index: 99;\n}\n",""])},297:function(e,t,n){"use strict";n.r(t);var o=n(5),c=n(164),r=n(211),l=n.n(r),v=n(14),h={components:{RealEstateSaleApp:function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,291))},ServiceFoodGroupOrdering:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,293))},ServiceBookingFlights:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,292))},FloatingNameSection:function(){return n.e(34).then(n.bind(null,309))},FloatingSocials:function(){return n.e(2).then(n.bind(null,299))},FloatingText:function(){return n.e(3).then(n.bind(null,300))},ComingSoon:function(){return n.e(27).then(n.bind(null,310))},Start:function(){return n.e(33).then(n.bind(null,311))},Benefits:function(){return n.e(26).then(n.bind(null,312))},Services:function(){return n.e(32).then(n.bind(null,313))},Contacts:function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,298))}},data:function(){return{isLoading:!0,isScrolling:!1,activeSection:0,upScroll:!1}},computed:Object(o.a)({},Object(v.b)(["sectionName","sections","activeSectionNumber"])),watch:{activeSectionNumber:function(e){this.activeSection=e},activeSection:function(e,t){this.upScroll=e>t}},created:function(){var e=this;this.activeSection=this.activeSectionNumber,setTimeout(function(){e.isLoading=!1},200)},mounted:function(){this.scrollHandler()},methods:{increaseActiveSection:function(){var e=this;this.upScroll=!0,this.isScrolling=!0,this.activeSection++,this.$store.dispatch("setSectionActive",this.activeSection),setTimeout(function(){e.isScrolling=!1},2e3)},decreaseActiveSection:function(){var e=this;this.upScroll=!1,this.isScrolling=!0,this.activeSection--,this.$store.dispatch("setSectionActive",this.activeSection),setTimeout(function(){e.isScrolling=!1},2e3)},sectionEnter:function(element,e){c.d.fromTo(element,this.isLoading?0:1.5,{transform:"translatey(".concat(this.upScroll?"100%":"-100%",")")},{ease:CustomEase.create("custom","M0,0 C0.77,0 0.175,1 1,1"),transform:"translatey(0)",onComplete:e})},afterSectionEnter:function(element){},sectionLeave:function(element,e){c.d.to(element,1.5,{ease:CustomEase.create("custom","M0,0 C0.77,0 0.175,1 1,1"),transform:"translatey(".concat(this.upScroll?"-100%":"100%",")"),onComplete:e})},scrollHandler:function(){var e=this,t=this,n=document.getElementById("home"),o=new l.a(n,{inputClass:l.a.TouchInput});n.addEventListener("wheel",function(n){n.preventDefault(),n.deltaY<0&&!e.isScrolling&&e.activeSection>0?t.decreaseActiveSection():n.deltaY>0&&!e.isScrolling&&e.activeSection<e.sections.length-1&&t.increaseActiveSection()}),document.addEventListener("keydown",function(e){"ArrowDown"===e.key&&!t.isScrolling&&t.activeSection<t.sections.length-1?t.increaseActiveSection():"ArrowUp"===e.key&&!t.isScrolling&&t.activeSection>0&&t.decreaseActiveSection()}),o.get("pan").set({direction:l.a.DIRECTION_ALL}),o.on("panup",function(){!t.isScrolling&&t.activeSection<t.sections.length-1&&t.increaseActiveSection()}),o.on("pandown",function(){!t.isScrolling&&t.activeSection>0&&t.decreaseActiveSection()})},setActiveSection:function(e){this.$store.dispatch("setSectionActive",e)}}},S=(n(212),n(13)),d={components:{HomePage:Object(S.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-page",attrs:{id:"home"}},[n("FloatingSocials",{attrs:{floatingColors:e.sections[e.activeSection].caseColor,hoverColor:"bright-sky-blue2"}}),e._v(" "),n("FloatingText",{attrs:{floatingColors:e.sections[e.activeSection].caseColor}}),e._v(" "),n("transition-group",{attrs:{appear:"",css:!1},on:{appear:e.sectionEnter,enter:e.sectionEnter,afterEnter:e.afterSectionEnter,leave:e.sectionLeave}},[n("Start",{directives:[{name:"show",rawName:"v-show",value:0===e.activeSection,expression:"activeSection === 0"}],key:"0"}),e._v(" "),n("ServiceBookingFlights",{directives:[{name:"show",rawName:"v-show",value:1===e.activeSection,expression:"activeSection === 1"}],key:"1"}),e._v(" "),n("ServiceFoodGroupOrdering",{directives:[{name:"show",rawName:"v-show",value:2===e.activeSection,expression:"activeSection === 2"}],key:"2"}),e._v(" "),n("RealEstateSaleApp",{directives:[{name:"show",rawName:"v-show",value:3===e.activeSection,expression:"activeSection === 3"}],key:"3"}),e._v(" "),n("Services",{directives:[{name:"show",rawName:"v-show",value:4===e.activeSection,expression:"activeSection === 4"}],key:"4"}),e._v(" "),n("Benefits",{directives:[{name:"show",rawName:"v-show",value:5===e.activeSection,expression:"activeSection === 5"}],key:"5"}),e._v(" "),n("Contacts",{directives:[{name:"show",rawName:"v-show",value:6===e.activeSection,expression:"activeSection === 6"}],key:"6"})],1)],1)},[],!1,null,null,null).exports}},f=Object(S.a)(d,function(){var e=this.$createElement;return(this._self._c||e)("HomePage")},[],!1,null,null,null);t.default=f.exports}}]);