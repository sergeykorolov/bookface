(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__ti6nt",contact:"ProfileInfo_contact__17jX-",mainPhoto:"ProfileInfo_mainPhoto__imJtH"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3iggj",posts:"MyPosts_posts__1rnu_"}},296:function(e,t,a){e.exports={item:"Post_item__3twkH"}},297:function(e,t,a){"use strict";a.r(t);var n=a(33),l=a(34),o=a(36),r=a(35),s=a(37),c=a(0),i=a.n(c),u=a(97),m=a(294),p=a.n(m),f=a(95),d=a.n(f),E=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(c.useState)(e.status),r=Object(u.a)(o,2),s=r[0],m=r[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: "),i.a.createElement("span",{onDoubleClick:function(){l(!0)}},s||"---------")),n&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(s)},onChange:function(e){m(e.currentTarget.value)},value:s})))},b=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(h,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},v=function(e){var t=e.profile;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(h,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},h=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},k=function(e){e.isOwner;var t=e.profile,a=e.status,n=e.updateStatus,l=Object(c.useState)(!1),o=Object(u.a)(l,2),r=o[0],s=o[1];return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||d.a,className:p.a.mainPhoto}),i.a.createElement(E,{status:a,updateStatus:n}),r?i.a.createElement(v,{profile:t}):i.a.createElement(b,{profile:t,goToEditMode:function(){s(!0)}})))},g=a(96),P=a(295),O=a.n(P),j=a(296),_=a.n(j),y=function(e){return i.a.createElement("div",{className:_.a.item},i.a.createElement("img",{src:d.a}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like ",e.like)))},S=a(89),w=a(129),A=a(85),F=a(31),I=Object(A.a)(10),M=Object(w.a)({form:"profileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(S.a,{placeholder:"new post",name:"newPostText",component:F.b,validate:[A.b,I]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),T=function(e){var t=e.posts.map((function(e){return i.a.createElement(y,{message:e.message,like:e.likesCount,key:e.id})}));return i.a.createElement("div",{className:O.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(M,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:O.a.posts},t))},J=a(10),N=Object(J.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,avatars:e.profilePage.avatars}}),{addPost:g.a})(T),x=a(48),B=function(e){return i.a.createElement(i.a.Fragment,null,e.profile?i.a.createElement("div",null,i.a.createElement(k,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(N,null)):i.a.createElement(x.a,null))},C=a(27),D=a(7),U=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(B,Object.assign({},this.props,{isOwner:!!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(i.a.Component);t.default=Object(D.d)(Object(J.b)((function(e){return{profile:e.profilePage.userProfile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:g.d,getStatus:g.c,updateStatus:g.e}),C.f)(U)}}]);
//# sourceMappingURL=3.00e34c26.chunk.js.map