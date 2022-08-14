import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from 'store/Actiontypes';
import { addToCart } from 'store/Actiontypes';

const ProductItem = ({ product, setProducts, products }) => {
    const { cart, auth } = useSelector(state => state)


    const dispatch = useDispatch();

     //user card buttons ui
    const userButtons = (product) => {
        return (
        <>
            <a href={`/products/${product._id}`} className="flex-fill w-100 mx-1 btn btn-primary">view</a>
            <button onClick={() => dispatch(addToCart(product, cart))} className=" flex-fill btn w-100 btn-success mx-1">buy</button>
        </>
        )
    };


    //admin card buttons ui
    const adminButtons = (product) => {
        return (
        <>
            <a href={`/create/${product._id}`} className="flex-fill w-100 mx-1 btn btn-primary">Edit</a>
            <button className=" flex-fill btn w-100 btn-danger mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => dispatch({type: 'MODAL', payload: { title : product.title, item: product, auth, actionType: 'deleteProduct' }})}>Delete</button>
        </>
        )
    };



    const handleCheck = (product) => {
        const newArr = products.map(item => {
          if(item._id === product._id) return {...item, checked: !item.checked}
          return item
        })
        setProducts(newArr)
        // dispatch(updateItem(products, product._id, {...product, checked: !product.checked}, 'ADD_PRODUCT'));
    };



    return (
        <div className="card" style={{position: "relative", width: '18rem'}}>
          
          {
            auth.user && auth.user.role ==='admin' && 
            <span><input type="checkbox" checked={product.checked}  style={{position:'absolute'}} onChange={() => handleCheck(product) } /></span>
          }
          
          <img className="card-img-top" src={product.images && product.images[0].url} alt="Card image cap" />
          <div className="card-body">
            <div className="stock d-flex justify-content-between">
              <h6 className="text-danger">
                {product.price}$
              </h6>
              <h6 className="text-danger">
                {
                  product.inStock > 0 ? 
                  "inStock : " + product.inStock
                  : "out of stock"
                } | sold: { product.sold}
              </h6>
            </div>
            <h5 className="card-title text-capitalize">{ product.title }</h5>
            <p className="card-text">{ product.description }</p>
            <div className="d-flex justify-content-between">
              {
                auth.user && auth.user.role === 'admin' ? 
                adminButtons(product) :
                userButtons(product) 
              }
            </div>
          </div>
        </div>
      )
}

export default ProductItem