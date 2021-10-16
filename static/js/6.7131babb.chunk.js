(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[6],{112:function(e,a,t){"use strict";t.r(a);var c=t(24),s=t(0),r=t(4),i=t(14),l=t(98),o=t(89),n=t(1);a.default=Object(r.b)()((function(){var e=Object(r.c)(),a=Object(s.useState)(""),t=Object(c.a)(a,2),d=t[0],b=t[1],j=Object(s.useState)(""),f=Object(c.a)(j,2),m=f[0],u=f[1],O=function(e){var a=e.currentTarget.name,t=e.currentTarget.value;switch(a){case"email":b(t);break;case"password":u(t);break;default:alert("invalid type")}};return Object(n.jsxs)(l.a,{onSubmit:function(a){a.preventDefault(),e(Object(i.c)({email:d,password:m})),b(""),u("")},children:[Object(n.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(n.jsx)(l.a.Label,{children:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"}),Object(n.jsx)(l.a.Control,{type:"email",name:"email",value:d,onChange:O,placeholder:"Example@email.com"})]}),Object(n.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(n.jsx)(l.a.Label,{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(n.jsx)(l.a.Control,{type:"password",name:"password",value:m,onChange:O,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(n.jsx)(o.a,{variant:"primary",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}))},90:function(e,a,t){"use strict";var c=t(0),s=c.createContext({});a.a=s},91:function(e,a,t){"use strict";var c=function(){};e.exports=c},92:function(e,a,t){"use strict";var c=t(8),s=t(21),r=t(37),i=t.n(r),l=t(0),o=t(22),n=t.n(o),d=t(1),b=["as","className","type","tooltip"],j={type:n.a.string,tooltip:n.a.bool,as:n.a.elementType},f=l.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,l=e.className,o=e.type,n=void 0===o?"valid":o,j=e.tooltip,f=void 0!==j&&j,m=Object(s.a)(e,b);return Object(d.jsx)(r,Object(c.a)(Object(c.a)({},m),{},{ref:a,className:i()(l,"".concat(n,"-").concat(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=j,a.a=f},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var c=t(8),s=t(21),r=t(37),i=t.n(r),l=/-(.)/g;var o=t(0),n=t(38),d=t(1),b=["className","bsPrefix","as"],j=function(e){return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,r=void 0===t?j(e):t,l=a.Component,f=a.defaultProps,m=o.forwardRef((function(a,t){var r=a.className,o=a.bsPrefix,j=a.as,f=void 0===j?l||"div":j,m=Object(s.a)(a,b),u=Object(n.a)(o,e);return Object(d.jsx)(f,Object(c.a)({ref:t,className:i()(r,u)},m))}));return m.defaultProps=f,m.displayName=r,m}},94:function(e,a,t){"use strict";var c=t(8),s=t(21),r=t(37),i=t.n(r),l=t(0),o=t(90),n=t(38),d=t(1),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],j=l.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,j=e.className,f=e.type,m=void 0===f?"checkbox":f,u=e.isValid,O=void 0!==u&&u,v=e.isInvalid,p=void 0!==v&&v,x=e.as,h=void 0===x?"input":x,N=Object(s.a)(e,b),y=Object(l.useContext)(o.a).controlId;return r=Object(n.a)(r,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},N),{},{ref:a,type:m,id:t||y,className:i()(j,r,O&&"is-valid",p&&"is-invalid")}))}));j.displayName="FormCheckInput",a.a=j},95:function(e,a,t){"use strict";var c=t(8),s=t(7),r=t(21),i=t(37),l=t.n(i),o=t(0),n=(t(91),t(92)),d=t(90),b=t(38),j=t(1),f=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],m=o.forwardRef((function(e,a){var t,i,n=e.bsPrefix,m=e.type,u=e.size,O=e.htmlSize,v=e.id,p=e.className,x=e.isValid,h=void 0!==x&&x,N=e.isInvalid,y=void 0!==N&&N,w=e.plaintext,P=e.readOnly,I=e.as,g=void 0===I?"input":I,k=Object(r.a)(e,f),F=Object(o.useContext)(d.a).controlId;(n=Object(b.a)(n,"form-control"),w)?t=Object(s.a)({},"".concat(n,"-plaintext"),!0):(i={},Object(s.a)(i,n,!0),Object(s.a)(i,"".concat(n,"-").concat(u),u),t=i);return Object(j.jsx)(g,Object(c.a)(Object(c.a)({},k),{},{type:m,size:O,ref:a,readOnly:P,id:v||F,className:l()(p,t,h&&"is-valid",y&&"is-invalid","color"===m&&"".concat(n,"-color"))}))}));m.displayName="FormControl",a.a=Object.assign(m,{Feedback:n.a})},98:function(e,a,t){"use strict";var c=t(8),s=t(21),r=t(37),i=t.n(r),l=t(22),o=t.n(l),n=t(0),d=t(92),b=t(94),j=t(90),f=t(38),m=t(1),u=["bsPrefix","className","htmlFor"],O=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.htmlFor,o=Object(s.a)(e,u),d=Object(n.useContext)(j.a).controlId;return t=Object(f.a)(t,"form-check-label"),Object(m.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:l||d,className:i()(r,t)}))}));O.displayName="FormCheckLabel";var v=O,p=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],x=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsSwitchPrefix,o=e.inline,u=void 0!==o&&o,O=e.disabled,x=void 0!==O&&O,h=e.isValid,N=void 0!==h&&h,y=e.isInvalid,w=void 0!==y&&y,P=e.feedbackTooltip,I=void 0!==P&&P,g=e.feedback,k=e.feedbackType,F=e.className,C=e.style,R=e.title,S=void 0===R?"":R,T=e.type,z=void 0===T?"checkbox":T,L=e.label,V=e.children,G=e.as,E=void 0===G?"input":G,H=Object(s.a)(e,p);r=Object(f.a)(r,"form-check"),l=Object(f.a)(l,"form-switch");var B=Object(n.useContext)(j.a).controlId,J=Object(n.useMemo)((function(){return{controlId:t||B}}),[B,t]),M=null!=L&&!1!==L&&!V,U=Object(m.jsx)(b.a,Object(c.a)(Object(c.a)({},H),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:N,isInvalid:w,disabled:x,as:E}));return Object(m.jsx)(j.a.Provider,{value:J,children:Object(m.jsx)("div",{style:C,className:i()(F,L&&r,u&&"".concat(r,"-inline"),"switch"===z&&l),children:V||Object(m.jsxs)(m.Fragment,{children:[U,M&&Object(m.jsx)(v,{title:S,children:L}),g&&Object(m.jsx)(d.a,{type:k,tooltip:I,children:g})]})})})}));x.displayName="FormCheck";var h=Object.assign(x,{Input:b.a,Label:v}),N=t(95),y=t(93),w=Object(y.a)("form-floating"),P=["controlId","as"],I=n.forwardRef((function(e,a){var t=e.controlId,r=e.as,i=void 0===r?"div":r,l=Object(s.a)(e,P),o=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(m.jsx)(j.a.Provider,{value:o,children:Object(m.jsx)(i,Object(c.a)(Object(c.a)({},l),{},{ref:a}))})}));I.displayName="FormGroup";var g=I,k=(t(91),t(24)),F=["as","bsPrefix","className"],C=["className"],R=["xxl","xl","lg","md","sm","xs"];var S=n.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,l=Object(s.a)(e,F);t=Object(f.a)(t,"col");var o=[],n=[];return R.forEach((function(e){var a,c,s,r=l[e];delete l[e],"object"===typeof r&&null!=r?(a=r.span,c=r.offset,s=r.order):a=r;var i="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(a)),null!=s&&n.push("order".concat(i,"-").concat(s)),null!=c&&n.push("offset".concat(i,"-").concat(c))})),[Object(c.a)(Object(c.a)({},l),{},{className:i.a.apply(void 0,[r].concat(o,n))}),{as:a,bsPrefix:t,spans:o}]}(e),r=Object(k.a)(t,2),l=r[0],o=l.className,n=Object(s.a)(l,C),d=r[1],b=d.as,j=void 0===b?"div":b,u=d.bsPrefix,O=d.spans;return Object(m.jsx)(j,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i()(o,!O.length&&u)}))}));S.displayName="Col";var T=S,z=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],L=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,l=e.bsPrefix,o=e.column,d=e.visuallyHidden,b=e.className,u=e.htmlFor,O=Object(s.a)(e,z),v=Object(n.useContext)(j.a).controlId;l=Object(f.a)(l,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=i()(b,l,d&&"visually-hidden",o&&p);return u=u||v,o?Object(m.jsx)(T,Object(c.a)({ref:a,as:"label",className:x,htmlFor:u},O)):Object(m.jsx)(r,Object(c.a)({ref:a,className:x,htmlFor:u},O))}));L.displayName="FormLabel",L.defaultProps={column:!1,visuallyHidden:!1};var V=L,G=["bsPrefix","className","id"],E=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.id,o=Object(s.a)(e,G),d=Object(n.useContext)(j.a).controlId;return t=Object(f.a)(t,"form-range"),Object(m.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:i()(r,t),id:l||d}))}));E.displayName="FormRange";var H=E,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,l=e.htmlSize,o=e.className,d=e.isValid,b=void 0!==d&&d,u=e.isInvalid,O=void 0!==u&&u,v=e.id,p=Object(s.a)(e,B),x=Object(n.useContext)(j.a).controlId;return t=Object(f.a)(t,"form-select"),Object(m.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:l,ref:a,className:i()(o,t,r&&"".concat(t,"-").concat(r),b&&"is-valid",O&&"is-invalid"),id:v||x}))}));J.displayName="FormSelect";var M=J,U=["bsPrefix","className","as","muted"],D=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,o=void 0===l?"small":l,n=e.muted,d=Object(s.a)(e,U);return t=Object(f.a)(t,"form-text"),Object(m.jsx)(o,Object(c.a)(Object(c.a)({},d),{},{ref:a,className:i()(r,t,n&&"text-muted")}))}));D.displayName="FormText";var _=D,q=n.forwardRef((function(e,a){return Object(m.jsx)(h,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));q.displayName="Switch";var A=Object.assign(q,{Input:h.Input,Label:h.Label}),K=["bsPrefix","className","children","controlId","label"],Q=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.children,o=e.controlId,n=e.label,d=Object(s.a)(e,K);return t=Object(f.a)(t,"form-floating"),Object(m.jsxs)(g,Object(c.a)(Object(c.a)({ref:a,className:i()(r,t),controlId:o},d),{},{children:[l,Object(m.jsx)("label",{htmlFor:o,children:n})]}))}));Q.displayName="FloatingLabel";var W=Q,X=["className","validated","as"],Y={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},Z=n.forwardRef((function(e,a){var t=e.className,r=e.validated,l=e.as,o=void 0===l?"form":l,n=Object(s.a)(e,X);return Object(m.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i()(t,r&&"was-validated")}))}));Z.displayName="Form",Z.propTypes=Y;a.a=Object.assign(Z,{Group:g,Control:N.a,Floating:w,Check:h,Switch:A,Label:V,Text:_,Range:H,Select:M,FloatingLabel:W})}}]);
//# sourceMappingURL=6.7131babb.chunk.js.map