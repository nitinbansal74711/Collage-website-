const mb=document.querySelector(".menu-btn"),nav=document.querySelector("nav");
mb.addEventListener("click",()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
const fmt=d=>new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
const evCard=e=>`<article class="card"><span class="tag">${e.c}</span><h3>${e.t}</h3><p>${e.x}</p><p><strong>${fmt(e.d)}</strong> &middot; ${e.v}</p></article>`;
if(window.EVENTS){const box=document.getElementById("event-list");
 const show=c=>box.innerHTML=window.EVENTS.filter(e=>c==="all"||e.c===c).map(evCard).join("")||"<p>No events in this category.</p>";
 show("all");document.getElementById("ev-filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;
 document.querySelectorAll("#ev-filters .chip").forEach(x=>x.classList.remove("on"));b.classList.add("on");show(b.dataset.c)})}
const he=document.getElementById("home-events");
if(he)he.innerHTML=[{t:"Business Plan & Idea Pitch Competition",d:"2026-12-12",v:"Seminar Hall",c:"Competition",x:"Pitch your startup idea to a panel of mentors."},
 {t:"Web Technology Project Showcase",d:"2026-12-18",v:"Computer Lab 2",c:"Academic",x:"Teams present live websites."},
 {t:"Annual Sports Meet",d:"2027-01-15",v:"Main Ground",c:"Sports",x:"Track, field and team events."}].map(evCard).join("");
if(window.FACULTY){const list=document.getElementById("faculty-list"),q=document.getElementById("q"),dep=document.getElementById("dep"),none=document.getElementById("none");
 [...new Set(window.FACULTY.map(f=>f.d))].forEach(d=>dep.add(new Option(d,d)));
 const render=()=>{const t=q.value.trim().toLowerCase();const r=window.FACULTY.filter(f=>f.n.toLowerCase().includes(t)&&(!dep.value||f.d===dep.value));
 list.innerHTML=r.map(f=>`<article class="card"><h3>${f.n}</h3><p>${f.r}</p><span class="tag">${f.d}</span></article>`).join("");none.hidden=r.length>0};
 q.addEventListener("input",render);dep.addEventListener("change",render);render()}
const gf=document.getElementById("gal-filters");
if(gf)gf.addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;gf.querySelectorAll(".chip").forEach(x=>x.classList.remove("on"));b.classList.add("on");
 document.querySelectorAll(".tile").forEach(t=>t.hidden=b.dataset.c!=="all"&&t.dataset.c!==b.dataset.c)});
const cf=document.getElementById("cf");
if(cf)cf.addEventListener("submit",e=>{e.preventDefault();let ok=true;
 const rules={name:v=>v.trim().length>=3||"Enter your full name (at least 3 letters).",email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||"Enter a valid email like name@example.com.",
 phone:v=>/^[6-9]\d{9}$/.test(v)||"Enter a 10-digit mobile number starting with 6-9.",msg:v=>v.trim().length>=10||"Write at least 10 characters."};
 for(const id in rules){const f=document.getElementById(id),r=rules[id](f.value);f.classList.toggle("bad",r!==true);f.nextElementSibling.textContent=r===true?"":r;if(r!==true)ok=false}
 document.getElementById("ok").hidden=!ok;if(ok)cf.reset()});
