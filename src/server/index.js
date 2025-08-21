const express = require('express');
const app = express();
const PORT = 5000;

const analyzeWithGeminiRouter = require('./routes/geminiRouter');

app.use(express.json());

app.use('/analyze', analyzeWithGeminiRouter);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
