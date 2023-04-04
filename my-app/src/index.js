import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
