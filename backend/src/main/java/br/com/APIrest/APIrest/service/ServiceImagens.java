package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ImagensDto;
import br.com.APIrest.APIrest.dto.ProdutosDto_Id;
import br.com.APIrest.APIrest.model.Imagens;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.repository.RepositoryImagens;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceImagens {

    @Autowired
    private RepositoryImagens repository;

    @Autowired
    private RepositoryProdutos repositoryProdutos;

    @Transactional(readOnly = true)
    public List<ImagensDto> findAll(){
        List<Imagens> list = repository.findAll();
        return list.stream().map(x -> new ImagensDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ImagensDto findById (Integer id) {
        Optional<Imagens> object = repository.findById(id);
        Imagens entity = object.get();
        return new ImagensDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public ImagensDto insert(ImagensDto dto) {
        Imagens entity = new Imagens();
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ImagensDto(entity);
    }

    @Transactional
    public ImagensDto update(Integer id, ImagensDto dto) {
        Imagens entity = repository.getReferenceById(id);
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ImagensDto(entity);
    }

    private void copyDtoForEntity(ImagensDto dto, Imagens entity) {
        entity.setTitulo(dto.getTitulo());
        entity.setUrl(dto.getUrl());

        ProdutosDto_Id produtosDtoId = dto.getProduto();
        Produtos produtos = repositoryProdutos.getReferenceById(produtosDtoId.getId());
        entity.setProdutos(produtos);
    }
}
