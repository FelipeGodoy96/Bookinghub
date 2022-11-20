package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Usuarios;

import javax.persistence.Column;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UsuariosDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;

    //@NotBlank(message = "Campo obrigatório!")
    private String nome;
    private String sobrenome;

    //mail(message = "E-mail inválido")
    private String email;

    private String senha; //Criptografado

    private Set<ProdutosDto> produto = new HashSet<>();
    private Set<PapeisDto> papeis = new HashSet<>();

    public UsuariosDto() {
    }

    public UsuariosDto(Integer id, String nome, String sobrenome, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
    }

    public UsuariosDto(Usuarios usuarios) {
        id = usuarios.getId();
        nome = usuarios.getNome();
        sobrenome = usuarios.getSobrenome();
        email = usuarios.getEmail();
        senha = usuarios.getSenha();
        usuarios.getPapeis().forEach(papeis -> this.papeis.add(new PapeisDto(papeis)));
        usuarios.getProduto().forEach(produtos -> this.produto.add(new ProdutosDto(produtos)));

    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }
    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Set<PapeisDto> getPapeis() {
        return papeis;
    }
    public void setPapeis(Set<PapeisDto> papeis) {
        this.papeis = papeis;
    }

//    public Set<ReservasDto> getReserva() {
//        return reserva;
//    }
//    public void setReserva(Set<ReservasDto> reserva) {
//        this.reserva = reserva;
//    }
    public Set<ProdutosDto> getProduto() {
        return produto;
    }
    public void setProduto(Set<ProdutosDto> produto) {
        this.produto = produto;
    }
}

