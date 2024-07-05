import{a as h}from"./vendor-ae6d56ab.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const a={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},b=(i,s=!1)=>i.length===0?'<p class="not-found-message">No results found.</p>':i.map(({_id:n,name:o,burnedCalories:t,rating:e,target:r,time:d,bodyPart:l})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${s?f():f(e)}
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
                    <p class="exercises-name">${o}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${t} / ${d} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${l}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${r}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function f(i=null){return i||i===0?`<div class="exercises-ratio">
      <p class="ratio-value">${y(i)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="/images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="/images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function y(i){return i%1?`${Math.round(i*10)/10}`:`${i}.0`}function $({params:i,pagination:s,method:n}){const o=Array.from(s.querySelectorAll(".button"));let t=1;o.forEach(e=>{e.addEventListener("click",r=>{e.classList.contains("active")||(t=e.dataset.page,n({...i,page:t}),o.forEach(d=>d.classList.remove("active")),e.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function x({params:i,totalPages:s,method:n}){const o=document.querySelector(".pagination");let t="";const e=parseInt(i.page);if(s<=1){o.innerHTML="";return}e>3&&(t+=`
      <button class="button${e==1?" active":""}" data-page="1">
        1
      </button>
    `),e-3>1&&(t+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),e>2&&(t+=`
      <button class="button" data-page="${e-2}">
        ${e-2}
      </button>
    `),e>1&&(t+=`
      <button class="button" data-page="${e-1}">
        ${e-1}
      </button>
    `),t+=`
      <button class="button active" data-page="${e}">
        ${e}
      </button>
    `,e+1<=s&&(t+=`
      <button class="button" data-page="${e+1}">
        ${e+1}
      </button>
    `),e+2<=s&&(t+=`
      <button class="button" data-page="${e+2}">
        ${e+2}
      </button>
    `),e+3==s?t+=`
      <button class="button${s==e?" active":""}" data-page="${s}">
        ${s}
      </button>
    `:e+3<s&&(t+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,t+=`
      <button class="button${s==e?" active":""}" data-page="${s}">
        ${s}
      </button>
    `),o.innerHTML=t,$({params:i,pagination:o,method:n})}async function v(i){const{data:s}=await h({method:"get",url:`${a.domen}/exercises?page=1&limit=10000`,responseType:"json"}),n=4,o=s.results,t=JSON.parse(localStorage.getItem(a.FAV_KEY))??[];if(o&&t&&t.length){const e=o.filter(m=>t.includes(m._id)),r=i&&i.page?(parseInt(i.page)-1)*n:0,d=e.slice(r,r+n);document.querySelector(".content").innerHTML=b(d,!0),document.querySelector(".pagination").innerHTML="";const l=e.length>n?Math.ceil(e.length/n):1;l>1&&x({params:i,totalPages:l,method:v})}else document.querySelector(".content").innerHTML="",document.querySelector(".pagination").innerHTML=""}const c=document.getElementById("addFavoritesButton"),u=document.getElementById("removeFavoritesButton");function F(){c.addEventListener("click",L),u.addEventListener("click",S);let i=JSON.parse(localStorage.getItem(a.FAV_KEY))??[];const s=c.dataset.id;s&&i.includes(s)?g():p()}function L(){let i=JSON.parse(localStorage.getItem(a.FAV_KEY))??[];const s=c.dataset.id;s&&!i.includes(s)&&(i.push(c.dataset.id),localStorage.setItem(a.FAV_KEY,JSON.stringify(i)),g())}function S(){let i=JSON.parse(localStorage.getItem(a.FAV_KEY))??[];const s=u.dataset.id;if(s&&i.includes(s)){const n=i.filter(o=>o!==s);localStorage.setItem(a.FAV_KEY,JSON.stringify(n)),p()}}function p(){c.classList.remove("hidden"),u.classList.add("hidden")}function g(){c.classList.add("hidden"),u.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",async()=>{v({page:1})});document.querySelector(".toggle-btn-home").classList.remove("active");document.querySelector(".toggle-btn-favorites").classList.add("active");export{x as a,b,a as c,F as i};
//# sourceMappingURL=favorites-7927c87b.js.map
