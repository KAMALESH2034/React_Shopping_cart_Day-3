import React,{useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashArrowUp,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Card = ({cart, setCart, product}) => {

    let [toggle, setToggle] = useState(true)

  return (
    <div class="col mb-5">
                        <div class="card h-100">
                    
                            <img class="card-img-top" src={product.product_img} alt="img unavailable"/>
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{product.product_name}</h5>
                                    ₹{product.price}
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-right">
                                    {toggle ? <button type="button" className="btn btn-outline-primary"
                                        onClick={()=>{
                                            setCart(cart+1)
                                            setToggle(false)
                                        }} >
                                            <FontAwesomeIcon icon={faCartArrowDown}/>&nbsp; Add to Cart</button> : <button 
                                            type="button" className="btn btn-outline-danger"
                                            onClick={()=>{
                                                setCart(cart-1)
                                                setToggle(true)
                                            }} > <FontAwesomeIcon icon={faTrashArrowUp}/>&nbsp;Remove from Cart</button>
                                    }
                                    
                                    </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Card