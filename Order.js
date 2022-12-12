import React from "react";
import './Order.css'
function Order()
{
    return(
<>
        <div className="ak"> <i class="fa-solid fa-bars-staggered"></i> </div>
           <h1 className="arul"><i><b>REA<span id="kumaran">Z</span>ON</b></i></h1>
           <h2 className="a">ORDER SUMMARY </h2>
           <div className="location"><i class="fa-sharp fa-solid fa-location-dot"></i></div><h3 className="b">deliver to</h3>  
           <form>
    <label > 
        <textarea id="b" placeholder="enter your address" type='text'/>
    </label>
                 
            <h4 className="c">pincode</h4>  
           
                <label >
               <input id="p" placeholder="enter your pincode" type="text" maxLength={6}/>
                </label> 

            <h4 className="d">mobile no</h4>
            <label>
                <input id="m" placeholder="enter mobile no" type="text"maxLength={10}/>
            </label>
            <button id="e"><bold><i>CHANGE</i></bold></button>
    <hr className="f"></hr>
    <h2 className="h">PRICE DETAILS</h2>
    <h3 className="a1">Price</h3>
    <h3 className="a2">Discount</h3>
    <h3 className="a3">Delivery Charges</h3>
    <h3 className="a4">Total amount</h3>

    <label>
        <input id="x1"type="text"/>
    </label>
    <label>
        <input id="x2"type="text"/>
    </label>
    <label>
        <input id="x3"type="text"/>
    </label>
    <label>
        <input id="x4"type="text"/>
        
    </label>    


    
    
    </form>
    <button id="i" type="n"><bold><i>PROCEED TO PAY</i></bold></button>
    
             
            <div class="sidebar">
                <header>My app</header>
                
            </div>
            
        </>




    );

}
export default Order;