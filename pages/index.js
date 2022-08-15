import { getData } from "utils/fetchData";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import filtering from "utils/filtering";
import ProductItem from "components/productItem";
import Filter from 'components/filter';



export default function Home({ productsList, more }){

  const [products, setProducts] = useState(productsList)

  const { categories, auth } = useSelector( state => state);
  const router   = useRouter();
  
  //defining state for pagination
  const [page, setPage] = useState(router.query.page || 1)
  
  
  const [ isChecked, setIschecked ] = useState(false)
  const [ isAllChecked, setIsAllChecked ] = useState(false);
  const [ disDeleteAll , setdisDeleteAll ] = useState(true);

  const dispatch = useDispatch();
  
  
  // useEffect(() => {
  //   if(productsList) dispatch({ type: 'ADD_PRODUCT', payload: productsList})
  // }, [productsList])

  
  useEffect(() => {
    const arr = products.filter(product => product.checked);
    if(arr.length > 0){
      setdisDeleteAll(false)
    } else { 
      setdisDeleteAll(true)
    }
  }, [products])

  
  
  
  
  useEffect(() => {
    checkTheCheck()
  }, [products])

  const checkTheCheck = () => {
    const arr = products.filter( product => !product.checked)
    if(arr.length > 0){
      setIsAllChecked(false)
    }else {
      setIsAllChecked(true)
    } 
  }
  
  

  const handleCheckAll = () => {
    let newProducts = [];
    products.forEach( product => 
      newProducts.push({...product, checked : !isChecked})
    );
    setProducts(newProducts);
    setIschecked(!isChecked)
    setIsAllChecked(!isAllChecked)
  };


  const handlePagination = (e, option) => {
    if(option.direc === 'next'){
      filtering({router, page: page + 1});
      setPage(page + 1)
    } else {
      if(page > 1){
        setPage(page - 1)
        filtering({router, page: page - 1});
      } 
    }
  };

  
  const handleDeleteAll = () => {
    const deletingProducts = products.filter( product => product.checked ).map(product => product._id)
    dispatch({type: 'MODAL', payload: {state: products, setProducts, item: [...deletingProducts], actionType: 'deleteAllProducts', auth}})
    
  }


  return (
    <>
    <div className="container">
      <Filter categories={categories} />
      {
        auth.user && auth.user.role === 'admin' &&
        <span className="p-2 align-items-center justify-content-center bg-danger"><input type="checkbox" checked={isAllChecked}  onChange={handleCheckAll} /><button className="btn btn-danger" onClick={ handleDeleteAll } style={{padding: '1px 1px'}} data-toggle="modal" data-target="#exampleModal" disabled={disDeleteAll}>delete all</button></span>
      }
    </div>
    <div className="products_list">
      {
        !products && <h2>there is no product</h2>
      }
      {
        products && 
        products.map( product => {
          return <ProductItem key={product._id} setProducts={setProducts} products={products} product={product}/>
        })
      }
    </div>
    <nav aria-label="Page navigation example" className="d-flex justify-content-end mx-3">
      <ul className="pagination d-flex flex-row-reverse">
        <li className={`page-item ${page === 1 && 'disabled'}`}><a className="page-link" href="#" onClick={(e) => handlePagination(e, { direc : 'prev' })}>Previous</a></li>
        <li className="page-item"><a className="page-link" href="#" >{page}</a></li>
        <li className={`page-item ${!more && 'disabled'}`}><a  className="page-link" href="#" onClick={(e) => handlePagination(e, { direc : 'next' })} >Next</a></li>
      </ul>
    </nav>
    </>
  )
};

export async function getServerSideProps({ query }){
  const page = query.page || 1;
  const sort = query.sort || '';
  const category = query.category || 'all';
  const search = query.search || 'all'
  const response = await getData(`/products?limit=${3}&page=${page}&sort=${sort}&category=${category}&title=${search}`);
  const data = await response.json();

  return {
    props : {
      productsList : data.products || data,
      more: data.more || false
    }
  }
}