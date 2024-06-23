
document.querySelector(".bar").addEventListener('click', () => {
    const menu = document.querySelector(".menu ul");
    console.log(menu);
      menu.classList.toggle("hidden");
  })