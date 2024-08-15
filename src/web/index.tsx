
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Choose the root container for the extension's main UI
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export default () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const rootContainer = document.getElementById('extensions_settings')!;
    const rootElement = document.createElement('div');
    rootContainer.appendChild(rootElement);

    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );

};
