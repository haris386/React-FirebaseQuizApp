(this["webpackJsonptask9-reactquizapp"]=this["webpackJsonptask9-reactquizapp"]||[]).push([[0],{40:function(e,t,s){},43:function(e,t,s){},54:function(e,t,s){},62:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var c=s(10),n=s.n(c),a=s(44),i=s.n(a),r=(s(40),s(11)),o=(s(54),s(14)),l=s(45),j=s(27),d=s(28),b=(Object(l.a)({apiKey:"AIzaSyDjHaDZCxBjKCYCNCCEK-2ENs82I1al1rk",authDomain:"react-quizapp-603da.firebaseapp.com",projectId:"react-quizapp-603da",storageBucket:"react-quizapp-603da.appspot.com",messagingSenderId:"913823212570",appId:"1:913823212570:web:b737f3b6d24b37c0f29da3"}),Object(d.b)()),x=Object(j.c)(),u=s(5);function h(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],a=!0;return Object(u.jsx)(u.Fragment,{children:s?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("h1",{style:{textAlign:"center",color:"black"},children:"Sign Up"}),Object(u.jsxs)("div",{className:"register-form",children:[Object(u.jsx)("input",{id:"first-name",className:"form-field",type:"text",placeholder:"First Name",name:"firstName"}),Object(u.jsx)("input",{id:"email",className:"form-field",type:"text",placeholder:"Email",name:"lastName"}),Object(u.jsx)("input",{id:"password",className:"form-field",type:"password",placeholder:"Password",name:"email"}),Object(u.jsx)("button",{className:"form-field",style:{color:"white",justifyContent:"center"},onClick:function(){var e=document.getElementById("first-name").value,t=document.getElementById("email").value,s=document.getElementById("password").value;Object(d.a)(b,t,s).then((function(s){var c=s.user;a=!1,console.log("USER DATA: ",c),console.log("USER UID: ",c.uid),Object(j.d)(Object(j.a)(x,"users",c.uid),{name:e,state:t,isPass:!1})})).catch((function(e){var t=e.code,s=e.message;console.log(t),console.log(s)})),0==a?(n(!1),console.log("No Data has been Inputted")):n(!0)},children:"Register"})]})]})})}s(62);var O=s(24);function m(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(u.jsx)(u.Fragment,{children:s?Object(u.jsx)(o.a,{to:"/quiz"}):Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("h1",{style:{textAlign:"center",color:"black"},children:"LOGIN"}),Object(u.jsxs)("div",{className:"register-form",children:[Object(u.jsx)("input",{id:"email",className:"form-field",type:"text",placeholder:"email",name:"firstName"}),Object(u.jsx)("input",{id:"password",className:"form-field",type:"password",placeholder:"password",name:"lastName"}),Object(u.jsx)("button",{className:"form-field",style:{color:"white",justifyContent:"center"},onClick:function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;Object(d.d)(b,e,t).then((function(e){var t=e.user;n(!0),console.log(t),console.log(t.uid)})).catch((function(e){e.code;var t=e.message;console.log(t)}))},children:"Login"}),Object(u.jsxs)("p",{style:{textAlign:"center",color:"black"},children:["Not a user ",Object(u.jsx)(O.b,{to:"/signup",style:{color:"black"},children:"SignUp"})]})]})]})})}s(63);var p,f,w=s(49);s(43);function v(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(!0),i=Object(r.a)(a,2),l=i[0],h=i[1];Object(d.c)(b,(function(e){if(e){var t=Object(j.a)(x,"users",e.uid);Object(j.b)(t).then((function(t){p=t.data(),console.log(p.name),f=e.uid,console.log(f),console.log(p.isPass),0==p.isPass?(h(!0),n(!0)):setInterval((function(){h(!1)}),5e3)}))}}));var O=[{questionText:"Ctrl, Shift and Alt Keys are called?",answerOptions:[{answerText:"modifier",isCorrect:!0},{answerText:"function",isCorrect:!1},{answerText:"adjustment",isCorrect:!1},{answerText:"alphanumeric",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"Fathometer is used to measure?",answerOptions:[{answerText:"Earthquakes",isCorrect:!1},{answerText:"Rainfall",isCorrect:!1},{answerText:"Ocean depth",isCorrect:!0},{answerText:"Sound intensity",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"Epsom(England) is the place associated with?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"Snooker",isCorrect:!1},{answerText:"Polo",isCorrect:!1},{answerText:"Shooting",isCorrect:!1},{answerText:"Horse racing",isCorrect:!0}]},{questionText:"The blue colour of the clear sky is due to?",answerOptions:[{answerText:"Diffraction of light",isCorrect:!1},{answerText:"Reflection of light",isCorrect:!1},{answerText:"Dispersion of light",isCorrect:!0},{answerText:"Refraction of light",isCorrect:!1}]},{questionText:"Which one of the following types of waves are used in a night vision apparatus?",answerOptions:[{answerText:"Radio waves",isCorrect:!1},{answerText:"Microwaves",isCorrect:!1},{answerText:" Infra-red waves",isCorrect:!0},{answerText:"None of the above",isCorrect:!1}]},{questionText:"Microsoft Office is an example of a?",answerOptions:[{answerText:"Closed source software",isCorrect:!1},{answerText:"Open source software",isCorrect:!1},{answerText:"Horizontal market software",isCorrect:!0},{answerText:"vertical market software",isCorrect:!1}]},{questionText:"SI unit of equivalent conductance?",answerOptions:[{answerText:"ohm/cm",isCorrect:!1},{answerText:"Siemens m2/equivalent",isCorrect:!0},{answerText:" Siemens/equivalent",isCorrect:!1},{answerText:"None of the above",isCorrect:!1}]}],m=Object(c.useState)(0),v=Object(r.a)(m,2),N=v[0],g=v[1],T=Object(c.useState)(!1),C=Object(r.a)(T,2),y=C[0],q=C[1],S=Object(c.useState)(0),k=Object(r.a)(S,2),I=k[0],E=k[1];return Object(u.jsx)(u.Fragment,{children:l?Object(u.jsx)(u.Fragment,{children:s?Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsxs)("h1",{style:{textAlign:"center"},children:["Welcome ",p.name," "]}),Object(u.jsx)("div",{className:"app",children:y?Object(u.jsxs)("div",{className:"score-section",style:{width:"100%",display:"grid",alignItems:"center",textAlign:"center"},children:["You scored ",I," out of ",O.length,Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"You will be redirected shortly"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"question-section",children:[Object(u.jsxs)("div",{className:"question-count",children:[Object(u.jsxs)("span",{children:["Question ",N+1]}),"/",O.length]}),Object(u.jsx)("div",{className:"question-text",children:O[N].questionText})]}),Object(u.jsx)("div",{className:"answer-section",children:O[N].answerOptions.map((function(e){return Object(u.jsx)("button",{onClick:function(){return function(e){e&&E(I+1);var t=N+1;if(t<O.length)g(t);else{var s=Object(j.a)(x,"users",f);Object(j.e)(s,{isPass:!0}),q(!0)}}(e.isCorrect)},children:e.answerText})}))})]})})," "]}):Object(u.jsx)(w.a,{animation:"grow"})}):Object(u.jsx)(o.a,{to:"/pass"})})}function N(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(u.jsx)(u.Fragment,{children:s?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Quiz has been submitted!"}),Object(u.jsx)("button",{className:"form-field",style:{color:"white",justifyContent:"center"},onClick:function(){Object(d.e)(b).then((function(){n(!0)})).catch((function(e){}))},children:"LogOut"})]})})}s(64);var g=localStorage.getItem("itemsJson"),T=JSON.parse(g);function C(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{style:{textAlign:"center"},children:["Welcome ",T[0]]}),Object(u.jsxs)("div",{style:{display:"flex",padding:"20px"},children:[Object(u.jsxs)("div",{style:{marginRight:"18px"},children:[Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"Ctrl, Shift and Alt Keys are called?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"modifier"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"Who is CEO of Tesla?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"Elon Musk"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"Fathometer is used to measure?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"Ocean depth"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"The iPhone was created by which company?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"Apple"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"The iPhone was created by which company?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"Apple"})})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"Epsom(England) is the place associated with?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"7"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"How many Harry Potter books are there?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"Horse racing"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"The blue colour of the clear sky is due to?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"Dispersion of light"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"Microsoft Office is an example of a?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",style:{marginTop:"-14"},children:"Horizontal market software"})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"app1",children:[Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:"SI unit of equivalent conductance?"})}),Object(u.jsx)("div",{className:"answer-section",children:Object(u.jsx)("button",{className:"button1",children:"Siemens m2/equivalent"})})]})]})]}),Object(u.jsx)(O.b,{to:"/",style:{marginLeft:"46%",color:"white",fontWeight:"bold",textDecoration:"none"},children:"LogOut"})]})}function y(){return Object(u.jsx)(O.a,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",children:Object(u.jsx)(m,{})}),Object(u.jsx)(o.b,{path:"/signup",children:Object(u.jsx)(h,{})}),Object(u.jsx)(o.b,{path:"/quiz",children:Object(u.jsx)(v,{})}),Object(u.jsx)(o.b,{path:"/pass",children:Object(u.jsx)(N,{})}),Object(u.jsx)(o.b,{path:"/showanswers",children:Object(u.jsx)(C,{})})]})})}i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.d20b2754.chunk.js.map