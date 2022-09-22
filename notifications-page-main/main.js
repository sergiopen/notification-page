let notificationSection = document.querySelectorAll(".section__notification");

let totalNotifications = 0;

for(let i = 0; i < notificationSection.length; i++){
    notificationSection[i].addEventListener("click", ()=>{
        notificationSection[i].classList.toggle("active");
        totalNotifications = 0;
        for(let i = 0; i < notificationSection.length; i++){
            if(notificationSection[i].classList.contains("active")) totalNotifications++;
        }
        document.querySelector(".notification__count").textContent = totalNotifications;
    });
}

document.querySelector(".notification__reset").addEventListener("click", () =>{
    for(let i = 0; i < notificationSection.length; i++){
        notificationSection[i].classList.remove("active");
        totalNotifications = 0;
        document.querySelector(".notification__count").textContent = totalNotifications;
    }
});