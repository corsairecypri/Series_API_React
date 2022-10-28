import React from 'react';
import { createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import { Effect } from './pages/Effect';
import { Results } from './pages/Results'


const root = document.getElementById('root');
const app = createRoot(root)


app.render(
    
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Effect/>}></Route>
                <Route path="/:id" element={<Results/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    
)

