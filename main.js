
function hidePreviousButton()
{
   const previousButton = document.querySelector("#previous-slide");
   previousButton.style.display = "none";
}


function moveNextSlide(e)
{
     const currentSlide = document.querySelector(".slide-selected");
     const nextSlide = currentSlide.nextElementSibling;
     const amountToMove = nextSlide.style.left;

     track.style.transform = 'translateX(-' + amountToMove + ')'
     currentSlide.classList.remove("slide-selected");
     nextSlide.classList.add("slide-selected");

     updateDots("move forward");

     const finalSlide = !nextSlide.nextElementSibling; // to check if the next slide is the last one so that the next slide button gets hidden

      if(finalSlide)
      {
         nextSlideButton.style.display = "none";
      }
      
      previousSlideButton.style.display = "block";
     
}

function updateDots(action)
{
    if(action==="move forward")
    {
    const currentDot = document.querySelector(".is-selected");
    const nextDot = currentDot.nextElementSibling;

    currentDot.classList.remove("is-selected");
    nextDot.classList.add("is-selected");
    return;
    }

    if(action==="move back")
    {
        const currentDot = document.querySelector(".is-selected");
        const nextDot = currentDot.previousElementSibling;
        currentDot.classList.remove("is-selected");
        nextDot.classList.add("is-selected");
        return;
    }
}

function movePreviousSlide(e)
{
    const currentSlide= document.querySelector(".slide-selected");
    const previousSlide = currentSlide.previousElementSibling;
    const amountToMove = previousSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')'

    currentSlide.classList.remove("slide-selected");
    previousSlide.classList.add("slide-selected");

    updateDots("move back");

    const finalSlide = !previousSlide.previousElementSibling; // to check if the previous slide is the last one so that the previous slide button gets hidden
      
    if(finalSlide)
    {
       previousSlideButton.style.display = "none";
    }
     nextSlideButton.style.display = "block";

}

function targetDot(e)
{
    const currentSlide = document.querySelector(".slide-selected");
    
    

    if(e.target.dataset.dot==="first-dot") // if the user click the first dot button
    {
      const nextSlide = document.querySelector("#first-slide");
      const amountToMove = nextSlide.style.left;
      track.style.transform = 'translateX(-' + amountToMove + ')';

      currentSlide.classList.remove("slide-selected");
      nextSlide.classList.add("slide-selected");

      // updating the dots

       const currentDot = document.querySelector(".is-selected");
       currentDot.classList.remove("is-selected");
       e.target.classList.add("is-selected");
  
       // updating the arrows
        
        const leftArrow = document.querySelector("#previous-slide");
       const rightArrow = document.querySelector("#next-slide");
        
        leftArrow.style.display = "none";
        rightArrow.style.display = "block";

      return;
    }

    if(e.target.dataset.dot==="second-dot") // if the user click the second dot button
    {
       const nextSlide = document.querySelector("#second-slide");
      const amountToMove = nextSlide.style.left;
      track.style.transform = 'translateX(-' + amountToMove + ')';

      currentSlide.classList.remove("slide-selected");
      nextSlide.classList.add("slide-selected");

      // updating the dots

       const currentDot = document.querySelector(".is-selected");
       currentDot.classList.remove("is-selected");
       e.target.classList.add("is-selected");

       const leftArrow = document.querySelector("#previous-slide");
       const rightArrow = document.querySelector("#next-slide");

        leftArrow.style.display = "block";
        rightArrow.style.display = "block";
       return;
    }

    if(e.target.dataset.dot==="third-dot") // if the user click the third dot button
    {
       const nextSlide = document.querySelector("#third-slide");
      const amountToMove = nextSlide.style.left;
      track.style.transform = 'translateX(-' + amountToMove + ')';

      currentSlide.classList.remove("slide-selected");
      nextSlide.classList.add("slide-selected");

      // updating the dots

       const currentDot = document.querySelector(".is-selected");
       currentDot.classList.remove("is-selected");
       e.target.classList.add("is-selected");
   
       const leftArrow = document.querySelector("#previous-slide");
       const rightArrow = document.querySelector("#next-slide");

        leftArrow.style.display = "block";
        rightArrow.style.display = "none";

       return;
    }
}