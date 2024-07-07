import{c as b,s as n,b as h,d as x,e as P,f as $}from"./assets/fetch-and-set-quote-e5737eb3.js";import{a as g}from"./assets/vendor-032df744.js";const k=e=>e.map(({filter:t="Not found",name:r="Not found",imgURL:s})=>`<div class="category-wrap" name="${r}">
      <img class="category-img" src="${s}" alt="${r}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${r}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function m(e){let t="?";const r=document.querySelector(".content"),s=document.querySelector(".loader-text");s.style.display="inline-block";for(const[o,c]of Object.entries(e))t+=`${o}=${c}&`;try{const o=await g({method:"get",url:`${b.DOMEN}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return r.innerHTML=k(o.data.results),o.data.totalPages}catch{n({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{s.style.display="none"}}function L(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function q(e){const t=document.querySelector(".js-title"),r=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),r.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),r.classList.remove("is-hide")}async function T(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(r=>{r.addEventListener("click",async()=>{if(r.classList.contains("active"))return;const s=document.querySelector(".form-search-exersises");s.elements.search.value="",s.classList.remove("is-hide"),L(!1),q(""),t.forEach(c=>c.classList.remove("active")),r.classList.add("active");const o=await e({filter:r.dataset.category.replace(" ","+"),page:1});h({params:{filter:r.dataset.category.replace(" ","+"),page:1},totalPages:o,method:e})})})}async function u(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const r=document.querySelector(".input-search-exersises").value;e.keyword=r,L(!0);let s="?";const o=document.querySelector(".content"),c=document.querySelector(".loader-text");c.style.display="block";for(const[a,y]of Object.entries(e))s+=`${a}=${y}&`;try{const{data:a}=await g({method:"get",url:`${b.DOMEN}/exercises${s}limit=${window.innerWidth<768?8:10}`,responseType:"json"});o.innerHTML=x(a.results);const y=document.querySelector(".pagination");y.innerHTML="",a.totalPages>1&&h({params:e,totalPages:a==null?void 0:a.totalPages,method:u})}catch{n({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{c.style.display="none"}P()}function p(e){const r=window.location.hostname!=="localhost"?"/goit-advancedjs-final-project":"";e.querySelectorAll('use[href*="images/icons.svg"]').forEach(s=>{const o=s.getAttribute("href");s.setAttribute("href",`${r}${o}`)})}function M(){new MutationObserver(t=>{t.forEach(r=>{r.addedNodes.forEach(s=>{s.nodeType===1&&p(s)})})}).observe(document.body,{childList:!0,subtree:!0}),p(document.body)}const v=document.querySelector(".scroll-to-top");let w=document.documentElement.scrollTop;function E(){w=document.documentElement.scrollTop,w>100?v.style.display="flex":v.style.display="none"}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e==null?void 0:e.querySelector(".footer-form-input");e==null||e.addEventListener("submit",async o=>{o.preventDefault();const c=t.value;if(!r(c)){n({type:"error",title:"Error",message:"Please enter a valid email address."});return}try{const a=await g.post("https://your-energy.b.goit.study/api/subscription",{email:c});n({type:"success",title:"Success",message:a.data.message})}catch(a){a.response?s(a.response.status,a.response.data.message):n({type:"error",title:"Error",message:"An unexpected error occurred. Please try again later."})}e.reset()});function r(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(o).toLowerCase())}function s(o,c){switch(o){case 400:n({type:"error",title:"Bad Request",message:"Invalid request body. Please check your input."});break;case 404:n({type:"error",title:"Not Found",message:"The requested resource could not be found."});break;case 409:n({type:"warning",title:"Already Subscribed",message:"You are already subscribed to this service."});break;case 500:n({type:"error",title:"Server Error",message:"There was a problem with the server. Please try again later."});break;default:n({type:"error",title:"Error",message:c||"An unexpected error occurred. Please try again later."})}}});const i=document.querySelector(".form-search-exersises"),f=document.querySelector(".content"),A=document.querySelector(".scroll-to-top"),S="Muscles",d=1;let l="";window.onload=function(){const e=document.querySelector(".loader-text");e.style.display="none"};document.addEventListener("DOMContentLoaded",async()=>{M(),$(),T(m);const e=await m({filter:S,page:d});e>1&&h({params:{filter:S,page:d},totalPages:e,method:m})});i==null||i.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".btn-filter.active").dataset.exercise;await u({[t]:l,category:t,page:d})});i==null||i.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await u({value:l,page:d})});f==null||f.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(i.classList.remove("is-hide"),l=t.getAttribute("name"),q(l),await u({value:l,page:d}),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"}))});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");A.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=E;window.onload=E;
//# sourceMappingURL=commonHelpers2.js.map
