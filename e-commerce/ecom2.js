const products_show = document.querySelector('.products_show');
const cart = document.querySelector('.cart');
const sidebar = document.querySelector('.sidebar');
const quantity = document.querySelector('.quantity');
const total = document.querySelector('.total');
console.log(products_show);
let arr = '';
fetch('https://fakestoreapi.com/products').then((data) => data.json()).then((mydata) => {

    // console.log(mydata)
    arr = mydata;
    mydata.forEach((element, index) => {

        console.log(element)

        const div = document.createElement('div')
        div.innerHTML = `<img src='${element.image}'/>
               <h6>${element.price}</h6>
               <button onClick={addtocart(${index})}>addtocart</button>
`
        div.classList.add('item')
        products_show.appendChild(div)

    });
})


cart.addEventListener('click', () => {
    sidebar.classList.toggle('side')
})

function addtocart(index) {

    console.log(arr[index]);

    const div = document.createElement('div')

    div.innerHTML = `<img src='${arr[index].image}'/>
    
    <h6>${arr[index].price}</h6>
    
    `

    sidebar.appendChild(div)

    updatecart(index)

}
let count = 0;
function updatecart(index) {

    // console.log('updatecart')

    quantity.innerHTML = count + 1;
    count++;

    totalprice(index)
}
let totalcost = 0;
function totalprice(index) {
    totalcost = totalcost + arr[index].price

    total.innerHTML = `total cost: ${totalcost}`;
}