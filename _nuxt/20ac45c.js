(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{262:function(e,t,n){"use strict";var o={},r=(n(273),n(59)),l={components:{TheColumn:Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"column"},[e._t("default")],2)}),[],!1,null,"f0f13f28",null).exports}},c=(n(275),Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("TheColumn",[e._t("default")],2),e._v(" "),n("TheColumn",[e._t("desc")],2)],1)}),[],!1,null,"0c3a6e4c",null));t.a=c.exports},263:function(e,t,n){"use strict";var o={},r=n(59),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h2",{staticClass:"h2 text"},[e._v("\n  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente incidunt\n  inventore neque ducimus esse libero nam commodi maiores dolore at.\n")])}),[],!1,null,null,null);t.a=component.exports},264:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(113).default)("d3083452",content,!0,{sourceMap:!1})},265:function(e,t,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(113).default)("3e20db0a",content,!0,{sourceMap:!1})},266:function(e,t,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(113).default)("61b8663e",content,!0,{sourceMap:!1})},267:function(e,t,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(113).default)("62b4434c",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";n(264)},269:function(e,t,n){var o=n(112)(!1);o.push([e.i,".scroll-down[data-v-0fe4b6c4]{position:absolute;width:48px;height:48px;border-radius:50%;border:1px solid #000;left:50%;bottom:64px;pointer-events:none}.scroll-down__inner[data-v-0fe4b6c4]{position:absolute;width:16px;height:16px;left:50%;top:50%;transform:translate(-50%,-50%);animation:loop-data-v-0fe4b6c4 1s infinite alternate-reverse}.scroll-down__arrow[data-v-0fe4b6c4]{width:100%;height:100%;border-bottom:1px solid #000;border-left:1px solid #000;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-45deg)}.scroll-down__arrow-2[data-v-0fe4b6c4]{top:calc(50% - 4px)}@-webkit-keyframes loop-data-v-0fe4b6c4{to{transform:translate(-50%,-20%)}}@keyframes loop-data-v-0fe4b6c4{to{transform:translate(-50%,-20%)}}",""]),e.exports=o},270:function(e,t,n){"use strict";n(265)},271:function(e,t,n){var o=n(112)(!1);o.push([e.i,".hero[data-v-2810b554]{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative}.navigation[data-v-2810b554]{margin-top:96px}.menu[data-v-2810b554]{display:flex;justify-content:center;align-items:flex-start}.menu>li+li[data-v-2810b554]{margin-left:64px}.menu__link[data-v-2810b554]{font-size:24px;text-transform:uppercase;color:#000;text-decoration:none;transition:.5s ease-in-out}.menu__link[data-v-2810b554]:hover{opacity:.5}",""]),e.exports=o},272:function(e,t,n){"use strict";var o={},r=(n(268),n(59)),l={components:{ScrollDownIcon:Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scroll-down"},[n("div",{staticClass:"scroll-down__inner"},[n("div",{staticClass:"scroll-down__arrow scroll-down__arrow-1"}),e._v(" "),n("div",{staticClass:"scroll-down__arrow scroll-down__arrow-2"})])])}],!1,null,"0fe4b6c4",null).exports},props:{isPage:{type:Boolean,default:!1}},data:function(){return{menu:[{text:"texts",href:"/texts"},{text:"blocks",href:"/blocks"},{text:"images",href:"/images"}]}}},c=(n(270),Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero"},[n("h1",{directives:[{name:"tftl-letters",rawName:"v-tftl-letters"}],staticClass:"h1"},[e._v("Nuxt Animation")]),e._v(" "),n("nav",{staticClass:"navigation"},[n("ul",{staticClass:"menu"},e._l(e.menu,(function(link,t){return n("li",{directives:[{name:"tftl-fadein",rawName:"v-tftl-fadein",value:{delay:.2*(t+1)},expression:"{ delay: 0.2 * (index + 1) }"}],key:t},[n("NuxtLink",{staticClass:"menu__link",attrs:{to:link.href}},[e._v("\n          "+e._s(link.text)+"\n        ")])],1)})),0)]),e._v(" "),e.isPage?n("ScrollDownIcon",{directives:[{name:"tftl-fadein",rawName:"v-tftl-fadein:down",value:{delay:1},expression:"{ delay: 1 }",arg:"down"}]}):e._e()],1)}),[],!1,null,"2810b554",null));t.a=c.exports},273:function(e,t,n){"use strict";n(266)},274:function(e,t,n){var o=n(112)(!1);o.push([e.i,".column[data-v-f0f13f28]{display:flex;justify-content:flex-start;align-items:center;padding:0 5rem}",""]),e.exports=o},275:function(e,t,n){"use strict";n(267)},276:function(e,t,n){var o=n(112)(!1);o.push([e.i,".section[data-v-0c3a6e4c]{width:100vw;height:100vh;display:grid;grid-template-columns:repeat(2,1fr)}",""]),e.exports=o},286:function(e,t,n){"use strict";n.r(t);var o=n(272),r=n(263),l=n(262),c={components:{TheSection:l.a,TheText:r.a}},f=n(59),v=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-fadein")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-fadein=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-fadein",rawName:"v-tftl-fadein",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }"}]})],1)}),[],!1,null,null,null).exports,d={components:{TheSection:l.a,TheText:r.a}},_=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-fadein:up")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-fadein:up=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-fadein",rawName:"v-tftl-fadein:up",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }",arg:"up"}]})],1)}),[],!1,null,null,null).exports,h={components:{TheSection:l.a,TheText:r.a}},m=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-fadein:down")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-fadein:down=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-fadein",rawName:"v-tftl-fadein:down",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }",arg:"down"}]})],1)}),[],!1,null,null,null).exports,x={components:{TheSection:l.a,TheText:r.a}},T=Object(f.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-fadein:left")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-fadein:left=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-fadein",rawName:"v-tftl-fadein:left",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }",arg:"left"}]})],1)}),[],!1,null,null,null).exports,y={components:{TheSection:l.a,TheText:r.a}},w=Object(f.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-fadein:right")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-fadein:right=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-fadein",rawName:"v-tftl-fadein:right",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }",arg:"right"}]})],1)}),[],!1,null,null,null).exports,S={components:{TheSection:l.a,TheText:r.a}},A=Object(f.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-up")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-up=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-up",rawName:"v-tftl-up",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }"}]})],1)}),[],!1,null,null,null).exports,C={components:{TheSection:l.a,TheText:r.a}},k=Object(f.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-down")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-down=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-down",rawName:"v-tftl-down",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }"}]})],1)}),[],!1,null,null,null).exports,$={components:{TheSection:l.a,TheText:r.a}},j=Object(f.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-left")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-left=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-left",rawName:"v-tftl-left",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }"}]})],1)}),[],!1,null,null,null).exports,E={components:{TheSection:l.a,TheText:r.a}},O=Object(f.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TheSection",{scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{staticClass:"description"},[n("span",[n("strong",[e._v("v-tftl-right")])]),n("br"),n("br"),e._v("\n      //\n      "),n("br"),n("br"),e._v(" "),n("pre",[e._v("v-tftl-right=\"{\n scrollTrigger: {\n   toggleActions: 'play none none reset',\n }\n}\"\n      ")])])]},proxy:!0}])},[n("TheText",{directives:[{name:"tftl-right",rawName:"v-tftl-right",value:{scrollTrigger:{toggleActions:"play none none reset"}},expression:"{\n      scrollTrigger: {\n        toggleActions: 'play none none reset',\n      },\n    }"}]})],1)}),[],!1,null,null,null).exports,N={components:{TheHero:o.a,Section1:v,Section2:_,Section3:m,Section4:T,Section5:w,Section6:A,Section7:k,Section8:j,Section9:O},mounted:function(){var e=this;this.$nextTick((function(){e.$tftl.start()}))},destroyed:function(){this.$tftl.reset()}},M=Object(f.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("TheHero",{attrs:{"is-page":!0}}),e._v(" "),n("Section6"),e._v(" "),n("Section7"),e._v(" "),n("Section8"),e._v(" "),n("Section9"),e._v(" "),n("Section1"),e._v(" "),n("Section2"),e._v(" "),n("Section3"),e._v(" "),n("Section4"),e._v(" "),n("Section5")],1)}),[],!1,null,null,null);t.default=M.exports}}]);