(this["webpackJsonpkoala-web-challenge"]=this["webpackJsonpkoala-web-challenge"]||[]).push([[0],{36:function(e,n,t){"use strict";t.r(n);var o,r,a,i,c,s,l=t(0),u=t.n(l),d=t(10),h=t.n(d),f=t(4),v=t.n(f),g=t(6),m=t(7),b=t(8),p=t(21),w=t(20),j=t(2),x=function(){function e(){Object(m.a)(this,e)}return Object(b.a)(e,[{key:"getTheme",value:function(){var e=Object(g.a)(v.a.mark((function e(){var n,t,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="https://api.koala.io/marketing/v1/device-configurations/alias/web-config"){e.next=3;break}throw new Error("Theme API Url is not specified");case 3:return e.prev=3,(t=new Headers).set("X-Organization-Id","1"),e.next=8,fetch(n,{method:"GET",headers:t});case 8:return o=e.sent,e.next=11,o.json();case 11:return e.abrupt("return",e.sent);case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),O=t(5),k=t.n(O),y=t(3),I=j.b.div(o||(o=Object(y.a)(["\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  height: 100vh;\n  color: ",";\n"])),(function(e){return e.theme.global.body_color}),(function(e){return e.theme.text.primary_text_color})),E=j.b.div(r||(r=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 2rem;\n  height: 100%;\n"]))),S=j.b.h3(a||(a=Object(y.a)(["\n  font-size: 2rem;\n"]))),D=t(1),W=function(e){var n=function(e){if(!e||!e.isValid())return"Target Date is Not Specified";var n=e.days(),t=e.hours(),o=e.minutes(),r=e.seconds();return void 0!==r&&!isNaN(r)&&r<=0?"Event Reached":"".concat(n," days ").concat(t," hours ").concat(o," minutes ").concat(r," seconds")}(e.duration);return Object(D.jsx)(E,{children:Object(D.jsx)(S,{"data-testid":"countdown-title",children:n})})},_=t(18),C=t.n(_),T=j.b.div(i||(i=Object(y.a)(["\n  margin-bottom: 2rem;\n"]))),A=(t(32),function(e){return Object(D.jsxs)(T,{children:[Object(D.jsx)("h3",{children:"Select Event Datetime"}),Object(D.jsx)(C.a,{value:e.value,onChange:e.onChange})]})}),N=j.b.header(c||(c=Object(y.a)(["\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  width: 100%;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n"])),(function(e){return e.theme.header.background_color}),(function(e){return e.theme.header.font_color}),(function(e){return e.theme.header.font_family})),U=j.b.img(s||(s=Object(y.a)(["\n  width: ","px;\n\n  @media (max-width: 768px) {\n    width: ","px;\n  }\n"])),(function(e){return e.theme.header.desktop_logo_width}),(function(e){return e.theme.header.mobile_logo_width})),P=t.p+"static/media/koala-logo.13787c6c.png",z=function(){return Object(D.jsxs)(N,{children:[Object(D.jsx)(U,{alt:"koala-logo",src:P}),Object(D.jsx)("h1",{children:"Koala Web Engineer Coding Challenge"})]})},B=new x,F=function(e){Object(p.a)(t,e);var n=Object(w.a)(t);function t(){var e;Object(m.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).countdownIntervalId=0,e.state={theme:null},e.handleEventDateSet=function(n){e.setState({eventDate:n}),clearInterval(e.countdownIntervalId),e.countdownIntervalId=setInterval(e.countdownFromEventtDate(k()(n)),1e3)},e.countdownFromEventtDate=function(n){return function(){var t=e.getCountdownDuration(n);e.setState({duration:t})}},e.getCountdownDuration=function(e){return e?Object(O.duration)(e.diff(k.a.now())):null},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.getTheme();case 3:n=e.sent,this.setState({theme:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.countdownIntervalId)}},{key:"render",value:function(){var e=this.state.theme&&this.state.theme.data&&this.state.theme.data.data;return this.state.theme&&Object(D.jsx)(j.a,{theme:e,children:Object(D.jsxs)(I,{children:[Object(D.jsx)(z,{}),Object(D.jsx)(A,{value:this.state.eventDate,onChange:this.handleEventDateSet}),Object(D.jsx)(W,{duration:this.state.duration})]})})}}]),t}(u.a.Component),J=F,L=t(19),M=t.n(L),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}M.a.config(),h.a.render(Object(D.jsx)(u.a.StrictMode,{children:Object(D.jsx)(J,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/frontend-engineer-challenge",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/frontend-engineer-challenge","/service-worker.js");R?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(n,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.192c4177.chunk.js.map