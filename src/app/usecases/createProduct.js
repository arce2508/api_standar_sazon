const productRepository = require( '../../repositories/product-repository')

const createProduct = async (data) => {
  return processProduct.create(data)
}

 module.exports = createProduct 
  
