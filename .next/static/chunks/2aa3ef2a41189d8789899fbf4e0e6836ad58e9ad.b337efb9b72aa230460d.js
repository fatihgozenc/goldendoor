(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+lMf":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("F9Bs"),s=a.a.createElement;t.a=function(e){var t=e.data,n=e.className,r=e.entrance;return s(a.a.Fragment,null,s("div",{className:"hero ".concat(n)},s("div",{className:"hero__img backgroundImg",style:{backgroundImage:"url("+t.image+")"}}),s("div",{className:"hero__opening"},s("div",{className:"hero__opening--title"},s(o.a,{slug:t.slug,title:t.title}),s("h1",null,r||t.title)),s("div",{className:"hero__opening--excerpt"},s("p",null,t.content),s("a",{className:"hero__scroll scroller",href:"#content"},t.scroll,s("span",null,"\u25be"))))))}},"/h46":function(e,t,n){n("cHUd")("Map")},"4slO":function(e,t,n){},"8jSO":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("ffb8"),s=n("YFqc"),i=n.n(s),l=n("+lMf"),c=n("76ZC"),u=n.n(c),f=n("9Ksj"),p=(n("4slO"),a.a.createElement);t.a=function(e){var t=e.data,n=e.lang,r=t.fields.uber_uns_story,s=t.fields.uber_uns_philosophy;t.fields.uber_uns_extra_text.extra_text_block_1,t.fields.uber_uns_extra_text.extra_text_block_2;return p(a.a.Fragment,null,p(o.NextSeo,{title:t.fields.seo.title,description:t.fields.seo.description}),p(l.a,{data:t,entrance:t.fields.eroffnungstitel}),p("div",{id:"content"},p("div",{className:"story story--right"},p("div",{className:"story__img backgroundImg",style:{backgroundImage:"url("+r.story_bild+")"}}),p("div",{className:"story__content"},p("h2",{className:"title__lg"},r.story_titel),u()(r.story_inhalt),"de"===n?p(i.a,{href:"/referenzen"},p("a",null,p(f.a,{name:"ZUM REFERENZEN"}))):p(i.a,{href:"/en/referenzen"},p("a",null,p(f.a,{name:"TO REFERENCES"}))))),p("div",{className:"extratext"}),p("div",{className:"story story--left"},p("div",{className:"story__content"},p("h2",{className:"title__lg"},s.philosophy_titel),u()(s.philosophy_inhalt),"de"===n?p("a",{href:"/kontakt"},p(f.a,{name:"FRAGEN SIE UNS AN!"})):p("a",{href:"/en/kontakt"},p(f.a,{name:"ASK US!"}))),p("div",{className:"story__img backgroundImg",style:{backgroundImage:"url("+s.philosophy_bild+")"}}))))}},"9Ksj":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createElement;t.a=function(e){var t=e.name;return a("div",{className:"mehrlesen"},a("span",{className:"mehrlesen_text"},t,"\xa0\xa0"),a("div",{className:"mehrlesen_graph"},a("svg",{x:"0px",y:"0px",width:"160px",height:"6px",viewBox:"0 0 160 6"},a("rect",{x:"-0.032",y:"2.5",fill:"#C2AC84",width:"159",height:"1"}),a("polygon",{fill:"#C2AC84",points:"154.979,6 158.682,3 154.979,0 156.392,0 160,3 156.633,6 "}))))}},F9Bs:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createElement;t.a=function(e){e.slug;var t=e.title;return a("div",{className:"hero__breadcrumb"},a("a",{href:"/"},"HOME")," > ",a("span",null,t))}},LX0d:function(e,t,n){e.exports=n("UDep")},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),i=n("N9n2"),l=n("5Uuq"),c=n("KI45");t.__esModule=!0,t.default=void 0;var u,f=c(n("LX0d")),p=n("QmWs"),h=l(n("q1tI")),d=c(n("nOHt")),v=n("g/15");function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new f.default,_=window.IntersectionObserver,y={};function N(){return u||(_?u=new _((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=o(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var s=e(a,o);return t=a,n=o,r=s,s}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,i=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var l=window.location.pathname;s=(0,p.resolve)(l,s),i=i?(0,p.resolve)(l,i):s,e.preventDefault();var c=n.props.scroll;null==c&&(c=i.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](s,i,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return i(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=y[this.getHref()];this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=N();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();d.default.prefetch(e),y[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=a||r),h.default.cloneElement(o,s)}}]),t}(h.Component);t.default=b},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(a(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(a(this,"Map"),0===e?0:e,t)}},r,!0)}}]);