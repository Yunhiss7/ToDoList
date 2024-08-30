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
        let item = new Object();
        item.value = text.value;
        item.checked = false;
        data.push(item);
        text.value=''; 
        print();
        
    }
});

function deleteItem(i){
    data.splice(i,1);
    if(data.length!=0 && i!= data.length) data[i].checked = !data[i].checked;
    print();
}


function check(i){
    data[i].checked = !data[i].checked;
    print();
}


