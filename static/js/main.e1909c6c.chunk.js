(window.webpackJsonpGG2=window.webpackJsonpGG2||[]).push([[0],{127:function(e,t,n){e.exports=n(155)},151:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(31),i=n.n(a),o=n(19),u=n.n(o),m=n(32),d=n.n(m),l=n(26),s=n(35),w=n.n(s),p=(n(133),n(25)),f=n.n(p),E=n(22),h=n.n(E),b=n(34),v=n.n(b),k=n(33),g=n.n(k),j=n(42),x=n.n(j),y=n(44),C=n.n(y),I=n(43),O=n.n(I),P=function(e){var t=e.id,n=e.go,c=e.fetchedUser;return r.a.createElement(f.a,{id:t},r.a.createElement(h.a,null,"Example"),c&&r.a.createElement(g.a,{title:"User Data Fetched with VK Connect"},r.a.createElement(x.a,{before:c.photo_200?r.a.createElement(O.a,{src:c.photo_200}):null,description:c.city&&c.city.title?c.city.title:""},"".concat(c.first_name," ").concat(c.last_name))),r.a.createElement(g.a,{title:"\u043c\u0435\u043d\u044e"},r.a.createElement(C.a,null,r.a.createElement(v.a,{size:"xl",level:"1",onClick:n,"data-to":"persik"},"\u043a\u043b\u0438\u043a"),r.a.createElement(v.a,{size:"x1",level:"3",onClick:n,"data-to":"wnk"}))))},$=n(36),G=n(48),T=n.n(G),U=n(45),_=n.n(U),A=n(46),K=n.n(A),N=n(47),V=n.n(N),S=(n(151),n(41),Object($.b)()),W=function(e){return r.a.createElement(f.a,{id:e.id},r.a.createElement(h.a,{left:r.a.createElement(T.a,{onClick:e.go,"data-to":"home"},S===$.a?r.a.createElement(_.a,null):r.a.createElement(K.a,null))},"Persik"),r.a.createElement("img",{className:"wnk",src:V.a,alt:"\u043b\u043e\u0445 The Cat"}))},q=function(){var e=Object(c.useState)("home"),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),o=Object(l.a)(i,2),m=o[0],s=o[1],p=Object(c.useState)(null),f=Object(l.a)(p,2),E=f[0],h=f[1];Object(c.useEffect)((function(){u.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(u.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,s(e),h(null);case 5:case"end":return t.stop()}}))}()}),[]);var b=function(e){a(e.currentTarget.dataset.to)};return r.a.createElement(w.a,{activePanel:n,popout:E},r.a.createElement(P,{id:"home",fetchedUser:m,go:b}),r.a.createElement(W,{id:"persik",go:b}))};u.a.send("VKWebAppInit"),i.a.render(r.a.createElement(q,null),document.getElementById("root"))},41:function(e,t){document.write("<!DOCTYPE html>\n"),document.write("<html>\n"),document.write("<head>\n"),document.write("  <title>Cookie clicker</title>\n"),document.write("  \n"),document.write('  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"><\/script>\n'),document.write(" \n"),document.write("/ 1\n"),document.write("var printError = function(error, explicit) {\n"),document.write("    console.log(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name}: ${error.message}`)\n"),document.write(" }\n"),document.write("\n"),document.write('  <script type="text/javascript">\n'),document.write("$(document).ready(function(){\n"),document.write("\t\tvar counter= 0\n"),document.write("\t\tvar increment = 1;\n"),document.write("\t\t\n"),document.write('\t$("#\u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438").click(function(){\n'),document.write("\t\tcounter += increment;\n"),document.write('\t\t$("#counter").html("<h1> "+counter+" \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438");\n'),document.write("\tif (counter>=20){\n"),document.write("\t\tincrement = 2;\n"),document.write("\t}\n"),document.write("\t\n"),document.write("\t})\n"),document.write("\t})\n"),document.write("  <\/script>\n"),document.write("  <title>Cookie clicker!</title>\n"),document.write("</head>\n"),document.write("<body>\n"),document.write('<div id="counter">\n'),document.write("</div>\n"),document.write('<div id="\u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438">\n'),document.write('  <img className="wnk" src={wnk} alt="wow"/>\n'),document.write("</div>\n"),document.write('<div id="audo">\n'),document.write("</html>")},47:function(e,t,n){e.exports=n.p+"static/media/wnk.f19ec58e.png"}},[[127,1,2]]]);
//# sourceMappingURL=main.e1909c6c.chunk.js.map