window.addEventListener("DOMContentLoaded",showTime());
function showTime(){
    let date=new Date;
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM";
    if (h==0){
        h=12;
    }
    else if(h>12){
        h=h-12;
        session="PM";
    }
    //else if(h<10){
    //    h="0"+h;
    //}
    //else if(m<10){
    //    m="0"+m;
    //}
    //else if(s<10){
    //    s="0"+s;
    //}
    h=h<10 ? h="0"+h:h;
    m=m<10 ? m="0"+m:m;
    s=s<10 ? s="0"+s:s;
    const time=`${h}:${m}.<small>${s} | ${session}</small>`;
    document.getElementById("DisplayClock").innerHTML=time;
    setTimeout(showTime,1000);
    let bg;
    const UserName="Ankita";
    const user=document.getElementById("User");
    if (h<8 && session==="AM"){
        bg=`url(https://source.unsplash.com/G_a9JhmiZFk)`;
        user.innerHTML=`Good Morning ${UserName}`;
    }
    else if(h<12 && session==="AM"){
        bg=`url(https://source.unsplash.com/XGzW_tr_8YI)`;
        user.innerHTML=`Good Afternoon ${UserName}`;
    }
    else if(h<5 && session==="PM"){
        bg=`url(https://source.unsplash.com/XGzW_tr_8YI)`;
        user.innerHTML=`Good Afternoon ${UserName}`;
    }
    else if(h<8 && session==="PM"){
        bg=`url(https://unsplash.com/photos/ebZUZ1MiVnU)`;
        user.innerHTML=`Good Evening ${UserName}`;
    }
    else{
        bg=`url(https://source.unsplash.com/ln5drpv_ImI)`
        user.innerHTML=`Good Night ${UserName}`;
    }
    const body=document.querySelector("body");
    body.style.background=`${bg} center/cover`;
}
document.querySelector(".focus-container input").addEventListener("keypress",function(event){
    if (event.key==="Enter"){
        const focus=document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML=`<h6>TODAY:</h6><h1>${focus.value}</h1> `
    }
})
