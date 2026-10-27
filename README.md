# ♻️ EcoPoint - Aplicación web móvil de reciclaje

EcoPoint es una aplicación web móvil desarrollada para la práctica **UT2 de Desarrollo de Interfaces (UI/UX)**. Traslada el prototipo de Figma a una implementación en React con Vite: Splash Screen animado, Login, Registro con validación en tiempo real, pantalla de éxito, página 404, Modo Oscuro/Claro y criterios de accesibilidad (WCAG).

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para la navegación entre interfaces
- CSS con variables (tema claro y oscuro)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)
- Un navegador moderno (Chrome, Firefox, Edge o Safari)

### Installing

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Brian-Zzz-d/EcoPoint.git
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd EcoPoint
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre en el navegador la dirección que indica la consola (normalmente `http://localhost:5173`).

### Otros comandos

| Comando           | Descripción                          |
| ----------------- | ------------------------------------ |
| `npm run build`   | Genera la versión de producción      |
| `npm run preview` | Previsualiza la versión de producción |
| `npm run lint`    | Revisa el código con ESLint          |

## Navegación (rutas)

| Ruta        | Pantalla                                  |
| ----------- | ----------------------------------------- |
| `/`         | Splash Screen y después Login             |
| `/login`    | Iniciar sesión                            |
| `/registro` | Crear cuenta                              |
| `/exito`    | Cuenta creada (redirige al Login)         |
| `*`         | Error 404, ruta no encontrada             |

## Estructura del proyecto

```
src/
├── App.jsx          # Splash, cabecera, modo oscuro y rutas
├── index.css        # Estilos globales, variables y botones
├── main.jsx         # Punto de entrada
└── pages/
    ├── Login.jsx
    ├── Register.jsx
    ├── Success.jsx
    └── NotFound.jsx
```

## UX, accesibilidad y usabilidad

- Modo oscuro y claro con paleta definida en variables CSS.
- Etiquetas `label` asociadas a cada campo del formulario.
- Foco visible al navegar con teclado.
- Mensajes de feedback: errores de campos obligatorios, formato de correo, confirmación antes de cancelar el registro y aviso de cuenta creada.
- Diseño pensado para formato móvil.

## Gestión del proyecto

- Sprints (GitHub Projects / Trello): _pega aquí el enlace compartido_
- Prototipo en Figma: _pega aquí el enlace_

## Autor

**Brian** - [Brian-Zzz-d](https://github.com/Brian-Zzz-d)
