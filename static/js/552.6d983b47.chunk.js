"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[552],{1552:function(e,n,r){r.r(n),r.d(n,{default:function(){return J}});var t,a,o,i,s,p,l,d,x,c,u,h,b,g=r(2791),m=r(168),f=r(5706),w=f.Z.div(t||(t=(0,m.Z)(["\n  display: flex;\n  height: calc(100vh - 150px - 20px);\n  gap: 15px;\n"]))),v=f.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  width: calc((100% - 15px * 2 + 30px) / 2);\n  gap: 15px;\n  padding: 20px;\n  border: 1px solid #272729;\n  border-radius: 5px;\n  -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n"]))),Z=f.Z.div(o||(o=(0,m.Z)(["\n  padding: 20px;\n  width: calc((100% - 15px * 2 + 30px) / 2);\n  border: 1px solid #272729;\n  border-radius: 5px;\n  -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n"]))),j=f.Z.p(i||(i=(0,m.Z)(["\n  margin-top: 20px;\n  font-size: 1.2rem;\n"]))),y=r(3433),k=r(5861),C=r(4942),A=r(1413),X=r(9439),q=r(4687),S=r.n(q),z=f.Z.form(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  flex-wrap: wrap;\n  overflow: auto;\n"]))),I=f.Z.input(p||(p=(0,m.Z)(["\n  width: 100%;\n"]))),O=f.Z.button(l||(l=(0,m.Z)(["\n  cursor: ",";\n\n  position: absolute;\n  right: 30px;\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100px;\n  height: 45px;\n\n  border: 1px solid #020024;\n  border-radius: 5px;\n  :hover {\n    background-color: ",";\n    color: ",";\n    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);\n    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);\n    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);\n  }\n  :active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?null:"#047ad6"}),(function(e){return e.disabled?null:"#c2e3ff"}),(function(e){return e.disabled?null:"#005de9"}),(function(e){return e.disabled?null:"#c2e3ff"})),D=f.Z.span(d||(d=(0,m.Z)(["\n  color: #e42c01;\n"]))),H=r(8174),R=r(9434),T=r(890),E=r(3353),P=r(8794),U=r(8966),_=r(184),B=function(){var e=(0,R.I0)(),n=(0,R.v9)(T.nR),r=(0,R.v9)(P.gS),t=(0,g.useState)(!1),a=(0,X.Z)(t,2),o=a[0],i=a[1],s={name:"",email:"",phone:"",adress:""},p=(0,g.useState)(s),l=(0,X.Z)(p,2),d=l[0],x=l[1],c=(0,g.useState)({}),u=(0,X.Z)(c,2),h=u[0],b=u[1],m=function(){var e=!0,n={};d.name.trim()?n.email&&(n.email=""):(e=!1,n.name="Name is required");d.email.trim()?/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(d.email)||(e=!1,n.email="Invalid email address"):(e=!1,n.email="Email is required");return d.phone.trim()?/^\d{3} \d{3}-\d{2}-\d{2}$/.test(d.phone)||(e=!1,n.phone="Invalid phone number"):(e=!1,n.phone="Phone is required"),d.adress.trim()||(e=!1,n.adress="Address is required"),b(n),e},f=function(e){x((0,A.Z)((0,A.Z)({},d),{},(0,C.Z)({},e.target.name,e.target.value)))},w=function(){var t=(0,k.Z)(S().mark((function t(a){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,i(!0),!m()){t.next=13;break}return t.next=6,(0,E.g)((0,A.Z)((0,A.Z)({},d),{},{shop:r,products:(0,y.Z)(n)}));case 6:x(s),a.target.reset(),H.Am.success("Thank you for your order. Our manager will call you as soon as possible.",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e((0,P.DA)()),e((0,T.GC)()),t.next=15;break;case 13:return H.Am.error("Fill all fields",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),t.abrupt("return");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.log(t.t0);case 20:return t.prev=20,i(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[1,17,20,23]])})));return function(e){return t.apply(this,arguments)}}();return(0,_.jsxs)(z,{onSubmit:w,children:[(0,_.jsxs)("label",{children:["Name:",(0,_.jsx)(I,{type:"text",name:"name",onChange:f}),h.name&&(0,_.jsx)(D,{children:h.name})]}),(0,_.jsxs)("label",{children:["Email:",(0,_.jsx)(I,{type:"email",name:"email",onChange:f}),h.email&&(0,_.jsx)(D,{children:h.email})]}),(0,_.jsxs)("label",{children:["Phone:",(0,_.jsx)(I,{type:"text",name:"phone",onChange:f,placeholder:"XXX XXX-XX-XX"}),h.phone&&(0,_.jsx)(D,{children:h.phone})]}),(0,_.jsxs)("label",{children:["Adress:",(0,_.jsx)(I,{type:"text",name:"adress",onChange:f}),h.adress&&(0,_.jsx)(D,{children:h.adress})]}),(0,_.jsx)(O,{type:"submit",disabled:0===n.length,children:o?(0,_.jsx)(U.iT,{height:20,width:20,color:"#d74600",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2}):(0,_.jsx)("p",{children:"Submit"})})]})},L=f.Z.li(x||(x=(0,m.Z)(["\n  flex-basis: 100%;\n  display: flex;\n  gap: 20px;\n  height: auto;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #272729;\n  border-radius: 5px;\n  -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);\n"]))),N=(f.Z.div(c||(c=(0,m.Z)([""]))),f.Z.button(u||(u=(0,m.Z)(["\n  padding: 5px 15px;\n  border: 1px solid #020024;\n  border-radius: 5px;\n  :hover {\n    background-color: #047ad6;\n    color: #c2e3ff;\n    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);\n    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);\n    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);\n  }\n  :active {\n    background-color: #005de9;\n    color: #c2e3ff;\n  }\n"])))),F=f.Z.input(h||(h=(0,m.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),W=r(9141),Y=function(e){var n=e.image,r=e.price,t=e.id,a=e.name,o=e.qty,i=(0,R.I0)();return(0,_.jsxs)(L,{children:[(0,_.jsx)("div",{style:{width:"50%"},children:(0,_.jsx)("img",{style:{width:"100%",height:"auto",borderRadius:"10px"},src:n,alt:a,width:"300px",onError:function(e){e.target.src=W}})}),(0,_.jsxs)("div",{style:{width:"50%",display:"flex",flexDirection:"column"},children:[(0,_.jsxs)("div",{style:{margin:"0 auto",textAlign:"center"},children:[(0,_.jsx)("h3",{children:a}),(0,_.jsxs)("p",{children:[r," UAH"]})]}),(0,_.jsx)(F,{type:"number",value:o,onChange:function(e){Number(e.target.value)<=0||i((0,T.Yv)({id:t,qty:e.target.value}))}}),(0,_.jsxs)("p",{style:{textAlign:"center",marginBottom:"15px"},children:["TOTAL: ",r*o," UAH"]}),(0,_.jsx)(N,{type:"button",onClick:function(){i((0,T.Ir)(t))},children:"Delete"})]})]})},$=f.Z.ul(b||(b=(0,m.Z)(["\n  display: flex;\n  align-content: flex-start;\n  gap: 10px;\n  flex-wrap: wrap;\n  overflow: auto;\n"]))),G=function(){var e=(0,R.v9)(T.nR);return e.length>0?(0,_.jsx)($,{children:e.map((function(e){return(0,_.jsx)(Y,{image:e.img,price:e.price,id:e.id,name:e.name,qty:e.qty},e.id)}))}):(0,_.jsx)("h3",{children:"Choose product"})},J=function(){var e=(0,R.v9)(T.Yg),n=(0,R.v9)(T.nR),r=(0,R.I0)();return(0,g.useEffect)((function(){0===n.length&&r((0,P.DA)())}),[r,n.length]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(w,{children:[(0,_.jsx)(Z,{children:(0,_.jsx)(B,{})}),(0,_.jsx)(v,{children:(0,_.jsx)(G,{})})]}),(0,_.jsxs)(j,{children:["Total price: ",e," UAH"]})]})}},3353:function(e,n,r){r.d(n,{X:function(){return s},g:function(){return p}});var t=r(5861),a=r(4687),o=r.n(a),i=r(1243).Z.create({baseURL:"https://food-delivery-mnv-back.onrender.com/api"}),s=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.replace("/",""),e.next=3,i("shops/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/orders",n);case 2:return r=e.sent,console.log("response:",r),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9141:function(e,n,r){e.exports=r.p+"static/media/placeholder-image.3c0a422b9d39f22e1be7.jpeg"}}]);
//# sourceMappingURL=552.6d983b47.chunk.js.map