import { all, takeLatest } from 'redux-saga/effects'

function checkProductsStock() {
    console.log('Added to Cart')
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART', checkProductsStock)
]);