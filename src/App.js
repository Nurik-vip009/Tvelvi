import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';


function App() {
  return (
      <Routes>
        <Route path="/register" element={<Registration />} />
      </Routes>
  );
} export default App;
