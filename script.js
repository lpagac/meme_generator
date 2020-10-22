window.onload = function() {
    let form = document.querySelector("form");
    
    //RETRIEVE SESSION STORAGE

    let savedMemes = JSON.parse(sessionStorage.getItem("memes")) || []
    for (let i = 0;i < savedMemes.length;i++) {
        
        let newMeme = document.createElement("div");
        let img = document.createElement("img");
        let top = document.createElement("h1");
        let bottom = document.createElement("h1");
        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        newMeme.classList.add("meme_div");
        removeButton.classList.add("remove_button");
        top.classList.add("meme_top");
        bottom.classList.add("meme_bottom");

        img.src = savedMemes[i].photo;
        img.alt = "image unable to load";
        img.style.maxHeight = "600px";
        img.style.maxWidth = "600px";
        top.innerText = savedMemes[i].topText;
        bottom.innerText = savedMemes[i].bottomText;
        
        newMeme.appendChild(removeButton);
        newMeme.appendChild(img);
        newMeme.appendChild(top);
        newMeme.appendChild(bottom);
        document.body.appendChild(newMeme);
    }

    //MEME CREATION FUNCTION ACTIVATED ON FORM SUBMIT
    
    form.onsubmit = function(e) {
        e.preventDefault();
        if (!document.querySelector("#photo").value) {
            alert("Please enter an image URL to generate a meme");
            return;
        }

        //CREATE A NEW MEME DIV WITH IMAGE AND TOP/BOTTOM TEXT
        
        let newMeme = document.createElement("div");
        let img = document.createElement("img");
        let top = document.createElement("h1");
        let bottom = document.createElement("h1");
        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        newMeme.classList.add("meme_div");
        removeButton.classList.add("remove_button");
        top.classList.add("meme_top");
        bottom.classList.add("meme_bottom");
        
        //COLLECT INPUT VALUES FROM FORM AND ADD IMG ATTRIBUTES
        
        img.src = document.querySelector("#photo").value;
        img.alt = "image unable to load";
        img.style.maxHeight = "600px";
        img.style.maxWidth = "600px";
        top.innerText = document.querySelector("#top_text").value;
        bottom.innerText = document.querySelector("#bottom_text").value;

        //APPEND MEME DIV TO THE DOM
        
        newMeme.appendChild(removeButton);
        newMeme.appendChild(img);
        newMeme.appendChild(top);
        newMeme.appendChild(bottom);
        document.body.appendChild(newMeme);


        //SAVE TO SESSION STORAGE
        
        savedMemes.push({photo: img.src, topText: top.innerText, bottomText: bottom.innerText});
        sessionStorage.setItem("memes", JSON.stringify(savedMemes));

        form.reset();
    }

    //DELETE BUTTON FUNCTION
    
    document.body.addEventListener("click", function(e){
        if (e.target.tagName.toLowerCase() === "button") {
            e.target.parentNode.remove(); 
        }
    })

}