const productRepository = require( '../../repositories/product-repository')

const searchProduct = async (data) => {
return productRepository.search(data)
}

 module.exports = searchProduct

