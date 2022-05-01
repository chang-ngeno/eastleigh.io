// Get Category From Product json
export const CategoryList = (products) => {
    var uniqueCategorys = [];
    products.map((product) => {
        if (product.tags.length > 0 && product.tags) {
            product.tags.map((categorys) => {
                if(categorys && categorys.length > 0)
                {
                    if (uniqueCategorys.indexOf(categorys) === -1) {
                        uniqueCategorys.push(categorys);
                    }
                }
            })
        }
    })
    return uniqueCategorys;
}

// Get Size From Product json
export const GetsizeList = (products) => {
    var uniqueSizes = [];
    products.map((product) => {
        if (product.size.length > 0 && product.size) {
            product.size.map((sizes) => {
                if(sizes && sizes.length > 0)
                {
                    if (uniqueSizes.indexOf(sizes) === -1) {
                        uniqueSizes.push(sizes);
                    }
                }
            })
        }
    })
    return uniqueSizes;
}


// All Filter Used And Get Final Response
export const FilterProduct = (data, { category, size, color,value,sortby}) => {
    console.log(data);
    console.log('sortBy =>',sortby);
    let sizes = size;  

    return data.products.filter(product => {
        
        let categoryMatchValue;
        if(product.tags)
            categoryMatchValue = product.tags.some(tag => category.includes(tag))
        else
            categoryMatchValue = true;  
   

        let sizeMatchValue;
        if(product.size)
             sizeMatchValue = product.size.some(size => sizes.includes(size))
        else
             sizeMatchValue = true;

        let colorMatchValue;
        if(color && product.colors) {
            colorMatchValue = product.colors.some(colors => color.includes(colors))
        }else{
            colorMatchValue = false;
        }
        
        const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.salePrice;
        const endPriceMatchValue = typeof value.max !== 'number' || product.salePrice <= value.max;

        if(category.length > 0 && color.length > 0 && size.length > 0  )
        {
            return  categoryMatchValue && colorMatchValue  && sizeMatchValue  && startPriceMatchValue && endPriceMatchValue ;
        }
        if(category.length > 0 && color.length > 0 && size.length > 0   )
        {
            return  categoryMatchValue && colorMatchValue  && sizeMatchValue && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(category.length > 0 && size.length > 0   )
        {
            return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue ;
        }
        if(category.length > 0 && color.length > 0  )
        {
            return  categoryMatchValue && colorMatchValue  && startPriceMatchValue && endPriceMatchValue ;
        }
        if(color.length > 0 && size.length > 0  )
        {
            return  colorMatchValue  && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(category.length > 0 && color.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue ;
        }
        if(category.length > 0 && size.length > 0)
        {
            return  categoryMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(category.length > 0 )
        {
            return  categoryMatchValue    && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(color.length > 0 && size.length > 0)
        {
            return  colorMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(color.length > 0 )
        {
            return  colorMatchValue    && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(size.length > 0 )
        {
            return  sizeMatchValue    && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(color.length > 0)
        {
            return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(category.length > 0)
        {
            return  categoryMatchValue ;
        }
        if(size.length > 0)
        {
            return  sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  ;
        }
        else
        {
        return startPriceMatchValue && endPriceMatchValue  ;
       }

    }).sort((product1, product2) => {
        if (sortby === '2') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortby === '3') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortby === '1') {
            return product2.id < product1.id ? -1 : 1;
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
}


// Get Color From Product json
export const GetColorsList = (products) => {
    var uniqueColors = [];
    products.map((product) => {

        if(product.colors.length > 0 && product.colors) {
            product.colors.map((color) => {
                if(color && color.length > 0)
                {
                    if (uniqueColors.indexOf(color) === -1) {
                        uniqueColors.push(color);
                    }
                }

            })
        }
    })
    return uniqueColors;
}

// Get Min & Max Data in Json
export const GetMinMaxPrice = (products) => {
    let minimum = 0, maximum = 1000;
    products.map((product, index) => {
        let v = product.salePrice;
        if(v < minimum)
        {
            minimum=v;
        }
        else
        {
            minimum=minimum;
        }
        if(v > maximum)
        {
            maximum=v;
        }
        else
        {
            maximum=maximum;
        }
    })
    return {'min':minimum, 'max':maximum};
}