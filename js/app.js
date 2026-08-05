function deleteDay(date){
  var el=document.querySelector('[data-date="'+date+'"]');
  if(!el)return;
  el.classList.add('removing');
  var deleted=JSON.parse(localStorage.getItem('deleted-days')||'[]');
  if(deleted.indexOf(date)===-1){deleted.push(date);localStorage.setItem('deleted-days',JSON.stringify(deleted))}
  setTimeout(function(){el.remove();checkEmpty()},400)
}
function checkEmpty(){
  var c=document.getElementById('days-container');
  if(c.children.length===0){
    var d=document.createElement('div');
    d.className='glass day-section';
    d.style.padding='40px';
    d.innerHTML='<div class="archived-notice">📭 所有分组已归档删除<br><span style="font-size:.8rem">明天的快报会自动新增</span></div>';
    c.appendChild(d)
  }
}

function renderDay(data){
  var existing=document.querySelector('[data-date="'+data.date+'"]');
  if(existing)existing.remove();
  var deleted=JSON.parse(localStorage.getItem('deleted-days')||'[]');
  if(deleted.indexOf(data.date)!==-1)return;
  var html='<section class="glass day-section '+(data.variant||'variant-a')+'" data-date="'+data.date+'">';
  html+='<div class="day-header"><div><div class="date-badge">'+replaceEmojis(data.dateDisplay)+'</div><div class="meta">'+replaceEmojis(data.meta)+'</div></div><button class="delete-btn" onclick="deleteDay(\''+data.date+'\')" title="删除此分组">×</button></div>';
  html+='<div class="day-body">'+replaceEmojis(data.html)+'</div>';
  html+='</section>';
  var container=document.getElementById('days-container');
  var wrapper=document.createElement('div');
  wrapper.innerHTML=html;
  container.insertBefore(wrapper.firstElementChild,container.firstChild)
}

checkEmpty();