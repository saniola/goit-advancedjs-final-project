import{a as v}from"./assets/vendor-bdb8a163.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function w({params:e,pagination:s,method:a}){const n=Array.from(s.querySelectorAll(".button"));n.forEach(t=>{t.addEventListener("click",o=>{t.classList.contains("active")||(curentPage=t.dataset.page,a({...e,page:curentPage}),n.forEach(i=>i.classList.remove("active")),t.classList.add("active"))})})}function g({params:e,totalPages:s,method:a}){const n=document.querySelector(".pagination");let t="";const o=parseInt(e.page);if(s<=1){n.innerHTML="";return}o>3&&(t+=`
      <button class="button${o==1?" active":""}" data-page="1">
        1
      </button>
    `),o-3>1&&(t+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),o>2&&(t+=`
      <button class="button" data-page="${o-2}">
        ${o-2}
      </button>
    `),o>1&&(t+=`
      <button class="button" data-page="${o-1}">
        ${o-1}
      </button>
    `),t+=`
      <button class="button active" data-page="${o}">
        ${o}
      </button>
    `,o+1<=s&&(t+=`
      <button class="button" data-page="${o+1}">
        ${o+1}
      </button>
    `),o+2<=s&&(t+=`
      <button class="button" data-page="${o+2}">
        ${o+2}
      </button>
    `),o+3<=s&&(t+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,t+=`
      <button class="button${s==o?" active":""}" data-page="${s}">
        ${s}
      </button>
    `),n.innerHTML=t,w({params:e,pagination:n,method:a})}const y={domen:"https://your-energy.b.goit.study/api"};async function E(){const{data:e}=await v({method:"get",url:`${y.domen}/quote`,responseType:"json"});return e}function M(){const e=new Date,s=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${s}/${a}/${n}`}function b(e,s){const a=document.querySelector(".quote .text"),n=document.querySelector(".quote .author");a&&n&&(n.innerHTML=e,a.innerHTML=s)}async function O(){const e=localStorage.getItem("quote"),s=M();if(!e||JSON.parse(e).currentDate!==s){const{author:t,quote:o}=await E();b(t,o),localStorage.setItem("quote",JSON.stringify({currentDate:s,author:t,quote:o}));return}const{author:a,quote:n}=JSON.parse(e);b(a,n)}const T=e=>e.map(({filter:s="Not found",name:a="Not found",imgURL:n})=>`<div class="category-wrap" name="${a}">
      <img class="category-img" src="${n}" alt="${a}">
      <div class="category-text-wrap">
          <p class="category-title">${a}</p>
          <p class="category-subtitle">${s}</p>
      </div>
  </div>`).join("");async function d(e){let s="?";const a=document.querySelector(".content");for(const[t,o]of Object.entries(e))s+=`${t}=${o}&`;const{data:n}=await v({method:"get",url:`${y.domen}/filters${s}limit=12`,responseType:"json"});return a.innerHTML=T(n.results),n.totalPages}async function j(e){const s=Array.from(document.querySelectorAll(".btn-filter"));s.forEach(a=>{a.addEventListener("click",async()=>{if(!a.classList.contains("active")){s.forEach(t=>t.classList.remove("active")),a.classList.add("active");const n=await e({filter:a.dataset.category.replace(" ","+"),page:1});g({filter:a.dataset.category.replace(" ","+"),page:1,totalPages:n,method:e})}})})}const P=(e,s=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:a,name:n,burnedCalories:t,rating:o,target:i,time:r,bodyPart:u})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${s?$():$(o)} 
                    </div>
                    <button class="modal-exercise-info" type="button" id="${a}">
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
                    <p class="exercises-name">${n}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${t} / ${r} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${u}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function $(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${k(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./img/icons.svg#icon-star"></use>
      </svg> 
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function k(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function h(e){const{filter:s,muscles:a,keyword:n,page:t}=e;let o="?";const i=document.querySelector(".content");for(const[S,q]of Object.entries(e))o+=`${S}=${q}&`;const{data:r}=await v({method:"get",url:`${y.domen}/exercises${o}limit=10`,responseType:"json"});i.innerHTML=P(r.results);const u=document.querySelector(".js-title"),L=document.querySelector(".js-title-slash");u.textContent=a,u.classList.remove("is-hide"),L.classList.remove("is-hide"),document.querySelector('[data-btn="muscles"]').classList.remove("active"),document.querySelector('[data-btn="bodypart"]').classList.add("active");const x=document.querySelector(".pagination");x.innerHTML="",r.totalPages>1&&g({params:{filter:s,muscles:a,keyword:n,page:t},totalPages:r==null?void 0:r.totalPages,method:h})}const f=document.querySelector(".form-search-exersises"),N=document.querySelector(".content"),A=document.querySelector(".list-filter-exersises"),c="Muscles";let l=1,m="",p="";document.addEventListener("DOMContentLoaded",async()=>{const e=d;O(),j(e);const s=await e({filter:c,page:l});s>1&&g({params:{filter:c,page:l},totalPages:s,method:d})});f.addEventListener("submit",async e=>{e.preventDefault(),p=e.target.querySelector(".input-search-exersises").value,await h({filter:c,muscles:m,keyword:p,page:l})});N.addEventListener("click",async e=>{const s=e.target.closest(".category-wrap");s&&(f.classList.remove("is-hide"),m=s.getAttribute("name"),await h({filter:c,muscles:m,keyword:p,page:l}))});A.addEventListener("click",async e=>{const s=e.target.dataset.btn;if(s&&s==="muscles"){e.target.classList.add("active"),p="",f.reset(),f.classList.add("is-hide"),document.querySelector('[data-btn="bodypart"]').classList.remove("active");const a=document.querySelector(".js-title"),n=document.querySelector(".js-title-slash");a.classList.add("is-hide"),n.classList.add("is-hide");const t=await d({filter:c,page:l});t>1&&g({params:{filter:c,page:l},totalPages:t,method:d})}});
//# sourceMappingURL=commonHelpers.js.map
