# Code Guidelines
1. Use TailwindCSS (v4.1) and BasecoatUI (v0.3.10) for styling.
2. Use JSX components for structuring content.
3. Do not use any React hooks or client-side code; all code is rendered to static HTML.
4. Do not place any JavaScript code within `<script>` HTML tags or JSX elements. Create `.js` files in the `/public/js` directory and link them using `<script src="/public/js/your-script.js"></script>`.
