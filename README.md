# ♻️ EcoPoint - Aplicación web móvil de reciclaje

EcoPoint es una aplicación web móvil de reciclaje desarrollada para **Desarrollo de Interfaces (UI/UX)**. Esta entrega añade **Login y Registro de usuarios con CRUD**: el frontend en React se conecta a un backend Spring Boot con base de datos MySQL.

## Tecnologías

**Frontend**
- React 19 y Vite
- React Router para la navegación entre interfaces
- CSS con variables (tema claro y oscuro)

**Backend**
- Java con Spring Boot (Spring Web y Spring Data JPA)
- Maven
- MySQL (gestionado con phpMyAdmin)

## Estructura del repositorio

| Carpeta | Contenido |
|---------|-----------|
| `src/` | Frontend React (`pages/`, `services/authService.js`) |
| `Backend/EcoPoint - Base de datos/EcoPoint/` | Backend Spring Boot (Controller, Model, Repository) |
| `Backend/EcoPoint - Base de datos/prueba.http` | Pruebas de los endpoints |

## Cómo ejecutarlo

### Requisitos
- Node.js 18 o superior
- Java 17 o superior
- MySQL (XAMPP o similar) con phpMyAdmin

### 1. Base de datos
1. Arranca MySQL.
2. Crea la base de datos `ecopoint` (tabla de usuarios: `usuarios`).

### 2. Backend
1. Abre la carpeta `Backend/EcoPoint - Base de datos/EcoPoint` en IntelliJ.
2. Revisa en `src/main/resources/application.properties` el usuario y la contraseña de tu MySQL.
3. Ejecuta `EcoPointApplication`. El servidor queda en `http://localhost:8080`.

### 3. Frontend
```bash
git clone https://github.com/Brian-Zzz-d/EcoPoint.git
cd EcoPoint
npm install
npm run dev
```
Abre la dirección que indica la consola (normalmente `http://localhost:5173`).

### Otros comandos

| Comando | Descripción |
|---------|-------------|
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Previsualiza la versión de producción |
| `npm run lint` | Revisa el código con ESLint |

## Navegación (rutas)

| Ruta | Pantalla |
|------|----------|
| `/` | Splash Screen y después Login |
| `/login` | Iniciar sesión |
| `/registro` | Crear cuenta |
| `/exito` | Cuenta creada (redirige al Login) |
| `/ayuda` | Ayuda |
| `/home` | Inicio / zona logueada |
| `*` | Error 404, ruta no encontrada |

## Registro y Login (CRUD de usuarios)

- **Registro**: el formulario valida los campos (obligatorios, formato de correo, longitud de contraseña). El servicio comprueba en el backend si el correo ya existe y, si no, guarda el usuario en la tabla `usuarios`. Se muestra un mensaje de cuenta creada o de correo ya registrado.
- **Login**: se comprueban las credenciales contra el backend. Si son correctas, se guarda la sesión en `sessionStorage` y se accede a la zona logueada. Si no, se muestra un mensaje de error.
- **Servicio**: `src/services/authService.js` conecta React con la API.

### Endpoints de usuarios

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/usuarios/...` | Registrar un usuario |
| POST | `/usuarios/...` | Iniciar sesión |

Las pruebas de los endpoints están en `Backend/EcoPoint - Base de datos/prueba.http`.

## UX, accesibilidad y usabilidad

- Modo oscuro y claro con paleta definida en variables CSS.
- Etiquetas `label` asociadas a cada campo del formulario.
- Foco visible al navegar con teclado.
- Mensajes de feedback: campos obligatorios, formato de correo, correo ya registrado, cuenta creada y errores de acceso.
- Diseño pensado para formato móvil.

## Gestión del proyecto

- GitHub: https://github.com/Brian-Zzz-d/EcoPoint
- Sprints (GitHub Projects): https://github.com/users/Brian-Zzz-d/projects/4
- Prototipo en Figma: https://www.figma.com/design/wE50QX0efAcNZGk4huhjH7/EcoPoint_BrianBarreraRomero

## Autor

**Brian** - [Brian-Zzz-d](https://github.com/Brian-Zzz-d)
