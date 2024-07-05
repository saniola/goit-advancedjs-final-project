import{c as i,s as o,b as x,a as H,f as N}from"./assets/fetch-and-set-quote-0af4d597.js";import{a as y}from"./assets/vendor-ae6d56ab.js";const V=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:a})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${a}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function b(e){let t="?";const s=document.querySelector(".content"),a=document.querySelector(".loader-text");a.style.display="inline-block";for(const[r,n]of Object.entries(e))t+=`${r}=${n}&`;try{const r=await y({method:"get",url:`${i.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=V(r.data.results),r.data.totalPages}catch{o({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{a.style.display="none"}}function k(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function A(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function Y(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const a=document.querySelector(".form-search-exersises");if(a.elements.search.value="",a.classList.remove("is-hide"),k(!1),A(""),!s.classList.contains("active")){t.forEach(n=>n.classList.remove("active")),s.classList.add("active");const r=await e({filter:s.dataset.category.replace(" ","+"),page:1});x({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})}})})}async function p(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,k(!0);let a="?";const r=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="block";for(const[c,L]of Object.entries(e))a+=`${c}=${L}&`;try{const{data:c}=await y({method:"get",url:`${i.domen}/exercises${a}limit=${window.innerWidth<768?8:10}`,responseType:"json"});r.innerHTML=H(c.results);const L=document.querySelector(".pagination");L.innerHTML="",c.totalPages>1&&x({params:e,totalPages:c==null?void 0:c.totalPages,method:p})}catch{o({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{n.style.display="none"}}async function J(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:s}=await y({method:"get",url:`${i.domen}/exercises/${e}`,responseType:"json"});return s}catch{o({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}const l=document.getElementById("addFavoritesButton"),h=document.getElementById("removeFavoritesButton");function K(){l.addEventListener("click",_),h.addEventListener("click",W);const e=JSON.parse(localStorage.getItem(i.FAV_KEY))??[],t=l.dataset.id;t&&e.includes(t)?T():R()}function _(){const e=JSON.parse(localStorage.getItem(i.FAV_KEY))??[],t=l.dataset.id;t&&!e.includes(t)&&(e.push(l.dataset.id),localStorage.setItem(i.FAV_KEY,JSON.stringify(e)),T())}function W(){const e=JSON.parse(localStorage.getItem(i.FAV_KEY))??[],t=h.dataset.id;if(t&&e.includes(t)){const s=e.filter(a=>a!==t);localStorage.setItem(i.FAV_KEY,JSON.stringify(s)),R()}}function R(){l.classList.remove("hidden"),h.classList.add("hidden")}function T(){l.classList.add("hidden"),h.classList.remove("hidden")}async function z(e,t){const{data:s}=await y({method:"patch",url:`${i.domen}/exercises/${e}/rating`,responseType:"json",data:t});return s}function U(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function G(){return document.getElementById("ratingModal").remove()}let B,d=0;function Q(e){U(),Z(),ee(),se(e),D()}function D(){m().querySelector("#closeRatingButton").addEventListener("click",P)}function P(){exerciseModal.classList.remove("hidden"),X(),ae(),G()}function X(){g(0),d=0,v().reset()}function g(e){m().querySelectorAll(".icon-star").forEach((r,n)=>{n<e?r.classList.remove("empty"):r.classList.add("empty")});var s=e.toFixed(1);const a=m().querySelector(".rating-value");a.textContent=s}function Z(){m().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const s=parseInt(t.getAttribute("data-value"),10);g(s)}),t.addEventListener("mouseout",()=>{g(d)})})}function ee(){m().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{d=parseInt(t.getAttribute("data-value"),10),g(d)})})}function te(e,t){if(e.preventDefault(),d===0){o({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const s=v().querySelector(".rating-form-email").value,a=v().querySelector(".rating-form-comment").value;z(t,{rate:d,email:s,review:a}).then(()=>{P(),o({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(n=>{console.error("Error submitting form:",n),o({type:"error",title:"Server error",message:"Error submitting rating form"})})}function se(e){B=t=>te(t,e),v().addEventListener("submit",B)}function ae(){v().removeEventListener("submit",B)}function m(){return document.getElementById("ratingModal")}function v(){return document.getElementById("ratingForm")}function re(e){const t=document.getElementById("modalOverlay"),s=`${e.burnedCalories}/${e.time} min`,a=`
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
            <div class="details-value">${F(e.target)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Body Part</div>
            <div class="details-value">${F(e.bodyPart)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Equipment</div>
            <div class="details-value">${F(e.equipment)}</div>
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
  `;t.insertAdjacentHTML("beforeend",a),ne(e.rating)}function ne(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,s)=>{t.classList.toggle("empty",s>=Math.round(e))})}function F(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let w,$,E,S,C;async function oe(e){let t;try{t=await J(e)}catch{o({type:"error",title:"Server error",message:"Error fetching exercise data"})}re(t),ie(),ce(),de(),ve(),ge(e),K()}function ie(){w=document.getElementById("modalOverlay"),$=document.getElementById("exerciseModal"),E=document.getElementById("addFavoritesButton"),S=document.getElementById("removeFavoritesButton"),C=document.getElementById("addRatingButton")}function ce(){w.classList.remove("hidden")}function le(){w.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function de(){$.querySelector("#closeExerciseButton").addEventListener("click",le)}function ue(){E.classList.add("hidden"),S.classList.remove("hidden"),fe()}function me(){E.classList.remove("hidden"),S.classList.add("hidden")}function ve(){E.addEventListener("click",ue)}function fe(){S.addEventListener("click",me)}function ge(e){C.addEventListener("click",()=>ye(e))}function ye(e){$.classList.add("hidden"),Q(e)}function M(e){const s=window.location.hostname!=="localhost"?"/goit-advancedjs-final-project":"";e.querySelectorAll('use[href*="images/icons.svg"]').forEach(a=>{const r=a.getAttribute("href");a.setAttribute("href",`${s}${r}`)})}function pe(){new MutationObserver(t=>{t.forEach(s=>{s.addedNodes.forEach(a=>{a.nodeType===1&&M(a)})})}).observe(document.body,{childList:!0,subtree:!0}),M(document.body)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",a=>{a.preventDefault();const r=t.value;if(!s(r)){o({type:"error",title:"Error",message:"Please enter a valid email address."});return}o({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",r),e.reset()});function s(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(a).toLowerCase())}});const O=document.querySelector(".form-search-exersises"),he=document.querySelector(".content");document.querySelector(".list-filter-exersises");const j=document.querySelector(".loader-start");j.style.display="block";const I="Muscles",f=1;let u="";document.addEventListener("DOMContentLoaded",async()=>{pe(),j.style.display="none",N(),Y(b);const e=await b({filter:I,page:f});e>1&&x({params:{filter:I,page:f},totalPages:e,method:b})});O.addEventListener("submit",async e=>{e.preventDefault(),await p({value:u,page:f}),q()});O.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await p({value:u,page:f}),q()});he.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(u=t.getAttribute("name"),A(u),await p({value:u,page:f}),q())});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function q(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{oe(t.id)})})}
//# sourceMappingURL=commonHelpers2.js.map
