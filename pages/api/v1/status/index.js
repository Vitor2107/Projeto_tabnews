function status(_request, response) {
  response
    .status(200)
    .json({ message: "API funcionando, são acima da média !" });
}

export default status;
