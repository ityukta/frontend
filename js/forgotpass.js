document.querySelector('.forgotpassword').addEventListener('click',(e)=>{
    document.querySelector('.modal').classList.toggle('modal__dispnone');
});
document.querySelector('.fa-times').addEventListener('click',()=>{
    document.querySelector('.modal').classList.toggle('modal__dispnone');
});
