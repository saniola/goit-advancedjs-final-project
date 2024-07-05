import{c as i,b as F,a as H}from"./assets/create-pagination-3845d50c.js";import{i as q,a as y}from"./assets/vendor-ae6d56ab.js";function o({type:e,title:t,message:s,position:a="topRight"}){switch(e){case"error":q.error({title:t,message:s,position:a});break;case"success":q.success({title:t,message:s,position:a});break;case"info":q.warning({title:t,message:s,position:a});break}}async function Y(){const e=document.querySelector(".loader-text");e.style.display="block";try{const{data:t}=await y({method:"get",url:`${i.domen}/quote`,responseType:"json"});return t}catch{return o({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function J(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return`${t}/${s}/${a}`}function k(e,t){const s=document.querySelector(".quote-text"),a=document.querySelector(".quote-author");s&&a&&(a.innerHTML=e,s.innerHTML=t)}async function V(){const e=localStorage.getItem("quote"),t=J();if(!e||JSON.parse(e).currentDate!==t){const{author:r,quote:n}=await Y();k(r,n),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:r,quote:n}));return}const{author:s,quote:a}=JSON.parse(e);k(s,a)}const K=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:a})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${a}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function b(e){let t="?";const s=document.querySelector(".content"),a=document.querySelector(".loader-text");a.style.display="inline-block";for(const[r,n]of Object.entries(e))t+=`${r}=${n}&`;try{const r=await y({method:"get",url:`${i.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=K(r.data.results),r.data.totalPages}catch{o({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{a.style.display="none"}}function R(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function T(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function _(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const a=document.querySelector(".form-search-exersises");a.elements.search.value="",a.classList.remove("is-hide"),R(!1),T(""),s.classList.contains("active")||(t.forEach(n=>n.classList.remove("active")),s.classList.add("active"));const r=await e({filter:s.dataset.category.replace(" ","+"),page:1});F({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:r,method:e})})})}async function p(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,R(!0);let a="?";const r=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="block";for(const[c,L]of Object.entries(e))a+=`${c}=${L}&`;try{const{data:c}=await y({method:"get",url:`${i.domen}/exercises${a}limit=${window.innerWidth<768?8:10}`,responseType:"json"});r.innerHTML=H(c.results);const L=document.querySelector(".pagination");L.innerHTML="",c.totalPages>1&&F({params:e,totalPages:c==null?void 0:c.totalPages,method:p})}catch{o({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{n.style.display="none"}}async function Q(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:s}=await y({method:"get",url:`${i.domen}/exercises/${e}`,responseType:"json"});return s}catch{o({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}const l=document.getElementById("addFavoritesButton"),h=document.getElementById("removeFavoritesButton");function z(){l.addEventListener("click",D),h.addEventListener("click",W);const e=JSON.parse(localStorage.getItem(i.FAV_KEY))??[],t=l.dataset.id;t&&e.includes(t)?C():A()}function D(){const e=JSON.parse(localStorage.getItem(i.FAV_KEY))??[],t=l.dataset.id;t&&!e.includes(t)&&(e.push(l.dataset.id),localStorage.setItem(i.FAV_KEY,JSON.stringify(e)),C())}function W(){const e=JSON.parse(localStorage.getItem(i.FAV_KEY))??[],t=h.dataset.id;if(t&&e.includes(t)){const s=e.filter(a=>a!==t);localStorage.setItem(i.FAV_KEY,JSON.stringify(s)),A()}}function A(){l.classList.remove("hidden"),h.classList.add("hidden")}function C(){l.classList.add("hidden"),h.classList.remove("hidden")}async function U(e,t){const{data:s}=await y({method:"patch",url:`${i.domen}/exercises/${e}/rating`,responseType:"json",data:t});return s}function G(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function X(){return document.getElementById("ratingModal").remove()}let B,d=0;function Z(e){G(),se(),ae(),ne(e),ee()}function ee(){m().querySelector("#closeRatingButton").addEventListener("click",O)}function O(){exerciseModal.classList.remove("hidden"),te(),oe(),X()}function te(){g(0),d=0,v().reset()}function g(e){m().querySelectorAll(".icon-star").forEach((r,n)=>{n<e?r.classList.remove("empty"):r.classList.add("empty")});var s=e.toFixed(1);const a=m().querySelector(".rating-value");a.textContent=s}function se(){m().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const s=parseInt(t.getAttribute("data-value"),10);g(s)}),t.addEventListener("mouseout",()=>{g(d)})})}function ae(){m().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{d=parseInt(t.getAttribute("data-value"),10),g(d)})})}function re(e,t){if(e.preventDefault(),d===0){o({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const s=v().querySelector(".rating-form-email").value,a=v().querySelector(".rating-form-comment").value;U(t,{rate:d,email:s,review:a}).then(()=>{O(),o({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(n=>{console.error("Error submitting form:",n),o({type:"error",title:"Server error",message:"Error submitting rating form"})})}function ne(e){B=t=>re(t,e),v().addEventListener("submit",B)}function oe(){v().removeEventListener("submit",B)}function m(){return document.getElementById("ratingModal")}function v(){return document.getElementById("ratingForm")}function ie(e){const t=document.getElementById("modalOverlay"),s=`${e.burnedCalories}/${e.time} min`,a=`
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
  `;t.insertAdjacentHTML("beforeend",a),ce(e.rating)}function ce(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,s)=>{t.classList.toggle("empty",s>=Math.round(e))})}function x(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let w,$,S,E,P;async function le(e){let t;try{t=await Q(e),ie(t),de(t),ue(),ve(),ge(),he(e),addCloseButtonListener(),z()}catch{o({type:"error",title:"Server error",message:"Error fetching exercise data"})}}function de(){w=document.getElementById("modalOverlay"),$=document.getElementById("exerciseModal"),S=document.getElementById("addFavoritesButton"),E=document.getElementById("removeFavoritesButton"),P=document.getElementById("addRatingButton")}function ue(){w.classList.remove("hidden")}function me(){w.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function ve(){$.querySelector("#closeExerciseButton").addEventListener("click",me)}function fe(){S.classList.add("hidden"),E.classList.remove("hidden"),pe()}function ye(){S.classList.remove("hidden"),E.classList.add("hidden")}function ge(){S.addEventListener("click",fe)}function pe(){E.addEventListener("click",ye)}function he(e){P.addEventListener("click",()=>Se(e))}function Se(e){$.classList.add("hidden"),Z(e)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",a=>{a.preventDefault();const r=t.value;if(!s(r)){o({type:"error",title:"Error",message:"Please enter a valid email address."});return}o({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",r),e.reset()});function s(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(a).toLowerCase())}});const j=document.querySelector(".form-search-exersises"),Ee=document.querySelector(".content");document.querySelector(".list-filter-exersises");const N=document.querySelector(".loader-start");N.style.display="block";const I="Muscles",f=1;let u="";document.addEventListener("DOMContentLoaded",async()=>{N.style.display="none",V(),_(b);const e=await b({filter:I,page:f});e>1&&F({params:{filter:I,page:f},totalPages:e,method:b})});j.addEventListener("submit",async e=>{e.preventDefault(),await p({value:u,page:f}),M()});j.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await p({value:u,page:f}),M()});Ee.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(u=t.getAttribute("name"),T(u),await p({value:u,page:f}),M())});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function M(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{le(t.id)})})}
//# sourceMappingURL=commonHelpers2.js.map
