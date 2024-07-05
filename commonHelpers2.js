import{c as L,s as d,b as h,a as x,f as P,d as v}from"./assets/fetch-and-set-quote-40911557.js";import{a as E}from"./assets/vendor-ae6d56ab.js";const T=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:o})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${o}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function f(e){let t="?";const s=document.querySelector(".content"),o=document.querySelector(".loader-text");o.style.display="inline-block";for(const[r,a]of Object.entries(e))t+=`${r}=${a}&`;try{const r=await E({method:"get",url:`${L.DOMEN}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=T(r.data.results),r.data.totalPages}catch{d({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{o.style.display="none"}}function b(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function q(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function k(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const o=document.querySelector(".form-search-exersises");if(o.elements.search.value="",o.classList.remove("is-hide"),b(!1),q(""),!s.classList.contains("active")){t.forEach(a=>a.classList.remove("active")),s.classList.add("active");const r=await e({filter:s.dataset.category.replace(" ","+"),page:1});h({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})}})})}async function u(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,b(!0);let o="?";const r=document.querySelector(".content"),a=document.querySelector(".loader-text");a.style.display="block";for(const[c,y]of Object.entries(e))o+=`${c}=${y}&`;try{const{data:c}=await E({method:"get",url:`${L.DOMEN}/exercises${o}limit=${window.innerWidth<768?8:10}`,responseType:"json"});r.innerHTML=x(c.results);const y=document.querySelector(".pagination");y.innerHTML="",c.totalPages>1&&h({params:e,totalPages:c==null?void 0:c.totalPages,method:u})}catch{d({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{a.style.display="none"}}function g(e){const s=window.location.hostname!=="localhost"?"/goit-advancedjs-final-project":"";e.querySelectorAll('use[href*="images/icons.svg"]').forEach(o=>{const r=o.getAttribute("href");o.setAttribute("href",`${s}${r}`)})}function M(){new MutationObserver(t=>{t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&g(o)})})}).observe(document.body,{childList:!0,subtree:!0}),g(document.body)}const p=document.querySelector(".scroll-to-top");let S=document.documentElement.scrollTop;function $(){S=document.documentElement.scrollTop,S>100?p.style.display="flex":p.style.display="none"}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e==null?void 0:e.querySelector(".footer-form-input");e==null||e.addEventListener("submit",o=>{o.preventDefault();const r=t.value;if(!s(r)){d({type:"error",title:"Error",message:"Please enter a valid email address."});return}d({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",r),e.reset()});function s(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(o).toLowerCase())}});const n=document.querySelector(".form-search-exersises"),m=document.querySelector(".content"),j=document.querySelector(".scroll-to-top"),w="Muscles",l=1;let i="";document.addEventListener("DOMContentLoaded",async()=>{M(),P(),k(f);const e=await f({filter:w,page:l});e>1&&h({params:{filter:w,page:l},totalPages:e,method:f})});n==null||n.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".btn-filter.active").dataset.exercise;await u({[t]:i,category:t,page:l}),v()});n==null||n.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await u({value:i,page:l}),v()});m==null||m.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(n.classList.remove("is-hide"),i=t.getAttribute("name"),q(i),await u({value:i,page:l}),v(),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"}))});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");j.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=$;window.onload=$;
//# sourceMappingURL=commonHelpers2.js.map
