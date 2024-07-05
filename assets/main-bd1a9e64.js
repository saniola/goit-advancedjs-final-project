import{a as u,i as h}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function w({params:e,pagination:t,method:n}){const r=Array.from(t.querySelectorAll(".button"));let o=1;r.forEach(s=>{s.addEventListener("click",i=>{s.classList.contains("active")||(o=s.dataset.page,n({...e,page:o}),r.forEach(c=>c.classList.remove("active")),s.classList.add("active"))})})}function p({params:e,totalPages:t,method:n}){const r=document.querySelector(".pagination");let o="";const s=parseInt(e.page);if(t<=1){r.innerHTML="";return}s>3&&(o+=`
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
    `),r.innerHTML=o,w({params:e,pagination:r,method:n})}const l={domen:"https://your-energy.b.goit.study/api"};async function T(){const{data:e}=await u({method:"get",url:`${l.domen}/quote`,responseType:"json"});return e}function j(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return`${t}/${n}/${r}`}function b(e,t){const n=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");n&&r&&(r.innerHTML=e,n.innerHTML=t)}async function B(){const e=localStorage.getItem("quote"),t=j();if(!e||JSON.parse(e).currentDate!==t){const{author:o,quote:s}=await T();b(o,s),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:o,quote:s}));return}const{author:n,quote:r}=JSON.parse(e);b(n,r)}const C=e=>e.map(({filter:t="Not found",name:n="Not found",imgURL:r})=>`<div class="category-wrap" name="${n}">
      <img class="category-img" src="${r}" alt="${n}">
      <div class="category-text-wrap">
          <p class="category-title">${n}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function L(e){let t="?";const n=document.querySelector(".content");for(const[o,s]of Object.entries(e))t+=`${o}=${s}&`;const{data:r}=await u({method:"get",url:`${l.domen}/filters${t}limit=12`,responseType:"json"});return n.innerHTML=C(r.results),r.totalPages}async function F(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(n=>{n.addEventListener("click",async()=>{if(!n.classList.contains("active")){t.forEach(o=>o.classList.remove("active")),n.classList.add("active");const r=await e({filter:n.dataset.category.replace(" ","+"),page:1});p({params:{filter:n.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})}})})}const O=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:r,burnedCalories:o,rating:s,target:i,time:c,bodyPart:d})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?$():$(s)}
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
                        <p class="exercises-info-value burned-calories">${o} / ${c} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${d}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function $(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${H(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function H(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function g(e){const{category:t,...n}=e;let r="?";const o=document.querySelector(".content");for(const[E,M]of Object.entries(e))r+=`${E}=${M}&`;const{data:s}=await u({method:"get",url:`${l.domen}/exercises${r}limit=10`,responseType:"json"});o.innerHTML=O(s.results);const i=document.querySelector(".js-title"),c=document.querySelector(".js-title-slash");i.textContent=t,i.classList.remove("is-hide"),c.classList.remove("is-hide");const d=document.querySelector(".pagination");d.innerHTML="",s.totalPages>1&&p({params:n,totalPages:s==null?void 0:s.totalPages,method:g})}async function k(e){const{data:t}=await u({method:"get",url:`${l.domen}/exercises/${e}`,responseType:"json"});return t}const q=document.getElementById("exerciseModal"),I=document.getElementById("closeButton"),v=document.getElementById("addFavoritesButton"),y=document.getElementById("removeFavoritesButton");async function P(e){let t;try{t=await k(e)}catch(n){console.error("Error fetching exercise data:",n)}A(t),J(),U()}function A(e){document.querySelector(".exercise-header h2").textContent=e.name,document.querySelector(".rating-value").textContent=e.rating.toFixed(1),document.querySelector(".exercise-image").src=e.gifUrl,document.querySelector(".exercise-image").alt=e.name,document.querySelector(".target-value-js").innerHTML=e.target,document.querySelector(".body-part-value-js").innerHTML=e.bodyPart,document.querySelector(".equipment-value-js").innerHTML=e.equipment,document.querySelector(".popularity-value-js").innerHTML=e.popularity,document.querySelector(".calories-value-js").innerHTML=`${e.burnedCalories}/${e.time} min`,document.querySelector(".exercise-description").textContent=e.description,N(e.rating),R()}function N(e){document.querySelectorAll(".icon-star").forEach((t,n)=>{t.classList.toggle("empty",n>=Math.round(e))})}function R(){q.classList.remove("hidden")}function Q(){q.classList.add("hidden")}function J(){I.addEventListener("click",Q)}function D(){v.classList.add("hidden"),y.classList.remove("hidden"),Y()}function K(){v.classList.remove("hidden"),y.classList.add("hidden")}function U(){v.addEventListener("click",D)}function Y(){y.addEventListener("click",K)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",r=>{r.preventDefault();const o=t.value;if(!n(o)){h.error({title:"Error",message:"Please enter a valid email address.",position:"topRight"});return}console.log("Form Data:",{email:o}),h.success({title:"Success",message:"You have successfully subscribed!",position:"topRight"}),e.reset()});function n(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r).toLowerCase())}});const x=document.querySelector(".form-search-exersises"),z=document.querySelector(".content");document.querySelector(".list-filter-exersises");const S="Muscles";let a=1,f="",m="";document.addEventListener("DOMContentLoaded",async()=>{const e=L;B(),F(e);const t=await e({filter:S,page:a});t>1&&p({params:{filter:S,page:a},totalPages:t,method:L})});x.addEventListener("submit",async e=>{e.preventDefault(),m=e.target.querySelector(".input-search-exersises").value;const n=document.querySelector(".btn-filter.active").dataset.exercise;await g({[n]:f,category:n,keyword:m,page:a})});z.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");if(!t)return;x.classList.remove("is-hide"),f=t.getAttribute("name");const n=document.querySelector(".btn-filter.active").dataset.exercise;await g({[n]:f,category:n,keyword:m,page:a}),V()});function V(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{P(t.id)})})}
//# sourceMappingURL=main-bd1a9e64.js.map
