import{c as r,a as u,b as m,d as f,f as p}from"./assets/fetch-and-set-quote-f03a0aec.js";import{a as h}from"./assets/vendor-ae6d56ab.js";async function i(e){const{data:l}=await h({method:"get",url:`${r.DOMEN}/exercises?page=1&limit=10000`,responseType:"json"}),t=4,o=l.results,s=JSON.parse(localStorage.getItem(r.FAV_KEY))??[];if(o&&s&&s.length){const n=o.filter(g=>s.includes(g._id)),a=e&&e.page?(parseInt(e.page)-1)*t:0,d=n.slice(a,a+t);document.querySelector(".content").innerHTML=u(d,!0),document.querySelector(".pagination").innerHTML="";const c=n.length>t?Math.ceil(n.length/t):1;c>1&&m({params:e,totalPages:c,method:i}),f()}else document.querySelector(".content").innerHTML="",document.querySelector(".pagination").innerHTML=""}document.addEventListener("DOMContentLoaded",async()=>{p(),i({page:1})});document.querySelector(".toggle-btn-home").classList.remove("active");document.querySelector(".toggle-btn-favorites").classList.add("active");
//# sourceMappingURL=commonHelpers.js.map
