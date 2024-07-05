import{i as y,a as d}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function k({params:e,pagination:t,method:o}){const n=Array.from(t.querySelectorAll(".button"));let r=1;n.forEach(s=>{s.addEventListener("click",i=>{s.classList.contains("active")||(r=s.dataset.page,o({...e,page:r}),n.forEach(c=>c.classList.remove("active")),s.classList.add("active"))})})}function m({params:e,totalPages:t,method:o}){const n=document.querySelector(".pagination");let r="";const s=parseInt(e.page);if(t<=1){n.innerHTML="";return}s>3&&(r+=`
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
    `),n.innerHTML=r,k({params:e,pagination:n,method:o})}const f={domen:"https://your-energy.b.goit.study/api"};function a({type:e,title:t,message:o,position:n="topRight"}){switch(e){case"error":y.error({title:t,message:o,position:n});break;case"success":y.success({title:t,message:o,position:n});break;case"info":y.warning({title:t,message:o,position:n});break}}async function B(){const e=document.querySelector(".loader-text");e.style.display="block";try{const{data:t}=await d({method:"get",url:`${f.domen}/quote`,responseType:"json"});return t}catch{return a({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function F(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),o=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}/${o}/${n}`}function g(e,t){const o=document.querySelector(".quote-text"),n=document.querySelector(".quote-author");o&&n&&(n.innerHTML=e,o.innerHTML=t)}async function j(){const e=localStorage.getItem("quote"),t=F();if(!e||JSON.parse(e).currentDate!==t){const{author:r,quote:s}=await B();g(r,s),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:r,quote:s}));return}const{author:o,quote:n}=JSON.parse(e);g(o,n)}const O=e=>e.map(({filter:t="Not found",name:o="Not found",imgURL:n})=>`<div class="category-wrap" name="${o}">
      <img class="category-img" src="${n}" alt="${o}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${o}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function b(e){let t="?";const o=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="inline-block";for(const[r,s]of Object.entries(e))t+=`${r}=${s}&`;try{const r=await d({method:"get",url:`${f.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return o.innerHTML=O(r.data.results),r.data.totalPages}catch{a({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{n.style.display="none"}}function q(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function $(e){const t=document.querySelector(".js-title"),o=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),o.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),o.classList.remove("is-hide")}async function C(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(o=>{o.addEventListener("click",async()=>{const n=document.querySelector(".form-search-exersises");n.elements.search.value="",n.classList.remove("is-hide"),q(!1),$(""),o.classList.contains("active")||(t.forEach(s=>s.classList.remove("active")),o.classList.add("active"));const r=await e({filter:o.dataset.category.replace(" ","+"),page:1});m({params:{filter:o.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})})})}const H=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:o,name:n,burnedCalories:r,rating:s,target:i,time:c,bodyPart:T})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?S():S(s)}
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
                        <p class="exercises-info-value body-part">${T}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function S(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${I(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="./images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="./images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function I(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function v(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const o=document.querySelector(".input-search-exersises").value;e.keyword=o,q(!0);let n="?";const r=document.querySelector(".content"),s=document.querySelector(".loader-text");s.style.display="block";for(const[i,c]of Object.entries(e))n+=`${i}=${c}&`;try{const{data:i}=await d({method:"get",url:`${f.domen}/exercises${n}limit=${window.innerWidth<768?8:10}`,responseType:"json"});r.innerHTML=H(i.results);const c=document.querySelector(".pagination");c.innerHTML="",i.totalPages>1&&m({params:e,totalPages:i==null?void 0:i.totalPages,method:v})}catch{a({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{s.style.display="none"}}async function A(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:o}=await d({method:"get",url:`${f.domen}/exercises/${e}`,responseType:"json"});return o}catch{a({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}const x=document.getElementById("exerciseModal"),N=document.getElementById("closeButton"),p=document.getElementById("addFavoritesButton"),h=document.getElementById("removeFavoritesButton");async function P(e){let t;try{t=await A(e),Q(t),Y(),U()}catch{}}function Q(e){document.querySelector(".exercise-header h2").textContent=e.name,document.querySelector(".rating-value").textContent=e.rating.toFixed(1),document.querySelector(".exercise-image").src=e.gifUrl,document.querySelector(".exercise-image").alt=e.name,document.querySelector(".target-value-js").innerHTML=e.target,document.querySelector(".body-part-value-js").innerHTML=e.bodyPart,document.querySelector(".equipment-value-js").innerHTML=e.equipment,document.querySelector(".popularity-value-js").innerHTML=e.popularity,document.querySelector(".calories-value-js").innerHTML=`${e.burnedCalories}/${e.time} min`,document.querySelector(".exercise-description").textContent=e.description,R(e.rating),J()}function R(e){document.querySelectorAll(".icon-star").forEach((t,o)=>{t.classList.toggle("empty",o>=Math.round(e))})}function J(){x.classList.remove("hidden")}function W(){x.classList.add("hidden")}function Y(){N.addEventListener("click",W)}function z(){p.classList.add("hidden"),h.classList.remove("hidden"),V()}function K(){p.classList.remove("hidden"),h.classList.add("hidden")}function U(){p.addEventListener("click",z)}function V(){h.addEventListener("click",K)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",n=>{n.preventDefault();const r=t.value;if(!o(r)){a({type:"error",title:"Error",message:"Please enter a valid email address."});return}a({type:"success",title:"Success",message:"You have successfully subscribed!"}),e.reset()});function o(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n).toLowerCase())}});const w=document.querySelector(".form-search-exersises"),D=document.querySelector(".content");document.querySelector(".list-filter-exersises");const E=document.querySelector(".loader-start");E.style.display="block";const L="Muscles";let u=1,l="";document.addEventListener("DOMContentLoaded",async()=>{E.style.display="none";const e=b;j(),C(e);const t=await e({filter:L,page:u});t>1&&m({params:{filter:L,page:u},totalPages:t,method:b})});w.addEventListener("submit",async e=>{e.preventDefault(),await v({value:l,page:u}),M()});w.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value=""});D.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(l=t.getAttribute("name"),$(l),await v({value:l,page:u}),M())});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function M(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{P(t.id)})})}
//# sourceMappingURL=main-25acbfd0.js.map
