(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+lMf":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("F9Bs"),i=o.a.createElement;t.a=function(e){var t=e.data,n=e.className,r=e.entrance;return i(o.a.Fragment,null,i("div",{className:"hero ".concat(n)},i("div",{className:"hero__img backgroundImg",style:{backgroundImage:"url("+t.image+")"}}),i("div",{className:"hero__opening"},i("div",{className:"hero__opening--title"},i(a.a,{slug:t.slug,title:t.title}),i("h1",null,r||t.title)),i("div",{className:"hero__opening--excerpt"},i("p",null,t.content),i("a",{className:"hero__scroll scroller",href:"#content"},t.scroll,i("span",null,"\u25be"))))))}},"/h46":function(e,t,n){n("cHUd")("Map")},"1ryR":function(e,t,n){},"84SC":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),s=n("+lMf"),c=n("9Ksj"),u=(n("1ryR"),o.a.createElement);t.a=function(e){var t=e.data;return u(o.a.Fragment,null,u(s.a,{data:t.main}),u("div",{id:"content",className:"pool pool--home"},t.children.map((function(e,n){return u(i.a,{key:n,href:"en"===e.lang?"/en/referenzen/".concat(e.slug):"/referenzen/".concat(e.slug)},u("a",{className:"home__route"},u("div",{className:"home__route--wrapper"},u("div",{className:"home__route--img backgroundImg",style:{backgroundImage:"url("+e.image+")"}}),u("div",{className:"home__route--content"},u("h3",{className:"title__lg"},e.title),u("p",null,e.excerpt),u("span",{className:"home__route--link"},u(c.a,{name:t.read_more}))))))})),u("div",{className:"pool__pagination"},new Array(t.page_count+1).fill(t.page_count).map((function(e,n){return 1===n?u(i.a,{key:n,href:"en"===t.lang?"/en/referenzen":"/referenzen"},u("a",{className:t.page_number==n?"pageActive":null},n)):n>1?u(i.a,{key:n,href:"en"===t.lang?"/en/referenzen/page/".concat(n):"/referenzen/page/".concat(n)},u("a",{className:t.page_number==n?"pageActive":null},n)):null})))))}},"8iia":function(e,t,n){var r=n("QMMT"),o=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return o(this)}}},"9Ksj":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){var t=e.name;return o("div",{className:"mehrlesen"},o("span",{className:"mehrlesen_text"},t,"\xa0\xa0"),o("div",{className:"mehrlesen_graph"},o("svg",{x:"0px",y:"0px",width:"160px",height:"6px",viewBox:"0 0 160 6"},o("rect",{x:"-0.032",y:"2.5",fill:"#C2AC84",width:"159",height:"1"}),o("polygon",{fill:"#C2AC84",points:"154.979,6 158.682,3 154.979,0 156.392,0 160,3 156.633,6 "}))))}},F9Bs:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){e.slug;var t=e.title;return o("div",{className:"hero__breadcrumb"},o("a",{href:"/"},"HOME")," > ",o("span",null,t))}},LX0d:function(e,t,n){e.exports=n("UDep")},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,o=n("oVml"),a=n("XJU/"),i=n("2GTP"),s=n("EXMj"),c=n("oioR"),u=n("MPFp"),l=n("UO39"),f=n("TJWN"),p=n("jmDH"),h=n("6/1s").fastKey,v=n("n3ko"),d=p?"_s":"size",m=function(e,t){var n,r=h(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,u){var l=e((function(e,r){s(e,l,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[d]=0,void 0!=r&&c(r,n,e[u],e)}));return a(l.prototype,{clear:function(){for(var e=v(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[d]=0},delete:function(e){var n=v(this,t),r=m(n,e);if(r){var o=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=o),o&&(o.p=a),n._f==r&&(n._f=o),n._l==r&&(n._l=a),n[d]--}return!!r},forEach:function(e){v(this,t);for(var n,r=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(v(this,t),e)}}),p&&r(l.prototype,"size",{get:function(){return v(this,t)[d]}}),l},def:function(e,t,n){var r,o,a=m(e,t);return a?a.v=n:(e._l=a={i:o=h(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=a),r&&(r.n=a),e[d]++,"F"!==o&&(e._i[o]=a)),e},getEntry:m,setStrong:function(e,t,n){u(e,t,(function(e,n){this._t=v(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var l,f=u(n("LX0d")),p=n("QmWs"),h=c(n("q1tI")),v=u(n("nOHt")),d=n("g/15");function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new f.default,_=window.IntersectionObserver,y={};function k(){return l||(_?l=new _((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var N=function(e){function t(e){var n;return r(this,t),(n=a(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,s=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),s=s?(0,p.resolve)(c,s):i,e.preventDefault();var u=n.props.scroll;null==u&&(u=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=y[this.getHref()];this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();v.default.prefetch(e),y[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),h.default.cloneElement(a,i)}}]),t}(h.Component);t.default=N},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},rOcY:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="http://goldendoor-api.narcissundtaurus.com/wp-json/gd/"}}]);