
  const panels = document.querySelectorAll('.expand-pannel');

  panels.forEach((panel)=> {
    console.log(panel);
    panel.addEventListener('click',() => {
      removeActiveClass();
      panel.classList.add('active');
    })
  })


  let removeActiveClass  = () => {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    })
  }