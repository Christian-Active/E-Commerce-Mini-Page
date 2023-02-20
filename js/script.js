let menu = document.getElementById("menu-btn")
let cancels = document.querySelectorAll(".close")
let menuOuter = document.getElementById("menu-outer")
let totalPage = document.querySelector(".total-page")
let body = document.querySelector('body')
// menu bar
menu.addEventListener("click", () => {
    menuOuter.style.display = "flex"
    totalPage.classList.replace("total-page", "total-page-closed")
})
cancels.forEach(cancel => {
    cancel.addEventListener("click", () => {
        let cancelParent = cancel.parentElement
        cancelParent.style.display = "none"
        totalPage.classList.replace("total-page-closed", "total-page")
    })
})

// carousel
let littleImages = document.querySelectorAll(".container1")
let container2 = document.querySelectorAll(".container2")
let previous = document.querySelectorAll(".previous")
let next = document.querySelectorAll(".next")
let current = -1
previous.forEach(pre => {
    pre.addEventListener("click", () => {
        console.log(images.length)
        plusSlides(-1, pre)
    })
})
next.forEach(nex => {
    nex.addEventListener("click", () => {
        console.log(images.length)
        plusSlides(1, nex)
    })
})

function plusSlides(input, id){
    current += input
    if(current > 3){
        current = 0
    }
    if(current < 0){
        current = 3
    }
    let slideParent = id.parentElement
    let arrowParent = slideParent.parentElement
    let images = arrowParent.querySelectorAll(".carousel-item")
    // let littleImages = arrowParent.querySelectorAll(".container-item")
    images.forEach(image => {
        image.style.display = "none"
    })
    images[current].style.display = "block"
    container2.forEach(little => {
        little.classList.remove("container-clicked")
    })
    container2[current].classList.add("container-clicked")
    console.log(littleImages.length)
}

for(let i = 0; i < littleImages.length; i++){
    littleImages[i].addEventListener("click", () => {
        current = i
        clickSlides(littleImages[i], littleImages)
    })
    container2[i].addEventListener("click", () => {
        current = i
        clickSlides(container2[i], container2)
    })
}
function clickSlides(examine, exact){
        let container = examine.parentElement
        let littleParent = container.parentElement
        let images = littleParent.querySelectorAll(".carousel-item")
        images.forEach(image => {
            image.style.display = "none"
        })
        images[current].style.display = "block"
        exact.forEach(little => {
            little.classList.remove("container-clicked")
        })
        examine.classList.add("container-clicked")
}

// quantity area
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let finalQuantity = document.getElementById("final-quantity")
let quantity = Number(finalQuantity.innerText)
minus.addEventListener("click", () => {
    plusQuantity(-1)
})
plus.addEventListener("click", () => {
    plusQuantity(1)
})
function plusQuantity(input){
    quantity += input
    if(quantity < 0){
        finalQuantity.innerText = 0
    }else{
        finalQuantity.innerText = quantity
    }
}

// add to cart arena
let add = document.querySelector(".add")
let itemAmount = document.querySelector(".item-amount")
let innerCart = document.querySelector(".inner-cart")
let innerInfo = document.querySelector(".inner-cart-info")
let cartDetails = document.querySelector(".cart-details")
let itemName = document.querySelector(".item-name")
let checkOut = document.querySelector(".checkout")
let displayPrice = document.querySelector(".display-price")
add.addEventListener("click", () => {
        if(quantity == 0){
            innerInfo.innerText = "You have not added any items to your cart."
            checkOut.style.display = "none"
        }else{
            innerInfo.innerText = ""
            itemAmount.innerText = quantity
            innerCart.style.display = "none"
            let newElem = document.createElement("div")
            newElem.classList.add('cart-details')
            newElem.innerHTML = `<div><img src="./images/image-product-1-thumbnail.jpg" alt=""></div>
            <div class="cart-details-info">
              <div class="cart-details-name">Fall Limited Edition Sneakers</div>
              <div class="cart-details-price">$<span class="item-price"></span>.00 <span>&#128473</span> <span class="item-quantity"></span> <span class="final">$<span class="final-price"></span>.00</span></div>
            </div>
            <div class="delete"><img src="./images/icon-delete.svg" alt=""></div>`
            let cartPrice = newElem.querySelector(".item-price")
            let finalQuantity = newElem.querySelector(".item-quantity")
            let finalPrice = newElem.querySelector(".final-price")
            cartPrice.innerText = Number(displayPrice.innerText)
            finalQuantity.innerText = quantity
            finalPrice.innerText = Number(displayPrice.innerText) * quantity
            innerInfo.appendChild(newElem)
            let deleteBtn = newElem.querySelector(".delete")
            deleteBtn.addEventListener("click", () => {
                let deleteParent = deleteBtn.parentElement
                deleteParent.style.display = "none"
                innerInfo.innerText = "You have not added any items to your cart."
                checkOut.style.display = "none"
                itemAmount.innerText = ""
            })
        }
})

// cart click
let cart = document.querySelector(".cart")

cart.addEventListener("click", () => {
    innerCart.style.display = "block"
    if(quantity == 0){
        innerInfo.innerText = "You have not added any items to your cart."
        checkOut.style.display = "none"
    }else{
        checkOut.style.display = "block"
    }
})


let popup = document.querySelector(".display-popup")
let displayClose = document.querySelector(".popup-close")
let normalDisplay = document.querySelector(".normal-display")
let images = normalDisplay.querySelectorAll(".carousel-item")
let arrows = popup.querySelectorAll(".arrow")
for(let i =0; i < images.length; i++){
    images[i].addEventListener("click", () => {
        popup.style.display = "block"
        totalPage.classList.replace("total-page", "total-page-closed")
        displayClose.style.display = "flex"
        arrows.forEach(arrow => {
            arrow.style.display = "flex"
        })
    })
}

