import{i as Y,r as m,j as n,u as g,k as d,d as F}from"./index-cL0uGInF.js";const B=e=>e.advertsStore.adverts,W=e=>e.advertsStore.favorites,X=e=>e.advertsStore.filter,oe=e=>e.advertsStore.advertsAll;Y([B,X],(e,t)=>e.filter(r=>r.make===String(t)));var Z={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function E(e){if(typeof e=="number")return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();r.includes(".")?t=parseFloat(r):t=parseInt(r,10);var i=(e.match(/[^0-9]*$/)||"").toString();return Z[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function P(e){var t=E(e);return"".concat(t.value).concat(t.unit)}var M=function(e,t,r){var i="react-spinners-".concat(e,"-").concat(r);if(typeof window>"u"||!window.document)return i;var o=document.createElement("style");document.head.appendChild(o);var a=o.sheet,l=`
    @keyframes `.concat(i,` {
      `).concat(t,`
    }
  `);return a&&a.insertRule(l,0),i},b=function(){return b=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},b.apply(this,arguments)},K=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r},T=M("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),G=M("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function H(e){var t=e.loading,r=t===void 0?!0:t,i=e.color,o=i===void 0?"#000000":i,a=e.speedMultiplier,l=a===void 0?1:a,c=e.cssOverride,s=c===void 0?{}:c,p=e.size,f=p===void 0?60:p,x=K(e,["loading","color","speedMultiplier","cssOverride","size"]),y=E(f),u=y.value,h=y.unit,S=b({display:"inherit",width:P(f),height:P(f),position:"relative"},s),v=function(O){return{position:"absolute",top:"0",left:"0",width:"".concat(u).concat(h),height:"".concat(u).concat(h),border:"".concat(u/10).concat(h," solid ").concat(o),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(O===1?T:G," ").concat(2/l,"s 0s infinite linear")}};return r?m.createElement("span",b({style:S},x),m.createElement("span",{style:v(1)}),m.createElement("span",{style:v(2)})):null}const ae=({size:e,color:t="black"})=>n.jsx(LoaderWrapper,{className:"loader",children:n.jsx(H,{color:t,size:e})}),U=g.li`
display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  position: relative;

  & img {
    border-radius: 14px;
    width: 274px;
    height: 268px;
    margin-bottom: 14px;
    object-fit: cover;}

.itemStylePrice{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  margin-bottom: 14px;
}
    .itemStyleYear{
      display: flex;
      align-items: center;
      gap: 5px;
      font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    }

    .blueStyle{
      color: #3470ff;
    }

.itemStyleDiscr{
justify-content: -between;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
margin-bottom: 4px;
    };

   
    .btnLeanMore {
      border-radius: 12px;
padding: 12px 99px;
margin-top: 28px;
height: 44px;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
  background-color: #3470ff;
cursor: pointer;
  transition: border-color 0.25s;
}
.btnLeanMore:hover {
  border-color:  #0b44cd;
}
.btnLeanMore:focus,
.btnLeanMore:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.heart{
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border-radius: none;
  color: #fff;
}
.heart:hover{
  border-radius: none;
}
`;var R={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=d.createContext&&d.createContext(R),V=["attr","size","title"];function $(e,t){if(e==null)return{};var r=q(e,t),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function q(e,t){if(e==null)return{};var r={},i=Object.keys(e),o,a;for(a=0;a<i.length;a++)o=i[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},j.apply(this,arguments)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,i)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?z(Object(r),!0).forEach(function(i){J(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function J(e,t,r){return t=Q(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Q(e){var t=D(e,"string");return typeof t=="symbol"?t:String(t)}function D(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function A(e){return e&&e.map((t,r)=>d.createElement(t.tag,w({key:r},t.attr),A(t.child)))}function N(e){return t=>d.createElement(ee,j({attr:w({},e.attr)},t),A(e.child))}function ee(e){var t=r=>{var{attr:i,size:o,title:a}=e,l=$(e,V),c=o||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),d.createElement("svg",j({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,l,{className:s,style:w(w({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&d.createElement("title",null,a),e.children)};return L!==void 0?d.createElement(L.Consumer,null,r=>t(r)):t(R)}function _(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function te(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(e)}const se=({id:e,make:t,model:r,year:i,rentalPrice:o,address:a,rentalCompany:l,mileage:c,img:s,accessories:p,type:f,functionalities:x,fuelConsumption:y,engineSize:u,rentalConditions:h,description:S,openModal:v,deleteFavorites:O,addToFavorites:k})=>{m.useState(!1);const C=F(W),I=C.includes(C.id);return n.jsxs(U,{children:[n.jsx("img",{className:"img",src:s,alt:t}),n.jsxs("div",{className:"itemStylePrice",children:[n.jsxs("div",{className:"itemStyleYear",children:[n.jsx("p",{children:t}),n.jsxs("span",{className:"blueStyle",children:[r,","]}),n.jsx("p",{children:i})]}),n.jsx("p",{children:o})]}),n.jsxs("div",{className:"itemStyleDiscr",children:[n.jsxs("span",{children:[a," | "]}),n.jsxs("span",{children:[l," | "]}),n.jsxs("span",{children:[p[0]," | "]}),n.jsxs("span",{children:[f," | "]}),n.jsxs("span",{children:[c," | "]}),n.jsx("span",{children:x[0]})]}),n.jsxs("button",{className:"heart",onClick:()=>k(e),children:[" ",n.jsx(_,{})]}),I?n.jsxs("button",{className:"heart",onClick:()=>O(e),children:[n.jsx(te,{}),"  "]}):n.jsxs("button",{className:"heart",onClick:()=>k(e),children:[" ",n.jsx(_,{})]}),n.jsx("button",{className:"btnLeanMore",onClick:()=>v({id:e,make:t,model:r,year:i,rentalPrice:o,address:a,rentalCompany:l,mileage:c,img:s,accessories:p,type:f,functionalities:x,fuelConsumption:y,engineSize:u,description:S,rentalConditions:h}),type:"button",children:"Learn more"})]},e)},ne=g.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${e=>e.specialLook?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)"};
  width: 100vw;
     height: 100vh;
  &:hover {
    cursor: pointer;
  }
  .modal {
    padding: 40px;
    max-width: 461px;
    width: 100%;
    min-height: 1px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
  }

  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
  }
  .imgModal{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    border-radius: 14px;
width: 461px;
height: 248px;
background: #f3f3f2;
justify-content: center;
  };
  .itemStylePrice{
  display: flex;
  justify-content: space-between;
       align-items: center;
      font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #121417;
}
    .itemStyleYear{
      width: 275px;
      align-items: center;
      gap: 5px;
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 133%;
color: #121417;
margin-bottom: 8px;}
p {
  margin: 0;
}

    .modelStyle{
      color: #3470ff;
    }
  
.btnLeanMore {
     border-radius: 12px;
padding: 12px 50px;
width: 168px;
margin-top: 24px;
height: 44px;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
  background-color: #3470ff;
cursor: pointer;
  transition: border-color 0.25s;
}

.itemStyleDiscr{
      align-items: center;
      gap: 5px;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
margin-bottom: 8px;
}
.itemStyle_Discr{
      align-items: center;
      gap: 5px;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
margin-bottom: 8px;
}
.titleDiscr{
  margin-bottom:14px;
  font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 143%;
color: #121417;
}
 
    
    .discrStyle {
      margin-top: 14px;
      margin-bottom: 24px;
      font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 143%;
color: #121417;
    }
    .rentalConditional{
      border-radius: 35px;
padding: 7px 14px;
width: 133px;
height: 32px;
background: #f9f9f9;
margin-right:8px;

font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 150%;
letter-spacing: -0.02em;
color: #363535;
    }
  .rental_Conditional{
    margin-bottom: 8px;
  }
  .modelStyle{
    font-weight: 600;
color: #3470ff;
  }
  .btnRental{
    border-radius: 12px;
padding: 12px 50px;
width: 168px;
height: 44px;
background: #3470ff;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
  }
   .btn_Rental{
    border-radius: 12px;
padding: 12px 50px;
background: #3470ff;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
  text-decoration: none;
  }
  .a{
    height: 24px;
  }
`;function re(e){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"},child:[]}]})(e)}const le=({modalData:e,closeModal:t})=>{m.useEffect(()=>{const i=o=>{o.code==="Escape"&&t()};return window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow="auto"}},[t]);const r=i=>{i.target===i.currentTarget&&t()};return n.jsx(ne,{onClick:r,children:n.jsxs("div",{className:"modal",children:[n.jsx("button",{onClick:t,className:"closeBtn",children:n.jsx(re,{})}),n.jsx("img",{className:"imgModal",src:e.img,alt:e.make}),n.jsxs("div",{className:"itemStyleYear",children:[n.jsxs("span",{children:[e.make," "]}),n.jsxs("span",{className:"modelStyle",children:[e.model,", "]}),n.jsx("span",{children:e.year})]}),n.jsxs("div",{className:"itemStyleDiscr",children:[n.jsxs("span",{children:[e.address," | "]}),n.jsxs("span",{children:["Id: ",e.id," | "]}),n.jsxs("span",{children:["Year: ",e.year," | "]}),n.jsxs("span",{children:["Type: ",e.type]})]}),n.jsxs("div",{className:"itemStyleDiscr",children:[n.jsxs("span",{children:["FuelConsumption: ",e.fuelConsumption," | "]}),n.jsxs("span",{children:["EngineSize: ",e.engineSize]})]}),n.jsx("div",{className:"discrStyle",children:n.jsx("span",{children:e.description})}),n.jsx("div",{className:"titleDiscr",children:"Accessories and functionalities:"}),n.jsxs("div",{className:"itemStyleDiscr",children:[n.jsxs("span",{children:[e.accessories[0]," | "]}),n.jsxs("span",{children:[e.accessories[1]," | "]}),n.jsxs("span",{children:[e.accessories[2]," "]})]}),n.jsxs("div",{className:"itemStyle_Discr",children:[n.jsxs("span",{children:[e.functionalities[0]," | "]}),n.jsxs("span",{children:[e.functionalities[1]," | "]}),n.jsx("span",{children:e.functionalities[2]})]}),n.jsx("div",{className:"titleDiscr",children:"Rental Conditions: "}),n.jsxs("div",{className:"rental_Conditional",children:[n.jsxs("span",{className:"rentalConditional",children:["Minimum age : ",n.jsx("span",{className:"modelStyle",children:"25"})]}),n.jsx("span",{className:"rentalConditional",children:"Valid driver’s license"})]}),n.jsxs("div",{className:"rental_Conditional",children:[n.jsx("span",{className:"rentalConditional",children:"Security deposite required "}),n.jsxs("span",{className:"rentalConditional",children:["Mileage: ",n.jsx("span",{className:"modelStyle",children:e.mileage.toLocaleString("en-CA")})]}),n.jsxs("span",{className:"rentalConditional",children:["Price: ",n.jsx("span",{className:"modelStyle",children:e.rentalPrice})]})]}),n.jsx("br",{className:"a"}),n.jsx("a",{className:"btn_Rental",href:"tel:+380730000000",children:"Rental car"})]})})},ce=g.div`

.list{
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  gap: 29px;
  padding-bottom: 80px;

}
 
`,de=g.div`
display: flex;
justify-content: center;
.buttonStyle{
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
line-height: 150%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #3470ff;
background-color: transparent;
};
.buttonStule :hover {
    border-color: transparent;
}
`,fe=g.form`
display: flex;
justify-content: center;
margin: 50px 0 50px 0;
gap: 18px;
.labelStyle{
    display: flex;
    flex-direction: row;
    font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
color: #8a8a89;
}

.selectStyle{
    border-radius: 14px;
width: 224px;
height: 48px;
}
.btnSearch{
  border-radius: 12px;
padding: 12px 50px;
width: 168px;
height: 44px;
background: #3470ff;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;

}
 
`;export{se as A,de as L,le as M,fe as S,ce as a,ae as b,oe as c,X as d,W as e,B as s};
