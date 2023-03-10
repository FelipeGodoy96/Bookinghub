package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.*;
import br.com.APIrest.APIrest.model.*;
import br.com.APIrest.APIrest.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import javax.persistence.PreRemove;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceProdutos {

    @Autowired
    private RepositoryProdutos repository;
    @Autowired
    private RepositoryCaracteristicas repositoryCaracteristicas;

    @Autowired
    private RepositoryCidades repositoryCidades;

    @Autowired
    RepositoryCategorias repositoryCategorias;

    @Autowired
    RepositoryReservas repositoryReservas;

    @Autowired
    RepositoryImagens repositoryImagens;

    @Transactional(readOnly = true)
    public List<ProdutosDto> findAll(){
        List<Produtos> list = repository.findAll();
        return list.stream().map(x -> new ProdutosDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProdutosDto findById (Integer id) {
        Optional<Produtos> object = repository.findById(id);
        Produtos entity = object.get();
        return new ProdutosDto(entity);
    }
    @PreRemove
    public void delete(Integer id) {
        Produtos produtosReturn = repository.findById(id).orElseThrow(EntityNotFoundException::new);
        produtosReturn.getCaracteristicas().clear();
        produtosReturn.getImagens().clear();
        Categorias categoriasReturn = repositoryCategorias.findById(produtosReturn.getCategorias().getId())
                .orElseThrow(EntityNotFoundException::new);

        categoriasReturn.getProduto().remove(produtosReturn);
        repositoryCategorias.save(categoriasReturn);
        Cidades cidadesReturn = repositoryCidades.findById(produtosReturn.getCidades().getId())
                .orElseThrow(EntityNotFoundException::new);

        cidadesReturn.getProdutos().remove(produtosReturn);
        repositoryCidades.save(cidadesReturn);
        repository.saveAndFlush(produtosReturn);
        repository.delete(produtosReturn);
    }

    @Transactional
    public ProdutosDto insert(ProdutosDto dto) {
        Produtos entity = new Produtos();
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ProdutosDto(entity);
    }

    @Transactional
    public ProdutosDto update(Integer id, ProdutosDto dto) {
        Produtos entity = repository.getReferenceById(id);
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ProdutosDto(entity);
    }

    private void copyDtoForEntity(ProdutosDto dto, Produtos entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());

        entity.getCaracteristicas().clear();
        for (CaracteristicasDto caracteristicasDto : dto.getCaracteristicas()) {
            Caracteristicas caracteristicas = repositoryCaracteristicas.getReferenceById(caracteristicasDto.getId());
            entity.getCaracteristicas().add(caracteristicas);
        }
        entity.getImagens().clear();
        for(ImagensDto imagensDto : dto.getImagens()) {
             Imagens imagens = repositoryImagens.getReferenceById(imagensDto.getId());
             entity.getImagens().add(imagens);
            }
        entity.getReserva().clear();
        for (ReservasDto_Id reservasDtoId : dto.getReserva()) {
            Reservas reservas = repositoryReservas.getReferenceById(reservasDtoId.getId());
            entity.getReserva().add(reservas);
        }
        CidadesDto_Id cidadesDtoId = dto.getCidades();
        Cidades cidades = repositoryCidades.getReferenceById(cidadesDtoId.getId());
        entity.setCidades(cidades);

        CategoriasDto_Id categoriaDtoId = dto.getCategoria();
        Categorias categorias = repositoryCategorias.getReferenceById(categoriaDtoId.getId());
        entity.setCategorias(categorias);

    }
}
