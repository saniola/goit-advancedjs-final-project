import{a as f}from"./assets/vendor-bdb8a163.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();function w({params:e,pagination:o,method:n}){const r=Array.from(o.querySelectorAll(".button"));let s=1;r.forEach(t=>{t.addEventListener("click",i=>{t.classList.contains("active")||(s=t.dataset.page,n({...e,page:s}),r.forEach(a=>a.classList.remove("active")),t.classList.add("active"))})})}function p({params:e,totalPages:o,method:n}){const r=document.querySelector(".pagination");let s="";const t=parseInt(e.page);if(o<=1){r.innerHTML="";return}t>3&&(s+=`
      <button class="button${t==1?" active":""}" data-page="1">
        1
      </button>
    `),t-3>1&&(s+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),t>2&&(s+=`
      <button class="button" data-page="${t-2}">
        ${t-2}
      </button>
    `),t>1&&(s+=`
      <button class="button" data-page="${t-1}">
        ${t-1}
      </button>
    `),s+=`
      <button class="button active" data-page="${t}">
        ${t}
      </button>
    `,t+1<=o&&(s+=`
      <button class="button" data-page="${t+1}">
        ${t+1}
      </button>
    `),t+2<=o&&(s+=`
      <button class="button" data-page="${t+2}">
        ${t+2}
      </button>
    `),t+3<=o&&(s+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,s+=`
      <button class="button${o==t?" active":""}" data-page="${o}">
        ${o}
      </button>
    `),r.innerHTML=s,w({params:e,pagination:r,method:n})}const g={domen:"https://your-energy.b.goit.study/api"};async function E(){const{data:e}=await f({method:"get",url:`${g.domen}/quote`,responseType:"json"});return e}function M(){const e=new Date,o=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return`${o}/${n}/${r}`}function v(e,o){const n=document.querySelector(".quote .text"),r=document.querySelector(".quote .author");n&&r&&(r.innerHTML=e,n.innerHTML=o)}async function O(){const e=localStorage.getItem("quote"),o=M();if(!e||JSON.parse(e).currentDate!==o){const{author:s,quote:t}=await E();v(s,t),localStorage.setItem("quote",JSON.stringify({currentDate:o,author:s,quote:t}));return}const{author:n,quote:r}=JSON.parse(e);v(n,r)}const T=e=>e.map(({filter:o="Not found",name:n="Not found",imgURL:r})=>`<div class="category-wrap" name="${n}">
      <img class="category-img" src="${r}" alt="${n}">
      <div class="category-text-wrap">
          <p class="category-title">${n}</p>
          <p class="category-subtitle">${o}</p>
      </div>
  </div>`).join("");async function y(e){let o="?";const n=document.querySelector(".content");for(const[s,t]of Object.entries(e))o+=`${s}=${t}&`;const{data:r}=await f({method:"get",url:`${g.domen}/filters${o}limit=12`,responseType:"json"});return n.innerHTML=T(r.results),r.totalPages}async function j(e){const o=Array.from(document.querySelectorAll(".btn-filter"));o.forEach(n=>{n.addEventListener("click",async()=>{if(!n.classList.contains("active")){o.forEach(s=>s.classList.remove("active")),n.classList.add("active");const r=await e({filter:n.dataset.category.replace(" ","+"),page:1});p({params:{filter:n.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})}})})}const N=(e,o=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:r,burnedCalories:s,rating:t,target:i,time:a,bodyPart:c})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${o?h():h(t)}
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
                        <p class="exercises-info-value burned-calories">${s} / ${a} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${c}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function h(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${P(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./img/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function P(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function m(e){const{filter:o,muscles:n,keyword:r,page:s}=e;let t="?";const i=document.querySelector(".content");for(const[L,q]of Object.entries(e))t+=`${L}=${q}&`;const{data:a}=await f({method:"get",url:`${g.domen}/exercises${t}limit=10`,responseType:"json"});i.innerHTML=N(a.results);const c=document.querySelector(".js-title"),x=document.querySelector(".js-title-slash");c.textContent=n,c.classList.remove("is-hide"),x.classList.remove("is-hide");const S=document.querySelector(".pagination");S.innerHTML="",a.totalPages>1&&p({params:{filter:o,muscles:n,keyword:r,page:s},totalPages:a==null?void 0:a.totalPages,method:m})}const $=document.querySelector(".form-search-exersises"),k=document.querySelector(".content");document.querySelector(".list-filter-exersises");const b="Muscles";let u=1,l="",d="";document.addEventListener("DOMContentLoaded",async()=>{const e=y;O(),j(e);const o=await e({filter:b,page:u});o>1&&p({params:{filter:b,page:u},totalPages:o,method:y})});$.addEventListener("submit",async e=>{e.preventDefault(),d=e.target.querySelector(".input-search-exersises").value;const n=document.querySelector(".btn-filter.active").dataset.exercise;await m({[n]:l,keyword:d,page:u})});k.addEventListener("click",async e=>{const o=e.target.closest(".category-wrap");if(!o)return;$.classList.remove("is-hide"),l=o.getAttribute("name");const n=document.querySelector(".btn-filter.active").dataset.exercise;await m({[n]:l,keyword:d,page:u})});
//# sourceMappingURL=commonHelpers.js.map
