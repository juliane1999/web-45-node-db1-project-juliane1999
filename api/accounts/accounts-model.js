const getAll = () => {
  // DO YOUR MAGIC
}

const getById = id => {
 return deleteById("accounts").where("id",id).first()
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
