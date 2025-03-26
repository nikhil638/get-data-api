# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Features
Fetches PDFs dynamically from an API.
Allows users to search for PDFs by name.
Click to open and read PDFs inside the app.
A back button to return to the list view.
Fully responsive for all screen sizes.

Tech
React.js (for UI development)
Axios (for API requests)
Bootstrap & CSS (for styling)

Folder Structure
src/
│── components/ # Contains reusable React components
│ ├── SearchBar.jsx # Search input for PDFs
│ ├── PDFList.jsx # Displays the list of PDFs
│ ├── PDFItem.jsx # Single PDF item component
│ ├── PDFReader.jsx # Displays the selected PDF
│── css/ # CSS files for styling
│── App.jsx # Main application logic
│── index.js

API used
This project fetches data from:
https://api.npoint.io/dee51ea017d20efdfcc8

Developed By
Nikhil
FrontEnd Developer
