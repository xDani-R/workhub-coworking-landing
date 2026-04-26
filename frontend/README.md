# workhub-coworking-landing

Bienvenido a **WorkHub Coworking**, una aplicación web desarrollada con React que representa un espacio moderno de trabajo colaborativo.

Este proyecto fue desarrollado como parte de un trabajo académico, evolucionando desde una landing page estática en HTML/CSS/JS hacia una aplicación modular construida con React + Vite, ahora con un backend propio desarrollado en Node.js + Express.

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
- Crear un **backend propio con Node.js + Express** siguiendo el patrón **MVC**.
- Exponer una **API REST** para gestionar espacios y reservas.
- Aplicar buenas prácticas de estructura y componentización.

---

## 🛠️ Tecnologías Utilizadas

**Frontend**
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- CSS Modules
- Bootstrap 5
- Bootstrap Icons

**Backend**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- Persistencia en archivos JSON locales

---

## 📂 Estructura del Proyecto

```bash
workhub-coworking-landing/
│
├── backend/
│   └── src/
│       ├── Controllers/
│       │   └── controllers.js
│       ├── data/
│       │   ├── espacios.json
│       │   └── reservas.json
│       ├── img/
│       │   └── postman/
│       │       ├── GetEspacios.png
│       │       ├── GetReservas.png
│       │       ├── Post.png
│       │       ├── Put.png
│       │       └── Delete.png
│       ├── Middlewares/
│       │   └── validateReserva.js
│       ├── Models/
│       │   └── models.js
│       ├── Routes/
│       │   └── routes.js
│       └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── AboutUs/
│   │   │   ├── GaleriaGrid/
│   │   │   ├── Sedes/
│   │   │   └── Footer/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About/
│   │   │   └── Reservas/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── .gitignore
```

---

## 🚀 Cómo Clonar y Ejecutar el Proyecto

### Requisitos previos

- Tener [Node.js](https://nodejs.org/) instalado (versión 18 o superior recomendada)
- Tener [Git](https://git-scm.com/) instalado

### 🔹 Clonar el repositorio

```bash
git clone https://github.com/xDani-R/workhub-coworking-landing.git
cd workhub-coworking-landing
```

### 🔹 Iniciar el Frontend

```bash
cd frontend
npm install
npm run dev
```

Abre tu navegador en `http://localhost:5173`

### 🔹 Iniciar el Backend

Abre una segunda terminal:

```bash
cd backend
npm install
npm run dev
```

El servidor quedará corriendo en `http://localhost:3001`

> ⚠️ Debes tener **dos terminales abiertas** al mismo tiempo: una con el frontend y otra con el backend.

---

## 🗄️ API REST — Endpoints

El backend expone los siguientes endpoints. La base de todas las rutas es `http://localhost:3001/api`.

| Método | Ruta | Descripción | Body requerido |
|--------|------|-------------|----------------|
| GET | `/espacios` | Obtiene todos los espacios disponibles | No |
| GET | `/reservas` | Obtiene todas las reservas | No |
| POST | `/reservas` | Crea una nueva reserva | Sí (ver abajo) |
| PUT | `/reservas/:id` | Actualiza una reserva existente | Sí (ver abajo) |
| DELETE | `/reservas/:id` | Elimina una reserva por ID | No |

### Body para POST y PUT `/reservas`

```json
{
  "espacioId": 1,
  "usuario": "Nombre del usuario",
  "fecha": "2025-04-20"
}
```

### Códigos de respuesta

| Código | Significado |
|--------|-------------|
| 200 | OK — operación exitosa |
| 201 | Created — reserva creada exitosamente |
| 404 | Not Found — reserva no encontrada |
| 500 | Internal Server Error — error del servidor |

---

## 🧪 Pruebas con Postman

A continuación se muestran capturas de cada endpoint probado en Postman:

### GET /api/espacios
![GET Espacios](./backend/src/img/postman/GetEspacios.png)

### GET /api/reservas
![GET Reservas](./backend/src/img/postman/GetReservas.png)

### POST /api/reservas
![POST Reservas](./backend/src/img/postman/Post.png)

### PUT /api/reservas/:id
![PUT Reservas](./backend/src/img/postman/Put.png)

### DELETE /api/reservas/:id
![DELETE Reservas](./backend/src/img/postman/Delete.png)

---

## 🏗️ Arquitectura Backend — Patrón MVC

El backend está organizado siguiendo el patrón **Modelo - Vista - Controlador**:

| Capa | Archivo | Responsabilidad |
|------|---------|----------------|
| **Model** | `Models/models.js` | Lee y escribe los datos en los archivos JSON |
| **Controller** | `Controllers/controllers.js` | Contiene la lógica de cada endpoint |
| **Router** | `Routes/routes.js` | Define las rutas y las conecta con los controladores |
| **Middleware** | `Middlewares/validateReserva.js` | Valida los datos antes de crear o actualizar una reserva |

---

## 💡 Notas Importantes

- Siempre ejecuta `npm install` después de clonar o cambiar de rama.
- La carpeta `node_modules` no se sube a GitHub (está en `.gitignore`).
- Asegúrate de tener Git instalado.
- Verifica el repositorio remoto con:

```bash
git remote -v
```