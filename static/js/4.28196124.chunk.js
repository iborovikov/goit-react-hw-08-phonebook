(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[4],{111:function(e,a,t){"use strict";t.r(a);var c=t(24),r=t(0),s=t(4),n=t(96),i=t(27),o=t(28),l=t(98),d=t(89),b=t(1);a.default=Object(s.b)()((function(){var e=Object(r.useState)(""),a=Object(c.a)(e,2),t=a[0],f=a[1],u=Object(r.useState)(""),j=Object(c.a)(u,2),m=j[0],O=j[1],v=Object(s.d)(n.a),p=Object(s.c)(),x=function(e){var a=e.currentTarget.name,t=e.currentTarget.value;switch(a){case"name":f(t);break;case"phoneNumber":O(t);break;default:alert("invalid type")}},h=function(e,a){if(function(e){return v.find((function(a){return a.name.toLowerCase()===e.toLowerCase()}))}(e))return p(Object(i.c)("")),alert("".concat(e," is already in contacts"));var t={name:e,number:a};p(Object(o.d)(t)),p(Object(i.c)(""))};return Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),h(t,m),f(""),O("")},children:[Object(b.jsx)(l.a.Text,{className:"text-bolt",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),Object(b.jsxs)(l.a.Group,{className:"mb-3",children:[Object(b.jsx)(l.a.Label,{children:"\u0418\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),Object(b.jsx)(l.a.Control,{type:"text",name:"name",value:t,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)(l.a.Group,{className:"mb-3",children:[Object(b.jsx)(l.a.Label,{children:"\u041d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),Object(b.jsx)(l.a.Control,{type:"tel",name:"phoneNumber",value:m,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)(d.a,{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u043a\u0430\u043a\u0442"})]})}))},90:function(e,a,t){"use strict";var c=t(0),r=c.createContext({});a.a=r},91:function(e,a,t){"use strict";var c=function(){};e.exports=c},92:function(e,a,t){"use strict";var c=t(8),r=t(21),s=t(37),n=t.n(s),i=t(0),o=t(22),l=t.n(o),d=t(1),b=["as","className","type","tooltip"],f={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},u=i.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,i=e.className,o=e.type,l=void 0===o?"valid":o,f=e.tooltip,u=void 0!==f&&f,j=Object(r.a)(e,b);return Object(d.jsx)(s,Object(c.a)(Object(c.a)({},j),{},{ref:a,className:n()(i,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=f,a.a=u},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var c=t(8),r=t(21),s=t(37),n=t.n(s),i=/-(.)/g;var o=t(0),l=t(38),d=t(1),b=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,s=void 0===t?f(e):t,i=a.Component,u=a.defaultProps,j=o.forwardRef((function(a,t){var s=a.className,o=a.bsPrefix,f=a.as,u=void 0===f?i||"div":f,j=Object(r.a)(a,b),m=Object(l.a)(o,e);return Object(d.jsx)(u,Object(c.a)({ref:t,className:n()(s,m)},j))}));return j.defaultProps=u,j.displayName=s,j}},94:function(e,a,t){"use strict";var c=t(8),r=t(21),s=t(37),n=t.n(s),i=t(0),o=t(90),l=t(38),d=t(1),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],f=i.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,f=e.className,u=e.type,j=void 0===u?"checkbox":u,m=e.isValid,O=void 0!==m&&m,v=e.isInvalid,p=void 0!==v&&v,x=e.as,h=void 0===x?"input":x,N=Object(r.a)(e,b),y=Object(i.useContext)(o.a).controlId;return s=Object(l.a)(s,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},N),{},{ref:a,type:j,id:t||y,className:n()(f,s,O&&"is-valid",p&&"is-invalid")}))}));f.displayName="FormCheckInput",a.a=f},95:function(e,a,t){"use strict";var c=t(8),r=t(7),s=t(21),n=t(37),i=t.n(n),o=t(0),l=(t(91),t(92)),d=t(90),b=t(38),f=t(1),u=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],j=o.forwardRef((function(e,a){var t,n,l=e.bsPrefix,j=e.type,m=e.size,O=e.htmlSize,v=e.id,p=e.className,x=e.isValid,h=void 0!==x&&x,N=e.isInvalid,y=void 0!==N&&N,w=e.plaintext,P=e.readOnly,C=e.as,I=void 0===C?"input":C,g=Object(s.a)(e,u),k=Object(o.useContext)(d.a).controlId;(l=Object(b.a)(l,"form-control"),w)?t=Object(r.a)({},"".concat(l,"-plaintext"),!0):(n={},Object(r.a)(n,l,!0),Object(r.a)(n,"".concat(l,"-").concat(m),m),t=n);return Object(f.jsx)(I,Object(c.a)(Object(c.a)({},g),{},{type:j,size:O,ref:a,readOnly:P,id:v||k,className:i()(p,t,h&&"is-valid",y&&"is-invalid","color"===j&&"".concat(l,"-color"))}))}));j.displayName="FormControl",a.a=Object.assign(j,{Feedback:l.a})},96:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return s})),t.d(a,"e",(function(){return o})),t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return i}));var c=t(26),r=function(e){return e.contacts.items},s=function(e){return e.contacts.filter},n=function(e){return e.contacts.mutableContactId},i=function(e){return e.contacts.isModalOpen},o=Object(c.a)([s,r],(function(e,a){var t=e.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(t)}))}))},98:function(e,a,t){"use strict";var c=t(8),r=t(21),s=t(37),n=t.n(s),i=t(22),o=t.n(i),l=t(0),d=t(92),b=t(94),f=t(90),u=t(38),j=t(1),m=["bsPrefix","className","htmlFor"],O=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.htmlFor,o=Object(r.a)(e,m),d=Object(l.useContext)(f.a).controlId;return t=Object(u.a)(t,"form-check-label"),Object(j.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:i||d,className:n()(s,t)}))}));O.displayName="FormCheckLabel";var v=O,p=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],x=l.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsSwitchPrefix,o=e.inline,m=void 0!==o&&o,O=e.disabled,x=void 0!==O&&O,h=e.isValid,N=void 0!==h&&h,y=e.isInvalid,w=void 0!==y&&y,P=e.feedbackTooltip,C=void 0!==P&&P,I=e.feedback,g=e.feedbackType,k=e.className,F=e.style,R=e.title,z=void 0===R?"":R,L=e.type,S=void 0===L?"checkbox":L,T=e.label,V=e.children,A=e.as,G=void 0===A?"input":A,M=Object(r.a)(e,p);s=Object(u.a)(s,"form-check"),i=Object(u.a)(i,"form-switch");var H=Object(l.useContext)(f.a).controlId,J=Object(l.useMemo)((function(){return{controlId:t||H}}),[H,t]),Z=null!=T&&!1!==T&&!V,q=Object(j.jsx)(b.a,Object(c.a)(Object(c.a)({},M),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:N,isInvalid:w,disabled:x,as:G}));return Object(j.jsx)(f.a.Provider,{value:J,children:Object(j.jsx)("div",{style:F,className:n()(k,T&&s,m&&"".concat(s,"-inline"),"switch"===S&&i),children:V||Object(j.jsxs)(j.Fragment,{children:[q,Z&&Object(j.jsx)(v,{title:z,children:T}),I&&Object(j.jsx)(d.a,{type:g,tooltip:C,children:I})]})})})}));x.displayName="FormCheck";var h=Object.assign(x,{Input:b.a,Label:v}),N=t(95),y=t(93),w=Object(y.a)("form-floating"),P=["controlId","as"],C=l.forwardRef((function(e,a){var t=e.controlId,s=e.as,n=void 0===s?"div":s,i=Object(r.a)(e,P),o=Object(l.useMemo)((function(){return{controlId:t}}),[t]);return Object(j.jsx)(f.a.Provider,{value:o,children:Object(j.jsx)(n,Object(c.a)(Object(c.a)({},i),{},{ref:a}))})}));C.displayName="FormGroup";var I=C,g=(t(91),t(24)),k=["as","bsPrefix","className"],F=["className"],R=["xxl","xl","lg","md","sm","xs"];var z=l.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,s=e.className,i=Object(r.a)(e,k);t=Object(u.a)(t,"col");var o=[],l=[];return R.forEach((function(e){var a,c,r,s=i[e];delete i[e],"object"===typeof s&&null!=s?(a=s.span,c=s.offset,r=s.order):a=s;var n="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(n):"".concat(t).concat(n,"-").concat(a)),null!=r&&l.push("order".concat(n,"-").concat(r)),null!=c&&l.push("offset".concat(n,"-").concat(c))})),[Object(c.a)(Object(c.a)({},i),{},{className:n.a.apply(void 0,[s].concat(o,l))}),{as:a,bsPrefix:t,spans:o}]}(e),s=Object(g.a)(t,2),i=s[0],o=i.className,l=Object(r.a)(i,F),d=s[1],b=d.as,f=void 0===b?"div":b,m=d.bsPrefix,O=d.spans;return Object(j.jsx)(f,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:n()(o,!O.length&&m)}))}));z.displayName="Col";var L=z,S=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],T=l.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,o=e.column,d=e.visuallyHidden,b=e.className,m=e.htmlFor,O=Object(r.a)(e,S),v=Object(l.useContext)(f.a).controlId;i=Object(u.a)(i,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=n()(b,i,d&&"visually-hidden",o&&p);return m=m||v,o?Object(j.jsx)(L,Object(c.a)({ref:a,as:"label",className:x,htmlFor:m},O)):Object(j.jsx)(s,Object(c.a)({ref:a,className:x,htmlFor:m},O))}));T.displayName="FormLabel",T.defaultProps={column:!1,visuallyHidden:!1};var V=T,A=["bsPrefix","className","id"],G=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.id,o=Object(r.a)(e,A),d=Object(l.useContext)(f.a).controlId;return t=Object(u.a)(t,"form-range"),Object(j.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:n()(s,t),id:i||d}))}));G.displayName="FormRange";var M=G,H=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,i=e.htmlSize,o=e.className,d=e.isValid,b=void 0!==d&&d,m=e.isInvalid,O=void 0!==m&&m,v=e.id,p=Object(r.a)(e,H),x=Object(l.useContext)(f.a).controlId;return t=Object(u.a)(t,"form-select"),Object(j.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:i,ref:a,className:n()(o,t,s&&"".concat(t,"-").concat(s),b&&"is-valid",O&&"is-invalid"),id:v||x}))}));J.displayName="FormSelect";var Z=J,q=["bsPrefix","className","as","muted"],U=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,o=void 0===i?"small":i,l=e.muted,d=Object(r.a)(e,q);return t=Object(u.a)(t,"form-text"),Object(j.jsx)(o,Object(c.a)(Object(c.a)({},d),{},{ref:a,className:n()(s,t,l&&"text-muted")}))}));U.displayName="FormText";var B=U,D=l.forwardRef((function(e,a){return Object(j.jsx)(h,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));D.displayName="Switch";var E=Object.assign(D,{Input:h.Input,Label:h.Label}),$=["bsPrefix","className","children","controlId","label"],_=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,o=e.controlId,l=e.label,d=Object(r.a)(e,$);return t=Object(u.a)(t,"form-floating"),Object(j.jsxs)(I,Object(c.a)(Object(c.a)({ref:a,className:n()(s,t),controlId:o},d),{},{children:[i,Object(j.jsx)("label",{htmlFor:o,children:l})]}))}));_.displayName="FloatingLabel";var K=_,Q=["className","validated","as"],W={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},X=l.forwardRef((function(e,a){var t=e.className,s=e.validated,i=e.as,o=void 0===i?"form":i,l=Object(r.a)(e,Q);return Object(j.jsx)(o,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:n()(t,s&&"was-validated")}))}));X.displayName="Form",X.propTypes=W;a.a=Object.assign(X,{Group:I,Control:N.a,Floating:w,Check:h,Switch:E,Label:V,Text:B,Range:M,Select:Z,FloatingLabel:K})}}]);
//# sourceMappingURL=4.28196124.chunk.js.map