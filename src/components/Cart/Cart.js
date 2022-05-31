import { useDispatch, useSelector } from "react-redux"
import { selectCartList } from "../../store/cartSlice"
import { remove } from "../../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectCartList);

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product, index) => (
          <div className='cartCard' key={index}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart