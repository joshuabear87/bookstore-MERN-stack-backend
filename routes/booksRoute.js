import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Create a new book
router.post('/', async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const book = await Book.create({ title, author, publishYear });

    return res.status(201).send(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Get a single book
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Book not found!' });
    }

    return res.status(200).json({ message: 'Book updated successfully!', data: updated });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Book not found!' });
    }

    return res.status(200).json({ message: 'Book deleted successfully!', data: deleted });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;
