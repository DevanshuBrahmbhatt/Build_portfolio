(function(t){function e(e){for(var r,n,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,n=1;n<o.length;n++){var s=o[n];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=o[0]))}return t}var r={},n={app:0},a={app:0},i=[];function s(t){return l.p+"js/"+({faq:"faq",profile:"profile"}[t]||t)+"."+{"chunk-0e2dab3c":"c20b1406","chunk-668ab049":"290abb98",faq:"437d2333",profile:"0704947e","chunk-2b8f98af":"93725254","chunk-2d0a40bb":"5e37324a","chunk-0802fc5e":"0e2948ef"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o={"chunk-0e2dab3c":1,"chunk-668ab049":1,faq:1,profile:1,"chunk-2b8f98af":1,"chunk-0802fc5e":1};n[t]?e.push(n[t]):0!==n[t]&&o[t]&&e.push(n[t]=new Promise((function(e,o){for(var r="css/"+({faq:"faq",profile:"profile"}[t]||t)+"."+{"chunk-0e2dab3c":"6ae38c9d","chunk-668ab049":"c79b568c",faq:"cd49f8fd",profile:"2ab88d9e","chunk-2b8f98af":"c79b568c","chunk-2d0a40bb":"31d6cfe0","chunk-0802fc5e":"1bf414a5"}[t]+".css",a=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],f.parentNode.removeChild(f),o(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,o){r=a[t]=[e,o]}));e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var o=a[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,o[1](d)}a[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(o,r,function(e){return t[e]}.bind(null,r));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"48a0":function(t,e,o){t.exports=o.p+"img/cocept.04e5ac1c.png"},"4f83":function(t,e,o){t.exports=o.p+"img/enfold.3cac4add.png"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("router-view")],1)},a=[],i={name:"app",data:function(){return{}}},s=i,l=(o("5c0b"),o("2877")),c=o("6544"),u=o.n(c),d=o("7496"),f=Object(l["a"])(s,n,a,!1,null,null,null),p=f.exports;u()(f,{VApp:d["a"]});var h=o("f309");r["a"].use(h["a"]);var m=new h["a"]({}),v=(o("d3b7"),o("8c4f")),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("HelloWorld")],1)},y=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("core-header"),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{lg:"6","offset-lg":"1","order-md":"1",order:"2"}},[r("div",{staticClass:"display-2 font-weight-bold ",staticStyle:{color:"#d2d2d2!important"}},[t._v("Welcome to Home "),r("span",{staticClass:"white--text"},[t._v(" Portfolio ")])]),r("br"),r("br"),r("v-col",{attrs:{lg:"11",md:"10",sm:"12"}},[r("div",{staticClass:"display-1 mb-3",staticStyle:{color:"#d2d2d2!important"}},[t._v("Why You Need Good Portfolio?")]),r("div",{staticClass:"headline text-justify",staticStyle:{color:"#646464"}},[t._v("Portfolios are a great way to demonstrate the competencies you would list on a resume or talk about in an interview they allow you to show and not just tell. During a job search, the portfolio showcases your work to potential employers. It presents evidence of your relevant skills and abilities. Having an issue building your resume? BuildPortfolio will help you with that. ")])]),r("br"),r("v-col",{attrs:{lg:"11",md:"10",sm:"12"}},[r("div",{staticClass:"display-1 mb-3",staticStyle:{color:"#d2d2d2!important"}},[t._v("Why us?")]),r("div",{staticClass:"headline text-justify",staticStyle:{color:"#646464"}},[t._v("With BuildPorfolio there is no further need of any customization to be made by the user. Other website's alteration of the HTML & CSS is to be done by the user while with BuildPortfolio, you can all depend on us with impressive templates and hassle free editing of just a single form, and you have created an ingenious portfolio within minutes. ")])])],1),r("v-col",{attrs:{lg:"5",md:"5",sm:"12","order-md":"2",order:"1"}},[r("v-img",{staticClass:"text-center mr-10",attrs:{src:o("a8be"),alt:"portfolio"}})],1)],1),r("div",{staticClass:"text-center"},[r("v-sheet",{attrs:{color:"#181818",height:"300"}},[r("div",{staticClass:"display-2",staticStyle:{color:"#d2d2d2"}},[r("br"),t._v(" Make Your Profile Great With us!! ")]),r("br"),r("div",{staticClass:"subtitle-1 text-center",staticStyle:{color:"#666666"}},[t._v("Everything We Do Is Determined By Portfolio ")])])],1),r("v-sheet",{attrs:{color:"grey lighten-4",elevation:20}},[r("v-row",[r("v-col",{attrs:{lg:"11",offset:"1"}},[r("div",{staticClass:"display-3 font-weight-bold ",staticStyle:{color:"#272729!important"}},[r("br"),r("br"),t._v("Simple Yet, Powerful ")])])],1),r("v-container",[r("v-row",[r("v-col",{attrs:{lg:"7",cols:"12"}},[r("div",{staticClass:"display-1 mb-3 ",staticStyle:{color:"#272729!important"}},[r("br"),r("br"),t._v("Design, Details and Done ")]),r("div",{staticClass:"headline text-justify",staticStyle:{color:"#b5acac"}},[r("p",{staticClass:"text-justify mb-2"},[t._v("1. Choose a professional portfolio template.")]),r("p",{staticClass:"text-justify mb-2"},[t._v("2. Build your portfolio.")]),r("p",{staticClass:"text-justify mb-2"},[t._v("3. Get the URL to your portfolio.")]),r("br")])]),r("v-col",{attrs:{lg:"5",cols:"12"}},[r("div",{staticClass:"display-1 ",staticStyle:{color:"#272729!important"}},[r("br"),r("br"),t._v("Quick Setup ")]),r("br"),r("v-btn",{attrs:{href:"/#/themes",color:"#00828C",dark:"",large:""}},[t._v("Create")])],1)],1),r("div",{staticClass:"display-2 text-center font-weight-black"},[r("br"),r("br"),t._v("What kind of portfolio website will you create?")]),r("br"),r("v-row",[r("v-col",{attrs:{lg:"5",sm:"12",md:"5","offset-lg":"1"}},[r("v-img",{attrs:{src:o("48a0")}})],1),r("v-col",{attrs:{lg:"5",md:"5",sm:"12","offset-lg":"1"}},[r("v-img",{attrs:{src:o("c0dc")}})],1)],1),r("v-row",[r("v-col",{attrs:{lg:"5",md:"5",sm:"12","offset-lg":"1"}},[r("v-img",{attrs:{src:o("4f83")}})],1),r("v-col",{attrs:{lg:"5",md:"5",sm:"12","offset-lg":"1"}},[r("v-img",{attrs:{src:o("ff53")}})],1)],1),r("v-row",[r("v-col",{attrs:{lg:"6","offset-lg":"6",cols:"8",offset:"4"}},[r("v-btn",{attrs:{href:"/#/themes",color:"#00828C",elevation:15,dark:"",large:""}},[t._v("Start Now")]),r("br"),r("br")],1)],1)],1)],1),r("v-container",[r("br"),r("br"),t._v(" "),r("div",{staticClass:"display-2 font-weight-medium  ",staticStyle:{color:"#d2d2d2"}},[t._v(" Global stats")]),r("v-divider",{staticClass:"mx-4 white",attrs:{dark:""}}),r("br"),r("div",{staticClass:"display-1 font-weight-medium  ",staticStyle:{color:"#aaa"}},[t._v("Trusted by "),r("span",{staticStyle:{"font-size":"60px !important",color:"#eafafe"}},[t._v(t._s(t.count))]),t._v(" Creatives")]),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"display-2 font-weight-bold  ",staticStyle:{color:"#d2d2d2"}},[t._v(" Online portfolio FAQ")]),r("v-divider",{staticClass:"mx-4 white",attrs:{dark:""}}),r("br"),r("v-row",[r("v-expansion-panels",{attrs:{inset:""}},t._l(t.items,(function(e,o){return r("v-expansion-panel",{key:o,staticStyle:{background:"#191919"}},[r("v-expansion-panel-header",{staticClass:"title text-justify",staticStyle:{color:"#d2d2d2"},domProps:{textContent:t._s(e.question)}}),r("v-divider",{staticClass:"mx-4",attrs:{dark:""}}),r("v-expansion-panel-content",{staticClass:"subtitle-1 text-justify",staticStyle:{color:"#d2d2d2"},domProps:{textContent:t._s(e.answer)}})],1)})),1)],1),r("br"),r("br")],1)],1),r("core-footer")],1)},w=[],C=o("bc3a"),k=o.n(C),x=o("e22e"),_=o.n(x),S={mounted:function(){var t=this;k.a.get(_.a.url+"/api/count").then((function(e){t.count=e.data})).catch((function(t){console.log(t)}))},components:{CoreHeader:function(){return o.e("chunk-668ab049").then(o.bind(null,"8b55"))},CoreFooter:function(){return o.e("chunk-0e2dab3c").then(o.bind(null,"0588"))}},data:function(){return{count:"",items:[{question:"What is BuildPortfolio?",answer:"BuildPortfolio is an online portfolio builder that assist job seekers, employees, students, and professionals to create well-formatted, professional-looking portfolio with great ease. It provides everything that you need to write a professional portfolio and deliver your information in a proper format to make a right impression on your hiring manager. It offers plenty of professionally designed portfolio templates, portfolio tips and guidelines and more to enable you build a perfect portfolio for your job search endeavor."},{question:"How does BuildPortfolio work?",answer:"It is very easy for you to create a well-formatted portfolio with BuildPortfolio. It features a brilliant step-by-step portfolio building wizard that enables you create and edit your portfolio quickly. You just need to choose your desired template and fill appropriate information in each section of portfolio wizard. Once you finish entering your information, you can see the preview of your portfolio. "},{question:"What if I need to update my portfolio?",answer:"Your progress is automatically saved. Therefore, if you want to update your portfolio, you can log in anytime and edit according to your convenience."},{question:"Can I download my free portfolio?",answer:"A URL will be created which will lead to the created portfolio. You can further copy the link for further applications."},{question:"Is my personal information secure with BuildPortfolio?",answer:"Your personal information is completely secured with BuildPortfolio as long as you do not share your Google log in details (Email Id and Password) with anyone else. Your information is protected by the standard security."}]}}},P=S,j=o("8336"),q=o("62ad"),E=o("a523"),O=o("ce7e"),B=o("cd55"),V=o("49e2"),I=o("c865"),T=o("0393"),W=o("adda"),A=o("0fd9"),D=o("8dd9"),H=Object(l["a"])(P,g,w,!1,null,"2262c1a5",null),L=H.exports;u()(H,{VApp:d["a"],VBtn:j["a"],VCol:q["a"],VContainer:E["a"],VDivider:O["a"],VExpansionPanel:B["a"],VExpansionPanelContent:V["a"],VExpansionPanelHeader:I["a"],VExpansionPanels:T["a"],VImg:W["a"],VRow:A["a"],VSheet:D["a"]});var Y={name:"home",components:{HelloWorld:L}},N=Y,M=Object(l["a"])(N,b,y,!1,null,null,null),G=M.exports;r["a"].use(v["a"]);var z=[{path:"/",name:"home",component:G},{path:"/developers",name:"developers",component:function(){return o.e("profile").then(o.bind(null,"03bd"))}},{path:"/themes",name:"themes",component:function(){return o.e("faq").then(o.bind(null,"79fc"))}},{path:"/tutorial",name:"tutorial",component:function(){return o.e("faq").then(o.bind(null,"471e"))}},{path:"/leaderboard",name:"leaderboard",component:function(){return o.e("faq").then(o.bind(null,"eb52"))}},{path:"/create/:template/:id/",name:"create",component:function(){return o.e("faq").then(o.bind(null,"5baf"))}},{path:"/1/:username",name:"theme1",component:function(){return o.e("faq").then(o.bind(null,"621a"))}},{path:"/2/:username",name:"theme2",component:function(){return o.e("faq").then(o.bind(null,"ef09"))}},{path:"/3/:username",name:"theme3",component:function(){return o.e("faq").then(o.bind(null,"c4fd"))}},{path:"/4/:username",name:"theme4",component:function(){return o.e("faq").then(o.bind(null,"547c"))}}],$=new v["a"]({routes:z}),F=$;r["a"].config.productionTip=!1,new r["a"]({vuetify:m,router:F,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var r=o("7694"),n=o.n(r);n.a},7694:function(t,e,o){},a8be:function(t,e,o){t.exports=o.p+"img/build.ce38b029.png"},c0dc:function(t,e,o){t.exports=o.p+"img/iconic.29f996fd.png"},e22e:function(t,e){t.exports={url:" https://www.buildportfolio.in"}},ff53:function(t,e,o){t.exports=o.p+"img/cubic.c4b48aeb.png"}});
//# sourceMappingURL=app.859bf264.js.map