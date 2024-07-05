import{a as l,i as y}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function w({params:e,pagination:t,method:n}){const r=Array.from(t.querySelectorAll(".button"));let o=1;r.forEach(s=>{s.addEventListener("click",i=>{s.classList.contains("active")||(o=s.dataset.page,n({...e,page:o}),r.forEach(c=>c.classList.remove("active")),s.classList.add("active"))})})}function m({params:e,totalPages:t,method:n}){const r=document.querySelector(".pagination");let o="";const s=parseInt(e.page);if(t<=1){r.innerHTML="";return}s>3&&(o+=`
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
    `),s+3==t?o+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:s+3<t&&(o+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,o+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),r.innerHTML=o,w({params:e,pagination:r,method:n})}const d={domen:"https://your-energy.b.goit.study/api"};async function M(){const{data:e}=await l({method:"get",url:`${d.domen}/quote`,responseType:"json"});return e}function T(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return`${t}/${n}/${r}`}function h(e,t){const n=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");n&&r&&(r.innerHTML=e,n.innerHTML=t)}async function F(){const e=localStorage.getItem("quote"),t=T();if(!e||JSON.parse(e).currentDate!==t){const{author:o,quote:s}=await M();h(o,s),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:o,quote:s}));return}const{author:n,quote:r}=JSON.parse(e);h(n,r)}const j=e=>e.map(({filter:t="Not found",name:n="Not found",imgURL:r})=>`<div class="category-wrap" name="${n}">
      <img class="category-img" src="${r}" alt="${n}">
      <div class="category-text-wrap">
          <p class="category-title">${n}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function L(e){let t="?";const n=document.querySelector(".content");for(const[o,s]of Object.entries(e))t+=`${o}=${s}&`;const{data:r}=await l({method:"get",url:`${d.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return n.innerHTML=j(r.results),r.totalPages}function S(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function q(e){const t=document.querySelector(".js-title"),n=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),n.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),n.classList.remove("is-hide")}async function B(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(n=>{n.addEventListener("click",async()=>{const r=document.querySelector(".form-search-exersises");if(r.reset(),r.classList.remove("is-hide"),S(!1),q(""),!n.classList.contains("active")){t.forEach(s=>s.classList.remove("active")),n.classList.add("active");const o=await e({filter:n.dataset.category.replace(" ","+"),page:1});m({params:{filter:n.dataset.category.replace(" ","+"),page:1},totalPages:o,method:e})}})})}const C=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:r,burnedCalories:o,rating:s,target:i,time:c,bodyPart:f})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?b():b(s)}
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
                        <p class="exercises-info-value body-part">${f}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function b(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${O(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function O(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function v(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const n=document.querySelector(".input-search-exersises").value;e.keyword=n,S(!0);let r="?";const o=document.querySelector(".content");for(const[c,f]of Object.entries(e))r+=`${c}=${f}&`;console.log(r);const{data:s}=await l({method:"get",url:`${d.domen}/exercises${r}limit=${window.innerWidth<768?8:10}`,responseType:"json"});o.innerHTML=C(s.results);const i=document.querySelector(".pagination");i.innerHTML="",s.totalPages>1&&m({params:e,totalPages:s==null?void 0:s.totalPages,method:v})}async function k(e){const{data:t}=await l({method:"get",url:`${d.domen}/exercises/${e}`,responseType:"json"});return t}const x=document.getElementById("exerciseModal"),H=document.getElementById("closeButton"),g=document.getElementById("addFavoritesButton"),p=document.getElementById("removeFavoritesButton");async function I(e){let t;try{t=await k(e)}catch(n){console.error("Error fetching exercise data:",n)}A(t),Q(),D()}function A(e){document.querySelector(".exercise-header h2").textContent=e.name,document.querySelector(".rating-value").textContent=e.rating.toFixed(1),document.querySelector(".exercise-image").src=e.gifUrl,document.querySelector(".exercise-image").alt=e.name,document.querySelector(".target-value-js").innerHTML=e.target,document.querySelector(".body-part-value-js").innerHTML=e.bodyPart,document.querySelector(".equipment-value-js").innerHTML=e.equipment,document.querySelector(".popularity-value-js").innerHTML=e.popularity,document.querySelector(".calories-value-js").innerHTML=`${e.burnedCalories}/${e.time} min`,document.querySelector(".exercise-description").textContent=e.description,N(e.rating),P()}function N(e){document.querySelectorAll(".icon-star").forEach((t,n)=>{t.classList.toggle("empty",n>=Math.round(e))})}function P(){x.classList.remove("hidden")}function R(){x.classList.add("hidden")}function Q(){H.addEventListener("click",R)}function J(){g.classList.add("hidden"),p.classList.remove("hidden"),K()}function W(){g.classList.remove("hidden"),p.classList.add("hidden")}function D(){g.addEventListener("click",J)}function K(){p.addEventListener("click",W)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",r=>{r.preventDefault();const o=t.value;if(!n(o)){y.error({title:"Error",message:"Please enter a valid email address.",position:"topRight"});return}console.log("Form Data:",{email:o}),y.success({title:"Success",message:"You have successfully subscribed!",position:"topRight"}),e.reset()});function n(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r).toLowerCase())}});const U=document.querySelector(".form-search-exersises"),Y=document.querySelector(".content");document.querySelector(".list-filter-exersises");const $="Muscles";let u=1,a="";document.addEventListener("DOMContentLoaded",async()=>{const e=L;F(),B(e);const t=await e({filter:$,page:u});t>1&&m({params:{filter:$,page:u},totalPages:t,method:L})});U.addEventListener("submit",async e=>{e.preventDefault(),await v({value:a,page:u}),E()});Y.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(a=t.getAttribute("name"),q(a),await v({value:a,page:u}),E())});function E(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{I(t.id)})})}
//# sourceMappingURL=main-2e3e11bc.js.map
