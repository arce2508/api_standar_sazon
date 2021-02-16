const actions = require('../../src/app')

const createProduct = (req,res) => {
  console.log(req.body)
  actions
  .createProduct (req.body)
  .then((product)  => {
    res.json (product)
  })
  .catch (( error) => {
    const status = 500
    const response = {
      message: error.message,
      status,
    }

    console.error (error)
    res.status(status).json (response)
  })
}

const searchProductController = (req,res) => {
  actions 
  .searchProduct ()
  .then ((product) => {
    res.json (product)
  })
  .catch ((error) => {
    const status = 500
    const response ={
      message: error.message,
      status
    }

    console.error (error)
    res.status(status).json (response)
  })
}

module.exports = {
 createProduct,
 searchProductController,
}
