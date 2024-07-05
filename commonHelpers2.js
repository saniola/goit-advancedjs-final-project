import{c as v,i as A,a as b,b as O}from"./assets/favorites-bca13892.js";import{i as E,a as y}from"./assets/vendor-ae6d56ab.js";function o({type:e,title:t,message:s,position:r="topRight"}){switch(e){case"error":E.error({title:t,message:s,position:r});break;case"success":E.success({title:t,message:s,position:r});break;case"info":E.warning({title:t,message:s,position:r});break}}async function j(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:s}=await y({method:"get",url:`${v.domen}/exercises/${e}`,responseType:"json"});return s}catch{o({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}async function H(e,t){const{data:s}=await y({method:"patch",url:`${v.domen}/exercises/${e}/rating`,responseType:"json",data:t});return s}function N(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function Q(){return document.getElementById("ratingModal").remove()}let q,c=0;function Y(e){N(),J(),V(),U(e),z()}function z(){d().querySelector("#closeRatingButton").addEventListener("click",k)}function k(){exerciseModal.classList.remove("hidden"),D(),G(),Q()}function D(){f(0),c=0,u().reset()}function f(e){d().querySelectorAll(".icon-star").forEach((a,n)=>{n<e?a.classList.remove("empty"):a.classList.add("empty")});var s=e.toFixed(1);const r=d().querySelector(".rating-value");r.textContent=s}function J(){d().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const s=parseInt(t.getAttribute("data-value"),10);f(s)}),t.addEventListener("mouseout",()=>{f(c)})})}function V(){d().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{c=parseInt(t.getAttribute("data-value"),10),f(c)})})}function W(e,t){if(e.preventDefault(),c===0){o({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const s=u().querySelector(".rating-form-email").value,r=u().querySelector(".rating-form-comment").value;H(t,{rate:c,email:s,review:r}).then(()=>{k(),o({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(n=>{console.error("Error submitting form:",n),o({type:"error",title:"Server error",message:"Error submitting rating form"})})}function U(e){q=t=>W(t,e),u().addEventListener("submit",q)}function G(){u().removeEventListener("submit",q)}function d(){return document.getElementById("ratingModal")}function u(){return document.getElementById("ratingForm")}function K(e){const t=document.getElementById("modalOverlay"),s=`${e.burnedCalories}/${e.time} min`,r=`
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
            <div class="details-value">${L(e.target)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Body Part</div>
            <div class="details-value">${L(e.bodyPart)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Equipment</div>
            <div class="details-value">${L(e.equipment)}</div>
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
  `;t.insertAdjacentHTML("beforeend",r),X(e.rating)}function X(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,s)=>{t.classList.toggle("empty",s>=Math.round(e))})}function L(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let x,w,g,p,R;async function Z(e){let t;try{t=await j(e),K(t),_(t),ee(),se(),ne(),ie(e),addCloseButtonListener(),A()}catch{o({type:"error",title:"Server error",message:"Error fetching exercise data"})}}function _(){x=document.getElementById("modalOverlay"),w=document.getElementById("exerciseModal"),g=document.getElementById("addFavoritesButton"),p=document.getElementById("removeFavoritesButton"),R=document.getElementById("addRatingButton")}function ee(){x.classList.remove("hidden")}function te(){x.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function se(){w.querySelector("#closeExerciseButton").addEventListener("click",te)}function re(){g.classList.add("hidden"),p.classList.remove("hidden"),oe()}function ae(){g.classList.remove("hidden"),p.classList.add("hidden")}function ne(){g.addEventListener("click",re)}function oe(){p.addEventListener("click",ae)}function ie(e){R.addEventListener("click",()=>ce(e))}function ce(e){w.classList.add("hidden"),Y(e)}async function le(){const e=document.querySelector(".loader-text");e.style.display="block";try{const{data:t}=await y({method:"get",url:`${v.domen}/quote`,responseType:"json"});return t}catch{return o({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function de(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return`${t}/${s}/${r}`}function $(e,t){const s=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");s&&r&&(r.innerHTML=e,s.innerHTML=t)}async function ue(){const e=localStorage.getItem("quote"),t=de();if(!e||JSON.parse(e).currentDate!==t){const{author:a,quote:n}=await le();$(a,n),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:a,quote:n}));return}const{author:s,quote:r}=JSON.parse(e);$(s,r)}const me=e=>e.map(({filter:t="Not found",name:s="Not found",imgURL:r})=>`<div class="category-wrap" name="${s}">
      <img class="category-img" src="${r}" alt="${s}" loading="lazy">
      <div class="category-text-wrap">
          <p class="category-title">${s}</p>
          <p class="category-subtitle">${t}</p>
      </div>
  </div>`).join("");async function F(e){let t="?";const s=document.querySelector(".content"),r=document.querySelector(".loader-text");r.style.display="inline-block";for(const[a,n]of Object.entries(e))t+=`${a}=${n}&`;try{const a=await y({method:"get",url:`${v.domen}/filters${t}limit=${window.innerWidth<768?9:12}`,responseType:"json"});return s.innerHTML=me(a.data.results),a.data.totalPages}catch{o({type:"error",title:"Server error",message:"Sorry, the category information was not retrieved from the server. Please refresh the page"})}finally{r.style.display="none"}}function T(e){const t=document.querySelector(".form-search-exersises");if(e){t.classList.remove("is-hide");return}t.classList.add("is-hide")}function C(e){const t=document.querySelector(".js-title"),s=document.querySelector(".js-title-slash");if(e===""){t.classList.add("is-hide"),s.classList.add("is-hide");return}t.textContent=e,t.classList.remove("is-hide"),s.classList.remove("is-hide")}async function ve(e){const t=Array.from(document.querySelectorAll(".btn-filter"));t.forEach(s=>{s.addEventListener("click",async()=>{const r=document.querySelector(".form-search-exersises");r.elements.search.value="",r.classList.remove("is-hide"),T(!1),C(""),s.classList.contains("active")||(t.forEach(n=>n.classList.remove("active")),s.classList.add("active"));const a=await e({filter:s.dataset.category.replace(" ","+"),page:1});b({params:{filter:s.dataset.category.replace(" ","+"),page:1},totalPages:a,method:e})})})}async function h(e){const t=document.querySelector(".btn-filter.active").dataset.exercise;e!=null&&e.value&&(e[t]=e==null?void 0:e.value);const s=document.querySelector(".input-search-exersises").value;e.keyword=s,T(!0);let r="?";const a=document.querySelector(".content"),n=document.querySelector(".loader-text");n.style.display="block";for(const[i,S]of Object.entries(e))r+=`${i}=${S}&`;try{const{data:i}=await y({method:"get",url:`${v.domen}/exercises${r}limit=${window.innerWidth<768?8:10}`,responseType:"json"});a.innerHTML=O(i.results);const S=document.querySelector(".pagination");S.innerHTML="",i.totalPages>1&&b({params:e,totalPages:i==null?void 0:i.totalPages,method:h})}catch{o({type:"error",title:"Server error",message:"Sorry, the exercises information was not retrieved from the server. Please refresh the page"})}finally{n.style.display="none"}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-form"),t=e.querySelector(".footer-form-input");e.addEventListener("submit",r=>{r.preventDefault();const a=t.value;if(!s(a)){o({type:"error",title:"Error",message:"Please enter a valid email address."});return}o({type:"success",title:"Success",message:"You have successfully subscribed!"}),console.log("SENT TO THE SERVER:",a),e.reset()});function s(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r).toLowerCase())}});const I=document.querySelector(".form-search-exersises"),ye=document.querySelector(".content");document.querySelector(".list-filter-exersises");const P=document.querySelector(".loader-start");P.style.display="block";const M="Muscles";let m=1,l="";document.addEventListener("DOMContentLoaded",async()=>{P.style.display="none";const e=F;ue(),ve(e);const t=await e({filter:M,page:m});t>1&&b({params:{filter:M,page:m},totalPages:t,method:F})});I.addEventListener("submit",async e=>{e.preventDefault(),await h({value:l,page:m}),B()});I.addEventListener("reset",async e=>{e.preventDefault(),e.target.querySelector(".input-search-exersises").value="",await h({value:l,page:m}),B()});ye.addEventListener("click",async e=>{const t=e.target.closest(".category-wrap");t&&(l=t.getAttribute("name"),C(l),await h({value:l,page:m}),B())});document.querySelector(".toggle-btn-home").classList.add("active");document.querySelector(".toggle-btn-favorites").classList.remove("active");function B(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{Z(t.id)})})}
//# sourceMappingURL=commonHelpers2.js.map
