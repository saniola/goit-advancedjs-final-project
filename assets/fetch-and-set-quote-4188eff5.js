import{d as R,e as j,i as p,a as x}from"./vendor-032df744.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),a=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{e.classList.add("is-opening"),t.classList.remove("hidden"),R(e),setTimeout(()=>{e.classList.add("is-open"),e.classList.remove("is-opening")},50)},s=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),j(e),t.classList.add("hidden")},250)};a.addEventListener("click",n),o.addEventListener("click",s),t.addEventListener("click",r=>{r.target===t&&s()})})();const f={DOMEN:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},k=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:a,name:o,burnedCalories:n,rating:s,target:r,time:i,bodyPart:E})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?B(null,a):B(s)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${a}">
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
                        <p class="exercises-info-value burned-calories">${n} / ${i} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${E}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${r}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function B(e=null,t=""){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${N(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button" data-id="${t}">
    <span class="icon-trash trash-icon"></span>
    </button>`}function N(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}function C({params:e,pagination:t,method:a}){const o=Array.from(t.querySelectorAll(".button"));let n=1;o.forEach(s=>{s.addEventListener("click",r=>{s.classList.contains("active")||(n=s.dataset.page,a({...e,page:n}),o.forEach(i=>i.classList.remove("active")),s.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function H({params:e,totalPages:t,method:a}){const o=document.querySelector(".pagination");let n="";const s=Number(e.page);if(t<=1){o.innerHTML="";return}s>3&&(n+=`
      <button class="button${s===1?" active":""}" data-page="1">
        1
      </button>
    `),s-3>1&&(n+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),s>2&&(n+=`
      <button class="button" data-page="${s-2}">
        ${s-2}
      </button>
    `),s>1&&(n+=`
      <button class="button" data-page="${s-1}">
        ${s-1}
      </button>
    `),n+=`
    <button class="button active" data-page="${s}">
      ${s}
    </button>
  `,s+1<=t&&(n+=`
      <button class="button" data-page="${s+1}">
        ${s+1}
      </button>
    `),s+2<=t&&(n+=`
      <button class="button" data-page="${s+2}">
        ${s+2}
      </button>
    `),s+3===t?n+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:s+3<t&&(n+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,n+=`
      <button class="button${t===s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),o.innerHTML=n,C({params:e,pagination:o,method:a})}function l({type:e,title:t,message:a,position:o="topRight"}){switch(e){case"error":p.error({title:t,message:a,position:o});break;case"success":p.success({title:t,message:a,position:o});break;case"warning":p.warning({title:t,message:a,position:o});break;case"info":p.info({title:t,message:a,position:o});break;default:console.warn("Unknown toast type:",e)}}async function J(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:a}=await x({method:"get",url:`${f.DOMEN}/exercises/${e}`,responseType:"json"});return a}catch{l({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}let y,u;function P(e){y=document.getElementById("addFavoritesButton"),u=document.getElementById("removeFavoritesButton"),y.addEventListener("click",Y),u.addEventListener("click",K),M(e)?w():F()}function _(){const e=document.getElementById("exerciseModal"),t=e.querySelector(".add-favorites-btn").getAttribute("data-id"),a=e.querySelector(".exercise-title-js").getAttribute("data-value"),o=Number(e.querySelector(".rating-value-js").getAttribute("data-value")),n=e.querySelector(".details-target-js").getAttribute("data-value"),s=e.querySelector(".details-body-part-js").getAttribute("data-value"),r=e.querySelector(".details-burned-calories-js").getAttribute("data-value"),i=Number(r.split("/")[0]),E=r.split("/")[1],A=Number(E.split(" ")[0]);return{_id:t,name:a,burnedCalories:i,rating:o,target:n,time:A,bodyPart:s}}function V(e){let t=h();t[e._id]=e,localStorage.setItem("favorites",JSON.stringify(t))}function M(e){return h()[e]||null}function Y(){const e=_();M(e._id)||(V(e),w()),I()&&S({page:1})}function K(){let e=h();const t=u.dataset.id;e[t]&&(delete e[t],localStorage.setItem("favorites",JSON.stringify(e)),F()),I()&&S({page:1})}function W(e){let t=h();const a=e.currentTarget.getAttribute("data-id");t[a]&&(delete t[a],localStorage.setItem("favorites",JSON.stringify(t)),S({page:1}))}function F(){y.classList.remove("hidden"),u.classList.add("hidden")}function w(){y.classList.add("hidden"),u.classList.remove("hidden")}function I(){return document.querySelector("body").classList.contains("js-favorites")}function h(){return JSON.parse(localStorage.getItem(f.FAV_KEY))||{}}async function D(e,t){const{data:a}=await x({method:"patch",url:`${f.DOMEN}/exercises/${e}/rating`,responseType:"json",data:t});return a}function Q(){const e=document.getElementById("modalOverlay"),t=`
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
  `;e.insertAdjacentHTML("beforeend",t)}function U(){return document.getElementById("ratingModal").remove()}let L,d=0;function z(e){Q(),Z(),ee(),se(e),G()}function G(){v().querySelector("#closeRatingButton").addEventListener("click",O)}function O(){exerciseModal.classList.remove("hidden"),X(),ae(),U()}function X(){b(0),d=0,m().reset()}function b(e){v().querySelectorAll(".icon-star").forEach((n,s)=>{s<e?n.classList.remove("empty"):n.classList.add("empty")});var a=e.toFixed(1);const o=v().querySelector(".rating-value");o.textContent=a}function Z(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const a=parseInt(t.getAttribute("data-value"),10);b(a)}),t.addEventListener("mouseout",()=>{b(d)})})}function ee(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{d=parseInt(t.getAttribute("data-value"),10),b(d)})})}function te(e,t){if(e.preventDefault(),d===0){l({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const a=m().querySelector(".rating-form-email").value,o=m().querySelector(".rating-form-comment").value;D(t,{rate:d,email:a,review:o}).then(()=>{O(),l({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(s=>{console.error("Error submitting form:",s),l({type:"error",title:"Server error",message:"Error submitting rating form"})})}function se(e){L=t=>te(t,e),m().addEventListener("submit",L)}function ae(){m().removeEventListener("submit",L)}function v(){return document.getElementById("ratingModal")}function m(){return document.getElementById("ratingForm")}function ne(e){const t=document.getElementById("modalOverlay"),a=`${e.burnedCalories}/${e.time} min`,o=g(e.target),n=g(e.bodyPart),s=g(e.name),r=e.rating.toFixed(1),i=`
    <div class="modal-window" id="exerciseModal">
    <span class="close-button icon-x" id="closeExerciseButton"></span>
    <div class="exercise-wrapper">
      <img src="${e.gifUrl}" alt="${s}" class="exercise-image">
      <div class="exercise-details">
        <div class="exercise-header">
          <h2 class="exercise-title-js" data-value="${s}">${s}</h2>
          <div class="rating">
            <span class="rating-value rating-value-js" data-value="${r}">${r}</span>
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
            <div class="details-value details-target-js" data-value="${o}">${o}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Body Part</div>
            <div class="details-value details-body-part-js" data-value="${n}">${n}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Equipment</div>
            <div class="details-value">${g(e.equipment)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Popular</div>
            <div class=" details-value">${e.popularity}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Burned Calories</div>
            <div class="details-value details-burned-calories-js" data-value="${a}">${a}</div>
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
  `;t.insertAdjacentHTML("beforeend",i),oe(e.rating)}function oe(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,a)=>{t.classList.toggle("empty",a>=Math.round(e))})}function g(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}let c,$,T;async function re(e){let t;try{t=await J(e)}catch{l({type:"error",title:"Server error",message:"Error fetching exercise data"})}await ne(t),ie(),ce(),de(),ue(e),P(e),me()}function ie(){c=document.getElementById("modalOverlay"),$=document.getElementById("exerciseModal"),document.getElementById("addFavoritesButton"),document.getElementById("removeFavoritesButton"),T=document.getElementById("addRatingButton")}function ce(){c.classList.remove("hidden")}function le(){c.classList.add("hidden"),document.getElementById("exerciseModal").remove()}function de(){$.querySelector("#closeExerciseButton").addEventListener("click",le)}function ue(e){T.addEventListener("click",()=>ve(e))}function ve(e){$.classList.add("hidden"),z(e)}function me(){c.addEventListener("click",e=>{e.target===c&&(c.querySelector("#exerciseModal").remove(),c.classList.add("hidden"))})}function fe(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{re(t.id)})})}function pe(){document.querySelectorAll(".js-delete-favorite").forEach(t=>{t.addEventListener("click",W)})}function S(e){const t=window.innerWidth>1280?1e4:window.innerWidth<768?8:10,a=JSON.parse(localStorage.getItem(f.FAV_KEY))??[],o=Object.values(a);if(o&&o.length){const n=e&&e.page?(parseInt(e.page)-1)*t:0,s=o.slice(n,n+t);document.querySelector(".content").innerHTML=k(s,!0),document.querySelector(".pagination").innerHTML="";const r=o.length>t?Math.ceil(o.length/t):1;r>1&&H({params:e,totalPages:r,method:S}),fe(),pe()}else document.querySelector(".content").innerHTML=`<p class="empty">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites for easier access in the future.
      </p>`,document.querySelector(".pagination").innerHTML=""}async function ge(){const e=document.querySelector(".loader-text");e.style.display="inline-block";try{const{data:t}=await x({method:"get",url:`${f.DOMEN}/quote`,responseType:"json"});return t}catch{return l({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function ye(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${a}/${o}`}function q(e,t){const a=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");a&&o&&(o.innerHTML=e,a.innerHTML=t)}async function he(){const e=localStorage.getItem("quote"),t=ye();if(e&&JSON.parse(e).currentDate==t){const{author:a,quote:o}=JSON.parse(e);q(a,o);return}if(!e||JSON.parse(e).currentDate!==t){const{author:a,quote:o}=await ge();q(a,o),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:a,quote:o}))}}export{S as a,H as b,f as c,k as d,fe as e,he as f,l as s};
//# sourceMappingURL=fetch-and-set-quote-4188eff5.js.map
