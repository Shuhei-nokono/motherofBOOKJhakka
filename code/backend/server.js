const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// // .envファイルのパスを指定
const envPath = path.resolve(__dirname, '.env');

// // .envファイルの存在を確認
// if (fs.existsSync(envPath)) {
//   console.log(`Loading environment variables from: ${envPath}`);
// } else {
//   console.error(`.env file not found at: ${envPath}`);
// }

// 環境変数を読み込む
dotenv.config({ path: envPath });

require('dotenv').config();
// console.log('Test Env Variable:', process.env.TEST_ENV_VARIABLE);


const express = require('express');
const connectDB = require('./config/db');
// const dotenv = require('dotenv');
const cors = require('cors');

// dotenv.config();


const app = express();
// app.use(cors());
app.use(cors({
  origin: 'http://46uhei.starfree.jp/', // フロントエンドのURLを指定
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

connectDB();

console.log('MongoDB URI:', process.env.MONGODB_URI);

app.use(express.json());

app.use('/api/authApi', require('./routes/authRoutes'));
app.use('/api/userApi', require('./routes/userRoutes'));
app.use('/api/recordApi', require('./routes/recordRoutes')); 

const PORT = process.env.PORT || 5000;
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
