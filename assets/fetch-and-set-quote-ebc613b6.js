import{i as h,a as y}from"./vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),a=()=>{e.classList.add("is-open"),t.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("is-closing")},250)},s=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),t.classList.add("hidden")},250)};n.addEventListener("click",a),o.addEventListener("click",s),t.addEventListener("click",i=>{i.target===t&&s()})})();const r={DOMEN:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},A=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:o,burnedCalories:a,rating:s,target:i,time:u,bodyPart:f})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?$(null,n):$(s)}
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
                        <p class="exercises-info-value burned-calories">${a} / ${u} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${f}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${i}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function $(e=null,t=""){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${R(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button" data-id="${t}">
    <span class="icon-star trash-icon"></span>
    </button>`}function R(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}function N({params:e,pagination:t,method:n}){const o=Array.from(t.querySelectorAll(".button"));let a=1;o.forEach(s=>{s.addEventListener("click",i=>{s.classList.contains("active")||(a=s.dataset.page,n({...e,page:a}),o.forEach(u=>u.classList.remove("active")),s.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function k({params:e,totalPages:t,method:n}){const o=document.querySelector(".pagination");let a="";const s=Number(e.page);if(t<=1){o.innerHTML="";return}s>3&&(a+=`
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
    `),o.innerHTML=a,N({params:e,pagination:o,method:n})}function l({type:e,title:t,message:n,position:o="topRight"}){switch(e){case"error":h.error({title:t,message:n,position:o});break;case"success":h.success({title:t,message:n,position:o});break;case"info":h.warning({title:t,message:n,position:o});break}}async function C(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:n}=await y({method:"get",url:`${r.DOMEN}/exercises/${e}`,responseType:"json"});return n}catch{l({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}let c,m;function j(){c=document.getElementById("addFavoritesButton"),m=document.getElementById("removeFavoritesButton"),c.addEventListener("click",H),m.addEventListener("click",M);const e=JSON.parse(localStorage.getItem(r.FAV_KEY))??[],t=c.dataset.id;t&&e.includes(t)?F():q()}function H(e=null,t=null,n=!0){const o=JSON.parse(localStorage.getItem(r.FAV_KEY))??[],a=t||c.dataset.id;a&&!o.includes(a)&&(o.push(c.dataset.id),localStorage.setItem(r.FAV_KEY,JSON.stringify(o)),n&&F(),w()&&x({page:1}))}function M(e=null,t=null,n=!0){const o=JSON.parse(localStorage.getItem(r.FAV_KEY))??[],a=t||m.dataset.id;if(a&&o.includes(a)){const s=o.filter(i=>i!==a);localStorage.setItem(r.FAV_KEY,JSON.stringify(s)),n&&q(),w()&&x({page:1})}}function q(){c.classList.remove("hidden"),m.classList.add("hidden")}function F(){c.classList.add("hidden"),m.classList.remove("hidden")}function w(){return document.querySelector("body").classList.contains("js-favorites")}async function J(e,t){const{data:n}=await y({method:"patch",url:`${r.DOMEN}/exercises/${e}/rating`,responseType:"json",data:t});return n}function Y(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function K(){return document.getElementById("ratingModal").remove()}let E,d=0;function V(e){Y(),W(),Q(),z(e),_()}function _(){v().querySelector("#closeRatingButton").addEventListener("click",I)}function I(){exerciseModal.classList.remove("hidden"),P(),D(),K()}function P(){g(0),d=0,p().reset()}function g(e){v().querySelectorAll(".icon-star").forEach((a,s)=>{s<e?a.classList.remove("empty"):a.classList.add("empty")});var n=e.toFixed(1);const o=v().querySelector(".rating-value");o.textContent=n}function W(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const n=parseInt(t.getAttribute("data-value"),10);g(n)}),t.addEventListener("mouseout",()=>{g(d)})})}function Q(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{d=parseInt(t.getAttribute("data-value"),10),g(d)})})}function U(e,t){if(e.preventDefault(),d===0){l({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const n=p().querySelector(".rating-form-email").value,o=p().querySelector(".rating-form-comment").value;J(t,{rate:d,email:n,review:o}).then(()=>{I(),l({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(s=>{console.error("Error submitting form:",s),l({type:"error",title:"Server error",message:"Error submitting rating form"})})}function z(e){E=t=>U(t,e),p().addEventListener("submit",E)}function D(){p().removeEventListener("submit",E)}function v(){return document.getElementById("ratingModal")}function p(){return document.getElementById("ratingForm")}function G(e){const t=document.getElementById("modalOverlay"),n=`${e.burnedCalories}/${e.time} min`,o=`
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
  `;t.insertAdjacentHTML("beforeend",o),X(e.rating)}function X(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,n)=>{t.classList.toggle("empty",n>=Math.round(e))})}function b(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let S,L,O;async function Z(e){let t;try{t=await C(e)}catch{l({type:"error",title:"Server error",message:"Error fetching exercise data"})}G(t),ee(),te(),ne(),ae(e),j()}function ee(){S=document.getElementById("modalOverlay"),L=document.getElementById("exerciseModal"),O=document.getElementById("addRatingButton")}function te(){S.classList.remove("hidden")}function se(){S.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function ne(){L.querySelector("#closeExerciseButton").addEventListener("click",se)}function ae(e){O.addEventListener("click",()=>oe(e))}function oe(e){L.classList.add("hidden"),V(e)}function ie(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{Z(t.id)})})}function re(){document.querySelectorAll(".js-delete-favorite").forEach(t=>{t.addEventListener("click",()=>{M(null,t.dataset.id,!1)})})}async function x(e){const{data:t}=await y({method:"get",url:`${r.DOMEN}/exercises?page=1&limit=10000`,responseType:"json"}),n=window.innerWidth>1280?1e4:window.innerWidth<768?8:10,o=t.results,a=JSON.parse(localStorage.getItem(r.FAV_KEY))??[];if(o&&a&&a.length){const s=o.filter(T=>a.includes(T._id)),i=e&&e.page?(parseInt(e.page)-1)*n:0,u=s.slice(i,i+n);document.querySelector(".content").innerHTML=A(u,!0),document.querySelector(".pagination").innerHTML="";const f=s.length>n?Math.ceil(s.length/n):1;f>1&&k({params:e,totalPages:f,method:x}),ie(),re()}else document.querySelector(".content").innerHTML="It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",document.querySelector(".pagination").innerHTML=""}async function ce(){const e=document.querySelector(".loader-text");e.style.display="inline-block";try{const{data:t}=await y({method:"get",url:`${r.DOMEN}/quote`,responseType:"json"});return t}catch{return l({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function le(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${n}/${o}`}function B(e,t){const n=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");n&&o&&(o.innerHTML=e,n.innerHTML=t)}async function ue(){const e=localStorage.getItem("quote"),t=le();if(e&&JSON.parse(e).currentDate==t){const{author:n,quote:o}=JSON.parse(e);B(n,o);return}if(!e||JSON.parse(e).currentDate!==t){const{author:n,quote:o}=await ce();B(n,o),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:n,quote:o}))}}export{x as a,k as b,r as c,A as d,ie as e,ue as f,l as s};
//# sourceMappingURL=fetch-and-set-quote-ebc613b6.js.map
