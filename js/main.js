(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('menu');
  if(!b||!n)return;
  function set(o){b.setAttribute('aria-expanded',o);n.classList.toggle('open',o);}
  b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true');});
  n.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);b.focus();}});
  window.addEventListener('resize',function(){if(innerWidth>980)set(false);});
})();
