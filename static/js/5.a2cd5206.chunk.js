(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[5],{116:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(27),i=a(96),r=a(21),s=a(8),o=a(37),u=a.n(o),d=a(0),l=a(93),b=a(38),f=a(94),p=d.createContext(null);p.displayName="InputGroupContext";var j=p,v=a(1),O=["bsPrefix","size","hasValidation","className","as"],m=Object(l.a)("input-group-text",{Component:"span"}),x=d.forwardRef((function(e,t){var a=e.bsPrefix,n=e.size,c=e.hasValidation,i=e.className,o=e.as,l=void 0===o?"div":o,f=Object(r.a)(e,O);a=Object(b.a)(a,"input-group");var p=Object(d.useMemo)((function(){return{}}),[]);return Object(v.jsx)(j.Provider,{value:p,children:Object(v.jsx)(l,Object(s.a)(Object(s.a)({ref:t},f),{},{className:u()(i,a,n&&"".concat(a,"-").concat(n),c&&"has-validation")}))})}));x.displayName="InputGroup";var y=Object.assign(x,{Text:m,Radio:function(e){return Object(v.jsx)(m,{children:Object(v.jsx)(f.a,Object(s.a)({type:"radio"},e))})},Checkbox:function(e){return Object(v.jsx)(m,{children:Object(v.jsx)(f.a,Object(s.a)({type:"checkbox"},e))})}}),h=a(95);t.default=Object(n.b)()((function(){var e=Object(n.c)(),t=Object(n.d)(i.b);return Object(v.jsxs)(y,{className:"mb-3",style:{marginTop:15},children:[Object(v.jsx)(y.Text,{id:"basic-addon1",children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),Object(v.jsx)(h.a,{type:"text",name:"filter",value:t,onChange:function(t){return e(Object(c.c)(t.currentTarget.value))},placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})]})}))},90:function(e,t,a){"use strict";var n=a(0),c=n.createContext({});t.a=c},91:function(e,t,a){"use strict";var n=function(){};e.exports=n},92:function(e,t,a){"use strict";var n=a(8),c=a(21),i=a(37),r=a.n(i),s=a(0),o=a(22),u=a.n(o),d=a(1),l=["as","className","type","tooltip"],b={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=s.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,s=e.className,o=e.type,u=void 0===o?"valid":o,b=e.tooltip,f=void 0!==b&&b,p=Object(c.a)(e,l);return Object(d.jsx)(i,Object(n.a)(Object(n.a)({},p),{},{ref:t,className:r()(s,"".concat(u,"-").concat(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=b,t.a=f},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(8),c=a(21),i=a(37),r=a.n(i),s=/-(.)/g;var o=a(0),u=a(38),d=a(1),l=["className","bsPrefix","as"],b=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,i=void 0===a?b(e):a,s=t.Component,f=t.defaultProps,p=o.forwardRef((function(t,a){var i=t.className,o=t.bsPrefix,b=t.as,f=void 0===b?s||"div":b,p=Object(c.a)(t,l),j=Object(u.a)(o,e);return Object(d.jsx)(f,Object(n.a)({ref:a,className:r()(i,j)},p))}));return p.defaultProps=f,p.displayName=i,p}},94:function(e,t,a){"use strict";var n=a(8),c=a(21),i=a(37),r=a.n(i),s=a(0),o=a(90),u=a(38),d=a(1),l=["id","bsPrefix","className","type","isValid","isInvalid","as"],b=s.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,b=e.className,f=e.type,p=void 0===f?"checkbox":f,j=e.isValid,v=void 0!==j&&j,O=e.isInvalid,m=void 0!==O&&O,x=e.as,y=void 0===x?"input":x,h=Object(c.a)(e,l),N=Object(s.useContext)(o.a).controlId;return i=Object(u.a)(i,"form-check-input"),Object(d.jsx)(y,Object(n.a)(Object(n.a)({},h),{},{ref:t,type:p,id:a||N,className:r()(b,i,v&&"is-valid",m&&"is-invalid")}))}));b.displayName="FormCheckInput",t.a=b},95:function(e,t,a){"use strict";var n=a(8),c=a(7),i=a(21),r=a(37),s=a.n(r),o=a(0),u=(a(91),a(92)),d=a(90),l=a(38),b=a(1),f=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],p=o.forwardRef((function(e,t){var a,r,u=e.bsPrefix,p=e.type,j=e.size,v=e.htmlSize,O=e.id,m=e.className,x=e.isValid,y=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,C=e.plaintext,g=e.readOnly,k=e.as,w=void 0===k?"input":k,P=Object(i.a)(e,f),I=Object(o.useContext)(d.a).controlId;(u=Object(l.a)(u,"form-control"),C)?a=Object(c.a)({},"".concat(u,"-plaintext"),!0):(r={},Object(c.a)(r,u,!0),Object(c.a)(r,"".concat(u,"-").concat(j),j),a=r);return Object(b.jsx)(w,Object(n.a)(Object(n.a)({},P),{},{type:p,size:v,ref:t,readOnly:g,id:O||I,className:s()(m,a,y&&"is-valid",N&&"is-invalid","color"===p&&"".concat(u,"-color"))}))}));p.displayName="FormControl",t.a=Object.assign(p,{Feedback:u.a})},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return s}));var n=a(26),c=function(e){return e.contacts.items},i=function(e){return e.contacts.filter},r=function(e){return e.contacts.mutableContactId},s=function(e){return e.contacts.isModalOpen},o=Object(n.a)([i,c],(function(e,t){var a=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(a)}))}))}}]);
//# sourceMappingURL=5.a2cd5206.chunk.js.map