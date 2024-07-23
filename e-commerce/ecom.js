const product=document.querySelector('.products');
const cart_icon=document.querySelector('.cart_icon');
const cart_item=document.querySelector('.cart_item');

fetch('https://fakestoreapi.com/products').then((res)=>res.json())
.then((res)=>{
    res.map((item)=>{

        const div=document.createElement('div')
        div.classList.add('sub-div');
        div.innerHTML=`<img src='${item.image}'/>
        <h1>${item.price}</h1>
        <button onclick='addtocart(${item.id})'> add to cart </button>`
        product.appendChild(div) 
    })
});
cart_icon.addEventListener('click' ,function(){
    cart_item.classList.toggle('cartshow')
})

function addtocart(){
    console.log('hii')
}





// let arr='';
// const div=document.createElement('div');
// div.innerHTML='hello';
// product.appendChild(div);





// fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((res)=>{

//    arr= res.map((item,index)=>{
        // const x=`<img src='${item.image}'/>`
        // product.innerHTML +=x;
        // product.innerHTML=product.innerHTML+x;

//         const div=document.createElement('div');
//         div.classList.add('sub-div');
//         div.innerHTML=`<img src='${item.image}'>`;
// <>
//      <h1>${item.priice}</h1>
//      <button onclick='addtocart(${index})'>Add to cart</button>
//      </>
//         product.appendChild()
//     })
//     // const x=`<img src='${res[0].image}'/>`
//     // product.innerHTML=x;
// })


//------------------------------------

// cart_icon.addEventListener('click',function(){

//     card_item.computedStyleMap.display='block';
//     card_item.classList.toggle('cartshow');
// })



// function addtocart(index){
// // console.log(arr[index]);

// arr.forEach((cartproduct)=>{
//     const div=document.createElement
//     card_item.innerHTML+=`<img src='${arr[index].image}'>`
// })
// }
