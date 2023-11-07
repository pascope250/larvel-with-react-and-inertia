import './adminelte/plugins/jquery/jquery.min.js';
import './adminelte/plugins/fontawesome-free/css/all.min.css'
import './adminelte/dist/css/adminlte.min.css';


import './adminelte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import './adminelte/dist/js/adminlte.min.js';
import './bootstrap';

// import './adminelte/dist/js/demo';


import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
