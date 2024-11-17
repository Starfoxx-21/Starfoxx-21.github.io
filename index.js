const scrollbar_buttons = document.querySelectorAll(".dot");

scrollbar_buttons.forEach(button => {button.addEventListener("click", scrollbarButtonClickHandler);
});

function scrollbarButtonClickHandler(event) {
    const currentActive = document.querySelector(".dot.active-page");

    if (currentActive) {
        currentActive.classList.remove("active-page");
    }

    event.target.classList.add("active-page");
}

window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition <= 910) {
        setActiveDot("page1");
    } else if (scrollPosition <= 1830) {
        setActiveDot("page2");
    } else if (scrollPosition <= 2750) {
        setActiveDot("page3");
    } else if (scrollPosition <= 3670) {
        setActiveDot("page4");
    } else {
        setActiveDot("page5");
    }
}

function setActiveDot(pageId) {
    const newActive = document.getElementById(pageId);

    const currentColorScrollbar = document.querySelectorAll(".dot");

    currentColorScrollbar.forEach(dot => {
        if (newActive.id == "page2" || newActive.id == "page4") { 
            dot.classList.remove("dot-white");
            dot.classList.add("dot-grey");
        }
        else {
            dot.classList.remove("dot-grey");
            dot.classList.add("dot-white");
        }
    })

    const currentActive = document.querySelector(".dot.active-page");

    if (currentActive) {
        currentActive.classList.remove("active-page");
    }

    if (newActive) {
        newActive.classList.add("active-page");
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
    button.addEventListener('click', showAnswer);
})

function showAnswer(answerID) {
    const answer = document.getElementById(answerID);

    if (answer.style.visibility === "hidden" || answer.style.visibility === "") {
        answer.style.visibility = "visible";

        setTimeout(function() {
            answer.style.opacity = 1;
            answer.style.transform = "translateY(0)";
        }, 10); 
    } else {
        answer.style.opacity = 0;
        answer.style.transform = "translateY(20px)";
        
        setTimeout(function() {
            answer.style.visibility = "hidden";
        }, 500); 
    }
}