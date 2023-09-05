console.log("start")

let capture=false;  //false: b>f>c   true: c>f>b

let my_input=document.getElementById("name")
let my_button=document.getElementById("sub-btn")
let my_form=document.getElementById("form_1")
let my_container=document.getElementById("div1")

my_para=document.getElementById("validation")

function dis_sub(){
    
    my_button.setAttribute("disabled","disabled")

    my_button.removeEventListener("click",submit_level)
    my_form.removeEventListener("click", form_level)
    my_container.removeEventListener("click", cont_level)

    event.stopPropagation();

}

function validate(){
    let numb=document.getElementById('name').value;
    console.log('Validating...');
    if (numb.length==1 && Number(numb)>=0 && Number(numb)<=9){

        my_button.removeAttribute("disabled");
        my_para.innerHTML="Validation Successful";
        console.log("Success");

        my_button.addEventListener("click",submit_level,capture)
        my_form.addEventListener("click", form_level,capture)
        my_container.addEventListener("click", cont_level,capture)

    } else{

        my_para.innerHTML="Please enter a valid number";
        console.error("Invalid");

    }
    event.stopPropagation();
    
}

function submit_level(){
    console.log("at button level");
    if (document.getElementById("name").value==="0"){
        event.stopPropagation();
    }else if (Number(document.getElementById("name").value)%2==0){
        my_form.removeEventListener("click", form_level)

    }
}
function form_level(){
    console.log("at form level",capture);
    if (!document.getElementById("name").value){
        event.stopPropagation();
        return;
    }
    if(Number(document.getElementById("name").value)%2==1){
        event.stopPropagation();
    }
}
function cont_level(){
    console.log("at container level");
    event.stopPropagation();
}

my_input.addEventListener('input',validate,capture)
my_input.addEventListener('click',dis_sub,capture)

