let text = document.querySelector('#text');
let items = document.querySelectorAll('ul .item');
let btnAdd = document.querySelector('#btn-add');
let btnsDelete = document.querySelectorAll('.btn-delete');
let list = document.querySelector('.list ul');

// items.forEach((item,index) => {
//     item.addEventListener('click', () => {
//         let chechked = true;
//         let check = item.children[0].children[0];
//         if(!chechked){
//             check.display == 'inline';
//         }
//         else{
//             check.display == 'none';
//         }

//         if(!chechked)  {
//             item.style.backgroundColor='gray';
//         }
//         else{
//             if((index+1)%2==1) item.style.backgroundColor='rgb(226, 225, 225)';
//             else item.style.backgroundColor='white';
//         }

//         let text = item.children[1];
//         if(!chechked){
//             text.style.fontDecoration = 'line-through';
//         }
//         else{
//             text.style.fontDecoration = 'none';
//         }
//         chechked = !chechked;
//     })
// })


btnAdd.addEventListener('click',()=>{
    if(text.value=='') alert('input bosdur');
    else{
        list.innerHTML+=`
        <li class="item" onclick="check(this)">
                    <span class="no-check"><i class="fa-solid fa-check" style="color: #ffffff;"></i></span>
                    <span class="unchecked-item">${text.value}</span>
                    <button class="btn-delete">
                        <i class="fa-solid fa-x fa-2xs"></i>
                    </button>
                </li>`;
        text.value=''; 
        btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn=>{
            btn.addEventListener('click',()=>{
                btn.parentElement.remove();
            })
        });
        
    }
});

btnsDelete.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentElement.remove();
    })
})


function check(x){
    if(x.children[0].className == 'no-check'){
        x.children[0].className = 'check';
    }
    else{
        x.children[0].className = 'no-check';
    }
    x.style.color='white';
    x.children[2].style.color='white';
    if(x.children[1].className == 'checked-item'){
        x.children[1].className = 'unchecked-item'
    }
    else{
        x.children[1].className = 'checked-item';
    }
    if(x.style.backgroundColor=='gray'){
        x.style.backgroundColor='rgb(226, 225, 225)';
        x.children[2].style.color='black';
        
    }
    else{
        x.style.backgroundColor='gray';
    }
}


