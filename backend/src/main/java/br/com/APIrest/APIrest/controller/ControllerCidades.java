package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CidadesDto;
import br.com.APIrest.APIrest.service.ServiceCidades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/cidades")
public class ControllerCidades {

    @Autowired
    ServiceCidades service;

    @GetMapping
    public ResponseEntity<List<CidadesDto>> findAllCidades() {
        List<CidadesDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CidadesDto> findCidadesById(@PathVariable Integer id) {
        CidadesDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCidades(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<CidadesDto> inserCidades(@RequestBody CidadesDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CidadesDto> updateCidades(@PathVariable Integer id, @RequestBody CidadesDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
