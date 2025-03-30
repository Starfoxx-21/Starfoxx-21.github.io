// Cursor

const cursor = document.getElementById("custom-cursor");
const hoverElements = document.querySelectorAll("a, button, img, .custom-cursor");

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  });

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });
  
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
}

// Scrollbar

const scrollbar_buttons = document.querySelectorAll(".dot");

scrollbar_buttons.forEach((button) => {
  button.addEventListener("click", scrollbarButtonClickHandler);
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
  const firstPageHeight = document.getElementById("first-page").offsetHeight;
  const secondPageHeight = document.getElementById("second-page").offsetHeight;
  const thirdPageHeight = document.getElementById("third-page").offsetHeight;
  const fourthPageHeight = document.getElementById("fourth-page").offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition <= firstPageHeight - 1) {
    setActiveDot("page1");
  } else if (scrollPosition <= firstPageHeight + secondPageHeight - 1) {
    setActiveDot("page2");
  } else if (
    scrollPosition <=
    firstPageHeight + secondPageHeight + thirdPageHeight + -1
  ) {
    setActiveDot("page3");
  } else if (
    scrollPosition <=
    firstPageHeight + secondPageHeight + thirdPageHeight + fourthPageHeight - 1
  ) {
    setActiveDot("page4");
  } else {
    setActiveDot("page5");
  }
}

function setActiveDot(pageId) {
  const newActive = document.getElementById(pageId);

  const currentColorScrollbar = document.querySelectorAll(".dot");

  currentColorScrollbar.forEach((dot) => {
    if (newActive.id == "page2" || newActive.id == "page4") {
      dot.classList.remove("dot-white");
      dot.classList.add("dot-grey");
    } else {
      dot.classList.remove("dot-grey");
      dot.classList.add("dot-white");
    }
  });

  const currentActive = document.querySelector(".dot.active-page");

  if (currentActive) {
    currentActive.classList.remove("active-page");
  }

  if (newActive) {
    newActive.classList.add("active-page");
  }
}

// Q&A

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", showAnswer);
});

function showAnswer(answerID) {
  const answer = document.getElementById(answerID);

  if (answer.style.visibility === "hidden" || answer.style.visibility === "") {
    answer.style.visibility = "visible";

    setTimeout(function () {
      answer.style.opacity = 1;
      answer.style.transform = "translateY(0)";
    }, 10);
  } else {
    answer.style.opacity = 0;
    answer.style.transform = "translateY(20px)";

    setTimeout(function () {
      answer.style.visibility = "hidden";
    }, 500);
  }
}
