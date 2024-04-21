const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Define routes
app.use(require('./routes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));