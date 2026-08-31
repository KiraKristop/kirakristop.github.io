document.getElementById('burger')?.addEventListener('click',()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
document.getElementById('contactForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const d=new FormData(e.target);
  const subject=encodeURIComponent(d.get('subject')||'');
  const body=encodeURIComponent(`Имя: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`);
  location.href=`mailto:kirakris.help@list.ru?subject=${subject}&body=${body}`;
});
