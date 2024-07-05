import{i as h,a as m}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function F({params:e,pagination:t,method:o}){const n=Array.from(t.querySelectorAll(".button"));let s=1;n.forEach(r=>{r.addEventListener("click",i=>{r.classList.contains("active")||(s=r.dataset.page,o({...e,page:s}),n.forEach(c=>c.classList.remove("active")),r.classList.add("active"))})})}function y({params:e,totalPages:t,method:o}){const n=document.querySelector(".pagination");let s="";const r=parseInt(e.page);if(t<=1){n.innerHTML="";return}r>3&&(s+=`
      <button class="button${r==1?" active":""}" data-page="1">
        1
      </button>
    `),r-3>1&&(s+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),r>2&&(s+=`
      <button class="button" data-page="${r-2}">
        ${r-2}
      </button>
    `),r>1&&(s+=`
      <button class="button" data-page="${r-1}">
        ${r-1}
      </button>
    `),s+=`
      <button class="button active" data-page="${r}">
        ${r}
      </button>
    `,r+1<=t&&(s+=`
      <button class="button" data-page="${r+1}">
        ${r+1}
      </button>
    `),r+2<=t&&(s+=`
      <button class="button" data-page="${r+2}">
        ${r+2}
      </button>
    `),r+3==t?s+=`
      <button class="button${t==r?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:r+3<t&&(s+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,s+=`
      <button class="button${t==r?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),n.innerHTML=s,F({params:e,pagination:n,method:o})}const v={domen:"https://your-energy.b.goit.study/api"};function a(e,t,o,n="topRight"){switch(e){case"error":h.error({title:t,message:o,position:n});break;case"success":h.success({title:t,message:o,position:n});break;case"info":h.warning({title:t,message:o,position:n});break}}async function C(){const e=document.querySelector(".loader-text");e.style.display="block";try{const{data:t}=await m({method:"get",url:`${v.domen}/quote`,responseType:"json"});return t}catch{return a("info","Server error","Sorry, today quote was not retrieved from the server. But previous one was pretty good"),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function O(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),o=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}/${o}/${n}`}function b(e,t){const o=document.querySelector(".quote-text"),n=document.querySelector(".quote-author");o&&n&&(n.innerHTML=e,o.innerHTML=t)}async function H(){const e=localStorage.getItem("quote"),t=O();if(!e||JSON.parse(e).currentDate!==t){const{author:s,quote:r}=await C();b(s,r),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:s,quote:r}));return}const{author:o,quote:n}=JSON.parse(e);b(o,n)}const P=e=>e.map(({filter:t="Not found",name:o="Not found",imgURL:n})=>`<div class="category-wrap" name="${o}">
      <img class="category-img" src="${n}" alt="${o}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${o}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function L(e){let t="?";const o=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="inline-block";for(const[s,r]of Object.entries(e))t+=`${s}=${r}&`;try{const s=await m({method:"get",url:`${v.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return o.innerHTML=P(s.data.results),s.data.totalPages}catch{a("error","Server error","Sorry, the category information was not retrieved from the server. Please refresh the page")}finally{n.style.display="none"}}function w(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function E(e){const t=document.querySelector(".js-title"),o=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),o.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),o.classList.remove("is-hide")}async function I(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(o=>{o.addEventListener("click",async()=>{const n=document.querySelector(".form-search-exersises");n.elements.search.value="",n.classList.remove("is-hide"),w(!1),E(""),o.classList.contains("active")||(t.forEach(r=>r.classList.remove("active")),o.classList.add("active"));const s=await e({filter:o.dataset.category.replace(" ","+"),page:1});y({params:{filter:o.dataset.category.replace(" ","+"),page:1},totalPages:s,method:e})})})}const q=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:o,name:n,burnedCalories:s,rating:r,target:i,time:c,bodyPart:f})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?$():$(r)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${o}">
                        <span>Start</span>
                        <svg class="icon-arrow" width="16" height="16">
                            <use href="./images/icons.svg#icon-arrow"></use>
                        </svg>
                    </button>
                </div>
                <div class="exercises-title">
                    <svg class="run-icon" width="24" height="24">
                        <use href="./images/icons.svg#icon-run"></use>
                    </svg>
                    <p class="exercises-name">${n}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${s} / ${c} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${f}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function $(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${A(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function A(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function u(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const o=document.querySelector(".input-search-exersises").value;e.keyword=o,w(!0);let n="?";const s=document.querySelector(".content"),r=document.querySelector(".loader-text");r.style.display="block";for(const[i,c]of Object.entries(e))n+=`${i}=${c}&`;try{const{data:i}=await m({method:"get",url:`${v.domen}/exercises${n}limit=${window.innerWidth<768?8:10}`,responseType:"json"});s.innerHTML=q(i.results);const c=document.querySelector(".pagination");if(c.innerHTML="",i.totalPages>1){y({params:e,totalPages:i==null?void 0:i.totalPages,method:u}),s.innerHTML=q(i.results);const f=document.querySelector(".js-title"),j=document.querySelector(".js-title-slash");f.textContent=t,f.classList.remove("is-hide"),j.classList.remove("is-hide");const B=document.querySelector(".pagination");B.innerHTML="",i.totalPages>1&&y({params:searchparams,totalPages:i==null?void 0:i.totalPages,method:u})}}catch{a("error","Server error","Sorry, the exercises information was not retrieved from the server. Please refresh the page")}finally{r.style.display="none"}}async function N(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:o}=await m({method:"get",url:`${v.domen}/exercises/${e}`,responseType:"json"});return o}catch{a("error","Server error","Sorry, the exercise information was not retrieved from the server. Please refresh the page")}finally{t.style.display="none"}}const M=document.getElementById("exerciseModal"),Q=document.getElementById("closeButton"),p=document.getElementById("addFavoritesButton"),g=document.getElementById("removeFavoritesButton");async function R(e){let t;try{t=await N(e),J(t),K(),D()}catch{}}function J(e){document.querySelector(".exercise-header h2").textContent=e.name,document.querySelector(".rating-value").textContent=e.rating.toFixed(1),document.querySelector(".exercise-image").src=e.gifUrl,document.querySelector(".exercise-image").alt=e.name,document.querySelector(".target-value-js").innerHTML=e.target,document.querySelector(".body-part-value-js").innerHTML=e.bodyPart,document.querySelector(".equipment-value-js").innerHTML=e.equipment,document.querySelector(".popularity-value-js").innerHTML=e.popularity,document.querySelector(".calories-value-js").innerHTML=`${e.burnedCalories}/${e.time} min`,document.querySelector(".exercise-description").textContent=e.description,W(e.rating),Y()}function W(e){document.querySelectorAll(".icon-star").forEach((t,o)=>{t.classList.toggle("empty",o>=Math.round(e))})}function Y(){M.classList.remove("hidden")}function z(){M.classList.add("hidden")}function K(){Q.addEventListener("click",z)}function U(){p.classList.add("hidden"),g.classList.remove("hidden"),G()}function V(){p.classList.remove("hidden"),g.classList.add("hidden")}function D(){p.addEventListener("click",U)}function G(){g.addEventListener("click",V)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",n=>{n.preventDefault();const s=t.value;if(!o(s)){a("error","Error","Please enter a valid email address.");return}a("success","Success","You have successfully subscribed!"),e.reset()});function o(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n).toLowerCase())}});const T=document.querySelector(".form-search-exersises"),X=document.querySelector(".content");document.querySelector(".list-filter-exersises");const k=document.querySelector(".loader-start");k.style.display="block";const x="Muscles";let d=1,l="";document.addEventListener("DOMContentLoaded",async()=>{k.style.display="none";const e=L;H(),I(e);const t=await e({filter:x,page:d});t>1&&y({params:{filter:x,page:d},totalPages:t,method:L})});T.addEventListener("submit",async e=>{e.preventDefault(),await u({value:l,page:d}),S()});T.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await u({value:l,page:d}),S()});X.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(l=t.getAttribute("name"),E(l),await u({value:l,page:d}),S())});function S(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{R(t.id)})})}
//# sourceMappingURL=main-a9a15200.js.map
