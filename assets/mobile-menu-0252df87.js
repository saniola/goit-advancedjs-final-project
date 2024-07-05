import{i as $,a as h}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function D({params:e,pagination:t,method:s}){const o=Array.from(t.querySelectorAll(".button"));let n=1;o.forEach(r=>{r.addEventListener("click",a=>{r.classList.contains("active")||(n=r.dataset.page,s({...e,page:n}),o.forEach(l=>l.classList.remove("active")),r.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function F({params:e,totalPages:t,method:s}){const o=document.querySelector(".pagination");let n="";const r=Number(e.page);if(t<=1){o.innerHTML="";return}r>3&&(n+=`
      <button class="button${r===1?" active":""}" data-page="1">
        1
      </button>
    `),r-3>1&&(n+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),r>2&&(n+=`
      <button class="button" data-page="${r-2}">
        ${r-2}
      </button>
    `),r>1&&(n+=`
      <button class="button" data-page="${r-1}">
        ${r-1}
      </button>
    `),n+=`
    <button class="button active" data-page="${r}">
      ${r}
    </button>
  `,r+1<=t&&(n+=`
      <button class="button" data-page="${r+1}">
        ${r+1}
      </button>
    `),r+2<=t&&(n+=`
      <button class="button" data-page="${r+2}">
        ${r+2}
      </button>
    `),r+3===t?n+=`
      <button class="button${t==r?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:r+3<t&&(n+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,n+=`
      <button class="button${t===r?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),o.innerHTML=n,D({params:e,pagination:o,method:s})}const c={domen:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"};function i({type:e,title:t,message:s,position:o="topRight"}){switch(e){case"error":$.error({title:t,message:s,position:o});break;case"success":$.success({title:t,message:s,position:o});break;case"info":$.warning({title:t,message:s,position:o});break}}async function Q(){const e=document.querySelector(".loader-text");e.style.display="inline-block";try{const{data:t}=await h({method:"get",url:`${c.domen}/quote`,responseType:"json"});return t}catch{return i({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function z(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${s}/${o}`}function k(e,t){const s=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");s&&o&&(o.innerHTML=e,s.innerHTML=t)}async function U(){const e=localStorage.getItem("quote"),t=z();if(e&&JSON.parse(e).currentDate==t){const{author:s,quote:o}=JSON.parse(e);k(s,o);return}if(!e||JSON.parse(e).currentDate!==t){const{author:s,quote:o}=await Q();k(s,o),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:s,quote:o}))}}const G=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:o})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${o}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function x(e){let t="?";const s=document.querySelector(".content"),o=document.querySelector(".loader-text");o.style.display="inline-block";for(const[n,r]of Object.entries(e))t+=`${n}=${r}&`;try{const n=await h({method:"get",url:`${c.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=G(n.data.results),n.data.totalPages}catch{i({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{o.style.display="none"}}function N(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function P(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function X(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const o=document.querySelector(".form-search-exersises");if(o.elements.search.value="",o.classList.remove("is-hide"),N(!1),P(""),!s.classList.contains("active")){t.forEach(r=>r.classList.remove("active")),s.classList.add("active");const n=await e({filter:s.dataset.category.replace(" ","+"),page:1});F({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:n,method:e})}})})}const Z=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:s,name:o,burnedCalories:n,rating:r,target:a,time:l,bodyPart:W})=>`<div class="exercises-container">
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
                    <p class="exercises-name">${o}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${n} / ${l} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${W}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${a}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function O(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${ee(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <span class="icon-star trash-icon"></span>
    </button>`}function ee(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}async function S(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,N(!0);let o="?";const n=document.querySelector(".content"),r=document.querySelector(".loader-text");r.style.display="block";for(const[a,l]of Object.entries(e))o+=`${a}=${l}&`;try{const{data:a}=await h({method:"get",url:`${c.domen}/exercises${o}limit=${window.innerWidth<768?8:10}`,responseType:"json"});n.innerHTML=Z(a.results);const l=document.querySelector(".pagination");l.innerHTML="",a.totalPages>1&&F({params:e,totalPages:a==null?void 0:a.totalPages,method:S})}catch{i({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{r.style.display="none"}}async function te(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:s}=await h({method:"get",url:`${c.domen}/exercises/${e}`,responseType:"json"});return s}catch{i({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}let d,f;function se(){d=document.getElementById("addFavoritesButton"),f=document.getElementById("removeFavoritesButton"),d.addEventListener("click",oe),f.addEventListener("click",ne);const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=d.dataset.id;t&&e.includes(t)?V():H()}function oe(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=d.dataset.id;t&&!e.includes(t)&&(e.push(d.dataset.id),localStorage.setItem(c.FAV_KEY,JSON.stringify(e)),V())}function ne(){const e=JSON.parse(localStorage.getItem(c.FAV_KEY))??[],t=f.dataset.id;if(t&&e.includes(t)){const s=e.filter(o=>o!==t);localStorage.setItem(c.FAV_KEY,JSON.stringify(s)),H()}}function H(){d.classList.remove("hidden"),f.classList.add("hidden")}function V(){d.classList.add("hidden"),f.classList.remove("hidden")}async function re(e,t){const{data:s}=await h({method:"patch",url:`${c.domen}/exercises/${e}/rating`,responseType:"json",data:t});return s}function ae(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function ie(){return document.getElementById("ratingModal").remove()}let B,m=0;function ce(e){ae(),ue(),me(),fe(e),le()}function le(){p().querySelector("#closeRatingButton").addEventListener("click",Y)}function Y(){exerciseModal.classList.remove("hidden"),de(),pe(),ie()}function de(){b(0),m=0,y().reset()}function b(e){p().querySelectorAll(".icon-star").forEach((n,r)=>{r<e?n.classList.remove("empty"):n.classList.add("empty")});var s=e.toFixed(1);const o=p().querySelector(".rating-value");o.textContent=s}function ue(){p().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const s=parseInt(t.getAttribute("data-value"),10);b(s)}),t.addEventListener("mouseout",()=>{b(m)})})}function me(){p().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{m=parseInt(t.getAttribute("data-value"),10),b(m)})})}function ve(e,t){if(e.preventDefault(),m===0){i({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const s=y().querySelector(".rating-form-email").value,o=y().querySelector(".rating-form-comment").value;re(t,{rate:m,email:s,review:o}).then(()=>{Y(),i({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(r=>{console.error("Error submitting form:",r),i({type:"error",title:"Server error",message:"Error submitting rating form"})})}function fe(e){B=t=>ve(t,e),y().addEventListener("submit",B)}function pe(){y().removeEventListener("submit",B)}function p(){return document.getElementById("ratingModal")}function y(){return document.getElementById("ratingForm")}function ye(e){const t=document.getElementById("modalOverlay"),s=`${e.burnedCalories}/${e.time} min`,o=`
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
  `;t.insertAdjacentHTML("beforeend",o),ge(e.rating)}function ge(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,s)=>{t.classList.toggle("empty",s>=Math.round(e))})}function q(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let M,T,L,E,J;async function he(e){let t;try{t=await te(e)}catch{i({type:"error",title:"Server error",message:"Error fetching exercise data"})}ye(t),be(),Se(),Ee(),qe(),Be(e),se()}function be(){M=document.getElementById("modalOverlay"),T=document.getElementById("exerciseModal"),L=document.getElementById("addFavoritesButton"),E=document.getElementById("removeFavoritesButton"),J=document.getElementById("addRatingButton")}function Se(){M.classList.remove("hidden")}function Le(){M.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function Ee(){T.querySelector("#closeExerciseButton").addEventListener("click",Le)}function $e(){L.classList.add("hidden"),E.classList.remove("hidden"),we()}function xe(){L.classList.remove("hidden"),E.classList.add("hidden")}function qe(){L.addEventListener("click",$e)}function we(){E.addEventListener("click",xe)}function Be(e){J.addEventListener("click",()=>Fe(e))}function Fe(e){T.classList.add("hidden"),ce(e)}function A(e){const s=window.location.hostname!=="localhost"?"/goit-advancedjs-final-project":"";e.querySelectorAll('use[href*="images/icons.svg"]').forEach(o=>{const n=o.getAttribute("href");o.setAttribute("href",`${s}${n}`)})}function Me(){new MutationObserver(t=>{t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&A(o)})})}).observe(document.body,{childList:!0,subtree:!0}),A(document.body)}const R=document.querySelector(".scroll-to-top");let C=document.documentElement.scrollTop;function K(){C=document.documentElement.scrollTop,C>100?R.style.display="flex":R.style.display="none"}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e==null?void 0:e.querySelector(".footer-form-input");e==null||e.addEventListener("submit",o=>{o.preventDefault();const n=t.value;if(!s(n)){i({type:"error",title:"Error",message:"Please enter a valid email address."});return}i({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",n),e.reset()});function s(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(o).toLowerCase())}});const u=document.querySelector(".form-search-exersises"),w=document.querySelector(".content");document.querySelector(".list-filter-exersises");const Te=document.querySelector(".scroll-to-top"),_=document.querySelector(".loader-start");_.style.display="block";const j="Muscles",g=1;let v="";document.addEventListener("DOMContentLoaded",async()=>{Me(),_.style.display="none",U(),X(x);const e=await x({filter:j,page:g});e>1&&F({params:{filter:j,page:g},totalPages:e,method:x})});u==null||u.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".btn-filter.active").dataset.exercise;await S({[t]:v,category:t,page:g}),I()});u==null||u.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await S({value:v,page:g}),I()});w==null||w.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(u.classList.remove("is-hide"),v=t.getAttribute("name"),P(v),await S({value:v,page:g}),I(),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"}))});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function I(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{he(t.id)})})}Te.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=K;window.onload=K;(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),s=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{e.classList.add("is-open"),t.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("is-closing")},250)},r=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),t.classList.add("hidden")},250)};s.addEventListener("click",n),o.addEventListener("click",r),t.addEventListener("click",a=>{a.target===t&&r()})})();export{Z as a,F as b,c,U as f};
//# sourceMappingURL=mobile-menu-0252df87.js.map
