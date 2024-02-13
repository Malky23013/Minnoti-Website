const categories = [
    {
        name: "sales",
        id: 1
    },
    {
        name: "leather sofas",
        id: 3
    },
    {
        name: "comfort fashion",
        id: 2
    }
];

const products = [
    //1

    {
        name: "VIOLA",
        src: "pictures/cat1/n_00.jpg",
        cat: 1,
        grid_area: "h1",
        price: 4200
    },
    {
        name: "KATARIS",
        src: "pictures/cat1/n_08.jpg",
        cat: 1,
        grid_area: "h2",
        price: 3000
    },
    {
        name: "YUVAL",
        src: "pictures/cat1/n_10.jpg",
        cat: 1,
        grid_area: "h3",
        price: 2500
    },
    {
        name: "SAPIR",
        src: "pictures/cat1/n_23.jpg",
        cat: 1,
        grid_area: "h4",
        price: 1230
    },
    {
        name: "ELA",
        src: "pictures/cat1/n_pregallery_03 (1).jpg",
        cat: 1,
        grid_area: "h5",
        price: 2300
    },
    {
        name: "KANVAS",
        src: "pictures/cat1/n_pregallery_03.jpg",
        cat: 1,
        grid_area: "h6",
        price: 1200
    },
    {
        name: "LIOR",
        src: "pictures/cat1/n_pregallery_04.jpg",
        cat: 1,
        grid_area: "h7",
        price: 7800
    },
    {
        name: "LILACH",
        src: "pictures/cat1/n_salone_2018_pregallery_04.jpg",
        cat: 1,
        grid_area: "h8",
        price: 1000
    },
    {
        name: "GOLDEN",
        src: "pictures/cat1/ooo.png",
        cat: 1,
        grid_area: "h9",
        price: 3200
    },
    {
        name: "DIAMOND",
        src: "pictures/cat1/mmm.png",
        cat: 1,
        grid_area: "h10",
        price: 4200
    },
    //2
    {


        name: "ALMA",
        src: " pictures/cat2/qqq.png",
        cat: 2,
        grid_area: "h1",
        price: 1520
    },

    {
        name: "VERA",
        src: " pictures/cat2/ttt.png",
        cat: 2,
        grid_area: "h2",
        price: 5200
    },

    {
        name: "KAYA",
        src: "pictures/cat2/ccc.png",
        cat: 2,
        grid_area: "h3",
        price: 1230
    },

    {
        name: "VIOLIA",
        src: "pictures/cat2/fff.png",
        cat: 2,
        grid_area: "h4",
        price: 1530
    },

    {
        name: "BAMBI",
        src: "pictures/cat2/mim.png",
        cat: 2,
        grid_area: "h5",
        price: 3400
    },

    {
        name: "SQAR",
        src: " pictures/cat2/ppp.png",
        cat: 2,
        grid_area: "h6",
        price: 2500
    },

    {
        name: "KANVAS",
        src: "pictures/cat2/u.jpg",
        cat: 2,
        grid_area: "h7",
        price: 2100
    },

    {
        name: "ERMANA",
        src: "pictures/cat2/rrr.png",
        cat: 2,
        grid_area: "h8",
        price: 1800
    },
    {
        name: "JANA",
        src: "pictures/cat2/n_19.jpg",
        cat: 2,
        grid_area: "h9",
        price: 4700
    },
    {
        name: "FINA",
        src: "pictures/cat2/n_18.jpg ",
        cat: 2,
        grid_area: "h10",
        price: 6520
    },
    //3

    {
        name: "CATARIS",
        src: "pictures/cat3/n_minotti_2020collection_post.jpg",
        cat: 3,
        grid_area: "h1",
        price: 3020
    },

    {
        name: "FEMINA",
        src: "pictures/cat3/n_25.jpg",
        cat: 3,
        grid_area: "h2",
        price: 3100

    },

    {
        name: "LARA",
        src: "pictures/cat3/eee.png",
        cat: 3,
        grid_area: "h3",
        price: 2360
    },

    {
        name: "NIKOL",
        src: "pictures/cat3/hhh.png",
        cat: 3,
        grid_area: "h4",
        price: 7400
    },

    {
        name: "VERED",
        src: "pictures/cat3/jjj.png",
        cat: 3,
        grid_area: "h5",
        price: 3050
    },

    {
        name: "QUEEN",
        src: "pictures/cat3/kkk.png",
        cat: 3,
        grid_area: "h6",
        price: 4800
    },



    {
        name: "ERMANA",
        src: "pictures/cat3/lol.png",
        cat: 3,
        grid_area: "h7",
        price: 2600
    },
    {
        name: "JAK",
        src: "pictures/cat3/uju.png",
        cat: 3,
        grid_area: "h8",
        price: 8520
    },
    {
        name: "FAYA",
        src: "pictures/cat3/uyu.png",
        cat: 3,
        grid_area: "h9",
        price: 3400
    },
    {
        name: "PITED",
        src: "pictures/cat3/vvv.png",
        cat: 3,
        grid_area: "h10",
        price: 6520
    },

];
window.onload = function () {

    switch (document.querySelector("body").id) {
        case "gallery":
            gallery_main();
            break;

        case "login":
            log_in();
            break;
    }

}
//subscribe in the footer

document.getElementById('s').addEventListener('click', function (event) {
    event.preventDefault();
    const email1 = document.getElementById('usr').value;
    if(email1)
     alert('thank you for subscribing');
else {
    alert('you should enter an email');
}
});

//log_in page

const users = [];
//submit
const submit_btn=document.getElementById('submitBtn');
if(submit_btn)
{submit_btn.onclick= function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const user = { username, password, email };

    const existingUser = users.find(u => u.username === username && u.email === email);
    if (existingUser) {
        alert('Existing user');
    } else {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Successfully added user');
        // Proceed with other logic or operations for new users
    }
};
}

//delete user



const deleteBtn = document.getElementById('deleteBtn');
if(deleteBtn)
{deleteBtn.addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const index = users.findIndex(u => u.username === username);

  if (index !== -1) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User deleted successfully');
    // Additional logic or operations after deletion
  }
});
}

function log_in() {

//the input change color
const backColor = document.querySelector('#username');
if (backColor) {
  backColor.addEventListener('input', function() {
    if (backColor.value.trim() !== '') {
      backColor.style.backgroundColor = 'gray';
    } else {
      backColor.style.backgroundColor = '';
    }
  });
}

    //event2
    //onmousemove
    const usernameInput = document.getElementById("username");
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Enter your username";

    usernameInput.parentNode.appendChild(tooltip);

    usernameInput.addEventListener("mouseover", function () {
        tooltip.style.opacity = 1;
    });

    usernameInput.addEventListener("mouseout", function () {
        tooltip.style.opacity = 0;
    });

}

function printPage() {
    window.print();
}

 //טיימר
 function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const date = new Date();
    countdownElement.textContent = date.toString();

    const countdownInterval = setInterval(function () {
        date.setSeconds(date.getSeconds() - 1);
        countdownElement.textContent = date.toString();

        if (date.getTime() <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Sale Ended';
        }
    }, 1000);
 }
function gallery_main() {
    // Call the updateCountdown function once to start the countdown immediately
    updateCountdown();
    //the pictures from the products array:
    const data_from_url = location.search;
    const params_obj = new URLSearchParams(data_from_url); // המרת הפרמטרים לאובייקט נוח
    const f_number = params_obj.get("cat");

    const current_cat = categories.find(function (obj) {
        return obj.id == f_number;
    });


    //filter
    const current_sofas = products.filter(function (obj) {
        return obj.cat == f_number;
    });
    let str = "";
    for (item of current_sofas) {
        str += `<div class="ll" id="${item.grid_area}"><img class="oo" src="${item.src}"> <p class="bt">${item.name}</p></div>`;
    }
    document.querySelector(".k").innerHTML = str;


    //showing every picture!
//according to the category

    // Get the parent container element
    const container = document.querySelector('.k');
    // Get all the image elements within the container
    const productImages = container.querySelectorAll('img');

    // Add click event listener to each image
    productImages.forEach((image) => {
        image.addEventListener('click', () => {
            // Get the src of the clicked image
            const clickedSrc = image.getAttribute('src');

            // Find the product with the matching src
            const product = products.find((item) => item.src === clickedSrc);

            // Create a new image element
            const newImage = document.createElement('img');
            newImage.src = product.src;
            newImage.alt = product.name;

            // Set the initial size of the new image
            newImage.style.width = '50vw';
            newImage.style.height = 'auto';

            // Create a new window
            const productWindow = window.open('', '_blank');

            // Clear the existing content in the new window
            productWindow.document.open();
            productWindow.document.write('<html><head><title>Sofa Details</title></head><body></body></html>');
            productWindow.document.close();

            // Create a new div element for the details
            const detailsDiv = document.createElement('div');
            detailsDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
      `;

            // Create a new button for adding to cart
            const addToCartButton = document.createElement('button');
            addToCartButton.innerText = 'Add to Cart';

            addToCartButton.addEventListener('click', () => {
                // Display a message indicating that the item has been added to the cart
                const cartMessage = document.createElement('h1');
                cartMessage.innerText = 'Item added to cart!';
                cartMessage.style.color = 'gray';
                productWindow.document.body.appendChild(cartMessage);
            });

            // Add the new image, details, and the button to the new window's body
            productWindow.document.body.appendChild(newImage);
            productWindow.document.body.appendChild(detailsDiv);
            productWindow.document.body.appendChild(addToCartButton);
        });
    });

}
//חלונית חיפוש

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


//if more than 4 minutes without moving!!!!!!!!!!!!1


// Set the idle time limit in milliseconds (4 minutes in this case)
const idleTimeLimit = 4 * 60 * 1000;

let idleTimer;

// Function to reset the idle timer
function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(showConfirmation, idleTimeLimit);
}

// Function to show the confirmation alert
function showConfirmation() {
    const confirmation = confirm("Are you still there?");

    if (confirmation) {
        // User wants to stay, reset the timer again
        resetIdleTimer();
    } else {
        // User wants to leave, perform necessary actions (e.g., redirect or close the window)
        // ...
        alert("You will be redirected to another page");
        window.location.href = "end.html";
    }
}

// Start the idle timer on page load
resetIdleTimer();

// Event listeners for mouse movement and key press
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keypress", resetIdleTimer);


//טיפול בתמונת הסליידר ע"י שימוש בטיול על העץ

const categories2 = ["Sales", "New_collection", "Leather_sofas"];
const images = {
  Leather_sofas: [
    { url: "pictures/cat2/ppp.png" },
    { url: "pictures/cat2/n_19.jpg" },
    { url: "pictures/cat2/qqq.png" }
  ],
  Sales: [
    { url: "pictures/cat3/lol.png" },
    { url: "pictures/cat3/uju.png" },
    { url: "pictures/cat2/qqq.png" }
  ],
  New_collection: [
    { url: "pictures/cat2/qqq.png" },
    { url: "pictures/cat3/lol" },
    { url: "pictures/cat1/ooo.png" }
  ]
};

let currentCategory = 0;
let currentImage = 0;
let timer;

const sliderImage = document.getElementById("sliderImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function showImage(categoryIndex, imageIndex) {
  const category = categories2[categoryIndex];
  const image = images[category][imageIndex];
  sliderImage.src = image.url;
}
if(prevButton)
{prevButton.addEventListener("click", () => {
    const currentCategoryElement = sliderImage.closest(".slider");
    if (currentCategoryElement) {
      const previousCategoryElement = currentCategoryElement.previousElementSibling || currentCategoryElement.parentElement.lastElementChild;
      const currentImages = currentCategoryElement.children;
      const previousImages = previousCategoryElement.children;
  
      currentImages[currentImage].classList.remove("active");
      for (let i = 0; i < currentImages.length; i++) {
        currentImages[i].classList.remove("active");
      }
      previousImages[currentImage].classList.add("active");
  
      currentImage--;
      if (currentImage < 0) {
        currentCategory--;
        if (currentCategory < 0) {
          currentCategory = categories2.length - 1;
        }
        currentImage = currentImages.length - 1;
      }
  
      showImage(currentCategory, currentImage);
 
      

    }
  });
}
