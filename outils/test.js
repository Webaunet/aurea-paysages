const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const root=process.argv[2];const pages=process.argv.slice(3);
for(const w of [390,768,1280]){const p=await b.newPage({viewport:{width:w,height:800}});
for(const f of pages){await p.goto('file://'+path.join(root,f));await p.waitForTimeout(300);
const r=await p.evaluate(()=>{const o=[];const de=document.documentElement;
if(de.scrollWidth>innerWidth)o.push('overflowX '+de.scrollWidth);
document.querySelectorAll('p,li,a,dd,dt,span,small,b').forEach(e=>{if(e.children.length==0&&e.textContent.trim()&&parseFloat(getComputedStyle(e).fontSize)<15.5&&!e.closest('.sr'))o.push('small '+e.textContent.trim().slice(0,20)+' '+getComputedStyle(e).fontSize)});
document.querySelectorAll('a.btn,.nav a,.burger').forEach(e=>{const r=e.getBoundingClientRect();if(r.width&&(r.height<43.5))o.push('cible '+e.textContent.trim().slice(0,15)+' '+r.height)});
document.querySelectorAll('img').forEach(i=>{if(i.complete&&!i.naturalWidth)o.push('img cassée '+i.src)});
const h=[...document.querySelectorAll('main section')].map(s=>Math.round(s.getBoundingClientRect().height/innerHeight*100)+'%');
o.push('sections '+h.join(','));o.push('h1='+document.querySelectorAll('h1').length);return o});
console.log(w,f,r.join(' | '))}}
await b.close()})()
