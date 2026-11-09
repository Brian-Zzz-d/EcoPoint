package com.example.ecopoint.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "puntos_limpios")
public class PuntoLimpio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPunto;

    private String direccion;
    private String horario;

    @ManyToMany(mappedBy = "puntosLimpios")
    @JsonIgnore
    private Set<Residuo> residuos = new HashSet<>();

    public PuntoLimpio() {}

    public Integer getIdPunto() { return idPunto; }
    public void setIdPunto(Integer idPunto) { this.idPunto = idPunto; }
    public String getDireccion() { return direccion; }
    public void setDireccion(String direccion) { this.direccion = direccion; }
    public String getHorario() { return horario; }
    public void setHorario(String horario) { this.horario = horario; }
    public Set<Residuo> getResiduos() { return residuos; }
    public void setResiduos(Set<Residuo> residuos) { this.residuos = residuos; }
}