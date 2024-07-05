import{i as E,a as y}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function J({params:e,pagination:t,method:s}){const r=Array.from(t.querySelectorAll(".button"));let n=1;r.forEach(o=>{o.addEventListener("click",a=>{o.classList.contains("active")||(n=o.dataset.page,s({...e,page:n}),r.forEach(l=>l.classList.remove("active")),o.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function w({params:e,totalPages:t,method:s}){const r=document.querySelector(".pagination");let n="";const o=Number(e.page);if(t<=1){r.innerHTML="";return}o>3&&(n+=`
      <button class="button${o===1?" active":""}" data-page="1">
        1
      </button>
    `),o-3>1&&(n+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),o>2&&(n+=`
      <button class="button" data-page="${o-2}">
        ${o-2}
      </button>
    `),o>1&&(n+=`
      <button class="button" data-page="${o-1}">
        ${o-1}
      </button>
    `),n+=`
    <button class="button active" data-page="${o}">
      ${o}
    </button>
  `,o+1<=t&&(n+=`
      <button class="button" data-page="${o+1}">
        ${o+1}
      </button>
    `),o+2<=t&&(n+=`
      <button class="button" data-page="${o+2}">
        ${o+2}
      </button>
    `),o+3===t?n+=`
      <button class="button${t==o?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:o+3<t&&(n+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,n+=`
      <button class="button${t===o?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),r.innerHTML=n,J({params:e,pagination:r,method:s})}const c={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"};function i({type:e,title:t,message:s,position:r="topRight"}){switch(e){case"error":E.error({title:t,message:s,position:r});break;case"success":E.success({title:t,message:s,position:r});break;case"info":E.warning({title:t,message:s,position:r});break}}async function K(){const e=document.querySelector(".loader-text");e.style.display="block";try{const{data:t}=await y({method:"get",url:`${c.domen}/quote`,responseType:"json"});return t}catch{return i({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function _(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return`${t}/${s}/${r}`}function T(e,t){const s=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");s&&r&&(r.innerHTML=e,s.innerHTML=t)}async function D(){const e=localStorage.getItem("quote"),t=_();if(!e||JSON.parse(e).currentDate!==t){const{author:n,quote:o}=await K();T(n,o),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:n,quote:o}));return}const{author:s,quote:r}=JSON.parse(e);T(s,r)}const W=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:r})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${r}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function $(e){let t="?";const s=document.querySelector(".content"),r=document.querySelector(".loader-text");r.style.display="inline-block";for(const[n,o]of Object.entries(e))t+=`${n}=${o}&`;try{const n=await y({method:"get",url:`${c.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=W(n.data.results),n.data.totalPages}catch{i({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{r.style.display="none"}}function R(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function C(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function Q(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const r=document.querySelector(".form-search-exersises");if(r.elements.search.value="",r.classList.remove("is-hide"),R(!1),C(""),!s.classList.contains("active")){t.forEach(o=>o.classList.remove("active")),s.classList.add("active");const n=await e({filter:s.dataset.category.replace(" ","+"),page:1});w({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:n,method:e})}})})}const z=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:s,name:r,burnedCalories:n,rating:o,target:a,time:l,bodyPart:Y})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?k():k(o)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${s}">
                        <span>Start</span>
                        <span class="icon-arrow-right icon-arrow"></span>
                    </button>
                </div>
                <div class="exercises-title">
                    <span class="icon-runner circle-icon"></span>
                    <p class="exercises-name">${r}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${n} / ${l} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${Y}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${a}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function k(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${U(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <span class="icon-star trash-icon"></span>
    </button>`}function U(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function h(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,R(!0);let r="?";const n=document.querySelector(".content"),o=document.querySelector(".loader-text");o.style.display="block";for(const[a,l]of Object.entries(e))r+=`${a}=${l}&`;try{const{data:a}=await y({method:"get",url:`${c.domen}/exercises${r}limit=${window.innerWidth<768?8:10}`,responseType:"json"});n.innerHTML=z(a.results);const l=document.querySelector(".pagination");l.innerHTML="",a.totalPages>1&&w({params:e,totalPages:a==null?void 0:a.totalPages,method:h})}catch{i({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{o.style.display="none"}}async function G(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:s}=await y({method:"get",url:`${c.domen}/exercises/${e}`,responseType:"json"});return s}catch{i({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}const u=document.getElementById("addFavoritesButton"),b=document.getElementById("removeFavoritesButton");function X(){u.addEventListener("click",Z),b.addEventListener("click",ee);const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=u.dataset.id;t&&e.includes(t)?N():j()}function Z(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=u.dataset.id;t&&!e.includes(t)&&(e.push(u.dataset.id),localStorage.setItem(c.FAV_KEY,JSON.stringify(e)),N())}function ee(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=b.dataset.id;if(t&&e.includes(t)){const s=e.filter(r=>r!==t);localStorage.setItem(c.FAV_KEY,JSON.stringify(s)),j()}}function j(){u.classList.remove("hidden"),b.classList.add("hidden")}function N(){u.classList.add("hidden"),b.classList.remove("hidden")}async function te(e,t){const{data:s}=await y({method:"patch",url:`${c.domen}/exercises/${e}/rating`,responseType:"json",data:t});return s}function se(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function ne(){return document.getElementById("ratingModal").remove()}let q,m=0;function oe(e){se(),ie(),ce(),de(e),re()}function re(){v().querySelector("#closeRatingButton").addEventListener("click",P)}function P(){exerciseModal.classList.remove("hidden"),ae(),ue(),ne()}function ae(){g(0),m=0,f().reset()}function g(e){v().querySelectorAll(".icon-star").forEach((n,o)=>{o<e?n.classList.remove("empty"):n.classList.add("empty")});var s=e.toFixed(1);const r=v().querySelector(".rating-value");r.textContent=s}function ie(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const s=parseInt(t.getAttribute("data-value"),10);g(s)}),t.addEventListener("mouseout",()=>{g(m)})})}function ce(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{m=parseInt(t.getAttribute("data-value"),10),g(m)})})}function le(e,t){if(e.preventDefault(),m===0){i({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const s=f().querySelector(".rating-form-email").value,r=f().querySelector(".rating-form-comment").value;te(t,{rate:m,email:s,review:r}).then(()=>{P(),i({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(o=>{console.error("Error submitting form:",o),i({type:"error",title:"Server error",message:"Error submitting rating form"})})}function de(e){q=t=>le(t,e),f().addEventListener("submit",q)}function ue(){f().removeEventListener("submit",q)}function v(){return document.getElementById("ratingModal")}function f(){return document.getElementById("ratingForm")}function me(e){const t=document.getElementById("modalOverlay"),s=`${e.burnedCalories}/${e.time} min`,r=`
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
      <button class="add-favorites-btn" id="addFavoritesButton">Add to favorites<span
          class="icon-heart"></span></button>
      <button class="remove-favorites-btn hidden" id="removeFavoritesButton">Remove from favorites<span
          class="icon-trash"></span></button>
      <button class="give-rating-btn" id="addRatingButton">Give a rating</button>
    </div>
  </div>
  `;t.insertAdjacentHTML("beforeend",r),ve(e.rating)}function ve(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,s)=>{t.classList.toggle("empty",s>=Math.round(e))})}function x(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let B,F,S,L,H;async function fe(e){let t;try{t=await G(e)}catch{i({type:"error",title:"Server error",message:"Error fetching exercise data"})}me(t),pe(),ye(),he(),Le(),$e(e),X()}function pe(){B=document.getElementById("modalOverlay"),F=document.getElementById("exerciseModal"),S=document.getElementById("addFavoritesButton"),L=document.getElementById("removeFavoritesButton"),H=document.getElementById("addRatingButton")}function ye(){B.classList.remove("hidden")}function ge(){B.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function he(){F.querySelector("#closeExerciseButton").addEventListener("click",ge)}function be(){S.classList.add("hidden"),L.classList.remove("hidden"),Ee()}function Se(){S.classList.remove("hidden"),L.classList.add("hidden")}function Le(){S.addEventListener("click",be)}function Ee(){L.addEventListener("click",Se)}function $e(e){H.addEventListener("click",()=>xe(e))}function xe(e){F.classList.add("hidden"),oe(e)}function A(e){const s=window.location.hostname!=="localhost"?"/goit-advancedjs-final-project":"";e.querySelectorAll('use[href*="images/icons.svg"]').forEach(r=>{const n=r.getAttribute("href");r.setAttribute("href",`${s}${n}`)})}function qe(){new MutationObserver(t=>{t.forEach(s=>{s.addedNodes.forEach(r=>{r.nodeType===1&&A(r)})})}).observe(document.body,{childList:!0,subtree:!0}),A(document.body)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",r=>{r.preventDefault();const n=t.value;if(!s(n)){i({type:"error",title:"Error",message:"Please enter a valid email address."});return}i({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",n),e.reset()});function s(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r).toLowerCase())}});const M=document.querySelector(".form-search-exersises"),we=document.querySelector(".content");document.querySelector(".list-filter-exersises");const V=document.querySelector(".loader-start");V.style.display="block";const O="Muscles",p=1;let d="";document.addEventListener("DOMContentLoaded",async()=>{qe(),V.style.display="none",D(),Q($);const e=await $({filter:O,page:p});e>1&&w({params:{filter:O,page:p},totalPages:e,method:$})});M.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".btn-filter.active").dataset.exercise;await h({[t]:d,category:t,keyword,page:p}),I()});M.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await h({value:d,page:p}),I()});we.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(M.classList.remove("is-hide"),d=t.getAttribute("name"),document.querySelector(".btn-filter.active").dataset.exercise,d=t.getAttribute("name"),C(d),await h({value:d,page:p}),I())});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function I(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{fe(t.id)})})}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{e.classList.add("is-open"),t.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("is-closing")},250)},o=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),t.classList.add("hidden")},250)};s.addEventListener("click",n),r.addEventListener("click",o),t.addEventListener("click",a=>{a.target===t&&o()})})();export{z as a,w as b,c,D as f};
//# sourceMappingURL=mobile-menu-cc60de97.js.map
