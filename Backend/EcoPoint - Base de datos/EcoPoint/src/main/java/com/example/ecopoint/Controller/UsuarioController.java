package com.example.ecopoint.Controller;

import com.example.ecopoint.Model.Usuario;
import com.example.ecopoint.Repository.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    // 1. GET /api/usuarios
    @GetMapping
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    // 2. GET /api/usuarios/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerPorId(@PathVariable Integer id) {
        return usuarioRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. GET /api/usuarios/existe?correo=ana@test.com
    @GetMapping("/existe")
    public Map<String, Boolean> existe(@RequestParam String correo) {
        return Map.of("exists", usuarioRepository.existsByCorreo(correo.toLowerCase()));
    }

    // 4. POST /api/usuarios (Registro con validación)
    @PostMapping
    public ResponseEntity<?> crear(@Valid @RequestBody Usuario usuario) {
        usuario.setCorreo(usuario.getCorreo().toLowerCase());
        if (usuarioRepository.existsByCorreo(usuario.getCorreo())) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Este correo ya está registrado."));
        }
        Usuario nuevo = usuarioRepository.save(usuario);
        return new ResponseEntity<>(nuevo, HttpStatus.CREATED);
    }

    // 5. POST /api/usuarios/login (devuelve token si los datos son correctos)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> datos) {
        Optional<Usuario> encontrado = usuarioRepository.findByCorreo(datos.get("correo").toLowerCase());
        if (encontrado.isEmpty() || !encontrado.get().getContrasena().equals(datos.get("contrasena"))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Correo o contraseña incorrectos."));
        }
        Usuario u = encontrado.get();
        return ResponseEntity.ok(Map.of(
                "token", UUID.randomUUID().toString(),
                "user", Map.of("nombre", u.getNombre(), "correo", u.getCorreo(), "cp", u.getCp())
        ));
    }

    // 6. PUT /api/usuarios/{id} (Actualizar nombre y código postal)
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizar(@PathVariable Integer id, @RequestBody Usuario detalles) {
        return usuarioRepository.findById(id)
                .map(usuarioExistente -> {
                    usuarioExistente.setNombre(detalles.getNombre());
                    usuarioExistente.setCp(detalles.getCp());
                    Usuario actualizado = usuarioRepository.save(usuarioExistente);
                    return ResponseEntity.ok(actualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // 7. DELETE /api/usuarios/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Si falla una validación (@NotBlank, @Email, @Size) devuelve 400 con el mensaje
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> validacion(MethodArgumentNotValidException ex) {
        String mensaje = ex.getBindingResult().getFieldErrors().get(0).getDefaultMessage();
        return ResponseEntity.badRequest().body(Map.of("message", mensaje));
    }
}