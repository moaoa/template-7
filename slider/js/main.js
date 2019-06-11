const sliderContainer = document.querySelector("#carousel-slider")
  ? () => {
      const clone = el => el.cloneNode(true);
      const dublicateImages = () => {
        const container = document.querySelector(".carousel-container");
        const slides = document.querySelectorAll(
          ".carousel-container .carousel-slide"
        );
        if (container && slider) {
          const firstSlideClone = clone(slides[0]);
          firstSlideClone.id = "firstClone";

          const lastSlideClone = clone(slides[slides.length - 1]);
          lastSlideClone.id = "lastClone";

          container.appendChild(firstSlideClone);
          container.prepend(lastSlideClone);
        }
      };
      dublicateImages();

      const carouselContainer = document.querySelector(".carousel-container");
      let carouselSlides = document.querySelectorAll(".carousel-slide");
      const prevBtn = document.querySelector("#prev");
      const nextBtn = document.querySelector("#next");
      const poples = document.querySelectorAll(".popels-container span");

      // counter
      let counter = 1;
      let size = carouselSlides[0] ? carouselSlides[0].clientWidth : null;

      //transform function
      const doTransform = () => {
        carouselContainer.style.transform =
          "translateX(" + -1 * size * counter + "px)";
      };

      // remove transition function
      const transitionNone = () =>
        (carouselContainer.style.transition = "none");

      doTransform();

      // btn listeners
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          if (counter >= carouselSlides.length - 1) return;
          carouselContainer.style.transition = "transform 0.4s ease-in-out";
          counter++;
          doTransform();
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          if (counter <= 0) return;
          carouselContainer.style.transition = "transform 0.4s ease-in-out";
          counter--;
          doTransform();
        });
      }

      carouselContainer.addEventListener("transitionend", () => {
        console.log("id : ", carouselSlides[counter]);
        if (carouselSlides[counter].id === "lastClone") {
          console.log("excuted");
          transitionNone();
          counter = carouselSlides.length - 2;
          doTransform();
        } else if (carouselSlides[counter].id === "firstClone") {
          counter = 1;
          transitionNone();
          doTransform();
        }
      });
      // to get the changes in the images
      window.onresize = () => {
        carouselSlides = document.querySelectorAll(".carousel-slide");
        size = carouselSlides[0].clientWidth;
      };

      // listener for the popels :
      document
        .querySelector(".popels-container")
        .addEventListener("click", function(e) {
          console.log("click");
          counter = e.target.dataset.counter;
          carouselContainer.style.transition = "transform 0.4s ease-in-out";
          doTransform();
        });
    }
  : null;
