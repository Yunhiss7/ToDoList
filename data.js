let data = [
    {
        value:'A',
        checked:false
    },
    {
        value:'B',
        checked:false
    },
    {
        value:'C',
        checked:false
    },
    {
        value:'D',
        checked:false
    }
];

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

function print(){
    list.innerHTML = '';
    data.forEach((item,index)=>{
        if(!item.checked){
            list.innerHTML+=`<li class="item unchecked" onclick="check(${index})">
                        <span class="no-check">
                            <i class="fa-solid fa-check" style="color: #ffffff;"></i>
                        </span>
                        <span class="unchecked-text">
                            ${item.value}
                        </span>
                        <button class="btn-delete black" onclick="deleteItem(${index})">
                            <i class="fa-solid fa-x fa-2xs"></i>
                        </button>
                     </li>`
        }
        else{
            list.innerHTML+=`<li class="item checked" onclick="check(${index})">
                        <span class="check">
                            <i class="fa-solid fa-check" style="color: #ffffff;"></i>
                        </span>
                        <span class="checked-text">
                            ${item.value}
                        </span>
                        <button class="btn-delete white" onclick="deleteItem(${index})">
                            <i class="fa-solid fa-x fa-2xs"></i>
                        </button>
                     </li>`
        }
    })
}
print();

btnAdd.addEventListener('click',()=>{
    if(text.value=='') alert('input bosdur');
    else{
        // list.innerHTML+=`
        // <li class="item" onclick="check()">
        //             <span class="no-check"><i class="fa-solid fa-check" style="color: #ffffff;"></i></span>
        //             <span class="unchecked-item">${text.value}</span>
        //             <button class="btn-delete">
        //                 <i class="fa-solid fa-x fa-2xs"></i>
        //             </button>
        //         </li>`;
        let item = new Object();
        item.value = text.value;
        item.checked = false;
        data.push(item);
        text.value=''; 
        // btnsDelete = document.querySelectorAll('.btn-delete');
        // btnsDelete.forEach(btn=>{
        //     btn.addEventListener('click',()=>{
        //         btn.parentElement.remove();
        //     })
        // });
        print();
        
    }
});

function deleteItem(i){
    data.splice(i,1);
    if(data.length!=0 && i!= data.length) data[i].checked = !data[i].checked;
    print();
}


function check(i){
    // if(x.children[0].className == 'no-check'){
    //     x.children[0].className = 'check';
    // }
    // else{
    //     x.children[0].className = 'no-check';
    // }
    // x.style.color='white';
    // x.children[2].style.color='white';
    // if(x.children[1].className == 'checked-item'){
    //     x.children[1].className = 'unchecked-item'
    // }
    // else{
    //     x.children[1].className = 'checked-item';
    // }
    // if(x.style.backgroundColor=='gray'){
    //     x.style.backgroundColor='rgb(226, 225, 225)';
    //     x.children[2].style.color='black';
        
    // }
    // else{
    //     x.style.backgroundColor='gray';
    // }
    data[i].checked = !data[i].checked;
    print();
}


