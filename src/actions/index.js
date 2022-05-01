import Products from '../api/product.js';

export const getProducts = () => {
    return async (dispatch)=>{
        const Allproduct=Products;
        dispatch(
            {
                type: "ACTUAL_PRODUCTS",
                products:Allproduct
            }
        )
    }
};
