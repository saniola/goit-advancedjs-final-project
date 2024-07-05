import{i as h,a as L}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),a=()=>{e.classList.add("is-open"),t.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("is-closing")},250)},s=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),t.classList.add("hidden")},250)};n.addEventListener("click",a),o.addEventListener("click",s),t.addEventListener("click",i=>{i.target===t&&s()})})();const r={DOMEN:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},de=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:o,burnedCalories:a,rating:s,target:i,time:y,bodyPart:I})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?x():x(s)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${n}">
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
                        <p class="exercises-info-value burned-calories">${a} / ${y} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${I}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function x(e=null){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${O(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button">
    <span class="icon-star trash-icon"></span>
    </button>`}function O(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}function R({params:e,pagination:t,method:n}){const o=Array.from(t.querySelectorAll(".button"));let a=1;o.forEach(s=>{s.addEventListener("click",i=>{s.classList.contains("active")||(a=s.dataset.page,n({...e,page:a}),o.forEach(y=>y.classList.remove("active")),s.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function ue({params:e,totalPages:t,method:n}){const o=document.querySelector(".pagination");let a="";const s=Number(e.page);if(t<=1){o.innerHTML="";return}s>3&&(a+=`
      <button class="button${s===1?" active":""}" data-page="1">
        1
      </button>
    `),s-3>1&&(a+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),s>2&&(a+=`
      <button class="button" data-page="${s-2}">
        ${s-2}
      </button>
    `),s>1&&(a+=`
      <button class="button" data-page="${s-1}">
        ${s-1}
      </button>
    `),a+=`
    <button class="button active" data-page="${s}">
      ${s}
    </button>
  `,s+1<=t&&(a+=`
      <button class="button" data-page="${s+1}">
        ${s+1}
      </button>
    `),s+2<=t&&(a+=`
      <button class="button" data-page="${s+2}">
        ${s+2}
      </button>
    `),s+3===t?a+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:s+3<t&&(a+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,a+=`
      <button class="button${t===s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),o.innerHTML=a,R({params:e,pagination:o,method:n})}function l({type:e,title:t,message:n,position:o="topRight"}){switch(e){case"error":h.error({title:t,message:n,position:o});break;case"success":h.success({title:t,message:n,position:o});break;case"info":h.warning({title:t,message:n,position:o});break}}async function A(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:n}=await L({method:"get",url:`${r.DOMEN}/exercises/${e}`,responseType:"json"});return n}catch{l({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}let c,u;function T(){c=document.getElementById("addFavoritesButton"),u=document.getElementById("removeFavoritesButton"),c.addEventListener("click",k),u.addEventListener("click",N);const e=JSON.parse(localStorage.getItem(r.FAV_KEY))??[],t=c.dataset.id;t&&e.includes(t)?M():F()}function k(){const e=JSON.parse(localStorage.getItem(r.FAV_KEY))??[],t=c.dataset.id;t&&!e.includes(t)&&(e.push(c.dataset.id),localStorage.setItem(r.FAV_KEY,JSON.stringify(e)),M())}function N(){const e=JSON.parse(localStorage.getItem(r.FAV_KEY))??[],t=u.dataset.id;if(t&&e.includes(t)){const n=e.filter(o=>o!==t);localStorage.setItem(r.FAV_KEY,JSON.stringify(n)),F()}}function F(){c.classList.remove("hidden"),u.classList.add("hidden")}function M(){c.classList.add("hidden"),u.classList.remove("hidden")}async function C(e,t){const{data:n}=await L({method:"patch",url:`${r.DOMEN}/exercises/${e}/rating`,responseType:"json",data:t});return n}function j(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function H(){return document.getElementById("ratingModal").remove()}let E,d=0;function J(e){j(),V(),_(),U(e),Y()}function Y(){m().querySelector("#closeRatingButton").addEventListener("click",q)}function q(){exerciseModal.classList.remove("hidden"),K(),W(),H()}function K(){p(0),d=0,v().reset()}function p(e){m().querySelectorAll(".icon-star").forEach((a,s)=>{s<e?a.classList.remove("empty"):a.classList.add("empty")});var n=e.toFixed(1);const o=m().querySelector(".rating-value");o.textContent=n}function V(){m().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const n=parseInt(t.getAttribute("data-value"),10);p(n)}),t.addEventListener("mouseout",()=>{p(d)})})}function _(){m().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{d=parseInt(t.getAttribute("data-value"),10),p(d)})})}function Q(e,t){if(e.preventDefault(),d===0){l({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const n=v().querySelector(".rating-form-email").value,o=v().querySelector(".rating-form-comment").value;C(t,{rate:d,email:n,review:o}).then(()=>{q(),l({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(s=>{console.error("Error submitting form:",s),l({type:"error",title:"Server error",message:"Error submitting rating form"})})}function U(e){E=t=>Q(t,e),v().addEventListener("submit",E)}function W(){v().removeEventListener("submit",E)}function m(){return document.getElementById("ratingModal")}function v(){return document.getElementById("ratingForm")}function z(e){const t=document.getElementById("modalOverlay"),n=`${e.burnedCalories}/${e.time} min`,o=`
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
            <div class="details-value">${b(e.target)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Body Part</div>
            <div class="details-value">${b(e.bodyPart)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Equipment</div>
            <div class="details-value">${b(e.equipment)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Popular</div>
            <div class=" details-value">${e.popularity}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Burned Calories</div>
            <div class="details-value">${n}</div>
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
  `;t.insertAdjacentHTML("beforeend",o),P(e.rating)}function P(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,n)=>{t.classList.toggle("empty",n>=Math.round(e))})}function b(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let S,$,f,g,w;async function D(e){let t;try{t=await A(e)}catch{l({type:"error",title:"Server error",message:"Error fetching exercise data"})}z(t),G(),X(),ee(),ne(),oe(e),T()}function G(){S=document.getElementById("modalOverlay"),$=document.getElementById("exerciseModal"),f=document.getElementById("addFavoritesButton"),g=document.getElementById("removeFavoritesButton"),w=document.getElementById("addRatingButton")}function X(){S.classList.remove("hidden")}function Z(){S.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function ee(){$.querySelector("#closeExerciseButton").addEventListener("click",Z)}function te(){f.classList.add("hidden"),g.classList.remove("hidden"),ae()}function se(){f.classList.remove("hidden"),g.classList.add("hidden")}function ne(){f.addEventListener("click",te)}function ae(){g.addEventListener("click",se)}function oe(e){w.addEventListener("click",()=>ie(e))}function ie(e){$.classList.add("hidden"),J(e)}function me(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{D(t.id)})})}async function re(){const e=document.querySelector(".loader-text");e.style.display="inline-block";try{const{data:t}=await L({method:"get",url:`${r.DOMEN}/quote`,responseType:"json"});return t}catch{return l({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function ce(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${n}/${o}`}function B(e,t){const n=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");n&&o&&(o.innerHTML=e,n.innerHTML=t)}async function ve(){const e=localStorage.getItem("quote"),t=ce();if(e&&JSON.parse(e).currentDate==t){const{author:n,quote:o}=JSON.parse(e);B(n,o);return}if(!e||JSON.parse(e).currentDate!==t){const{author:n,quote:o}=await re();B(n,o),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:n,quote:o}))}}export{de as a,ue as b,r as c,me as d,ve as f,l as s};
//# sourceMappingURL=fetch-and-set-quote-40911557.js.map
