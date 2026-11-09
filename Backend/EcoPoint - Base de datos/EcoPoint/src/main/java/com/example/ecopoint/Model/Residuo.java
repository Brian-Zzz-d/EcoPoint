package com.example.ecopoint.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank; // <-- Agregar esta importación
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "residuos")
public class Residuo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idResiduo;

    @NotBlank(message = "El nombre del residuo no puede estar vacío") // <-- Validación
    private String nombre;

    @NotBlank(message = "La categoría no puede estar vacía") // <-- Validación
    private String categoria;

    @ManyToMany(mappedBy = "residuosBuscados")
    @JsonIgnore
    private Set<Usuario> usuarios = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "residuo_punto",
            joinColumns = @JoinColumn(name = "id_residuo"),
            inverseJoinColumns = @JoinColumn(name = "id_punto")
    )
    private Set<PuntoLimpio> puntosLimpios = new HashSet<>();

    public Residuo() {}

    public Integer getIdResiduo() { return idResiduo; }
    public void setIdResiduo(Integer idResiduo) { this.idResiduo = idResiduo; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    public Set<Usuario> getUsuarios() { return usuarios; }
    public void setUsuarios(Set<Usuario> usuarios) { this.usuarios = usuarios; }
    public Set<PuntoLimpio> getPuntosLimpios() { return puntosLimpios; }
    public void setPuntosLimpios(Set<PuntoLimpio> puntosLimpios) { this.puntosLimpios = puntosLimpios; }
}