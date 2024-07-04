import{a as u}from"./vendor-bdb8a163.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function M({params:e,pagination:t,method:n}){const r=Array.from(t.querySelectorAll(".button"));let o=1;r.forEach(s=>{s.addEventListener("click",c=>{s.classList.contains("active")||(o=s.dataset.page,n({...e,page:o}),r.forEach(i=>i.classList.remove("active")),s.classList.add("active"))})})}function p({params:e,totalPages:t,method:n}){const r=document.querySelector(".pagination");let o="";const s=parseInt(e.page);if(t<=1){r.innerHTML="";return}s>3&&(o+=`
      <button class="button${s==1?" active":""}" data-page="1">
        1
      </button>
    `),s-3>1&&(o+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),s>2&&(o+=`
      <button class="button" data-page="${s-2}">
        ${s-2}
      </button>
    `),s>1&&(o+=`
      <button class="button" data-page="${s-1}">
        ${s-1}
      </button>
    `),o+=`
      <button class="button active" data-page="${s}">
        ${s}
      </button>
    `,s+1<=t&&(o+=`
      <button class="button" data-page="${s+1}">
        ${s+1}
      </button>
    `),s+2<=t&&(o+=`
      <button class="button" data-page="${s+2}">
        ${s+2}
      </button>
    `),s+3<=t&&(o+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,o+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),r.innerHTML=o,M({params:e,pagination:r,method:n})}const l={domen:"https://your-energy.b.goit.study/api"};async function w(){const{data:e}=await u({method:"get",url:`${l.domen}/quote`,responseType:"json"});return e}function T(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return`${t}/${n}/${r}`}function h(e,t){const n=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");n&&r&&(r.innerHTML=e,n.innerHTML=t)}async function j(){const e=localStorage.getItem("quote"),t=T();if(!e||JSON.parse(e).currentDate!==t){const{author:o,quote:s}=await w();h(o,s),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:o,quote:s}));return}const{author:n,quote:r}=JSON.parse(e);h(n,r)}const B=e=>e.map(({filter:t="Not found",name:n="Not found",imgURL:r})=>`<div class="category-wrap" name="${n}">
      <img class="category-img" src="${r}" alt="${n}">
      <div class="category-text-wrap">
          <p class="category-title">${n}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function b(e){let t="?";const n=document.querySelector(".content");for(const[o,s]of Object.entries(e))t+=`${o}=${s}&`;const{data:r}=await u({method:"get",url:`${l.domen}/filters${t}limit=12`,responseType:"json"});return n.innerHTML=B(r.results),r.totalPages}async function F(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(n=>{n.addEventListener("click",async()=>{if(!n.classList.contains("active")){t.forEach(o=>o.classList.remove("active")),n.classList.add("active");const r=await e({filter:n.dataset.category.replace(" ","+"),page:1});p({params:{filter:n.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})}})})}const O=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:r,burnedCalories:o,rating:s,target:c,time:i,bodyPart:d})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?L():L(s)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${n}">
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
                    <p class="exercises-name">${r}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${o} / ${i} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${d}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${c}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function L(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${C(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function C(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function g(e){const{category:t,...n}=e;let r="?";const o=document.querySelector(".content");for(const[x,E]of Object.entries(e))r+=`${x}=${E}&`;const{data:s}=await u({method:"get",url:`${l.domen}/exercises${r}limit=10`,responseType:"json"});o.innerHTML=O(s.results);const c=document.querySelector(".js-title"),i=document.querySelector(".js-title-slash");c.textContent=t,c.classList.remove("is-hide"),i.classList.remove("is-hide");const d=document.querySelector(".pagination");d.innerHTML="",s.totalPages>1&&p({params:n,totalPages:s==null?void 0:s.totalPages,method:g})}async function H(e){const{data:t}=await u({method:"get",url:`${l.domen}/exercises/${e}`,responseType:"json"});return t}const S=document.getElementById("exerciseModal"),k=document.getElementById("closeButton"),v=document.getElementById("addFavoritesButton"),y=document.getElementById("removeFavoritesButton");async function A(e){let t;try{t=await H(e)}catch(n){console.error("Error fetching exercise data:",n)}I(t),J(),U()}function I(e){document.querySelector(".exercise-header h2").textContent=e.name,document.querySelector(".rating-value").textContent=e.rating.toFixed(1),document.querySelector(".exercise-image").src=e.gifUrl,document.querySelector(".exercise-image").alt=e.name,document.querySelector(".target-value-js").innerHTML=e.target,document.querySelector(".body-part-value-js").innerHTML=e.bodyPart,document.querySelector(".equipment-value-js").innerHTML=e.equipment,document.querySelector(".popularity-value-js").innerHTML=e.popularity,document.querySelector(".calories-value-js").innerHTML=`${e.burnedCalories}/${e.time} min`,document.querySelector(".exercise-description").textContent=e.description,P(e.rating),N()}function P(e){document.querySelectorAll(".icon-star").forEach((t,n)=>{t.classList.toggle("empty",n>=Math.round(e))})}function N(){S.classList.remove("hidden")}function Q(){S.classList.add("hidden")}function J(){k.addEventListener("click",Q)}function R(){v.classList.add("hidden"),y.classList.remove("hidden"),V()}function K(){v.classList.remove("hidden"),y.classList.add("hidden")}function U(){v.addEventListener("click",R)}function V(){y.addEventListener("click",K)}const q=document.querySelector(".form-search-exersises"),W=document.querySelector(".content");document.querySelector(".list-filter-exersises");const $="Muscles";let a=1,f="",m="";document.addEventListener("DOMContentLoaded",async()=>{const e=b;j(),F(e);const t=await e({filter:$,page:a});t>1&&p({params:{filter:$,page:a},totalPages:t,method:b})});q.addEventListener("submit",async e=>{e.preventDefault(),m=e.target.querySelector(".input-search-exersises").value;const n=document.querySelector(".btn-filter.active").dataset.exercise;await g({[n]:f,category:n,keyword:m,page:a})});W.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");if(!t)return;q.classList.remove("is-hide"),f=t.getAttribute("name");const n=document.querySelector(".btn-filter.active").dataset.exercise;await g({[n]:f,category:n,keyword:m,page:a}),Y()});function Y(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{A(t.id)})})}
//# sourceMappingURL=main-cab8de43.js.map
