package com.example.ecopoint.Controller;

import com.example.ecopoint.Model.PuntoLimpio;
import com.example.ecopoint.Repository.PuntoLimpioRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/puntos")
@CrossOrigin(origins = "http://localhost:5173")
public class PuntoLimpioController {

    private final PuntoLimpioRepository puntoRepository;

    public PuntoLimpioController(PuntoLimpioRepository puntoRepository) {
        this.puntoRepository = puntoRepository;
    }

    // GET /api/puntos
    @GetMapping
    public List<PuntoLimpio> listar() {
        return puntoRepository.findAll();
    }

    // POST /api/puntos
    @PostMapping
    public PuntoLimpio crear(@RequestBody PuntoLimpio punto) {
        return puntoRepository.save(punto);
    }
}