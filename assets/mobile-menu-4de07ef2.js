import{i as E,a as g}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function Y({params:e,pagination:t,method:s}){const n=Array.from(t.querySelectorAll(".button"));let o=1;n.forEach(r=>{r.addEventListener("click",a=>{r.classList.contains("active")||(o=r.dataset.page,s({...e,page:o}),n.forEach(l=>l.classList.remove("active")),r.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function w({params:e,totalPages:t,method:s}){const n=document.querySelector(".pagination");let o="";const r=Number(e.page);if(t<=1){n.innerHTML="";return}r>3&&(o+=`
      <button class="button${r===1?" active":""}" data-page="1">
        1
      </button>
    `),r-3>1&&(o+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),r>2&&(o+=`
      <button class="button" data-page="${r-2}">
        ${r-2}
      </button>
    `),r>1&&(o+=`
      <button class="button" data-page="${r-1}">
        ${r-1}
      </button>
    `),o+=`
    <button class="button active" data-page="${r}">
      ${r}
    </button>
  `,r+1<=t&&(o+=`
      <button class="button" data-page="${r+1}">
        ${r+1}
      </button>
    `),r+2<=t&&(o+=`
      <button class="button" data-page="${r+2}">
        ${r+2}
      </button>
    `),r+3===t?o+=`
      <button class="button${t==r?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:r+3<t&&(o+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,o+=`
      <button class="button${t===r?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),n.innerHTML=o,Y({params:e,pagination:n,method:s})}const c={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"};function i({type:e,title:t,message:s,position:n="topRight"}){switch(e){case"error":E.error({title:t,message:s,position:n});break;case"success":E.success({title:t,message:s,position:n});break;case"info":E.warning({title:t,message:s,position:n});break}}async function J(){const e=document.querySelector(".loader-text");e.style.display="inline-block";try{const{data:t}=await g({method:"get",url:`${c.domen}/quote`,responseType:"json"});return t}catch{return i({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function K(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}/${s}/${n}`}function T(e,t){const s=document.querySelector(".quote-text"),n=document.querySelector(".quote-author");s&&n&&(n.innerHTML=e,s.innerHTML=t)}async function _(){const e=localStorage.getItem("quote"),t=K();if(e&&JSON.parse(e).currentDate==t){const{author:s,quote:n}=JSON.parse(e);T(s,n);return}if(!e||JSON.parse(e).currentDate!==t){const{author:s,quote:n}=await J();T(s,n),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:s,quote:n}))}}const W=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:n})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${n}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function $(e){let t="?";const s=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="inline-block";for(const[o,r]of Object.entries(e))t+=`${o}=${r}&`;try{const o=await g({method:"get",url:`${c.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=W(o.data.results),o.data.totalPages}catch{i({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{n.style.display="none"}}function R(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function C(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function D(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const n=document.querySelector(".form-search-exersises");if(n.elements.search.value="",n.classList.remove("is-hide"),R(!1),C(""),!s.classList.contains("active")){t.forEach(r=>r.classList.remove("active")),s.classList.add("active");const o=await e({filter:s.dataset.category.replace(" ","+"),page:1});w({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:o,method:e})}})})}const Q=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:s,name:n,burnedCalories:o,rating:r,target:a,time:l,bodyPart:V})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?O():O(r)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${s}">
                        <span>Start</span>
                        <span class="icon-arrow-right icon-arrow"></span>
                    </button>
                </div>
                <div class="exercises-title">
                    <span class="icon-runner circle-icon"></span>
                    <p class="exercises-name">${n}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${o} / ${l} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${V}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${a}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function O(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${z(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <span class="icon-star trash-icon"></span>
    </button>`}function z(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function b(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,R(!0);let n="?";const o=document.querySelector(".content"),r=document.querySelector(".loader-text");r.style.display="block";for(const[a,l]of Object.entries(e))n+=`${a}=${l}&`;try{const{data:a}=await g({method:"get",url:`${c.domen}/exercises${n}limit=${window.innerWidth<768?8:10}`,responseType:"json"});o.innerHTML=Q(a.results);const l=document.querySelector(".pagination");l.innerHTML="",a.totalPages>1&&w({params:e,totalPages:a==null?void 0:a.totalPages,method:b})}catch{i({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{r.style.display="none"}}async function U(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:s}=await g({method:"get",url:`${c.domen}/exercises/${e}`,responseType:"json"});return s}catch{i({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}let d,v;function G(){d=document.getElementById("addFavoritesButton"),v=document.getElementById("removeFavoritesButton"),d.addEventListener("click",X),v.addEventListener("click",Z);const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=d.dataset.id;t&&e.includes(t)?N():j()}function X(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=d.dataset.id;t&&!e.includes(t)&&(e.push(d.dataset.id),localStorage.setItem(c.FAV_KEY,JSON.stringify(e)),N())}function Z(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=v.dataset.id;if(t&&e.includes(t)){const s=e.filter(n=>n!==t);localStorage.setItem(c.FAV_KEY,JSON.stringify(s)),j()}}function j(){d.classList.remove("hidden"),v.classList.add("hidden")}function N(){d.classList.add("hidden"),v.classList.remove("hidden")}async function ee(e,t){const{data:s}=await g({method:"patch",url:`${c.domen}/exercises/${e}/rating`,responseType:"json",data:t});return s}function te(){const e=document.getElementById("modalOverlay"),t=`
    <div class="modal-window-rating" id="ratingModal">
      <span class="close-button icon-x" id="closeRatingButton"></span>
      <div class="rating-wrapper">
        <div class="rating-header">
          <h3>Rating</h3>
          <div class="rating">
            <span class="rating-value">0.0</span>
            <span class="icon-star empty" data-value="1"></span>
            <span class="icon-star empty" data-value="2"></span>
            <span class="icon-star empty" data-value="3"></span>
            <span class="icon-star empty" data-value="4"></span>
            <span class="icon-star empty" data-value="5"></span>
          </div>
        </div>
        <form class="rating-form" id="ratingForm">
          <input class="rating-form-email" type="email" placeholder="Email" required>
          <textarea class="rating-form-comment" placeholder="Your comment" required></textarea>
        </form>
        <button type="submit" class="send-rating-btn" id="sendRatingButton" form="ratingForm">Send</button>
      </div>
    </div>
  `;e.insertAdjacentHTML("beforeend",t)}function se(){return document.getElementById("ratingModal").remove()}let q,u=0;function ne(e){te(),ae(),ie(),le(e),oe()}function oe(){f().querySelector("#closeRatingButton").addEventListener("click",P)}function P(){exerciseModal.classList.remove("hidden"),re(),de(),se()}function re(){h(0),u=0,p().reset()}function h(e){f().querySelectorAll(".icon-star").forEach((o,r)=>{r<e?o.classList.remove("empty"):o.classList.add("empty")});var s=e.toFixed(1);const n=f().querySelector(".rating-value");n.textContent=s}function ae(){f().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const s=parseInt(t.getAttribute("data-value"),10);h(s)}),t.addEventListener("mouseout",()=>{h(u)})})}function ie(){f().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{u=parseInt(t.getAttribute("data-value"),10),h(u)})})}function ce(e,t){if(e.preventDefault(),u===0){i({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const s=p().querySelector(".rating-form-email").value,n=p().querySelector(".rating-form-comment").value;ee(t,{rate:u,email:s,review:n}).then(()=>{P(),i({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(r=>{console.error("Error submitting form:",r),i({type:"error",title:"Server error",message:"Error submitting rating form"})})}function le(e){q=t=>ce(t,e),p().addEventListener("submit",q)}function de(){p().removeEventListener("submit",q)}function f(){return document.getElementById("ratingModal")}function p(){return document.getElementById("ratingForm")}function ue(e){const t=document.getElementById("modalOverlay"),s=`${e.burnedCalories}/${e.time} min`,n=`
    <div class="modal-window" id="exerciseModal">
    <span class="close-button icon-x" id="closeExerciseButton"></span>
    <div class="exercise-wrapper">
      <img src="${e.gifUrl}" alt="${e.name}" class="exercise-image">
      <div class="exercise-details">
        <div class="exercise-header">
          <h2>${e.name}</h2>
          <div class="rating">
            <span class="rating-value">${e.rating.toFixed(1)}</span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
          </div>
        </div>
        <ul class="exercise-info">
          <li class="details-column">
            <div class="details-title">Target</div>
            <div class="details-value">${x(e.target)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Body Part</div>
            <div class="details-value">${x(e.bodyPart)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Equipment</div>
            <div class="details-value">${x(e.equipment)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Popular</div>
            <div class=" details-value">${e.popularity}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Burned Calories</div>
            <div class="details-value">${s}</div>
          </li>
        </ul>
        <p class="exercise-description">${e.description}</p>
      </div>
    </div>
    <div class="modal-actions">
      <button class="add-favorites-btn" id="addFavoritesButton" data-id="${e._id}">Add to favorites<span
          class="icon-heart"></span></button>
      <button class="remove-favorites-btn hidden" id="removeFavoritesButton" data-id="${e._id}">Remove from favorites<span
          class="icon-trash"></span></button>
      <button class="give-rating-btn" id="addRatingButton">Give a rating</button>
    </div>
  </div>
  `;t.insertAdjacentHTML("beforeend",n),me(e.rating)}function me(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,s)=>{t.classList.toggle("empty",s>=Math.round(e))})}function x(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let B,F,S,L,H;async function ve(e){let t;try{t=await U(e)}catch{i({type:"error",title:"Server error",message:"Error fetching exercise data"})}ue(t),fe(),pe(),ge(),Se(),Ee(e),G()}function fe(){B=document.getElementById("modalOverlay"),F=document.getElementById("exerciseModal"),S=document.getElementById("addFavoritesButton"),L=document.getElementById("removeFavoritesButton"),H=document.getElementById("addRatingButton")}function pe(){B.classList.remove("hidden")}function ye(){B.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function ge(){F.querySelector("#closeExerciseButton").addEventListener("click",ye)}function he(){S.classList.add("hidden"),L.classList.remove("hidden"),Le()}function be(){S.classList.remove("hidden"),L.classList.add("hidden")}function Se(){S.addEventListener("click",he)}function Le(){L.addEventListener("click",be)}function Ee(e){H.addEventListener("click",()=>$e(e))}function $e(e){F.classList.add("hidden"),ne(e)}function k(e){const s=window.location.hostname!=="localhost"?"/goit-advancedjs-final-project":"";e.querySelectorAll('use[href*="images/icons.svg"]').forEach(n=>{const o=n.getAttribute("href");n.setAttribute("href",`${s}${o}`)})}function xe(){new MutationObserver(t=>{t.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&k(n)})})}).observe(document.body,{childList:!0,subtree:!0}),k(document.body)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",n=>{n.preventDefault();const o=t.value;if(!s(o)){i({type:"error",title:"Error",message:"Please enter a valid email address."});return}i({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",o),e.reset()});function s(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n).toLowerCase())}});const M=document.querySelector(".form-search-exersises"),qe=document.querySelector(".content");document.querySelector(".list-filter-exersises");const A="Muscles",y=1;let m="";document.addEventListener("DOMContentLoaded",async()=>{xe(),loader.style.display="none",_(),D($);const e=await $({filter:A,page:y});e>1&&w({params:{filter:A,page:y},totalPages:e,method:$})});M.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".btn-filter.active").dataset.exercise;await b({[t]:m,category:t,keyword,page:y}),I()});M.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await b({value:m,page:y}),I()});qe.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(M.classList.remove("is-hide"),m=t.getAttribute("name"),C(m),await b({value:m,page:y}),I(),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"}))});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function I(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{ve(t.id)})})}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{e.classList.add("is-open"),t.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("is-closing")},250)},r=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),t.classList.add("hidden")},250)};s.addEventListener("click",o),n.addEventListener("click",r),t.addEventListener("click",a=>{a.target===t&&r()})})();export{Q as a,w as b,c,_ as f};
//# sourceMappingURL=mobile-menu-4de07ef2.js.map
