(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{107:function(t,e,n){},108:function(t,e,n){"use strict";n.r(e);var r,c,a,u,o,s=n(0),i=n.n(s),b=n(27),j=n.n(b),l=n(19),O=n(13),d=n(49),f=n(20),p=n(2),h=n(17),g=n(50),v=n.n(g),x=n(4),m=n(8),_=n(21),k=Object(p.c)([],(r={},Object(x.a)(r,_.i,(function(t,e){return e.payload})),Object(x.a)(r,_.c,(function(t,e){var n=e.payload;return[].concat(Object(f.a)(t),[n])})),Object(x.a)(r,_.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),C=Object(p.c)("",Object(x.a)({},_.j,(function(t,e){return e.payload}))),S=Object(m.b)({items:k,filter:C}),y=n(3),E={name:"",email:""},w=null,N=Object(p.c)(E,(c={},Object(x.a)(c,y.a.registerSuccess,(function(t,e){return e.payload.user})),Object(x.a)(c,y.a.loginSuccess,(function(t,e){return e.payload.user})),Object(x.a)(c,y.a.logoutSuccess,(function(){return E})),Object(x.a)(c,y.a.getCurrentUserSuccess,(function(t,e){return e.payload})),c)),U=Object(p.c)(null,(a={},Object(x.a)(a,y.a.registerSuccess,(function(t,e){return e.payload.token})),Object(x.a)(a,y.a.loginSuccess,(function(t,e){return e.payload.token})),Object(x.a)(a,y.a.logoutSuccess,(function(){return null})),a)),A=Object(p.c)(w,(u={},Object(x.a)(u,y.a.registerError,(function(t,e){return e.payload})),Object(x.a)(u,y.a.registerSuccess,(function(){return w})),Object(x.a)(u,y.a.loginError,(function(t,e){return e.payload})),Object(x.a)(u,y.a.loginSuccess,(function(){return w})),Object(x.a)(u,y.a.logoutError,(function(t,e){return e.payload})),Object(x.a)(u,y.a.logoutSuccess,(function(){return w})),Object(x.a)(u,y.a.getCurrentUserError,(function(t,e){return e.payload})),u)),R=Object(p.c)(!1,(o={},Object(x.a)(o,y.a.registerSuccess,(function(){return!0})),Object(x.a)(o,y.a.loginSuccess,(function(){return!0})),Object(x.a)(o,y.a.getCurrentUserSuccess,(function(){return!0})),Object(x.a)(o,y.a.registerError,(function(){return!1})),Object(x.a)(o,y.a.loginError,(function(){return!1})),Object(x.a)(o,y.a.getCurrentUserError,(function(){return!1})),Object(x.a)(o,y.a.logoutSuccess,(function(){return!1})),o)),q=Object(m.b)({user:N,isAuthenticated:R,token:U,error:A}),T=Object(f.a)(Object(p.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),M={key:"token",storage:v.a,whitelist:["token"]},L=Object(p.a)({reducer:{contacts:S,auth:Object(h.g)(M,q)},middleware:T,devTools:!1}),z={store:L,persistor:Object(h.h)(L)},B=n(36),D=n(37),I=n(39),F=n(38),G=n(7),J=n(14),W=n(109),H=n(30),K=n.n(H),Q=n(1),X=function(t){var e=t.to,n=t.text;return Object(Q.jsx)("li",{className:K.a.navbarMenuLink,children:Object(Q.jsx)(l.b,{exact:!0,to:e,className:K.a.navbarMenuLink,activeClassName:K.a.active,children:n})})},Y=[{to:"/",text:"Home"},{to:"/contacts",text:"Contacts"}],P=n(51),V=n.n(P);var Z=function(t){var e=(t.isAuthenticated?Object(f.a)(Y):Y.filter((function(t){return"Contacts"!==t.text}))).map((function(t){return Object(Q.jsx)(X,Object(J.a)({},t),Object(W.a)())}));return Object(Q.jsx)("ul",{className:V.a.nav,children:e})},$=function(t){return t.auth.isAuthenticated},tt=function(t){return t.auth.user.name},et=n(26),nt=n(40),rt=n.p+"static/media/avatar.696e758a.jpg",ct=n(24),at=n.n(ct);var ut={onLogout:et.c},ot=Object(O.b)((function(t){return{name:tt(t),avatar:rt}}),ut)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(Q.jsxs)("div",{className:at.a.container,children:[Object(Q.jsx)("img",{src:e,alt:"",width:"32",className:at.a.avatar}),Object(Q.jsxs)("span",{className:at.a.name,children:["Welcome, ",n]}),Object(Q.jsx)(nt.a,{onClick:r,className:at.a.btn,children:"Logout"})]})})),st=[{to:"/register",text:"Sign up"},{to:"/login",text:"Log in"}],it=n(53),bt=n.n(it);var jt=function(){var t=st.map((function(t){return Object(Q.jsx)(X,Object(J.a)({},t),Object(W.a)())}));return Object(Q.jsx)("ul",{className:bt.a.nav,children:t})},lt=n(35),Ot=n.n(lt),dt=Object(O.b)((function(t){return{isAuthenticated:$(t)}}))((function(t){var e=t.isAuthenticated;return Object(Q.jsx)("nav",{className:"navbar",children:Object(Q.jsx)("div",{className:Ot.a.container,children:Object(Q.jsxs)("div",{className:Ot.a.navbarRow,children:[Object(Q.jsx)(Z,{isAuthenticated:e}),e?Object(Q.jsx)(ot,{}):Object(Q.jsx)(jt,{})]})})})})),ft=n(25),pt=Object(O.b)((function(t){return{isAuthenticated:$(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(ft.a)(t,["component","isAuthenticated","redirectTo"]);return Object(Q.jsx)(G.b,Object(J.a)(Object(J.a)({},c),{},{render:function(t){return n?Object(Q.jsx)(e,Object(J.a)({},t)):Object(Q.jsx)(G.a,{to:r})}}))})),ht=Object(O.b)((function(t){return{isAuthenticated:$(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(ft.a)(t,["component","isAuthenticated","redirectTo"]);return Object(Q.jsx)(G.b,Object(J.a)(Object(J.a)({},c),{},{render:function(t){return n&&c.restricted?Object(Q.jsx)(G.a,{to:r}):Object(Q.jsx)(e,Object(J.a)({},t))}}))})),gt=n(54),vt=n.n(gt),xt=(n(106),n(55)),mt=n.n(xt);var _t=function(){return Object(Q.jsx)("div",{className:mt.a.wrapper,children:Object(Q.jsx)(vt.a,{type:"ThreeDots",color:"green",height:100,width:100,timeout:3e3})})},kt=Object(s.lazy)((function(){return n.e(6).then(n.bind(null,122))})),Ct=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,119))})),St=Object(s.lazy)((function(){return n.e(5).then(n.bind(null,120))})),yt=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,121))})),Et=Object(s.lazy)((function(){return n.e(7).then(n.bind(null,123))})),wt=function(t){Object(I.a)(n,t);var e=Object(F.a)(n);function n(){return Object(B.a)(this,n),e.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(dt,{}),Object(Q.jsx)(s.Suspense,{fallback:Object(Q.jsx)(_t,{}),children:Object(Q.jsxs)(G.d,{children:[Object(Q.jsx)(G.b,{exact:!0,path:"/",component:kt}),Object(Q.jsx)(ht,{exact:!0,path:"/register",restricted:!0,redirectTo:"/contacts",component:St}),Object(Q.jsx)(ht,{exact:!0,path:"/login",restricted:!0,redirectTo:"/contacts",component:yt}),Object(Q.jsx)(pt,{exact:!0,path:"/contacts",component:Ct,redirectTo:"/login"}),Object(Q.jsx)(G.b,{component:Et})]})})]})}}]),n}(s.Component),Nt={onGetCurrentUser:et.a},Ut=Object(O.b)(null,Nt)(wt);n(107);j.a.render(Object(Q.jsx)(i.a.StrictMode,{children:Object(Q.jsx)(O.a,{store:z.store,children:Object(Q.jsx)(l.a,{children:Object(Q.jsx)(d.a,{loading:null,persistor:z.persistor,children:Object(Q.jsx)(Ut,{})})})})}),document.getElementById("root"))},21:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return O}));var r=n(2),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),o=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts / deleteContactRequest"),j=Object(r.b)("contacts / deleteContactSuccess"),l=Object(r.b)("contacts / deleteContactError"),O=Object(r.b)("contacts/filter")},24:function(t,e,n){t.exports={container:"UserMenu_container__3imD1",btn:"UserMenu_btn__16jzA",name:"UserMenu_name__2KQd3",avatar:"UserMenu_avatar__7wBEE"}},26:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return d}));var r=n(16),c=n.n(r),a=n(23),u=n(18),o=n.n(u),s=n(3);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var i=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.a.registerRequest()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:r=e.sent,a=r.data,i(a.token),n(s.a.registerSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(s.a.registerError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},l=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.a.loginRequest()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:r=e.sent,a=r.data,i(a.token),n(s.a.loginSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(s.a.loginError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s.a.logoutRequest()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:b(),e(s.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(s.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,b;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return i(a),e(s.a.getCurrentUserRequest()),t.prev=5,t.next=8,o.a.get("/users/current");case 8:u=t.sent,b=u.data,e(s.a.getCurrentUserSuccess(b)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(s.a.getCurrentUserError(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()}},3:function(t,e,n){"use strict";var r=n(2),c={registerRequest:Object(r.b)("auth/registerRequest"),registerSuccess:Object(r.b)("auth/registerSuccess"),registerError:Object(r.b)("auth/registerError"),loginRequest:Object(r.b)("auth/loginRequest"),loginSuccess:Object(r.b)("auth/loginSuccess"),loginError:Object(r.b)("auth/loginError"),logoutRequest:Object(r.b)("auth/logoutRequest"),logoutSuccess:Object(r.b)("auth/logoutSuccess"),logoutError:Object(r.b)("auth/logoutError"),getCurrentUserRequest:Object(r.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(r.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(r.b)("auth/getCurrentUserError")};e.a=c},30:function(t,e,n){t.exports={navbarMenuLink:"NavbarMenuItem_navbarMenuLink__3b7iS",active:"NavbarMenuItem_active__1AjOC"}},35:function(t,e,n){t.exports={navbarRow:"Navbar_navbarRow__3TTb_",container:"Navbar_container__qrX73"}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(0);var r=n(52),c=n.n(r),a=n(1);var u=function(t){var e=t.children,n=t.type,r=void 0===n?"button":n,u=t.onClick,o=void 0===u?function(){return null}:u,s=t.className;return Object(a.jsx)("button",{className:"".concat(c.a.btn," ").concat(s),type:r,onClick:o,children:e})}},51:function(t,e,n){t.exports={nav:"NavbarNav_nav__UTxuT"}},52:function(t,e,n){t.exports={btn:"Button_btn__1rFyd"}},53:function(t,e,n){t.exports={nav:"AuthNav_nav__2AnYc"}},55:function(t,e,n){t.exports={wrapper:"Loader_wrapper__2daWs"}}},[[108,1,2]]]);
//# sourceMappingURL=main.810fc6c3.chunk.js.map