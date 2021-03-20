const getAllProducts = (req, res) => {
  axios.get('/products')
    .then((allProductsResponse) => {
      res.status(200).send(allProductsResponse.data);
    })
    .catch((error) => {
      res.status(400).send('error');
    })
}

module.exports = {
  getAllProducts: getAllProducts
}