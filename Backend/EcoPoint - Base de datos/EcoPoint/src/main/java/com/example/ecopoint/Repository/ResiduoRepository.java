package com.example.ecopoint.Repository;

import com.example.ecopoint.Model.Residuo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ResiduoRepository extends JpaRepository<Residuo, Long> {

    // Métodos personalizados requeridos por ResiduoController
    List<Residuo> findByNombreContainingIgnoreCase(String nombre);
    List<Residuo> findByCategoria(String categoria);
}