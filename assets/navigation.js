document.documentElement.classList.add('js');
const button=document.querySelector('.menu');
const navigation=document.querySelector('#navigation');
button.hidden=false;
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);button.textContent=open?'Close':'Menu';});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){button.click();button.focus();}});
