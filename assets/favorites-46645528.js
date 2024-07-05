import{a as m,i as f}from"./vendor-ae6d56ab.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const c={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},S=(e,s=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:r,burnedCalories:o,rating:t,target:i,time:d,bodyPart:l})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${s?v():v(t)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${n}">
                        <span>Start</span>
                        <svg class="icon-arrow" width="16" height="16">
                            <use href="/images/icons.svg#icon-arrow"></use>
                        </svg>
                    </button>
                </div>
                <div class="exercises-title">
                    <svg class="run-icon" width="24" height="24">
                        <use href="/images/icons.svg#icon-run"></use>
                    </svg>
                    <p class="exercises-name">${r}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${o} / ${d} min</p>
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
        </div>`).join("");function v(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${L(e)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="/images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="/images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function L(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}function $({params:e,pagination:s,method:n}){const r=Array.from(s.querySelectorAll(".button"));let o=1;r.forEach(t=>{t.addEventListener("click",i=>{t.classList.contains("active")||(o=t.dataset.page,n({...e,page:o}),r.forEach(d=>d.classList.remove("active")),t.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function x({params:e,totalPages:s,method:n}){const r=document.querySelector(".pagination");let o="";const t=parseInt(e.page);if(s<=1){r.innerHTML="";return}t>3&&(o+=`
      <button class="button${t==1?" active":""}" data-page="1">
        1
      </button>
    `),t-3>1&&(o+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),t>2&&(o+=`
      <button class="button" data-page="${t-2}">
        ${t-2}
      </button>
    `),t>1&&(o+=`
      <button class="button" data-page="${t-1}">
        ${t-1}
      </button>
    `),o+=`
      <button class="button active" data-page="${t}">
        ${t}
      </button>
    `,t+1<=s&&(o+=`
      <button class="button" data-page="${t+1}">
        ${t+1}
      </button>
    `),t+2<=s&&(o+=`
      <button class="button" data-page="${t+2}">
        ${t+2}
      </button>
    `),t+3==s?o+=`
      <button class="button${s==t?" active":""}" data-page="${s}">
        ${s}
      </button>
    `:t+3<s&&(o+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,o+=`
      <button class="button${s==t?" active":""}" data-page="${s}">
        ${s}
      </button>
    `),r.innerHTML=o,$({params:e,pagination:r,method:n})}async function p(e){const{data:s}=await m({method:"get",url:`${c.domen}/exercises?page=1&limit=10000`,responseType:"json"}),n=4,r=s.results,o=JSON.parse(localStorage.getItem(c.FAV_KEY))??[];if(r&&o&&o.length){const t=r.filter(b=>o.includes(b._id)),i=e&&e.page?(parseInt(e.page)-1)*n:0,d=t.slice(i,i+n);document.querySelector(".content").innerHTML=S(d,!0),document.querySelector(".pagination").innerHTML="";const l=t.length>n?Math.ceil(t.length/n):1;l>1&&x({params:e,totalPages:l,method:p})}else document.querySelector(".content").innerHTML="",document.querySelector(".pagination").innerHTML=""}function q({type:e,title:s,message:n,position:r="topRight"}){switch(e){case"error":f.error({title:s,message:n,position:r});break;case"success":f.success({title:s,message:n,position:r});break;case"info":f.warning({title:s,message:n,position:r});break}}async function E(e){const s=document.querySelector(".loader-text");s.style.display="block";try{const{data:n}=await m({method:"get",url:`${c.domen}/exercises/${e}`,responseType:"json"});return n}catch{q({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{s.style.display="none"}}const g=document.getElementById("exerciseModal"),w=document.getElementById("closeButton");async function _(e){let s;try{s=await E(e),F(s),I(),O()}catch{showToast("error","Server error","Error fetching exercise data")}}function F(e){document.querySelector(".exercise-header h2").textContent=e.name,document.querySelector(".rating-value").textContent=e.rating.toFixed(1),document.querySelector(".exercise-image").src=e.gifUrl,document.querySelector(".exercise-image").alt=e.name,document.querySelector(".target-value-js").innerHTML=e.target,document.querySelector(".body-part-value-js").innerHTML=e.bodyPart,document.querySelector(".equipment-value-js").innerHTML=e.equipment,document.querySelector(".popularity-value-js").innerHTML=e.popularity,document.querySelector(".calories-value-js").innerHTML=`${e.burnedCalories}/${e.time} min`,document.querySelector(".exercise-description").textContent=e.description,document.querySelector("#addFavoritesButton").dataset.id=e._id,document.querySelector("#removeFavoritesButton").dataset.id=e._id,M(e.rating),T()}function M(e){document.querySelectorAll(".icon-star").forEach((s,n)=>{s.classList.toggle("empty",n>=Math.round(e))})}function T(){g.classList.remove("hidden")}function B(){g.classList.add("hidden")}function I(){w.addEventListener("click",B)}const a=document.getElementById("addFavoritesButton"),u=document.getElementById("removeFavoritesButton");function O(){a.addEventListener("click",A),u.addEventListener("click",H);let e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[];const s=a.dataset.id;s&&e.includes(s)?y():h()}function A(){let e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[];const s=a.dataset.id;s&&!e.includes(s)&&(e.push(a.dataset.id),localStorage.setItem(c.FAV_KEY,JSON.stringify(e)),y())}function H(){let e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[];const s=u.dataset.id;if(s&&e.includes(s)){const n=e.filter(r=>r!==s);localStorage.setItem(c.FAV_KEY,JSON.stringify(n)),h()}}function h(){a.classList.remove("hidden"),u.classList.add("hidden")}function y(){a.classList.add("hidden"),u.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",async()=>{p({page:1})});document.querySelector(".toggle-btn-home").classList.remove("active");document.querySelector(".toggle-btn-favorites").classList.add("active");export{x as a,S as b,c,_ as o,q as s};
//# sourceMappingURL=favorites-46645528.js.map
