(window.webpackJsonpGG2=window.webpackJsonpGG2||[]).push([[0],{126:function(e,t,a){e.exports=a(154)},150:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),i=a.n(r),l=a(19),o=a.n(l),s=a(32),u=a.n(s),m=a(26),d=a(47),p=a.n(d),f=(a(132),a(25)),E=a.n(f),b=a(22),h=a.n(b),v=a(42),g=a.n(v),k=a(33),w=a.n(k),j=a(39),O=a.n(j),x=a(41),y=a.n(x),C=a(40),G=a.n(C),P=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(E.a,{id:t},c.a.createElement(h.a,null,"Example"),n&&c.a.createElement(w.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(O.a,{before:n.photo_200?c.a.createElement(G.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(w.a,{title:"Navigation Example"},c.a.createElement(y.a,null,c.a.createElement(g.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u0421\u043c\u043e\u0442\u0440\u0438, \u0432\u0430\u043d\u0437\u044f\u043a XD"))))},U=a(34),_=a(46),A=a.n(_),I=a(43),K=a.n(I),V=a(44),N=a.n(V),S=a(45),W=a.n(S),D=(a(150),Object(U.b)()),J=function(e){return c.a.createElement(E.a,{id:e.id},c.a.createElement(h.a,{left:c.a.createElement(A.a,{onClick:e.go,"data-to":"home"},D===U.a?c.a.createElement(K.a,null):c.a.createElement(N.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:W.a,alt:"Persik The Cat"}))},T=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(m.a)(i,2),s=l[0],d=l[1],f=Object(n.useState)(null),E=Object(m.a)(f,2),b=E[0],h=E[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,d(e),h(null);case 5:case"end":return t.stop()}}))}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:b},c.a.createElement(P,{id:"home",fetchedUser:s,go:v}),c.a.createElement(J,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(T,null),document.getElementById("root"))},45:function(e,t,a){e.exports=a.p+"static/media/persik.8d7093ec.png"}},[[126,1,2]]]);
//# sourceMappingURL=main.c6564e17.chunk.js.map