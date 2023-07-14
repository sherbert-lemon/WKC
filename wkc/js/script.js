      var main = document.querySelector("div.content-wrapper");
      var scrolly = main.querySelector("section#scrolly");
      var sticky = scrolly.querySelector("div.sticky-thing");
      var article = scrolly.querySelector("article");
      var steps = article.querySelectorAll(".step");
      const imgTag = sticky.querySelector('img')

      // initialize the scrollama
      var scroller = scrollama();

      // scrollama event handlers
      function handleStepEnter(response) {
        // response = { element, direction, index }
        var el = response.element;

        // remove is-active from all steps
        // then add is-active to this step
        steps.forEach(step => step.classList.remove('is-active'));
        el.classList.add('is-active');

        // update graphic based on step
        // sticky.querySelector("p").innerText = el.dataset.step
        imgTag.src="../assets/img/BIS-bracket-win-h.png"
      }

      function init() {
        // 2. setup the scroller passing options
        // 		this will also initialize trigger observations
        // 3. bind scrollama event handlers (this can be chained like below)
        console.log('initialized!!!!')
        scroller
          .setup({
            step: "#scrolly article .step",
            // offset: 0.33,
            debug: false 
          })
          .onStepEnter(handleStepEnter);

        // setup resize event
        window.addEventListener("resize", scroller.resize);
      }

      // kick things off
      init();




