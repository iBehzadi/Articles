import{_ as p}from"./nuxt-link.2yAyl3nH.js";import{d,o as e,c as s,a as c,t as _,b as i,w as m,e as h,f,h as n,F as g,r as w,i as x}from"./entry.KzOryYKO.js";import{u as b}from"./fetch.siYyASPk.js";const k={class:"border bg-white rounded-md w-full shadow-md flex flex-col justify-between items-center p-3 h-72 transition-all duration-500 hover:shadow-dark hover:scale-[1.02]"},v=["src"],y=d({__name:"ProductCard",props:{product:{}},setup(l){return(t,r)=>{const o=p;return e(),s("div",k,[c("img",{src:t.product.images,class:"w-40",alt:""},null,8,v),c("span",null,_(t.product.title),1),i(o,{class:"btn w-[90%] cursor-pointer text-lime-200 bg-blue-500",to:`/products/${t.product.id}`},{default:m(()=>[h(" View Details ")]),_:1},8,["to"])])}}}),C={key:0,class:"section-center grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3"},j=d({__name:"index",async setup(l){let t,r;const{data:o}=([t,r]=f(()=>b("https://api.escuelajs.co/api/v1/products","$3rbWfmSWkM")),t=await t,r(),t);return(N,V)=>{const u=y;return e(),s("section",null,[n(o)?(e(),s("div",C,[(e(!0),s(g,null,w(n(o),a=>(e(),s("div",{key:a.id},[i(u,{product:a},null,8,["product"])]))),128))])):x("",!0)])}}});export{j as default};