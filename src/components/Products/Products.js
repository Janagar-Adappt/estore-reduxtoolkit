import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../store/cartSlice'
import { STATUSES } from '../../store/productSlice'
import { getProductStatus } from '../../store/productSlice'
import { fetchProducts } from '../../store/productSlice'

const Products = () => {

  const productStatus = useSelector(getProductStatus)
  const { data: products } = useSelector((state) => state.product);
  
  const dispatch = useDispatch()
  
  useEffect(() => {

    dispatch(fetchProducts());

  }, [dispatch])


  const handleAdd = (product) => {
    dispatch(add(product))
  }

  if (productStatus === STATUSES.LOADING) {
    return <h2>Loading...</h2>
  }

  if (productStatus === STATUSES.ERROR) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='productsWrapper'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products