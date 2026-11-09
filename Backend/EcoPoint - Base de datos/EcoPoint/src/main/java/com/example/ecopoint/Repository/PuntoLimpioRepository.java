package com.example.ecopoint.Repository;

import com.example.ecopoint.Model.PuntoLimpio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PuntoLimpioRepository extends JpaRepository<PuntoLimpio, Long> {
}