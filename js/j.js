let maincolors = localStorage.getItem("color-option");

if (maincolors !== null){

    document.documentElement.style.setProperty("--main--color" , localStorage.getItem("color-option"));

    document.querySelectorAll(".color-list li").forEach(element =>{

        element.classList.remove("active");

    if (element.dataset.color === maincolors){

        element.classList.add("active");
    }
    })
}

let backgroundoption = true;

let backinterval;

let backgroundLocalItem = localStorage.getItem("background_option");

if (backgroundLocalItem !== null){

    if (backgroundLocalItem === 'true'){

        backgroundoption = true ;

    }else{

        backgroundoption = false ;
    }

    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active");
    })

    if (backgroundLocalItem === 'true'){

        document.querySelector(".random-background .yes").classList.add("active");

    }else{

        document.querySelector(".random-background .no").classList.add("active");
    }
}

document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
};

const colorli = document.querySelectorAll(".colors-list li");

colorli.forEach(li => {
    li.addEventListener("click" , (e) => {
        document.documentElement.style.setProperty("--main--color" , e.target.dataset.color);

        localStorage.setItem("color-option", e.target.dataset.color);

        handlActive(e);
    });
});

const randombackgrounds = document.querySelectorAll(".random-background span");

randombackgrounds.forEach(span => {
    span.addEventListener("click" , (e) => {

        handlActive(e);

        if (e.target.dataset.background === 'yes'){

            backgroundoption = true;

            randomimages();

            localStorage.setItem("background_option" , true);

        }else{

            backgroundoption = false;

            clearInterval(backinterval);

            localStorage.setItem("background_option" , false);
        }
    })
})


let landingpage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg" , "03.jpg" , "04.jpg"  , "06.jpg" , "08.jpg" , "09.png" , "10.jpg"];


function randomimages(){

    if (backgroundoption === true){

        backinterval = setInterval(() => {

            let randomnumber = Math.floor(Math.random() * imgsArray.length);
            
            landingpage.style.backgroundImage = 'url("images/'+ imgsArray[randomnumber] +'")';
            
            },4000);
    }
}

randomimages();

let ourSkills = document.querySelector(".skills .container");

window.onscroll = function (){

    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach( skill => {

            skill.style.width = skill.dataset.progress;
        });
    };
};

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach( img =>{

    img.addEventListener('click' , (e) =>{

        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null){

            let imgHeading = document.createElement("h2");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);

        };

        let popupImage = document.createElement("img");

        popupImage.src = img.src ;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

       let closeButton = document.createElement("span");
       
       let closeButtonText = document.createTextNode("X");

       closeButton.appendChild(closeButtonText);

       closeButton.className = "close-button";

       popupBox.appendChild(closeButton);
    });
});

document.addEventListener('click' , function (e){

    if (e.target.className == 'close-button'){

        e.target.parentElement.remove();

        document.querySelector(".popup-overlay").remove();
    }

});

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

const allLinks = document.querySelectorAll(".links a");

function scrollToSomeWhere(elements){

   elements.forEach(ele => {
    
        ele.addEventListener('click',(e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
            });
        });
    });
};

scrollToSomeWhere(allLinks);
scrollToSomeWhere(allBullets);


function handlActive(ev){

    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{

        element.classList.remove("active");
    })

    ev.target.classList.add("active");
};

let bulletspan = document.querySelectorAll(".bullets-option span");

let bulletscontainer = document.querySelector(".nav-bullets");

let bulletlocalitem = localStorage.getItem("bullets-option");

if (bulletlocalitem !== null){

    bulletspan.forEach(span =>{

        span.classList.remove("active");
    });

    if (bulletlocalitem === 'block'){

        bulletscontainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{

        bulletscontainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletspan.forEach(span => {

    span.addEventListener('click',(e) => {

        if (span.dataset.display === 'show'){

            bulletscontainer.style.display = 'block';

            localStorage.setItem("bullets-option" , "block");

        }else{

            bulletscontainer.style.display = 'none';

            localStorage.setItem("bullets-option" , "none");
        }

        handlActive(e);
    });
});

document.querySelector(".reset-options").onclick = function (){

    //localStorage.removeItem(".color-option");

    //localStorage.removeItem(".background-option");

    //localStorage.removeItem(".bullets-option");

    localStorage.clear();

    window.location.reload();
};

let togglebtn = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".links");

togglebtn.onclick = function (e){

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tlinks.classList.toggle("open");
}

document.addEventListener('click' , (e)=> {

    if (e.target !== togglebtn && e.target !== tlinks){

        if (tlinks.classList.contains("open")){

            togglebtn.classList.toggle("menu-active");

            tlinks.classList.toggle("open"); 
        }

    }
});

tlinks.onclick = function (e){

    e.stopPropagation();
}