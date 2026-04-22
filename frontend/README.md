# workhub-coworking-landing

Bienvenido a **WorkHub Coworking**, una aplicación web desarrollada con React que representa un espacio moderno de trabajo colaborativo.

Este proyecto fue desarrollado como parte de un trabajo académico, evolucionando desde una landing page estática en HTML/CSS/JS hacia una aplicación modular construida con React + Vite.

---

## 🌎 ¿Qué es WorkHub?

WorkHub es un concepto de coworking que busca ofrecer:

- 💻 Espacios de trabajo compartidos
- 🤝 Comunidad y networking
- 🚀 Productividad y colaboración
- ☕ Comodidad y servicios incluidos

---

## 🎯 Objetivo del Proyecto

El propósito de este desarrollo es:

- Construir una aplicación web modular con **React + Vite**.
- Implementar navegación entre páginas con **React Router**.
- Organizar estilos por componente con **CSS Modules**.
- Simular datos dinámicos mediante un archivo **JSON local**.
- Aplicar buenas prácticas de estructura y componentización.

---

## 🛠️ Tecnologías Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- CSS Modules
- Bootstrap 5
- Bootstrap Icons
- JSON Server (simulación de API)

---

## 📂 Estructura del Proyecto

```bash
workhub-coworking-landing/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── img/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── AboutUs/
│   │   │   ├── AboutUs.jsx
│   │   │   └── AboutUs.module.css
│   │   ├── GaleriaGrid/
│   │   │   ├── GaleriaGrid.jsx
│   │   │   └── GaleriaGrid.module.css
│   │   ├── Sedes/
│   │   │   ├── Sedes.jsx
│   │   │   └── Sedes.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   │
│   ├── hooks/
│   │   └── useScrollToHash.js
│   │
│   ├── layouts/
│   │   └── MainLayout/
│   │       └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── components/
│   │   │       ├── AboutHero/
│   │   │       ├── NuestraHistoria/
│   │   │       └── Mision/
│   │   └── Reservas/
│   │       ├── Reservas.jsx
│   │       └── components/
│   │           ├── SedesTabs/
│   │           ├── SeccionSede/
│   │           ├── CardEspacio/
│   │           ├── ModalReserva/
│   │           └── ReservasConfirmadas/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Cómo Clonar y Ejecutar el Proyecto

### Requisitos previos

- Tener [Node.js](https://nodejs.org/) instalado (versión 18 o superior recomendada)
- Tener [Git](https://git-scm.com/) instalado

### 🔹 Opción 1: Clonar el repositorio (Recomendado)

1. Crea una carpeta en algún espacio de tu ordenador.
2. Abre una terminal dentro de esa carpeta.
3. Ejecuta el siguiente comando:

```bash
git clone https://github.com/xDani-R/workhub-coworking-landing.git
```

4. Entra a la carpeta del proyecto:

```bash
cd workhub-coworking-landing
```

5. Instala las dependencias:

```bash
npm install
```

6. Inicia el servidor de desarrollo:

```bash
npm run dev
```

7. Abre tu navegador en `http://localhost:5173`

---

## 🗄️ Funcionalidad de Reservas (JSON Server)

La página de reservas simula una API REST mediante **JSON Server** usando el archivo `db.json` incluido en el proyecto.

Existen **dos formas** de probar esta funcionalidad:

### 🔹 Opción 1: Usando JSON Server (API simulada)

Requiere tener el servidor corriendo en paralelo al proyecto. Abre una **segunda terminal** en la carpeta del proyecto y ejecuta:

```bash
npm run server
```

Esto levanta la API en `http://localhost:3001`. Con esto activo, las reservas se guardan y persisten en `db.json`.

> ⚠️ Debes tener **dos terminales abiertas** al mismo tiempo: una con `npm run dev` y otra con `npm run server`.

### 🔹 Opción 2: Sin JSON Server (datos locales)

Si no quieres correr JSON Server, el código también incluye instrucciones comentadas para usar los datos directamente desde el archivo `db.json` de forma local sin necesidad de levantar el servidor. Revisa los comentarios en el código de la página de Reservas para activar esta opción.

---


---

## 💡 Notas Importantes

- Siempre ejecuta `npm install` después de clonar o cambiar de rama, para asegurarte de tener todas las dependencias instaladas.
- La carpeta `node_modules` no se sube a GitHub (está en `.gitignore`), por eso es necesario instalarlas localmente.
- Asegúrate de tener Git instalado.
- Si aparece un error de autenticación, revisa tu configuración SSH o credenciales de GitHub.
- Siempre verifica el repositorio remoto con:

```bash
git remote -v
```