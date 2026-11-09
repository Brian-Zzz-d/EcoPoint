package com.example.ecopoint.Controller;

import com.example.ecopoint.Model.Residuo;
import com.example.ecopoint.Repository.ResiduoRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residuos")
@CrossOrigin(origins = "http://localhost:8080")
public class ResiduoController {

    private final ResiduoRepository residuoRepository;

    public ResiduoController(ResiduoRepository residuoRepository) {
        this.residuoRepository = residuoRepository;
    }

    // 1. GET /api/residuos
    @GetMapping
    public List<Residuo> listar() {
        return residuoRepository.findAll();
    }

    // 2. GET /api/residuos/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Residuo> obtenerPorId(@PathVariable Long id) {
        return residuoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. GET /api/residuos/buscar?nombre=pila
    @GetMapping("/buscar")
    public List<Residuo> buscar(@RequestParam String nombre) {
        return residuoRepository.findByNombreContainingIgnoreCase(nombre);
    }

    // 4. GET /api/residuos/categoria/{categoria}
    @GetMapping("/categoria/{categoria}")
    public List<Residuo> porCategoria(@PathVariable String categoria) {
        return residuoRepository.findByCategoria(categoria);
    }

    // 5. POST /api/residuos (Crear con validación)
    @PostMapping
    public ResponseEntity<Residuo> crear(@Valid @RequestBody Residuo residuo) {
        Residuo nuevo = residuoRepository.save(residuo);
        return new ResponseEntity<>(nuevo, HttpStatus.CREATED);
    }

    // 6. PUT /api/residuos/{id} (Actualizar con validación)
    @PutMapping("/{id}")
    public ResponseEntity<Residuo> actualizar(@PathVariable Long id, @Valid @RequestBody Residuo detalles) {
        return residuoRepository.findById(id)
                .map(residuoExistente -> {
                    residuoExistente.setNombre(detalles.getNombre());
                    residuoExistente.setCategoria(detalles.getCategoria());
                    Residuo actualizado = residuoRepository.save(residuoExistente);
                    return ResponseEntity.ok(actualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // 7. DELETE /api/residuos/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (residuoRepository.existsById(id)) {
            residuoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}