import{c as r,a as u,b as m,f}from"./assets/mobile-menu-e043a685.js";import{a as p}from"./assets/vendor-ae6d56ab.js";async function i(e){const{data:l}=await p({method:"get",url:`${r.domen}/exercises?page=1&limit=10000`,responseType:"json"}),t=4,s=l.results,n=JSON.parse(localStorage.getItem(r.FAV_KEY))??[];if(s&&n&&n.length){const o=s.filter(g=>n.includes(g._id)),a=e&&e.page?(parseInt(e.page)-1)*t:0,d=o.slice(a,a+t);document.querySelector(".content").innerHTML=u(d,!0),document.querySelector(".pagination").innerHTML="";const c=o.length>t?Math.ceil(o.length/t):1;c>1&&m({params:e,totalPages:c,method:i})}else document.querySelector(".content").innerHTML="",document.querySelector(".pagination").innerHTML=""}document.addEventListener("DOMContentLoaded",async()=>{f(),i({page:1})});document.querySelector(".toggle-btn-home").classList.remove("active");document.querySelector(".toggle-btn-favorites").classList.add("active");
//# sourceMappingURL=commonHelpers.js.map
