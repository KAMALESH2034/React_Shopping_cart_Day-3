import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nav from './Nav'
import Card from './Card'

function App() {
  
  const products =[
    {
        "product_name": "Wireless Bluetooth Headphones",
        "price": 1159.99,
        "product_img" : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ368JVcLBjuOfA8wpV9KxdBvJoOwl6OvvQUHLj3aZ7PkysaLz4hb7n_bZ5628bJ-A6282sy-NGOVmHDmljMUIwdmOssE-ZeOpY160RmxqHo7bC-2tCx1Fuvqrr"
    },
    {
        "product_name": "Smartwatch with Fitness Tracker",
        "price": 1290,
        "product_img" : "https://m.media-amazon.com/images/I/61AeGQhwjxL._SX679_.jpg"
    },
    {
        "product_name": "4K Ultra HD Smart TV",
        "price": 49980,
        "product_img" : "https://5.imimg.com/data5/RF/CA/BX/SELLER-53649113/hyq-oled-55-inch-ultra-hd-led-smart-android-tv.jpg"
    },
    {
        "product_name": "Portable Laptop Stand",
        "price": 829.99,
        "product_img" : "https://www.portronics.com/cdn/shop/products/My_Buddy_K-1.jpg?v=1647439795"
    },
    {
        "product_name": "Electric Standing Desk",
        "price": 1279.99,
        "product_img" : "https://ergologic.in/wp-content/uploads/2024/05/Height-Adjustable-Table-%E2%80%93-Electric-Single-Motor-Standing-Desk-Work-From-Home-Series-premium-quality-black-color-frame-black-table-top-mdf-solid-wood-ergologic-with-rounded-edges.jpg"
    },
    {
        "product_name": "Noise-Canceling Earbuds",
        "price": 2089.99,
        "product_img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985"
    },
    {
        "product_name": "Smart Home Security Camera",
        "price": 1149.99,
        "product_img" :"https://m.media-amazon.com/images/I/313BmPAEyaL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "product_name": "USB-C Multiport Adapter",
        "price": 339.99,
        "product_img" : "https://m.media-amazon.com/images/I/31ZiRNNVjLL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "product_name": "Wireless Charging Pad",
        "price": 1419.99,
        "product_img" : "https://m.media-amazon.com/images/I/31sZCQY7EjL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "product_name": "Smart LED Light Bulbs (4-Pack)",
        "price": 549.99,
        "product_img" : "https://m.media-amazon.com/images/I/41sx753+kXL._SY300_SX300_.jpg"
    },
    {
        "product_name": "Ergonomic Office Chair",
        "price": 3199,
        "product_img" : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzPAzwyKJdaADI1t3wejzYG04vX6LNoJamxxthmlHZwY47IowkXle5m77-8528Hyrl-XOxQ693WH4cX4zCU_n0uPE7w9bj&usqp=CAE"
    },
    {
        "product_name": "Portable External SSD 1TB",
        "price": 6119.99,
        "product_img" : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdsM_AeDcM0B31nHFkrS0LFFbqMdQhu4NRNvOVDjwOXapuei_z-OMbmzWAnOa6uZehtuHZ7BCDVLc4wDF1UNitY9_tyhkwRg&usqp=CAE"
    }
];

let [cart, setCart] = useState(0);
  return <>
   <Nav cart={cart} setCart={setCart}/>
            
    <header className="head bg-dark py-5">
            <div className="container px-2 px-lg-4 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder" style={{color:"#f2e54e"}}>AmazeCart</h1>
                    <h2 className="display-4 fw-bolder">Shop in style</h2>
                    <p className="lead fw-normal text-white-50 mb-0">Explore the festive season Sale Live</p>
                </div>
            </div>
        </header>
        <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            products.map((product)=>{
              return <Card product={product} cart={cart} setCart={setCart}/>
            })
          }
        </div>
        </div>
     
      
      
      <footer class=" foot py-4  border-top">
            <div class="container">
                  <p className='text-center'>  <span class="mb-3">© 2024 AmazeCart, Inc</span></p>
            </div>
      </footer>
      
      
      
  </>


}

export default App
