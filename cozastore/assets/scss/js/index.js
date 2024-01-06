// const div = document.getElementById('apidiv')
// const btn = document.getElementById('btn')
// let page=1
// let limit=3

// async function getproducts() {
//     let skip = (page = 1)*limit;
//     try{
//    const response = await axios.get(`https://655c30a1ab37729791aa03c7.mockapi.io/fi/products?page=${page}&limit=${limit}&skip=${skip}`)
//    const data = response.data;
//    db=response.data
//    data.forEach(item=>{
// const box = document.createElement('div')
// box.className = 'boxDiv'
// box.innerHTML = `
// <img style="width:300px " src='${item.image}' alt="">
// <p class='title'>${item.name}</p>
{/* <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button> */}
// `
// div.appendChild(box)
// })
// page++;
// }
//     catch(error){
//         console.error('Error fetching products:',error)
//     }
// }

const div = document.getElementById('productsList')
const btn = document.getElementById('pagi')

let page = 1
let limit = 3

async function getProducts() {
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}`);
        const data = response.data;
        db = data

        data.forEach(item => {
            const box = document.createElement('div');
            box.className = 'boxDiv';
            box.innerHTML = `            
                <img class="apiimage" src="${item.image}" alt="">                    
                <p class='title'>${item.name}</p>
                <p class='title'>${item.title}</p>
                <p class='title'>${item.price}</p>

                <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>

                `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btn.addEventListener('click', getProducts)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addToBasket (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
window.onload = () => {
    getProducts()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const nameinp = document.getElementById("nameinp");
const surnameinp = document.getElementById("surnameinp")
const ageinp = document.getElementById("ageinp")
const studentID = document.getElementById("idinp")
const myform = document.getElementById("formm")

function axiosPost(event) {
   event.preventDefault()
    axios.post("https://65882cf690fa4d3dabf98da7.mockapi.io/leyla", {
        name: nameinp.value,
        surname: surnameinp.value,
        age: ageinp.value,
        studentID: studentID.value
    })
}

myform.addEventListener('submit', axiosPost)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filter = document.getElementById('filter')


function sortedproduct(){
    div.innerHTML = ""
    let selectvalue = filter.value 

    if(selectvalue === "1"){
        axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}`)
        .then(res => {
            product = res.data;
            let sortedpro = product.sort((a,b) => a.price - b.price)
            sortedpro.map(item => {
                 let myDiv = document.createElement("div");
              myDiv.className = "myDiv col-xl-12 col-lg-12 col-md-12 col-sm-12";
              myDiv.innerHTML = `
              <img class="apiimage" src="${item.image}" alt="">                    
              <p>${item.name}</p>
              <p>${item.price}</p>
              `
              div.appendChild(myDiv);
            })
        })
      
    }
}

filter.addEventListener('change',sortedproduct)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function sortedproducts(){
    div.innerHTML = ""
    let selectvalue = filter.value 

    if(selectvalue === "2"){
        axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}`)
        .then(res => {
            product = res.data;
            let sortedpro = product.sort((a,b) => b.price - a.price)
            sortedpro.map(item => {
                 let myDiv = document.createElement("div");
              myDiv.className = "myDiv col-xl-12 col-lg-12 col-md-12 col-sm-12";
              myDiv.innerHTML = `
              <img class="apiimage" src="${item.image}" alt="">                    
              <p>${item.name}</p>
              <p>${item.price}</p>
              `
              div.appendChild(myDiv);
            })
        })
      
    }
}

filter.addEventListener('change',sortedproducts)