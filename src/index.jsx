import App from '@/App';
import '@/css/main.css';
import '@/css/tailwind.css';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
