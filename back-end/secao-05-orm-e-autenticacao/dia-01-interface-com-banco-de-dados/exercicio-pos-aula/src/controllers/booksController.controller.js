const { booksService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await booksService.getAll();
  return res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error!' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await booksService.getById(id);
    return res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: 'Livro não existe!'});
  }
}

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await booksService.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    res.status(404).json({ message: 'Livro já existe!'});
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const newBook = await booksService.update(id, { title, author, pageQuantity });
    if (!newBook) return res.status(404).json({ message: 'Error' });
    return res.status(201).json({ message: 'Book updated!' });
  } catch (error) {
    return res.status(404).json({ message: 'Livro não encontrado' });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await booksService.remove(id);
    if (removed) return res.status(200).json({ message: `Book with id:${id} Removed!`});
  } catch (error) {
    return res.status(404).json({ message: 'Book not found' });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}