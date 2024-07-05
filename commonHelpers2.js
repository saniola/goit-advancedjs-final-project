import{c as y,s as i,a as m,b as x,o as E}from"./assets/favorites-3e9de202.js";import{a as f}from"./assets/vendor-ae6d56ab.js";async function $(){const e=document.querySelector(".loader-text");e.style.display="block";try{const{data:t}=await f({method:"get",url:`${y.domen}/quote`,responseType:"json"});return t}catch{return i({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function b(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${r}/${o}`}function g(e,t){const r=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");r&&o&&(o.innerHTML=e,r.innerHTML=t)}async function k(){const e=localStorage.getItem("quote"),t=b();if(!e||JSON.parse(e).currentDate!==t){const{author:s,quote:a}=await $();g(s,a),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:s,quote:a}));return}const{author:r,quote:o}=JSON.parse(e);g(r,o)}const M=e=>e.map(({filter:t="Not found",name:r="Not found",imgURL:o})=>`<div class="category-wrap" name="${r}">
      <img class="category-img" src="${o}" alt="${r}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${r}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function v(e){let t="?";const r=document.querySelector(".content"),o=document.querySelector(".loader-text");o.style.display="inline-block";for(const[s,a]of Object.entries(e))t+=`${s}=${a}&`;try{const s=await f({method:"get",url:`${y.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return r.innerHTML=M(s.data.results),s.data.totalPages}catch{i({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{o.style.display="none"}}function S(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function q(e){const t=document.querySelector(".js-title"),r=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),r.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),r.classList.remove("is-hide")}async function P(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(r=>{r.addEventListener("click",async()=>{const o=document.querySelector(".form-search-exersises");o.elements.search.value="",o.classList.remove("is-hide"),S(!1),q(""),r.classList.contains("active")||(t.forEach(a=>a.classList.remove("active")),r.classList.add("active"));const s=await e({filter:r.dataset.category.replace(" ","+"),page:1});m({params:{filter:r.dataset.category.replace(" ","+"),page:1},totalPages:s,method:e})})})}async function u(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const r=document.querySelector(".input-search-exersises").value;e.keyword=r,S(!0);let o="?";const s=document.querySelector(".content"),a=document.querySelector(".loader-text");a.style.display="block";for(const[n,d]of Object.entries(e))o+=`${n}=${d}&`;try{const{data:n}=await f({method:"get",url:`${y.domen}/exercises${o}limit=${window.innerWidth<768?8:10}`,responseType:"json"});s.innerHTML=x(n.results);const d=document.querySelector(".pagination");d.innerHTML="",n.totalPages>1&&m({params:e,totalPages:n==null?void 0:n.totalPages,method:u})}catch{i({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{a.style.display="none"}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",o=>{o.preventDefault();const s=t.value;if(!r(s)){i({type:"error",title:"Error",message:"Please enter a valid email address."});return}i({type:"success",title:"Success",message:"You have successfully subscribed!"}),e.reset()});function r(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(o).toLowerCase())}});const L=document.querySelector(".form-search-exersises"),T=document.querySelector(".content");document.querySelector(".list-filter-exersises");const w=document.querySelector(".loader-start");w.style.display="block";const p="Muscles";let l=1,c="";document.addEventListener("DOMContentLoaded",async()=>{w.style.display="none";const e=v;k(),P(e);const t=await e({filter:p,page:l});t>1&&m({params:{filter:p,page:l},totalPages:t,method:v})});L.addEventListener("submit",async e=>{e.preventDefault(),await u({value:c,page:l}),h()});L.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await u({value:c,page:l}),h()});T.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(c=t.getAttribute("name"),q(c),await u({value:c,page:l}),h())});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function h(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{E(t.id)})})}
//# sourceMappingURL=commonHelpers2.js.map