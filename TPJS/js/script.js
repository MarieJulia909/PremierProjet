
const input_txt = document.getElementById("task-input");
const add_btn = document.getElementById("add-btn");
const task_list = document.getElementById("task-list");
const clr = document.getElementById('clear');

add_btn.addEventListener('click', function(){
    const val_input = input_txt.value ;
    if(val_input !== ""){
        const list = document.createElement("li");
        task_list.appendChild(list);
        list.innerHTML = val_input;
        add_btn.classList.toggle("done")
        const btn_del = document.createElement("button");
        btn_del.classList.toggle("delete-btn")
        list.appendChild(btn_del);
        const txt = document.createTextNode('Delete');
        btn_del.appendChild(txt);
        btn_del.addEventListener("click", function(){
            list.remove();
        })
        input_txt.value = "";
        clr.style.visibility = "visible"
    }else{
        alert("veuillez ecrire un tache ! ");
    }
})

clr.addEventListener('click', () => {
    task_list.remove();
    clr.style.visibility = "hidden"
})