(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__iCXcz",dialogsItems:"Dialogs_dialogsItems__3R_DA",dialog:"Dialogs_dialog__1KkBl",activeLink:"Dialogs_activeLink__fmbvz",messages:"Dialogs_messages__iAoWP",message:"Dialogs_message__i31Lk"}},298:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(293),r=t.n(i),l=t(22),o=function(e){var a="/messages/"+e.id;return n.a.createElement("div",{className:r.a.dialog},n.a.createElement("img",{src:e.avatar}),n.a.createElement(l.b,{to:a,activeClassName:r.a.activeLink},e.name))},c=function(e){return n.a.createElement("div",{className:r.a.message},n.a.createElement("img",{src:e.avatar}),n.a.createElement("span",null,e.message))},m=t(27),g=t(89),u=t(129),d=t(31),v=t(85),f=Object(v.a)(50),b=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(g.a,{placeholder:"Enter your message",name:"newMessageText",validate:[v.b,f],component:d.b})),n.a.createElement("div",null,n.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),p=function(e){var a=e.dialogs.map((function(a){return n.a.createElement(o,{key:a.id,id:a.id,name:a.name,avatar:e.avatars[a.id-1].avatar})})),t=e.messages.map((function(a){return n.a.createElement(c,{message:a.message,avatar:e.avatars[a.id-1].avatar,profile:e.profile})}));if(!e.isAuth)return n.a.createElement(m.a,{to:"/login"});return n.a.createElement("div",{className:r.a.dialogs},n.a.createElement("div",{className:r.a.dialogsItems},a),n.a.createElement("div",{className:r.a.messages},t),n.a.createElement(b,{onSubmit:function(a){e.addMessage(a.newMessageText)}}))},E=t(10),_=t(33),h=t(34),k=t(36),j=t(35),O=t(37),A=function(e){return{isAuth:e.auth.isAuth}},D=t(7),w=t(128);a.default=Object(D.d)(Object(E.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,avatars:e.dialogsPage.avatars,profile:e.profilePage.userProfile}}),{addMessage:w.a}),(function(e){var a=function(a){function t(){return Object(_.a)(this,t),Object(k.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(m.a,{to:"/login"})}}]),t}(n.a.Component);return Object(E.b)(A)(a)}))(p)}}]);
//# sourceMappingURL=4.3e6d72b7.chunk.js.map