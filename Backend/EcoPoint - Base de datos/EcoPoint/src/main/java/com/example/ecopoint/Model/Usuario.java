package com.example.ecopoint.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    @NotBlank(message = "El nombre no puede estar vacío")
    private String nombre;

    @NotBlank(message = "El correo no puede estar vacío")
    @Email(message = "El formato del correo no es válido")
    private String correo;

    @NotBlank(message = "El código postal no puede estar vacío")
    private String cp;

    @NotBlank(message = "La contraseña no puede estar vacía")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // se recibe, pero nunca se devuelve en el JSON
    private String contrasena;

    @ManyToMany
    @JoinTable(
            name = "busquedas",
            joinColumns = @JoinColumn(name = "id_usuario"),
            inverseJoinColumns = @JoinColumn(name = "id_residuo")
    )
    @JsonIgnore
    private Set<Residuo> residuosBuscados = new HashSet<>();

    public Usuario() {}

    public Integer getIdUsuario() { return idUsuario; }
    public void setIdUsuario(Integer idUsuario) { this.idUsuario = idUsuario; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }
    public String getCp() { return cp; }
    public void setCp(String cp) { this.cp = cp; }
    public String getContrasena() { return contrasena; }
    public void setContrasena(String contrasena) { this.contrasena = contrasena; }
    public Set<Residuo> getResiduosBuscados() { return residuosBuscados; }
    public void setResiduosBuscados(Set<Residuo> residuosBuscados) { this.residuosBuscados = residuosBuscados; }
}