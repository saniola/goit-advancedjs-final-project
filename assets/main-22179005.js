import{i as h,a as y}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function F({params:e,pagination:t,method:o}){const n=Array.from(t.querySelectorAll(".button"));let r=1;n.forEach(s=>{s.addEventListener("click",i=>{s.classList.contains("active")||(r=s.dataset.page,o({...e,page:r}),n.forEach(c=>c.classList.remove("active")),s.classList.add("active"))})})}function d({params:e,totalPages:t,method:o}){const n=document.querySelector(".pagination");let r="";const s=parseInt(e.page);if(t<=1){n.innerHTML="";return}s>3&&(r+=`
      <button class="button${s==1?" active":""}" data-page="1">
        1
      </button>
    `),s-3>1&&(r+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),s>2&&(r+=`
      <button class="button" data-page="${s-2}">
        ${s-2}
      </button>
    `),s>1&&(r+=`
      <button class="button" data-page="${s-1}">
        ${s-1}
      </button>
    `),r+=`
      <button class="button active" data-page="${s}">
        ${s}
      </button>
    `,s+1<=t&&(r+=`
      <button class="button" data-page="${s+1}">
        ${s+1}
      </button>
    `),s+2<=t&&(r+=`
      <button class="button" data-page="${s+2}">
        ${s+2}
      </button>
    `),s+3==t?r+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:s+3<t&&(r+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,r+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),n.innerHTML=r,F({params:e,pagination:n,method:o})}const v={domen:"https://your-energy.b.goit.study/api"};function a(e,t,o,n="topRight"){switch(e){case"error":h.error({title:t,message:o,position:n});break;case"success":h.success({title:t,message:o,position:n});break;case"info":h.warning({title:t,message:o,position:n});break}}async function C(){const e=document.querySelector(".loader-text");e.style.display="block";try{const{data:t}=await y({method:"get",url:`${v.domen}/quote`,responseType:"json"});return t}catch{return a("info","Server error","Sorry, today quote was not retrieved from the server. But previous one was pretty good"),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function O(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),o=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}/${o}/${n}`}function S(e,t){const o=document.querySelector(".quote-text"),n=document.querySelector(".quote-author");o&&n&&(n.innerHTML=e,o.innerHTML=t)}async function H(){const e=localStorage.getItem("quote"),t=O();if(!e||JSON.parse(e).currentDate!==t){const{author:r,quote:s}=await C();S(r,s),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:r,quote:s}));return}const{author:o,quote:n}=JSON.parse(e);S(o,n)}const P=e=>e.map(({filter:t="Not found",name:o="Not found",imgURL:n})=>`<div class="category-wrap" name="${o}">
      <img class="category-img" src="${n}" alt="${o}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${o}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function b(e){let t="?";const o=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="inline-block";for(const[r,s]of Object.entries(e))t+=`${r}=${s}&`;try{const r=await y({method:"get",url:`${v.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return o.innerHTML=P(r.data.results),r.data.totalPages}catch{a("error","Server error","Sorry, the category information was not retrieved from the server. Please refresh the page")}finally{n.style.display="none"}}function x(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function w(e){const t=document.querySelector(".js-title"),o=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),o.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),o.classList.remove("is-hide")}async function I(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(o=>{o.addEventListener("click",async()=>{const n=document.querySelector(".form-search-exersises");n.elements.search.value="",n.classList.remove("is-hide"),x(!1),w(""),o.classList.contains("active")||(t.forEach(s=>s.classList.remove("active")),o.classList.add("active"));const r=await e({filter:o.dataset.category.replace(" ","+"),page:1});d({params:{filter:o.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})})})}const L=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:o,name:n,burnedCalories:r,rating:s,target:i,time:c,bodyPart:l})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?q():q(s)}
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
                        <p class="exercises-info-value burned-calories">${r} / ${c} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${l}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function q(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${A(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function A(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function f(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const o=document.querySelector(".input-search-exersises").value;e.keyword=o,x(!0);let n="?";const r=document.querySelector(".content"),s=document.querySelector(".loader-text");s.style.display="block";for(const[i,c]of Object.entries(e))n+=`${i}=${c}&`;try{const{data:i}=await y({method:"get",url:`${v.domen}/exercises${n}limit=${window.innerWidth<768?8:10}`,responseType:"json"});r.innerHTML=L(i.results);const c=document.querySelector(".pagination");if(c.innerHTML="",i.totalPages>1){d({params:e,totalPages:i==null?void 0:i.totalPages,method:f}),r.innerHTML=L(i.results);const l=document.querySelector(".js-title"),j=document.querySelector(".js-title-slash");l.textContent=t,l.classList.remove("is-hide"),j.classList.remove("is-hide");const B=document.querySelector(".pagination");B.innerHTML="",i.totalPages>1&&d({params:searchparams,totalPages:i==null?void 0:i.totalPages,method:f})}}catch{a("error","Server error","Sorry, the exercises information was not retrieved from the server. Please refresh the page")}finally{s.style.display="none"}}async function N(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:o}=await y({method:"get",url:`${v.domen}/exercises/${e}`,responseType:"json"});return o}catch{a("error","Server error","Sorry, the exercise information was not retrieved from the server. Please refresh the page")}finally{t.style.display="none"}}const E=document.getElementById("exerciseModal"),Q=document.getElementById("closeButton"),p=document.getElementById("addFavoritesButton"),g=document.getElementById("removeFavoritesButton");async function R(e){let t;try{t=await N(e),J(t),K(),D()}catch{}}function J(e){document.querySelector(".exercise-header h2").textContent=e.name,document.querySelector(".rating-value").textContent=e.rating.toFixed(1),document.querySelector(".exercise-image").src=e.gifUrl,document.querySelector(".exercise-image").alt=e.name,document.querySelector(".target-value-js").innerHTML=e.target,document.querySelector(".body-part-value-js").innerHTML=e.bodyPart,document.querySelector(".equipment-value-js").innerHTML=e.equipment,document.querySelector(".popularity-value-js").innerHTML=e.popularity,document.querySelector(".calories-value-js").innerHTML=`${e.burnedCalories}/${e.time} min`,document.querySelector(".exercise-description").textContent=e.description,W(e.rating),Y()}function W(e){document.querySelectorAll(".icon-star").forEach((t,o)=>{t.classList.toggle("empty",o>=Math.round(e))})}function Y(){E.classList.remove("hidden")}function z(){E.classList.add("hidden")}function K(){Q.addEventListener("click",z)}function U(){p.classList.add("hidden"),g.classList.remove("hidden"),G()}function V(){p.classList.remove("hidden"),g.classList.add("hidden")}function D(){p.addEventListener("click",U)}function G(){g.addEventListener("click",V)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",n=>{n.preventDefault();const r=t.value;if(!o(r)){a("error","Error","Please enter a valid email address.");return}a("success","Success","You have successfully subscribed!"),e.reset()});function o(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n).toLowerCase())}});const M=document.querySelector(".form-search-exersises"),X=document.querySelector(".content");document.querySelector(".list-filter-exersises");const T=document.querySelector(".loader-start");T.style.display="block";const $="Muscles";let m=1,u="";document.addEventListener("DOMContentLoaded",async()=>{T.style.display="none";const e=b;H(),I(e);const t=await e({filter:$,page:m});t>1&&d({params:{filter:$,page:m},totalPages:t,method:b})});M.addEventListener("submit",async e=>{e.preventDefault(),await f({value:u,page:m}),k()});M.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value=""});X.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(u=t.getAttribute("name"),w(u),await f({value:u,page:m}),k())});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function k(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{R(t.id)})})}
//# sourceMappingURL=main-22179005.js.map
