(window.webpackJsonpGG2=window.webpackJsonpGG2||[]).push([[0],{126:function(e,t,a){e.exports=a(154)},150:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),i=a(19),o=a.n(i),s=a(32),u=a.n(s),m=a(26),d=a(35),p=a.n(d),f=(a(132),a(25)),E=a.n(f),b=a(22),h=a.n(b),v=a(34),k=a.n(v),g=a(33),w=a.n(g),j=a(41),O=a.n(j),x=a(43),y=a.n(x),C=a(42),G=a.n(C),U=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(E.a,{id:t},c.a.createElement(h.a,null,"Example"),n&&c.a.createElement(w.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(O.a,{before:n.photo_200?c.a.createElement(G.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(w.a,{title:"\u043c\u0435\u043d\u044e"},c.a.createElement(y.a,null,c.a.createElement(k.a,{size:"xl",level:"1",onClick:a,"data-to":"persik"},"\u043a\u043b\u0438\u043a"),c.a.createElement(k.a,{size:"x1",level:"3",onClick:a,"data-to":"wnk"}))))},_=a(36),A=a(47),I=a.n(A),K=a(44),P=a.n(K),V=a(45),S=a.n(V),W=a(46),z=a.n(W),J=(a(150),Object(_.b)()),N=function(e){return c.a.createElement(E.a,{id:e.id},c.a.createElement(h.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},J===_.a?c.a.createElement(P.a,null):c.a.createElement(S.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:z.a,alt:"\u043b\u043e\u0445 The Cat"}))},T=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),i=Object(m.a)(l,2),s=i[0],d=i[1],f=Object(n.useState)(null),E=Object(m.a)(f,2),b=E[0],h=E[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,d(e),h(null);case 5:case"end":return t.stop()}}))}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:b},c.a.createElement(U,{id:"home",fetchedUser:s,go:v}),c.a.createElement(N,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),l.a.render(c.a.createElement(T,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/persik.8d7093ec.png"}},[[126,1,2]]]);
//# sourceMappingURL=main.ea02764f.chunk.js.map