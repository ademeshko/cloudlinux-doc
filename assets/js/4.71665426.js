(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,11,12,14,15,18,19],{276:function(t,e,n){},279:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){},283:function(t,e,n){},284:function(t,e,n){var i=n(18),r="["+n(279)+"]",a=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},287:function(t,e,n){"use strict";n.r(e);n(54),n(273);var i=n(271);function r(t,e,n,i,r){var a=t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n);return t("div",{class:{active:i,"sidebar-link-container":!!r},on:{click:function(t){var e=t.target.classList;e.contains("collapsed")?e.remove("collapsed"):e.add("collapsed")}}},[a])}function a(t,e,n,s,o){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||u>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(i.d)(s,n+"#"+e.slug);return t("li",{class:{collapsible:u<2,"sidebar-sub-header":!0}},[r(t,n+"#"+e.slug,e.title,c,e.children),a(t,e.children,n,s,o,u+1)])}))}var s={functional:!0,props:["item"],render:function(t,e){var n=e.parent,s=n.$page,o=n.$site,u=n.$route,c=e.props.item,l=Object(i.d)(u,c.path),d="auto"===c.type?l||c.children.some(function(t){return Object(i.d)(u,c.basePath+"#"+t.slug)}):l,f=function(t,e,n,i,a){var s=!!a&&a.some(function(t){return 2===t.level});return t("div",{class:{active:i,collapsed:i,"sidebar-header":!0,"sidebar-link":!0,"sidebar-header--empty":!s},on:{click:function(t){var e=t.target.classList,n=e.contains("collapsed");n?e.remove("collapsed"):e.add("collapsed")}}},[r(t,e,n,i)])}(t,c.path,c.title||c.path,d,c.headers),h=null!=s.frontmatter.sidebarDepth?s.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,p=null==h?1:h;return"auto"===c.type?[f,a(t,c.children,c.basePath,u,p)]:c.headers&&c.headers.length>0?[f,a(t,Object(i.c)(c.headers),c.path,u,p)]:r(t,c.path,c.title||c.path,d,c.children)}},o=(n(300),n(32)),u=Object(o.a)(s,void 0,void 0,!1,null,null,null);e.default=u.exports},293:function(t,e,n){},294:function(t,e,n){},295:function(t,e,n){},296:function(t,e,n){},297:function(t,e,n){},298:function(t,e,n){},299:function(t,e,n){},300:function(t,e,n){"use strict";var i=n(276);n.n(i).a},301:function(t,e,n){},302:function(t,e,n){},303:function(t,e,n){"use strict";var i=n(280);n.n(i).a},304:function(t,e,n){"use strict";var i=n(281);n.n(i).a},305:function(t,e,n){"use strict";var i=n(134),r=n(13),a=n(18),s=n(306),o=n(135);i("search",1,function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),u=String(this),c=a.lastIndex;s(c,0)||(a.lastIndex=0);var l=o(a,u);return s(a.lastIndex,c)||(a.lastIndex=c),null===l?-1:l.index}]})},306:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},307:function(t,e,n){"use strict";var i=n(1),r=n(284).trim;i({target:"String",proto:!0,forced:n(308)("trim")},{trim:function(){return r(this)}})},308:function(t,e,n){var i=n(2),r=n(279);t.exports=function(t){return i(function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t})}},309:function(t,e,n){"use strict";var i=n(282);n.n(i).a},310:function(t,e,n){"use strict";var i=n(1),r=n(33).find,a=n(86),s=n(16),o=!0,u=s("find");"find"in[]&&Array(1).find(function(){o=!1}),i({target:"Array",proto:!0,forced:o||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},311:function(t,e,n){"use strict";var i=n(283);n.n(i).a},314:function(t,e,n){"use strict";n.r(e);n(138),n(53),n(305),n(307);var i={data:function(){return{query:"",focused:!1,focusIndex:0}},created:function(){this.query=this.inputLabel},watch:{focused:function(t){t?this.query="":this.query||(this.query=this.inputLabel)},inputLabel:function(){this.query=this.inputLabel}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t||t===this.inputLabel){for(var e=this.$site,n=e.pages,i=e.themeConfig.searchMaxSuggestions||5,r=this.$localePath,a=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],o=0;o<n.length&&!(s.length>=i);o++){var u=n[o];if(this.getPageLocalePath(u)===r)if(a(u))s.push(u);else if(u.headers)for(var c=0;c<u.headers.length&&!(s.length>=i);c++){var l=u.headers[c];a(l)&&s.push(Object.assign({},u,{path:u.path+"#"+l.slug,header:l}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2},inputLabel:function(){return this.$themeLocaleConfig.search||"Search"}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},r=(n(309),n(32)),a=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":t.inputLabel,placeholder:t.inputLabel,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null);e.default=a.exports},315:function(t,e,n){"use strict";n.r(e);var i=n(287),r=n(285),a={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:i.default,DropdownTransition:r.default}},s=(n(311),n(32)),o=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("div",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null);e.default=o.exports},316:function(t,e,n){"use strict";n.r(e);n(19),n(83),n(84);var i=n(57),r={props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){Promise.all([Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,353,7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,354,7))]).then(function(e){var n=Object(i.a)(e,1)[0];n=n.default;t.algoliaOptions;n(Object.assign({},t,{inputSelector:"#algolia-search-input"}))})},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}},a=(n(303),n(32)),s=Object(a.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null);e.default=s.exports},317:function(t,e,n){"use strict";n.r(e);n(304);var i=n(32),r=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null);e.default=r.exports},318:function(t,e,n){"use strict";n(137),n(85),n(53),n(78);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}e.a={methods:{checkRedirect:function(){return!!this.newUrl&&(this.$router.replace(this.newUrl),!0)}},computed:{redirectionMapping:function(){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.$site.themeConfig.redirectionMapping);return t["/"]=this.$site.themeConfig.defaultURL,t},path:function(){var t=this.$route.fullPath;return!!this.redirectionMapping[t]||"/?"!==t.substr(0,2)||(t=[t.slice(0,1),"index.html",t.slice(1)].join("")),t},newUrl:function(){return this.redirectionMapping[this.path]}}}},320:function(t,e,n){t.exports=n.p+"assets/img/we-are-cloudlinux.783ed390.svg"},321:function(t,e,n){"use strict";var i=n(293);n.n(i).a},322:function(t,e,n){"use strict";var i=n(294);n.n(i).a},323:function(t,e,n){var i=n(1),r=n(324);i({global:!0,forced:parseInt!=r},{parseInt:r})},324:function(t,e,n){var i=n(4),r=n(284).trim,a=n(279),s=i.parseInt,o=/^[+-]?0[Xx]/,u=8!==s(a+"08")||22!==s(a+"0x16");t.exports=u?function(t,e){var n=r(String(t));return s(n,e>>>0||(o.test(n)?16:10))}:s},326:function(t,e,n){"use strict";var i=n(295);n.n(i).a},327:function(t,e,n){"use strict";var i=n(296);n.n(i).a},328:function(t,e,n){"use strict";var i=n(297);n.n(i).a},329:function(t,e,n){"use strict";var i=n(7),r=n(4),a=n(141),s=n(20),o=n(5),u=n(24),c=n(312),l=n(36),d=n(2),f=n(37),h=n(56).f,p=n(23).f,v=n(8).f,g=n(284).trim,m=r.Number,b=m.prototype,_="Number"==u(f(b)),C=function(t){var e,n,i,r,a,s,o,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=g(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(s=(a=c.slice(2)).length,o=0;o<s;o++)if((u=a.charCodeAt(o))<48||u>r)return NaN;return parseInt(a,i)}return+c};if(a("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var $,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(_?d(function(){b.valueOf.call(n)}):"Number"!=u(n))?c(new m(C(e)),n,x):C(e)},k=i?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;k.length>y;y++)o(m,$=k[y])&&!o(x,$)&&v(x,$,p(m,$));x.prototype=b,b.constructor=x,s(r,"Number",x)}},330:function(t,e,n){"use strict";var i=n(298);n.n(i).a},331:function(t,e,n){"use strict";var i=n(299);n.n(i).a},332:function(t,e,n){"use strict";var i=n(301);n.n(i).a},333:function(t,e,n){"use strict";var i=n(302);n.n(i).a},334:function(t,e,n){},335:function(t,e,n){},337:function(t,e,n){"use strict";n.r(e);n(140),n(53),n(78);var i=n(271),r=(n(310),n(272),{name:"Breadcrumb",computed:{bread:function(){var t=this.$page.path.split("/");t[t.length-1].length||t.pop();for(var e="",n=[],i=0;i<t.length;i++){e+=t[i];var r=this.$site.pages.find(function(t){return t.path===e||t.path===e+"/"});e+="/",null!=r&&"/"!==r.path&&n.push({path:r.path,title:r.frontmatter.breadcrumb||r.title})}return n}}}),a=(n(327),n(32)),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-wrapper"},[n("span",{staticClass:"breadcrumb-title"},[t._v(t._s(t.$siteTitle)+":")]),t._v(" "),t._l(t.bread,function(e){return n("router-link",{key:e.path,staticClass:"breadcrumb",attrs:{to:e.path}},[t._v("\n    "+t._s(e.title)+"\n  ")])})],2)},[],!1,null,"5e0e0acf",null).exports,o=(n(79),n(80),n(30)),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){var t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(i.k)(this.$site.pages,t,this.$route.path):this.resolvePrev(this.$page,this.sidebarItems)},next:function(){var t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(i.k)(this.$site.pages,t,this.$route.path):this.resolveNext(this.$page,this.sidebarItems)}},methods:{resolvePrev:function(t,e){return this.find(t,e,-1)},resolveNext:function(t,e){return this.find(t,e,1)},find:function(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(o.a)(t.children||[])):i.push(t)});for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===t.path)return i[r+n]}}}},c=(n(328),Object(a.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[t.prev?n("router-link",{staticClass:"nav-arrow left",attrs:{to:t.prev.path}}):t._e(),t._v(" "),t.next?n("router-link",{staticClass:"nav-arrow right",attrs:{to:t.next.path}}):t._e()],1):t._e()},[],!1,null,null,null).exports),l=(n(329),{name:"BackToTop",props:{boundary:{type:Number,default:200}},data:function(){return{isVisible:!1}},mounted:function(){window&&(this.handleScroll(),window.addEventListener("scroll",this.handleScroll))},destroyed:function(){window&&window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isVisible=window.pageYOffset>this.boundary}}}),d=(n(330),{props:["sidebarItems"],components:{Breadcrumb:s,PageNav:c,BackToTop:Object(a.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-to-top"},[e("router-link",{staticClass:"nav-arrow top back-to-top__link",class:{active:this.isVisible},attrs:{to:"#app"}})],1)},[],!1,null,"5366e0dd",null).exports},computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,a=void 0===r?"":r,s=t.docsBranch,o=void 0===s?"master":s,u=t.docsRepo,c=void 0===u?e:u,l=Object(i.h)(this.$page.path);return i.a.test(l)?l+="README.md":l+=".md",c&&n?this.createEditLink(e,c,a,o,l):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/".concat(r)+(n?"/"+n.replace(i.a,""):"")+a+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit/".concat(r)+(n?"/"+n.replace(i.a,""):"")+a}}}),f=(n(331),Object(a.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Breadcrumb",{staticClass:"page-breadcrumb"}),t._v(" "),n("div",{staticClass:"page-nav-wrapper"},[n("PageNav",{attrs:{"sidebar-items":t.sidebarItems}})],1),t._v(" "),n("Content",{staticClass:"content",attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),n("BackToTop"),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));e.default=f.exports},338:function(t,e,n){"use strict";n.r(e);n(140);var i={name:"Footer",computed:{year:function(){return(new Date).getFullYear()}}},r=(n(321),n(32)),a=Object(r.a)(i,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",[i("a",{attrs:{href:t.$site.themeConfig.cloudlinuxSite}},[i("img",{attrs:{src:n(320),alt:"We are Cloudlinux"}})])]),t._v(" "),i("div",{staticClass:"footer-company-title"},[t._v(t._s(t.year)+". CloudLinux Inc")]),t._v(" "),i("div",t._l(t.$themeLocaleConfig.bottomLinks,function(e){return i("div",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.text))])])}),0),t._v(" "),i("div",{staticClass:"social"},[i("span",{staticClass:"footer-social-text"},[t._v(t._s(t.$themeLocaleConfig.stayInTouch))]),t._v(" "),t._l(t.$site.themeConfig.social,function(t){return i("a",{attrs:{href:t.url,target:"_blank"}},[i("img",{staticClass:"footer-social-logo",attrs:{src:t.logo}})])})],2)])},[],!1,null,"3ca314c6",null);e.default=a.exports},339:function(t,e,n){"use strict";n.r(e);var i={components:{NavLink:n(286).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(322),n(32)),a=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null);e.default=a.exports},340:function(t,e,n){"use strict";n.r(e);n(323),n(53),n(78);var i=n(317),r=n(316),a=n(314),s=n(313);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={components:{SidebarButton:i.default,NavLinks:s.default,SearchBox:a.default,AlgoliaSearchBox:r.default},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},tryFreeTitle:function(){return this.$themeLocaleConfig.tryFree||"Try Free"},submitRequestTitle:function(){return this.$themeLocaleConfig.submitRequest||"Submit Request"},homeUrl:function(){return(this.$localePath+this.$site.themeConfig.defaultURL).replace(/\/+/g,"/")}}},c=(n(326),n(32)),l=Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.homeUrl}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name site-name--documentation",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[n("a",{staticClass:"btn",attrs:{href:"https://cloudlinux.zendesk.com/hc/en-us/requests/new",target:"_blank"}},[t._v("\n      "+t._s(t.submitRequestTitle)+"\n    ")]),t._v(" "),n("a",{staticClass:"btn",attrs:{href:t.$site.themeConfig.try_free,target:"_blank"}},[t._v("\n      "+t._s(t.tryFreeTitle)+"\n    ")]),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null);e.default=l.exports},342:function(t,e,n){"use strict";n.r(e);n(273);var i=n(315),r=n(287),a=n(313),s=n(271);var o={components:{SidebarGroup:i.default,SidebarLink:r.default,NavLinks:a.default},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return Object(s.d)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(s.d)(this.$route,t.path)}}},u=(n(332),n(32)),c=Object(u.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null);e.default=c.exports},343:function(t,e,n){"use strict";n.r(e);var i=n(45),r={props:{updateEvent:{type:Object,default:null}},computed:{popupConfig:function(){for(var t=0,e=[this.$themeLocaleConfig,this.$site.themeConfig];t<e.length;t++){var n=e[t].serviceWorker;if(n&&n.updatePopup)return"object"===Object(i.a)(n.updatePopup)?n.updatePopup:{}}return null},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||"New content is available."},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||"Refresh"}},methods:{reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},a=(n(333),n(32)),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n    "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()])},[],!1,null,null,null);e.default=s.exports},344:function(t,e,n){"use strict";n.r(e);n(142),n(137),n(19),n(53),n(272);var i=n(0),r={name:"gtranslate-io",render:function(){if("undefined"!=typeof window){var t=this,e=window.location.pathname.split(this.$localePath).join(""),n=this.$site.themeConfig.translationSource,r="".concat("https:","//").concat(this.$lang,".").concat(n,"/").concat(e);fetch(r).then(function(t){return t.ok?t.text():Promise.reject(new Error(t.statusText))}).then(function(e){var n=(new DOMParser).parseFromString(e,"text/html").getElementsByClassName("content")[0],r=i.a.compile("<div>"+n.innerHTML+"</div>");t.$options.render=r.render,t.$options.staticRenderFns=r.staticRenderFns,t.$forceUpdate()}).catch(function(t){console.error(t)})}}},a=n(32),s=Object(a.a)(r,void 0,void 0,!1,null,null,null);e.default=s.exports},345:function(t,e,n){var i,r;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(r="function"==typeof(i=function(){var t,e,n={version:"0.2.0"},i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function r(t,e,n){return t<e?e:t>n?n:t}function a(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(i[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=r(t,i.minimum,1),n.status=1===t?null:t;var u=n.render(!e),c=u.querySelector(i.barSelector),l=i.speed,d=i.easing;return u.offsetWidth,s(function(e){""===i.positionUsing&&(i.positionUsing=n.getPositioningCSS()),o(c,function(t,e,n){var r;return(r="translate3d"===i.positionUsing?{transform:"translate3d("+a(t)+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+a(t)+"%,0)"}:{"margin-left":a(t)+"%"}).transition="all "+e+"ms "+n,r}(t,l,d)),1===t?(o(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){o(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},l)},l)):setTimeout(e,l)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},i.trickleSpeed)};return i.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*r(Math.random()*e,.1,.95)),e=r(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},t=0,e=0,n.promise=function(i){return i&&"resolved"!==i.state()?(0===e&&n.start(),t++,e++,i.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)}),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=i.template;var r,s=e.querySelector(i.barSelector),u=t?"-100":a(n.status||0),l=document.querySelector(i.parent);return o(s,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),i.showSpinner||(r=e.querySelector(i.spinnerSelector))&&f(r),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(i.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&f(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var s=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),o=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var i,r=t.length,a=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((i=t[r]+a)in n)return i;return e}(n))}function i(t,e,i){e=n(e),t.style[e]=i}return function(t,e){var n,r,a=arguments;if(2==a.length)for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&i(t,n,r);else i(t,a[1],a[2])}}();function u(t,e){var n="string"==typeof t?t:d(t);return n.indexOf(" "+e+" ")>=0}function c(t,e){var n=d(t),i=n+e;u(n,e)||(t.className=i.substring(1))}function l(t,e){var n,i=d(t);u(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function d(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function f(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?i.call(e,n,e,t):i)||(t.exports=r)},350:function(t,e,n){"use strict";var i=n(334);n.n(i).a},351:function(t,e,n){"use strict";var i=n(335);n.n(i).a},355:function(t,e,n){"use strict";n.r(e);n(146);var i=n(0),r=n(345),a=n.n(r),s=n(339),o=n(340),u=n(338),c=n(337),l=n(342),d=n(343),f=n(271),h=n(344),p=n(318),v={mixins:[p.a],created:function(){this.checkRedirect()}},g=n(32),m=Object(g.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports;i.a.component("gtranslate-io",h.default),i.a.component("Redirect",m);var b={mixins:[p.a],components:{Home:s.default,Page:c.default,Sidebar:l.default,Navbar:o.default,SWUpdatePopup:d.default,Footer:u.default},data:function(){return{isSidebarOpen:!1,swUpdateEvent:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(f.l)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),a.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||a.a.start(),n()}),this.$router.afterEach(function(){a.a.done(),t.isSidebarOpen=!1}),this.$on("sw-updated",this.onSWUpdated),this.checkRedirect()},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onSWUpdated:function(t){this.swUpdateEvent=t}}},_=(n(350),n(351),Object(g.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),n("Footer"),t._v(" "),n("SWUpdatePopup",{attrs:{updateEvent:t.swUpdateEvent}})],1)},[],!1,null,null,null));e.default=_.exports}}]);