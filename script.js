const btn1=document.getElementById("btn-1");
const btn2=document.getElementById("btn-2");
const img=document.getElementById("img");

const image0="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80";
const image1="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
const image2="https://images.unsplash.com/photo-1560253787-9c3babc1fab2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
const image3="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
const image4="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=986&q=80";

const imageHolder=[image0, image1, image2, image3, image4]

let counter = 0;

btn1.addEventListener("click", previousImage);
btn2.addEventListener("click", nextImage);

function nextImage(){
        if(0<=counter && counter<imageHolder.length-1){
        counter++;
        img.src=imageHolder[counter]
        // console.log(counter)
    }
    else if(counter<0){
        counter++;
        if(counter===0){
            img.src=imageHolder[counter]
        }
        else{ 
            img.src=imageHolder[counter+imageHolder.length]
            // console.log(counter)
        }
}
    else{
        counter = 0;
        img.src=imageHolder[counter]
    }
}
function previousImage() {
    if (-imageHolder.length+1<counter && counter<=0) {
        counter--;
        img.src=imageHolder[counter+imageHolder.length];
        // console.log(counter)
    }
    else if(counter>0){
            counter--;
            img.src=imageHolder[counter]
    }
    else {
        counter = 0;
        img.src=imageHolder[counter]
    }
}

