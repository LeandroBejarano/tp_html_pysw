const form = document.getElementById("contactForm");
const spinner = document.getElementById("spinner");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    spinner.style.display = "block";

    setTimeout(()=>{
        spinner.style.display = "none";
        modal.style.display = "flex";
        form.reset();
    },2000);
});

closeModal.addEventListener("click",()=>{
    modal.style.display = "none";
});