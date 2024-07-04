import{a as f}from"./assets/vendor-bdb8a163.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(s){if(s.ep)return;s.ep=!0;const e=n(s);fetch(s.href,e)}})();function L({params:t,pagination:o,method:n}){const r=Array.from(o.querySelectorAll(".button"));let s=1;r.forEach(e=>{e.addEventListener("click",a=>{e.classList.contains("active")||(s=e.dataset.page,n({...t,page:s}),r.forEach(c=>c.classList.remove("active")),e.classList.add("active"))})})}function p({params:t,totalPages:o,method:n}){const r=document.querySelector(".pagination");let s="";const e=parseInt(t.page);if(o<=1){r.innerHTML="";return}e>3&&(s+=`
      <button class="button${e==1?" active":""}" data-page="1">
        1
      </button>
    `),e-3>1&&(s+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),e>2&&(s+=`
      <button class="button" data-page="${e-2}">
        ${e-2}
      </button>
    `),e>1&&(s+=`
      <button class="button" data-page="${e-1}">
        ${e-1}
      </button>
    `),s+=`
      <button class="button active" data-page="${e}">
        ${e}
      </button>
    `,e+1<=o&&(s+=`
      <button class="button" data-page="${e+1}">
        ${e+1}
      </button>
    `),e+2<=o&&(s+=`
      <button class="button" data-page="${e+2}">
        ${e+2}
      </button>
    `),e+3<=o&&(s+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,s+=`
      <button class="button${o==e?" active":""}" data-page="${o}">
        ${o}
      </button>
    `),r.innerHTML=s,L({params:t,pagination:r,method:n})}const g={domen:"https://your-energy.b.goit.study/api"};async function q(){const{data:t}=await f({method:"get",url:`${g.domen}/quote`,responseType:"json"});return t}function w(){const t=new Date,o=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${o}/${n}/${r}`}function v(t,o){const n=document.querySelector(".quote .text"),r=document.querySelector(".quote .author");n&&r&&(r.innerHTML=t,n.innerHTML=o)}async function E(){const t=localStorage.getItem("quote"),o=w();if(!t||JSON.parse(t).currentDate!==o){const{author:s,quote:e}=await q();v(s,e),localStorage.setItem("quote",JSON.stringify({currentDate:o,author:s,quote:e}));return}const{author:n,quote:r}=JSON.parse(t);v(n,r)}const M=t=>t.map(({filter:o="Not found",name:n="Not found",imgURL:r})=>`<div class="category-wrap" name="${n}">
      <img class="category-img" src="${r}" alt="${n}">
      <div class="category-text-wrap">
          <p class="category-title">${n}</p>
          <p class="category-subtitle">${o}</p>
      </div>
  </div>`).join("");async function y(t){let o="?";const n=document.querySelector(".content");for(const[s,e]of Object.entries(t))o+=`${s}=${e}&`;const{data:r}=await f({method:"get",url:`${g.domen}/filters${o}limit=12`,responseType:"json"});return n.innerHTML=M(r.results),r.totalPages}async function O(t){const o=Array.from(document.querySelectorAll(".btn-filter"));o.forEach(n=>{n.addEventListener("click",async()=>{if(!n.classList.contains("active")){o.forEach(s=>s.classList.remove("active")),n.classList.add("active");const r=await t({filter:n.dataset.category.replace(" ","+"),page:1});p({params:{filter:n.dataset.category.replace(" ","+"),page:1},totalPages:r,method:t})}})})}const T=(t,o=!1)=>t.length===0?'<p class="not-found-message">No results found.</p>':t.map(({_id:n,name:r,burnedCalories:s,rating:e,target:a,time:c,bodyPart:u})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${o?h():h(e)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${n}">
                        <span>Start</span>
                        <svg class="icon-arrow" width="16" height="16">
                            <use href="./img/icons.svg#icon-arrow"></use>
                        </svg>
                    </button>
                </div>
                <div class="exercises-title">
                    <svg class="run-icon" width="24" height="24">
                        <use href="./img/icons.svg#icon-run"></use>
                    </svg>
                    <p class="exercises-name">${r}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${s} / ${c} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${u}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${a}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function h(t=null){return t||t===0?`<div class="exercises-ratio">
      <p class="ratio-value">${j(t)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./img/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function j(t){return t%1?`${Math.round(t*10)/10}`:`${t}.0`}async function m(t){const{category:o,...n}=t;let r="?";const s=document.querySelector(".content");for(const[x,S]of Object.entries(t))r+=`${x}=${S}&`;const{data:e}=await f({method:"get",url:`${g.domen}/exercises${r}limit=10`,responseType:"json"});s.innerHTML=T(e.results);const a=document.querySelector(".js-title"),c=document.querySelector(".js-title-slash");a.textContent=o,a.classList.remove("is-hide"),c.classList.remove("is-hide");const u=document.querySelector(".pagination");u.innerHTML="",e.totalPages>1&&p({params:n,totalPages:e==null?void 0:e.totalPages,method:m})}const $=document.querySelector(".form-search-exersises"),N=document.querySelector(".content");document.querySelector(".list-filter-exersises");const b="Muscles";let i=1,l="",d="";document.addEventListener("DOMContentLoaded",async()=>{const t=y;E(),O(t);const o=await t({filter:b,page:i});o>1&&p({params:{filter:b,page:i},totalPages:o,method:y})});$.addEventListener("submit",async t=>{t.preventDefault(),d=t.target.querySelector(".input-search-exersises").value;const n=document.querySelector(".btn-filter.active").dataset.exercise;await m({[n]:l,category:n,keyword:d,page:i})});N.addEventListener("click",async t=>{const o=t.target.closest(".category-wrap");if(!o)return;$.classList.remove("is-hide"),l=o.getAttribute("name");const n=document.querySelector(".btn-filter.active").dataset.exercise;await m({[n]:l,category:n,keyword:d,page:i})});
//# sourceMappingURL=commonHelpers.js.map
