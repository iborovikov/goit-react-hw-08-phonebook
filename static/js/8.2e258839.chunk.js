(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[8],{103:function(e,t,n){e.exports={Overlay:"CorrectionModal_Overlay__2UnfD",Modal:"CorrectionModal_Modal__1lQCp"}},107:function(e,t,n){e.exports={contactItem:"contacts_contactItem__2Wcjw"}},117:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(96),r=n(24),o=n(0),i=n(28),s=n(27),u=n(103),b=n.n(u),d=n(114),j=n(98),l=n(89),O=n(1);var f=Object(c.b)()((function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],u=t[1],f=Object(o.useState)(""),m=Object(r.a)(f,2),h=m[0],v=m[1],p=Object(c.c)(),x=Object(c.d)(a.d);Object(o.useEffect)((function(){window.addEventListener("keydown",w)}));var w=function e(t){"Escape"===t.code&&(window.removeEventListener("keydown",e),p(Object(s.a)()))},C=function(e){var t=e.currentTarget.name,n=e.currentTarget.value;switch(t){case"name":u(n);break;case"number":v(n);break;default:alert("invalid type")}};return Object(O.jsx)("div",{className:b.a.Overlay,onClick:function(e){e.target===e.currentTarget&&(window.removeEventListener("keydown",w),p(Object(s.a)()))},children:Object(O.jsxs)(d.a.Dialog,{className:b.a.Modal,children:[Object(O.jsx)(d.a.Header,{children:Object(O.jsx)(d.a.Title,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"})}),Object(O.jsx)(d.a.Body,{children:Object(O.jsxs)(j.a,{onSubmit:function(e){e.preventDefault();var t={id:x,name:n,number:h};p(Object(i.a)(t)),p(Object(s.a)()),p(Object(i.c)())},children:[Object(O.jsxs)(j.a.Group,{className:"mb-3",children:[Object(O.jsx)(j.a.Label,{children:"\u0418\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),Object(O.jsx)(j.a.Control,{type:"text",name:"name",value:n,onChange:C,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)(j.a.Group,{className:"mb-3",children:[Object(O.jsx)(j.a.Label,{children:"\u041d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),Object(O.jsx)(j.a.Control,{type:"tel",name:"number",value:h,onChange:C,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)(l.a,{type:"submit",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u043a\u0430\u043a\u0442"})]})})]})})})),m=n(14),h=n(115),v=n(107),p=n.n(v);var x=Object(c.b)()((function(){var e=Object(c.d)(a.e),t=Object(c.c)();Object(o.useEffect)((function(){t(Object(m.a)()),t(Object(i.c)())}),[t]);var n=function(e){t(Object(i.b)(e.currentTarget.id))},r=function(e){t(Object(s.b)(e.currentTarget.id))};return e.map((function(e){var t=e.name,c=e.number,a=e.id;return Object(O.jsxs)(h.a.Item,{className:p.a.contactItem,children:[t,": ",c,Object(O.jsx)(l.a,{type:"button",id:a,onClick:r,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(O.jsx)(l.a,{type:"button",id:a,onClick:n,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},a)}))}));t.default=Object(c.b)()((function(){var e=Object(c.d)(a.c);return Object(O.jsxs)(h.a,{children:[Object(O.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(O.jsx)(x,{}),e&&Object(O.jsx)(f,{})]})}))},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i}));var c=n(26),a=function(e){return e.contacts.items},r=function(e){return e.contacts.filter},o=function(e){return e.contacts.mutableContactId},i=function(e){return e.contacts.isModalOpen},s=Object(c.a)([r,a],(function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}))}}]);
//# sourceMappingURL=8.2e258839.chunk.js.map