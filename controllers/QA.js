const getAllQuestions = (req,res) => {
  axios.get('/qa/questions')
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
}

module.exports.getAllQuestions = getAllQuestions;