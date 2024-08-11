import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Nav = ({cart,setCart}) => {
    return <div className="">
    <nav class=" navt navbar navbar-expand-lg fixed-top navbar-inverse">
    <div className='container col-lg-10'>
      <img src="imgSrc/PageIcon.png" width="80" height="50"></img>
    <a class="navbar-brand px-3" style={{fontFamily:"sans-serif", fontSize:"28px"}} href="#">Shopping Cart  <span style={{color:"green"}}> <FontAwesomeIcon icon={faBagShopping}/></span></a>
       <div class="collapse navbar-collapse">
           <ul class="navbar-nav mr-auto">
             <li class="nav-item active">
               <a class="nav-link" style={{fontFamily:"inherit", fontSize:"23px"}} href="#">Home </a>
             </li>
             <li class="nav-item active">
               <a class="nav-link px-5" style={{fontFamily:"inherit", fontSize:"23px"}} href="#">Electronics </a>
             </li>
             <li class="nav-item active">
              <a class="nav-link px-3" style={{fontFamily:"inherit", fontSize:"23px"}} href="#">Fashion </a>
             </li>
             
           </ul> 
     </div>
    </div>
    <div className='col-lg-2'>
            <button type="button" class="btn btn-outline-success" onClick={()=>setCart(0)}><FontAwesomeIcon icon={faShoppingCart}/>  &nbsp;Cart 
            <span class="badge bg-success text-white ms-1 rounded-pill">{cart}</span></button> 
    </div>
   </nav>

</div>

}

export default Nav