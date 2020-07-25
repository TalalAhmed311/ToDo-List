var list=document.getElementById("todoList");

function addItem(){
    
    var item=document.getElementById('todoItem');

    if(item.value!=""){
            
    // li creation

    var li=document.createElement('li');
    li.setAttribute('class','listElements');
    
    
 
    var p=document.createElement('p');
    p.innerHTML=item.value;
    p.setAttribute('class','para');
    li.appendChild(p);
        



    // div

    var div=document.createElement('div');
    div.style.width="400px"
    
    // deleteBtn creation
    
    var deleteBtn=document.createElement('button');
    deleteBtn.setAttribute('class','btn btnFunctions');
    deleteBtn.innerHTML="<i class='fa fa-trash-o' aria-hidden='true'></i> ";
    deleteBtn.setAttribute('onclick','deleteItem(this)');
    div.appendChild(deleteBtn);

    // edit creation

    var editBtn=document.createElement('button');
    editBtn.setAttribute('class','btn btnFunctions');
    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.innerHTML="<i class='fa fa-pencil' aria-hidden='true'></i>"; 
    div.appendChild(editBtn);
    

    //finalize
    li.appendChild(div);
    list.appendChild(li);
    item.value="";


    }
}




function deleteAll(){

    list.innerHTML="";
    
}


function deleteItem(event){
 
    event.parentNode.parentNode.remove();
    
}

function editItem(event){

    var li=event.parentNode.parentNode;
    var para=event.parentNode.previousSibling;
    
    var input=document.createElement('input');
    input.setAttribute('class','editInput');
    input.setAttribute('maxlength','50');
    input.value=para.innerHTML;

    li.replaceChild(input,para);
     
    var saveBtn=document.createElement('button');
    saveBtn.setAttribute('class','btn btnFunctions');
    saveBtn.innerHTML="<i class='fa fa-check-square' aria-hidden='true'></i>";
    saveBtn.setAttribute('onclick','saveChanges(this)');


    event.replaceWith(saveBtn); 
    

}

function saveChanges(event) {
    
    var editBtn=document.createElement('button');
    editBtn.setAttribute('class','btn btnFunctions');
    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.innerHTML="<i class='fa fa-pencil' aria-hidden='true'></i>"; 
   
    console.log(event.parentNode.previousSibling);

    var input=event.parentNode.previousSibling;
    

    var p=document.createElement('p');
    p.innerHTML=input.value;
    p.setAttribute('class','para');
    
    input.replaceWith(p);    
    event.replaceWith(editBtn);

    

}