const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors());

// Parse incoming JSON
app.use(express.json());

// --------------------
// API Routes
// --------------------
app.get('/api/tasks', (req, res) => {
  // Replace with DB logic later
  res.json([
    { id: 1, text: 'Sample Task', completed: false, pinned: false }
  ]);
});

// --------------------
// Serve React Frontend
// --------------------

app.get('/', (req, res) => {
  res.send('Backend is running!');
});


// --------------------
// Start Server
// --------------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
