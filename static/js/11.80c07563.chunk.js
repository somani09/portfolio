(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[11],{93:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(22),n=c(51),i=c(17),l={contactIntro:"Feel free to follow me or contact me on my socials, drop a mail, or ring my number regarding more information, or for official purpose. Available for freelancing.",email:"vsomani2@gmail.com",phone:"+1 6027852214"},r=c(24),j=c(56),o=c(27),b=c(23),d=c(82),m=c(29),O=c(3);var h=function(e){var t=e.contactData,c=e.socialsData;function s(e){window.open(e,"_blank")}return Object(O.jsxs)("div",{className:"socialsArea1",children:[Object(O.jsxs)("div",{className:"typeBox",children:[Object(O.jsx)("div",{className:"contactIconContainer center",children:Object(O.jsx)(j.b,{className:"contactIcons"})}),Object(O.jsx)("div",{className:"subHeading",children:"Socials"}),Object(O.jsxs)("div",{className:"socialIconsList",children:[Object(O.jsx)("a",{href:c.instagram,target:"_blank",rel:"noreferrer",className:"socialsIconContainer center",children:Object(O.jsx)(o.b,{className:"socialsIcon"})}),Object(O.jsx)("a",{href:c.linkedin,target:"_blank",rel:"noreferrer",className:"socialsIconContainer center",children:Object(O.jsx)(b.b,{className:"socialsIcon"})}),Object(O.jsx)("a",{href:c.somaniMusic,target:"_blank",rel:"noreferrer",className:"socialsIconContainer center",children:Object(O.jsx)("img",{src:m.a,className:"socialsIconlogo",alt:"logo"})})]})]}),Object(O.jsxs)("div",{className:"contactTypes",children:[Object(O.jsxs)("div",{onClick:function(){return s("mailto:".concat(t.email))},className:"typeBox email-phone",children:[Object(O.jsx)("div",{className:"contactIconContainer center",children:Object(O.jsx)(d.a,{className:"contactIcons"})}),Object(O.jsx)("div",{className:"subHeading",children:"Email Me"}),Object(O.jsx)("div",{className:" center",children:t.email})]}),Object(O.jsxs)("div",{onClick:function(){return s("tel:".concat(t.phone))},className:"typeBox email-phone",children:[Object(O.jsx)("div",{className:"contactIconContainer center",children:Object(O.jsx)(j.b,{className:"contactIcons"})}),Object(O.jsx)("div",{className:"subHeading",children:"Call Me"}),Object(O.jsx)("div",{className:" center",children:t.phone})]})]})]})},u=c(7),x=c(83),v=c.n(x),g=c(13),N=c(86);var f=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),i=Object(u.a)(n,2),l=i[0],r=i[1],j=Object(s.useState)(!1),o=Object(u.a)(j,2),b=o[0],d=o[1],m=Object(s.useState)(""),h=Object(u.a)(m,2),x=h[0],f=h[1],p=Object(s.useState)(!1),S=Object(u.a)(p,2),y=S[0],I=S[1],C=Object(s.useState)(!1),k=Object(u.a)(C,2),B=k[0],w=k[1],M=Object(s.useState)(""),D=Object(u.a)(M,2),_=D[0],A=D[1],q=Object(s.useState)(!1),E=Object(u.a)(q,2),F=E[0],H=E[1],T=Object(s.useState)(!1),z=Object(u.a)(T,2),J=z[0],Q=z[1],Y=Object(s.useState)(""),Z=Object(u.a)(Y,2),K=Z[0],L=Z[1],V=Object(s.useState)(!1),$=Object(u.a)(V,2),G=$[0],P=$[1],R=Object(s.useState)(!1),U=Object(u.a)(R,2),W=U[0],X=U[1],ee=Object(s.useState)(!1),te=Object(u.a)(ee,2),ce=te[0],se=te[1],ae=Object(s.useState)(!1),ne=Object(u.a)(ae,2),ie=ne[0],le=ne[1],re=Object(s.useState)(!1),je=Object(u.a)(re,2),oe=je[0],be=je[1];function de(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function me(e){switch(e){case"name":0===x.length?I(!0):x.length<3&&w(!0);break;case"email":0===c.length?r(!0):de(c)||d(!0);break;case"subject":0===_.length?H(!0):_.length<5&&Q(!0);break;case"message":0===K.length?P(!0):K.length<6&&X(!0)}}return Object(O.jsxs)("div",{className:"contactForm",children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),se(!0),0===x.length?(I(!0),se(!1)):x.length<3&&(w(!0),se(!1)),0===c.length?(r(!0),se(!1)):de(c)||(d(!0),se(!1)),0===_.length?(H(!0),se(!1)):_.length<5&&(Q(!0),se(!1)),0===K.length?(P(!0),se(!1)):K.length<6&&(X(!0),se(!1)),ce&&(le(!0),v.a.sendForm("gmail","template_9iex7el",e.target,"user_4b69Q0VgoiDQO5kxxKi5u").then((function(e){be(!0),le(!1),a(""),r(!1),d(!1),f(""),I(!1),w(!1),A(""),H(!1),Q(!1),L(""),P(!1),X(!1)}),(function(e){console.log(e.text)})),e.target.reset())},children:[Object(O.jsxs)("div",{className:"name-mail",children:[Object(O.jsxs)("div",{className:"text-field nameInput",children:[Object(O.jsx)("input",{type:"text",name:"name",id:"name",placeholder:" ",onBlur:function(e){return me("name")},value:x,onChange:function(e){f(e.target.value),I(!1),w(!1)}}),Object(O.jsx)("label",{children:"Your Name"}),Object(O.jsx)("div",{style:{visibility:y||B?"visible":"hidden"},children:y?Object(O.jsx)("div",{className:"error",children:"Name is required"}):B?Object(O.jsx)("div",{className:"error",children:"Name is too short"}):Object(O.jsx)("div",{className:"error",children:"f"})})]}),Object(O.jsxs)("div",{className:"text-field emailInput",children:[Object(O.jsx)("input",{type:"text",name:"email",id:"email",placeholder:" ",value:c,onBlur:function(e){return me("email")},onChange:function(e){a(e.target.value),r(!1),d(!1)}}),Object(O.jsx)("label",{children:"Your Email"}),Object(O.jsx)("div",{style:{visibility:l||b?"visible":"hidden"},children:l?Object(O.jsx)("div",{className:"error",children:"Email is required"}):b?Object(O.jsx)("div",{className:"error",children:"Email is invalid"}):Object(O.jsx)("div",{className:"error",children:"f"})})]})]}),Object(O.jsxs)("div",{className:"text-field",children:[Object(O.jsx)("input",{type:"text",className:"",name:"subject",id:"subject",placeholder:" ",onBlur:function(e){return me("subject")},value:_,onChange:function(e){A(e.target.value),H(!1),Q(!1)}}),Object(O.jsx)("label",{children:"Subject"}),Object(O.jsx)("div",{style:{visibility:F||J?"visible":"hidden"},children:F?Object(O.jsx)("div",{className:"error",children:"Subject is required"}):J?Object(O.jsx)("div",{className:"error",children:"Subject is too short"}):Object(O.jsx)("div",{className:"error",children:"f"})})]}),Object(O.jsxs)("div",{className:"text-field",children:[Object(O.jsx)("textarea",{rows:"8",className:"",name:"message",id:"message",placeholder:" ",onBlur:function(e){return me("message")},value:K,onChange:function(e){L(e.target.value),P(!1),X(!1)}}),Object(O.jsx)("label",{children:"Message"}),Object(O.jsx)("div",{style:{visibility:G||W?"visible":"hidden"},children:G?Object(O.jsx)("div",{className:"error",children:"Message is required"}):W?Object(O.jsx)("div",{className:"error",children:"Message is too short"}):Object(O.jsx)("div",{className:"error",children:"f"})})]}),Object(O.jsx)("div",{className:"center",children:Object(O.jsx)("button",{className:"formButton",type:"submit",children:"Send Message"})})]}),Object(O.jsx)("div",{className:"send text-center",style:{visibility:oe||ie?"visible":"hidden"},children:ie?Object(O.jsxs)("div",{className:"sending x-center",children:["Sending....",Object(O.jsx)("img",{src:g.a,height:"20px",alt:"loading"})]}):oe?Object(O.jsxs)("div",{className:"sending ",children:["Sent  ",Object(O.jsx)(N.a,{})]}):Object(O.jsx)("div",{className:"sending",children:"f"})})]})};t.default=function(){return Object(O.jsxs)(n.a.div,{className:"contact flex-col",variants:i.b,children:[Object(O.jsx)(a.a,{title:"CONTACT",text:l.contactIntro}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(f,{}),Object(O.jsx)(h,{contactData:l,socialsData:r.a})]})]})}}}]);
//# sourceMappingURL=11.80c07563.chunk.js.map