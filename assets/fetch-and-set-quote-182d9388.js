import{i as c,a as f}from"./vendor-ae6d56ab.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const p={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},$=(o,s=!1)=>o.length===0?'<p class="not-found-message">No results found.</p>':o.map(({_id:n,name:r,burnedCalories:t,rating:e,target:i,time:a,bodyPart:d})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${s?u():u(e)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${n}">
                        <span>Start</span>
                        <svg class="icon-arrow" width="16" height="16">
                            <use href="/images/icons.svg#icon-arrow"></use>
                        </svg>
                    </button>
                </div>
                <div class="exercises-title">
                    <span class="icon-runner circle-icon"></span>
                    <p class="exercises-name">${r}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${t} / ${a} min</p>
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
        </div>`).join("");function u(o=null){return o||o===0?`<div class="exercises-ratio">
      <p class="ratio-value">${b(o)}</p>
      <svg class="ratio-star" width="18" height="18">
          <use href="/images/icons.svg#icon-star"></use>
      </svg>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <svg class="trash-icon" width="16" height="16">
        <use href="/images/icons.svg#icon-trash"></use>
    </svg>
    </button>`}function b(o){return o%1?`${Math.round(o*10)/10}`:`${o}.0`}function v({params:o,pagination:s,method:n}){const r=Array.from(s.querySelectorAll(".button"));let t=1;r.forEach(e=>{e.addEventListener("click",i=>{e.classList.contains("active")||(t=e.dataset.page,n({...o,page:t}),r.forEach(a=>a.classList.remove("active")),e.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function x({params:o,totalPages:s,method:n}){const r=document.querySelector(".pagination");let t="";const e=Number(o.page);if(s<=1){r.innerHTML="";return}e>3&&(t+=`
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
    `),r.innerHTML=t,v({params:o,pagination:r,method:n})}function g({type:o,title:s,message:n,position:r="topRight"}){switch(o){case"error":c.error({title:s,message:n,position:r});break;case"success":c.success({title:s,message:n,position:r});break;case"info":c.warning({title:s,message:n,position:r});break}}async function h(){const o=document.querySelector(".loader-text");o.style.display="block";try{const{data:s}=await f({method:"get",url:`${p.domen}/quote`,responseType:"json"});return s}catch{return g({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{o.style.display="none"}}function y(){const o=new Date,s=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),r=o.getFullYear();return`${s}/${n}/${r}`}function l(o,s){const n=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");n&&r&&(r.innerHTML=o,n.innerHTML=s)}async function S(){const o=localStorage.getItem("quote"),s=y();if(!o||JSON.parse(o).currentDate!==s){const{author:t,quote:e}=await h();l(t,e),localStorage.setItem("quote",JSON.stringify({currentDate:s,author:t,quote:e}));return}const{author:n,quote:r}=JSON.parse(o);l(n,r)}export{$ as a,x as b,p as c,S as f,g as s};
//# sourceMappingURL=fetch-and-set-quote-182d9388.js.map
