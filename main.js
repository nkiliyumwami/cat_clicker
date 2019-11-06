//select the number of clicks
const cat1Click = document.querySelector("#cat1Click");
const cat2Click = document.querySelector("#cat2Click");
//init number of clicks

cat1Click.textContent = 0;
cat2Click.textContent = 0;

//Listen to the clicks on cat image

const cat1 = document.querySelector("#cat1");
const cat2 = document.querySelector("#cat2");

cat1.addEventListener("click", () => {
  cat1Click.textContent++;
});
cat2.addEventListener("click", () => {
  cat2Click.textContent++;
});
