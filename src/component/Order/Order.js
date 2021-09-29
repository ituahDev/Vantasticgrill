import img  from "../image/order-img.jpg"
import "./Order.css"

const Order = () => {

    return (  
      <div id="section6" className="order">
          <h1 className="heading"><span>order</span> now</h1>

          <div className="row">

              <div className="image">
              <img src={img} alt="" />
              </div>

              <form action="">
                  <div className="inputbox">
                      <input type="text"  placeholder="name"/>
                      <input type="email"  placeholder="email"/>
                  </div>

                  <div className="inputbox">
                      <input type="number"  placeholder="number"/>
                      <input type="text"  placeholder="food name"/>
                  </div>
                  <textarea placeholder="address" name="" id="" cols="30" rows="10"></textarea>
                   <input type="submit" value="order now" className="btn"/>
              </form>

          </div>

      </div>
    );
}
 
export default Order;