(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+lMf":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),s=t("F9Bs"),c=r.a.createElement;n.a=function(e){var n=e.data,t=e.className,a=e.entrance;return c(r.a.Fragment,null,c("div",{className:"hero ".concat(t)},c("div",{className:"hero__img backgroundImg",style:{backgroundImage:"url("+n.image+")"}}),c("div",{className:"hero__opening"},c("div",{className:"hero__opening--title"},c(s.a,{slug:n.slug,title:n.title}),c("h1",null,a||n.title)),c("div",{className:"hero__opening--excerpt"},c("p",null,n.content),c("a",{className:"hero__scroll scroller",href:"#content"},n.scroll,c("span",null,"\u25be"))))))}},"7BxD":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),s=t("+lMf"),c=t("76ZC"),i=t.n(c),l=(t("Ej9T"),r.a.createElement);n.a=function(e){var n=e.data;return console.log(n.fields),l(r.a.Fragment,null,l(s.a,{data:n,entrance:n.fields.eroffnungstitel}),l("div",{id:"content",className:"services"},n.fields.leistung_bearbeitung.map((function(e,n){return l("div",{key:n,className:"home__route"},l("div",{className:"home__route--wrapper services__route--wrapper"},l("div",{className:"home__route--img services__route--img backgroundImg",style:{backgroundImage:"url("+e.leistung_bild+")"}}),l("div",{className:"home__route--content services__route--content"},l("h3",{className:"title__lg"},e.leistung_titel),i()(e.leistung_inhalt))))}))))}},"8iuV":function(e,n,t){"use strict";t.r(n);var a=t("ln6h"),r=t.n(a),s=t("q1tI"),c=t.n(s),i=t("rOcY"),l=t("7BxD"),u=c.a.createElement,o=function(e){var n=e.data;return u(l.a,{data:n})};o.getInitialProps=function(){var e,n;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(fetch("".concat(i.a,"en/services")));case 2:return e=t.sent,t.next=5,r.a.awrap(e.json());case 5:return n=t.sent,t.abrupt("return",{data:n});case 7:case"end":return t.stop()}}))},n.default=o},F9Bs:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a).a.createElement;n.a=function(e){e.slug;var n=e.title;return r("div",{className:"hero__breadcrumb"},r("a",{href:"/"},"HOME")," > ",r("span",null,n))}},"Sb/1":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/leistungen",function(){return t("8iuV")}])}},[["Sb/1",0,2,1,4,13]]]);