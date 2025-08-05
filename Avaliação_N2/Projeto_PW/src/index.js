const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conecte ao MongoDB
mongoose.connect('mongodb://localhost:27017/quizranking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modelo de pontuação
const ResultadoSchema = new mongoose.Schema({
  nome: String,
  pontos: Number,
  data: { type: Date, default: Date.now },
});

const Resultado = mongoose.model('Resultado', ResultadoSchema);

// Rota para salvar resultado
app.post('/resultado', async (req, res) => {
  const { nome, pontos } = req.body;
  if (!nome || pontos == null) {
    return res.status(400).json({ erro: 'Nome e pontos obrigatórios.' });
  }

  const resultado = new Resultado({ nome, pontos });
  await resultado.save();
  res.status(201).json({ mensagem: 'Resultado salvo!' });
});

// Rota para pegar ranking (top 10)
app.get('/ranking', async (req, res) => {
  const ranking = await Resultado.find()
    .sort({ pontos: -1, data: 1 })
    .limit(10);
  res.json(ranking);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})
