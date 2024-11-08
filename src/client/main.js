import { StartNavigation } from './components/nav-bar/navbar.js';
import './style.css';

StartNavigation();

// Export modules on main.js could lead to Circular Dependencies errors and affect Vite's HMR. Read more https://vite.dev/guide/troubleshooting.html#hmr.
