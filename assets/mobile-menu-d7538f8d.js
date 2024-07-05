import{i as $,a as h}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function K({params:e,pagination:t,method:s}){const n=Array.from(t.querySelectorAll(".button"));let o=1;n.forEach(r=>{r.addEventListener("click",a=>{r.classList.contains("active")||(o=r.dataset.page,s({...e,page:o}),n.forEach(l=>l.classList.remove("active")),r.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function F({params:e,totalPages:t,method:s}){const n=document.querySelector(".pagination");let o="";const r=Number(e.page);if(t<=1){n.innerHTML="";return}r>3&&(o+=`
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
    `),n.innerHTML=o,K({params:e,pagination:n,method:s})}const c={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"};function i({type:e,title:t,message:s,position:n="topRight"}){switch(e){case"error":$.error({title:t,message:s,position:n});break;case"success":$.success({title:t,message:s,position:n});break;case"info":$.warning({title:t,message:s,position:n});break}}async function _(){const e=document.querySelector(".loader-text");e.style.display="inline-block";try{const{data:t}=await h({method:"get",url:`${c.domen}/quote`,responseType:"json"});return t}catch{return i({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function W(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}/${s}/${n}`}function k(e,t){const s=document.querySelector(".quote-text"),n=document.querySelector(".quote-author");s&&n&&(n.innerHTML=e,s.innerHTML=t)}async function D(){const e=localStorage.getItem("quote"),t=W();if(e&&JSON.parse(e).currentDate==t){const{author:s,quote:n}=JSON.parse(e);k(s,n);return}if(!e||JSON.parse(e).currentDate!==t){const{author:s,quote:n}=await _();k(s,n),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:s,quote:n}))}}const Q=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:n})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${n}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function x(e){let t="?";const s=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="inline-block";for(const[o,r]of Object.entries(e))t+=`${o}=${r}&`;try{const o=await h({method:"get",url:`${c.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=Q(o.data.results),o.data.totalPages}catch{i({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{n.style.display="none"}}function C(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function j(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function z(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const n=document.querySelector(".form-search-exersises");if(n.elements.search.value="",n.classList.remove("is-hide"),C(!1),j(""),!s.classList.contains("active")){t.forEach(r=>r.classList.remove("active")),s.classList.add("active");const o=await e({filter:s.dataset.category.replace(" ","+"),page:1});F({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:o,method:e})}})})}const U=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:s,name:n,burnedCalories:o,rating:r,target:a,time:l,bodyPart:J})=>`<div class="exercises-container">
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
                        <p class="exercises-info-value body-part">${J}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${a}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function O(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${G(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <span class="icon-star trash-icon"></span>
    </button>`}function G(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function S(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,C(!0);let n="?";const o=document.querySelector(".content"),r=document.querySelector(".loader-text");r.style.display="block";for(const[a,l]of Object.entries(e))n+=`${a}=${l}&`;try{const{data:a}=await h({method:"get",url:`${c.domen}/exercises${n}limit=${window.innerWidth<768?8:10}`,responseType:"json"});o.innerHTML=U(a.results);const l=document.querySelector(".pagination");l.innerHTML="",a.totalPages>1&&F({params:e,totalPages:a==null?void 0:a.totalPages,method:S})}catch{i({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{r.style.display="none"}}async function X(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:s}=await h({method:"get",url:`${c.domen}/exercises/${e}`,responseType:"json"});return s}catch{i({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}let d,f;function Z(){d=document.getElementById("addFavoritesButton"),f=document.getElementById("removeFavoritesButton"),d.addEventListener("click",ee),f.addEventListener("click",te);const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=d.dataset.id;t&&e.includes(t)?P():N()}function ee(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=d.dataset.id;t&&!e.includes(t)&&(e.push(d.dataset.id),localStorage.setItem(c.FAV_KEY,JSON.stringify(e)),P())}function te(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=f.dataset.id;if(t&&e.includes(t)){const s=e.filter(n=>n!==t);localStorage.setItem(c.FAV_KEY,JSON.stringify(s)),N()}}function N(){d.classList.remove("hidden"),f.classList.add("hidden")}function P(){d.classList.add("hidden"),f.classList.remove("hidden")}async function se(e,t){const{data:s}=await h({method:"patch",url:`${c.domen}/exercises/${e}/rating`,responseType:"json",data:t});return s}function ne(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function oe(){return document.getElementById("ratingModal").remove()}let B,m=0;function re(e){ne(),ce(),le(),ue(e),ae()}function ae(){p().querySelector("#closeRatingButton").addEventListener("click",H)}function H(){exerciseModal.classList.remove("hidden"),ie(),me(),oe()}function ie(){b(0),m=0,y().reset()}function b(e){p().querySelectorAll(".icon-star").forEach((o,r)=>{r<e?o.classList.remove("empty"):o.classList.add("empty")});var s=e.toFixed(1);const n=p().querySelector(".rating-value");n.textContent=s}function ce(){p().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const s=parseInt(t.getAttribute("data-value"),10);b(s)}),t.addEventListener("mouseout",()=>{b(m)})})}function le(){p().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{m=parseInt(t.getAttribute("data-value"),10),b(m)})})}function de(e,t){if(e.preventDefault(),m===0){i({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const s=y().querySelector(".rating-form-email").value,n=y().querySelector(".rating-form-comment").value;se(t,{rate:m,email:s,review:n}).then(()=>{H(),i({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(r=>{console.error("Error submitting form:",r),i({type:"error",title:"Server error",message:"Error submitting rating form"})})}function ue(e){B=t=>de(t,e),y().addEventListener("submit",B)}function me(){y().removeEventListener("submit",B)}function p(){return document.getElementById("ratingModal")}function y(){return document.getElementById("ratingForm")}function ve(e){const t=document.getElementById("modalOverlay"),s=`${e.burnedCalories}/${e.time} min`,n=`
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
            <div class="details-value">${q(e.target)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Body Part</div>
            <div class="details-value">${q(e.bodyPart)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Equipment</div>
            <div class="details-value">${q(e.equipment)}</div>
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
  `;t.insertAdjacentHTML("beforeend",n),fe(e.rating)}function fe(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,s)=>{t.classList.toggle("empty",s>=Math.round(e))})}function q(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let M,I,L,E,V;async function pe(e){let t;try{t=await X(e)}catch{i({type:"error",title:"Server error",message:"Error fetching exercise data"})}ve(t),ye(),ge(),be(),Ee(),xe(e),Z()}function ye(){M=document.getElementById("modalOverlay"),I=document.getElementById("exerciseModal"),L=document.getElementById("addFavoritesButton"),E=document.getElementById("removeFavoritesButton"),V=document.getElementById("addRatingButton")}function ge(){M.classList.remove("hidden")}function he(){M.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function be(){I.querySelector("#closeExerciseButton").addEventListener("click",he)}function Se(){L.classList.add("hidden"),E.classList.remove("hidden"),$e()}function Le(){L.classList.remove("hidden"),E.classList.add("hidden")}function Ee(){L.addEventListener("click",Se)}function $e(){E.addEventListener("click",Le)}function xe(e){V.addEventListener("click",()=>qe(e))}function qe(e){I.classList.add("hidden"),re(e)}function A(e){const s=window.location.hostname!=="localhost"?"/goit-advancedjs-final-project":"";e.querySelectorAll('use[href*="images/icons.svg"]').forEach(n=>{const o=n.getAttribute("href");n.setAttribute("href",`${s}${o}`)})}function we(){new MutationObserver(t=>{t.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&A(n)})})}).observe(document.body,{childList:!0,subtree:!0}),A(document.body)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e==null?void 0:e.querySelector(".footer-form-input");e==null||e.addEventListener("submit",n=>{n.preventDefault();const o=t.value;if(!s(o)){i({type:"error",title:"Error",message:"Please enter a valid email address."});return}i({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",o),e.reset()});function s(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n).toLowerCase())}});const u=document.querySelector(".form-search-exersises"),w=document.querySelector(".content"),Y=document.querySelector(".loader-start");Y.style.display="block";const R="Muscles",g=1;let v="";document.addEventListener("DOMContentLoaded",async()=>{we(),Y.style.display="none",D(),z(x);const e=await x({filter:R,page:g});e>1&&F({params:{filter:R,page:g},totalPages:e,method:x})});u==null||u.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".btn-filter.active").dataset.exercise;await S({[t]:v,category:t,keyword,page:g}),T()});u==null||u.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await S({value:v,page:g}),T()});w==null||w.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(u.classList.remove("is-hide"),v=t.getAttribute("name"),j(v),await S({value:v,page:g}),T(),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"}))});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function T(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{pe(t.id)})})}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{e.classList.add("is-open"),t.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("is-closing")},250)},r=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),t.classList.add("hidden")},250)};s.addEventListener("click",o),n.addEventListener("click",r),t.addEventListener("click",a=>{a.target===t&&r()})})();export{U as a,F as b,c,D as f};
//# sourceMappingURL=mobile-menu-d7538f8d.js.map
