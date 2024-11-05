# ips-web-cetis1
Repo de trabajo CETIS 1

[Link de Landing page](https://pruebas-landing-page-ips.netlify.app/)


# Instrucciones para configurar el proyecto

1. Primero se tiene que tener **NodeJS** instalado.

2. Al clonar el repositorio se recomienda no clonarlo dentro de carpetas, sino en el **Escritorio**, para que no haya problemas de rutas.

3. Posteriormente, en consola, entrar a la carpeta del repositorio. 

4. Una vez dentro, ejecutar en consola el siguiente comando para instalar `node_modules`:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
5. Posterior a este se ejecutrara el siguiente para instalar lo necesario para poder hacer funcionar la pagina

   ```bash
   npm install react-router-dom
   npm install firebase-admin --save
   npm install dotenv
   npm install firebase
   npm install --save react-google-recaptcha
   npm install express-rate-limit
   npm install xss
   npm install express-validator

7. Ahora que está todo instalado, para poder ver en local los cambios que se hagan, ejecutar:
    ```bash
    npm run dev
con esto podras entrar a: `http://localhost:5173/`

8. Se necesita un archivo .env con las credenciales de la base de datos Firebase para que la puedas ocupar
