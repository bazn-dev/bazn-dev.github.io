(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{211:function(n,t,o){var content=o(322);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(16).default)("ed6def78",content,!0,{sourceMap:!1})},321:function(n,t,o){"use strict";var e=o(211);o.n(e).a},322:function(n,t,o){(n.exports=o(15)(!1)).push([n.i,".floating-footer {\n  z-index: 99;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 50px;\n  margin-left: calc(5% + 24px);\n}\n.floating-footer ul {\n  display: -ms-flexbox;\n  display: flex;\n}\n.floating-footer ul li {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-align: left;\n  margin-right: 40px;\n  color: #313131;\n  text-decoration: none;\n  transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);\n  cursor: pointer;\n}\n.floating-footer ul li:hover {\n    color: #00CCF7;\n}\n@media (max-width: 960px) {\n.floating-footer {\n    margin-bottom: 50px;\n}\n.floating-footer ul li {\n    font-size: 0.85rem;\n    margin-right: 10px;\n}\n}\n@media (max-width: 600px) {\n.floating-footer {\n    margin-bottom: 60px;\n    margin-left: calc(24px + 3%);\n}\n}\n",""])},347:function(n,t,o){"use strict";o.r(t);var e=o(5),r=o(7),l={data:function(){return{}},computed:Object(e.a)({},Object(r.b)(["isLoading","sections"])),methods:{setActiveSection:function(n){this.$store.dispatch("setSectionActive",n)}}},c=(o(321),o(3)),component=Object(c.a)(l,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"floating-footer"},[o("ul",[o("li",{on:{click:function(t){return n.setActiveSection(1)}}},[n._v("About Us")]),n._v(" "),o("li",{on:{click:function(t){return n.setActiveSection(7)}}},[n._v("Services")])])])},[],!1,null,null,null);t.default=component.exports}}]);