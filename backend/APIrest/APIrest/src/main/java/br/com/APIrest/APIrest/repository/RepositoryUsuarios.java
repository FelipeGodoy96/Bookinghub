package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryUsuarios extends JpaRepository<Usuarios, Integer> {
    //Usuarios findByEmail(String email);
}
