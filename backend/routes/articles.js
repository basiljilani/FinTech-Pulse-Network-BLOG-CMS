import express from 'express';
import Article from '../models/Article.js';
import multer from 'multer';
import path from 'path';
import cors from 'cors';

const router = express.Router();

// Configure CORS
router.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Updated to match Vite dev server
  credentials: true
}));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware to log all requests
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Get all articles
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all articles...');
    const articles = await Article.find().sort({ date: -1 });
    console.log(`Found ${articles.length} articles`);
    
    if (articles.length === 0) {
      return res.status(404).json({ message: 'No articles found' });
    }
    
    res.json(articles);
  } catch (error) {
    console.error('Error in GET /api/articles:', error);
    res.status(500).json({ 
      message: 'Failed to fetch articles',
      error: error.message 
    });
  }
});

// Get a single article by ID
router.get('/:id', async (req, res) => {
  try {
    console.log('Fetching article with ID:', req.params.id);
    const article = await Article.findById(req.params.id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    res.json(article);
  } catch (error) {
    console.error('Error in GET /api/articles/:id:', error);
    res.status(500).json({ 
      message: 'Failed to fetch article',
      error: error.message 
    });
  }
});

// Create a new article
router.post('/', upload.single('featuredImage'), async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    
    if (req.file) {
      newArticle.featuredImage = req.file.path;
    }
    
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    console.error('Error in POST /api/articles:', error);
    res.status(400).json({ 
      message: 'Failed to create article',
      error: error.message 
    });
  }
});

// Update an article
router.put('/:id', upload.single('featuredImage'), async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    res.json(updatedArticle);
  } catch (error) {
    console.error('Error in PUT /api/articles/:id:', error);
    res.status(400).json({ 
      message: 'Failed to update article',
      error: error.message 
    });
  }
});

// Delete an article
router.delete('/:id', async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/articles/:id:', error);
    res.status(500).json({ 
      message: 'Failed to delete article',
      error: error.message 
    });
  }
});

export default router;
