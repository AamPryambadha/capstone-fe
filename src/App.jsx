import { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [serverStatus, setServerStatus] = useState('Memeriksa koneksi backend...');

  useEffect(() => {
    api
      .get('/health')
      .then((res) => setServerStatus(`Terhubung: ${res.message}`))
      .catch((err) => setServerStatus(`Gagal terhubung: ${err.message}`));
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Toko Listrik Bina Harja — Smart Inventory & POS</h1>
      <p>
        Status Backend: <strong>{serverStatus}</strong>
      </p>
    </main>
  );
}

export default App;