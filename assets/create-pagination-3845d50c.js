(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const f={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},p=(i,s=!1)=>i.length===0?'<p class="not-found-message">No results found.</p>':i.map(({_id:o,name:n,burnedCalories:t,rating:e,target:r,time:c,bodyPart:u})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${s?a():a(e)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${o}">
                        <span>Start</span>
                        <svg class="icon-arrow" width="16" height="16">
                            <use href="/images/icons.svg#icon-arrow"></use>
                        </svg>
                    </button>
                </div>
                <div class="exercises-title">
                    <span class="icon-runner circle-icon"></span>
                    <p class="exercises-name">${n}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${t} / ${c} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${u}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${r}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function a(i=null){return i||i===0?`<div class="exercises-ratio">
      <p class="ratio-value">${l(i)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="/images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="/images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function l(i){return i%1?`${Math.round(i*10)/10}`:`${i}.0`}function d({params:i,pagination:s,method:o}){const n=Array.from(s.querySelectorAll(".button"));let t=1;n.forEach(e=>{e.addEventListener("click",r=>{e.classList.contains("active")||(t=e.dataset.page,o({...i,page:t}),n.forEach(c=>c.classList.remove("active")),e.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function v({params:i,totalPages:s,method:o}){const n=document.querySelector(".pagination");let t="";const e=Number(i.page);if(s<=1){n.innerHTML="";return}e>3&&(t+=`
      <button class="button${e===1?" active":""}" data-page="1">
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
    `),e+3===s?t+=`
      <button class="button${s==e?" active":""}" data-page="${s}">
        ${s}
      </button>
    `:e+3<s&&(t+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,t+=`
      <button class="button${s===e?" active":""}" data-page="${s}">
        ${s}
      </button>
    `),n.innerHTML=t,d({params:i,pagination:n,method:o})}export{p as a,v as b,f as c};
//# sourceMappingURL=create-pagination-3845d50c.js.map
