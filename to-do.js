let input=document.querySelector(".input");
let addbtn=document.querySelector(".btn");
let list=document.querySelector(".ul");

addbtn.addEventListener("click",function(){
    let task=input.value;
    input.value="";

    if(task.length>0){
    let createle=document.createElement("li");
    createle.classList.add("list-text");
    createle.innerHTML=task;

    let creatremo=document.createElement("p");
    
    let creatimgdiv=document.createElement("div");
    let creatimgdiv2=document.createElement("div");
    let creatcomp=document.createElement("img");
    creatimgdiv.classList.add("doneimg");

    creatcomp.src="data:image/jpeg;base64,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"
    
    
    
    console.log(creatimgdiv);
    creatcomp.classList.add("comp")

    

    let creatcomp2=document.createElement("img");
    
    creatcomp2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLGuBy8Pl0cXD81Qx-5Y2xps62piX59KFHQ&usqp=CAU"
    creatimgdiv2.classList.add("doneimg");
    
    console.log(creatimgdiv2);
    creatcomp2.classList.add("comp")


    creatremo.innerHTML="X";
    
    console.log(creatremo);
    creatremo.classList.add("remove");
    creatremo.classList.add("center");

   

 //this part is add event in the Edit button
    let flag2=true;
   creatcomp2.addEventListener("click",function(){
    if(flag2==true){
    flag2=false;
     createle.innerHTML="";
     input.value=task;
    }
    else{
        createle.innerHTML=input.value;
        task=input.value;
        input.value="";
        flag2=true;
        
    }
      
   })

    //this part is add event in the completed button
    let flag=true;
    creatimgdiv.addEventListener("click",function(){
        if(flag==true){
        let del=document.createElement("del");
        del.innerHTML=task;
        createle.innerHTML="";
        createle.appendChild(del);
        flag=false;
        }
        else{
            createle.innerHTML=task;
            flag=true;
        }
     })
   
  
  //this part is remove the element


    creatremo.addEventListener("click",function(){
        createle.remove();
        creatremo.remove();
        creatimgdiv.remove();
        creatimgdiv2.remove();

    })

   //this part is add all element in the list Element
   
    list.appendChild(createle);
    
    list.appendChild(creatimgdiv2);
    creatimgdiv2.appendChild(creatcomp2);
    list.appendChild(creatimgdiv)
    creatimgdiv.appendChild(creatcomp)
    list.appendChild(creatremo)
    
}
})
