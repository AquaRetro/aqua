function cartItem(imgSrc, color, size, logoDesign, price, type) {
   this.imgSrc = imgSrc,
   this.color = color;
   this.size = size;
   this.logoDesign = logoDesign;
   this.price = price
   this.type = type
   this.quantity = 1
}
function appendCartItem(cartItem)
{
   const jsonObj = JSON.stringify(cartItem)
   if(!localStorage.getItem('cartItems'))
   {
      cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]")
      cartItems.push(cartItem)
      localStorage.setItem('cartItems', cartItems)
   }
}
function createCartItem(imgSrc, price, theType)
{
   const colorGetter = document.getElementById('color') 
   const color = colorGetter.options[colorGetter.selectedIndex].text 
   const sizeGetter = document.getElementById('size')
   const size = sizeGetter.options[sizeGetter.selectedIndex].text
   const logoDesignGetter = document.getElementById('logodesign') 
   const logoDesign = logoDesignGetter.options[logoDesignGetter.selectedIndex].text
   const myCartItem = new cartItem(imgSrc, color, size, logoDesign, price, theType);
   
   cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]")
   cartItems.push(myCartItem)
   const json = JSON.stringify(cartItems)
   localStorage.setItem('cartItems', json)
}
function createJoggerCartItem(imgSrc, price, theType)
{
   const sizeGetter = document.getElementById('size')
   const size = sizeGetter.options[sizeGetter.selectedIndex].text
   const myCartItem = new cartItem(imgSrc, "Black", size, "FullColorPrint", price, theType);
   
   cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]")
   cartItems.push(myCartItem)
   const json = JSON.stringify(cartItems)
   localStorage.setItem('cartItems', json)
}
function createSnapbackCartItem(imgSrc, price, theType)
{
   const colorGetter = document.getElementById('color')
   const color = colorGetter.options[colorGetter.selectedIndex.text]
   if(color === 'purple')
   {
      const myCartItem = new cartItem(imgSrc, color, "Fit", "Purple", price, theType);
      cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]")
      cartItems.push(myCartItem)
      const json = JSON.stringify(cartItems)
      localStorage.setItem('cartItems', json)

   }
   else{
      const myCartItem = new cartItem(imgSrc, color, "Fit", "FullColorPrint", price, theType);
      cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]")
      cartItems.push(myCartItem)
      const json = JSON.stringify(cartItems)
      localStorage.setItem('cartItems', json)
   }
}
function createBuckethatCartItem(imgSrc, price, theType)
{
   const myCartItem = new cartItem(imgSrc, "Pink", "Fit", "Pink", price, theType);
   
   cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]")
   cartItems.push(myCartItem)
   const json = JSON.stringify(cartItems)
   localStorage.setItem('cartItems', json)
}
