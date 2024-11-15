import express from 'express';
const app = express();
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

app.use(express.json());

app.use('/api/users', userRoutes);

mongoose.connect('your-mongo-db-url', { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


