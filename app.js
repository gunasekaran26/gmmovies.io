const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber=movieLists[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow .addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/290);
        clickCounter +=1;
        if (itemNumber-(4+clickCounter) + (4 - ratio)>=0){
            movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-320}px)`;
        }
        else{
            movieLists[i].style.transform="translateX(0)"
            clickCounter=0;
        }
        
    });
    console.log(movieLists[i].querySelectorAll("img"))
});

const ball=document.querySelector(".toggle-ball");
const item=document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.logo");

ball.addEventListener("click",()=>{
    item.forEach(items=>{
        items.classList.toggle("active")
    })
    ball.classList.toggle("active");
})