(this["webpackJsonpkoala-web-challenge"]=this["webpackJsonpkoala-web-challenge"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var a,r,o,c,i,s,u=n(0),l=n.n(u),d=n(10),h=n.n(d),f=n(4),m=n.n(f),b=n(6),j=n(7),v=n(8),g=n(21),p=n(20),x=n(2),O=function(){function e(){Object(j.a)(this,e)}return Object(v.a)(e,[{key:"getTheme",value:function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="https://api.koala.io/marketing/v1/device-configurations/alias/web-config"){e.next=3;break}throw new Error("Theme API Url is not specified");case 3:return e.prev=3,(n=new Headers).set("X-Organization-Id","1"),e.next=8,fetch(t,{method:"GET",headers:n});case 8:return a=e.sent,e.next=11,a.json();case 11:return e.abrupt("return",e.sent);case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),w=n(5),y=n.n(w),k=n(3),I=x.b.div(a||(a=Object(k.a)(["\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  height: 100vh;\n  color: ",";\n"])),(function(e){return e.theme.global.body_color}),(function(e){return e.theme.text.primary_text_color})),D=x.b.div(r||(r=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 2rem;\n  height: 100%;\n"]))),E=x.b.h3(o||(o=Object(k.a)(["\n  font-size: 2rem;\n"]))),_=n(1),C=function(e){var t=function(e){var t=e&&e.days(),n=e&&e.hours(),a=e&&e.minutes(),r=e&&e.seconds();return e&&void 0!==r&&!isNaN(r)?void 0!==r&&r<0?"Event Reached":"".concat(t," days ").concat(n," hours ").concat(a," minutes ").concat(r," seconds"):"Target Date is Not Specified"}(e.duration);return Object(_.jsx)(D,{children:Object(_.jsx)(E,{children:t})})},S=n(18),T=n.n(S),N=x.b.div(c||(c=Object(k.a)(["\n  margin-bottom: 2rem;\n"]))),z=(n(32),function(e){return Object(_.jsxs)(N,{children:[Object(_.jsx)("h3",{children:"Select Event Datetime"}),Object(_.jsx)(T.a,{value:e.value,onChange:e.onChange})]})}),A=x.b.header(i||(i=Object(k.a)(["\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  width: 100%;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n"])),(function(e){return e.theme.header.background_color}),(function(e){return e.theme.header.font_color}),(function(e){return e.theme.header.font_family})),F=x.b.img(s||(s=Object(k.a)(["\n  width: ","px;\n\n  @media (max-width: 768px) {\n    width: ","px;\n  }\n"])),(function(e){return e.theme.header.desktop_logo_width}),(function(e){return e.theme.header.mobile_logo_width})),J=n.p+"static/media/koala-logo.13787c6c.png",M=function(){return Object(_.jsxs)(A,{children:[Object(_.jsx)(F,{alt:"koala-logo",src:J}),Object(_.jsx)("h1",{children:"Koala Web Engineer Coding Challenge"})]})},U=new O,W=function(e){Object(g.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).countdownIntervalId=0,e.state={theme:null},e.handleEventDateSet=function(t){e.setState({eventDate:t}),clearInterval(e.countdownIntervalId),e.countdownIntervalId=setInterval(e.countdownFromEventtDate(y()(t)),1e3)},e.countdownFromEventtDate=function(t){return function(){var n=e.getCountdownDuration(t);e.setState({duration:n})}},e.getCountdownDuration=function(e){return e?Object(w.duration)(e.diff(y.a.now())):null},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.getTheme();case 3:t=e.sent,this.setState({theme:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.countdownIntervalId)}},{key:"render",value:function(){var e=this.state.theme&&this.state.theme.data&&this.state.theme.data.data;return this.state.theme&&Object(_.jsx)(x.a,{theme:e,children:Object(_.jsxs)(I,{children:[Object(_.jsx)(M,{}),Object(_.jsx)(z,{value:this.state.eventDate,onChange:this.handleEventDateSet}),Object(_.jsx)(C,{duration:this.state.duration})]})})}}]),n}(l.a.Component),B=W,G=n(19);n.n(G).a.config(),h.a.render(Object(_.jsx)(l.a.StrictMode,{children:Object(_.jsx)(B,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.50d90709.chunk.js.map