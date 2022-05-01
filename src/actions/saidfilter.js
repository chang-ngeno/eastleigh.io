export const Getcategory = (category) => ({
    type: "GET__PRODUCT_CATEGORY",
    category
});

export const Getprice = (value) => ({
    type: "GET_MIN_MAX_PRICE",
    value
});

export const Getcolor = (color) => ({
    type: "GET_PRODUCT_COLOR",
    color
});


export const Getsize = (size) => ({
    type: "GET_PRODUCT_SIZE",
    size
});

export const Sorting = (sortby) => ({
    type: "SORT_BY_FILTER",
    sortby
});