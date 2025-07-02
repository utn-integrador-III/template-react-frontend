# To run the project locally
1- Open the project folder in Visual Code

2- Open the terminal and run the following command to install dependencies ` npm install `

3- To run the local db.json accesible as an api, open the command prompt terminal and run the following:
` npx json-server --watch <db_folder_ath> --port <port_number>`

**Example:**
```
 npx json-server --watch Documents/template-react-frontend/src/data/db.json --port 3000
 ```

4- Change in the [environment.jsx](environment.jsx) file the backend url.

5- To run the web project execute the following command: ` npm run dev `

6- Acces the web app in the browser: http://localhost:5173 the port could change when running the application.

-------------

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
