package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.TokenWebConfig.jwtAuthTokenConfig.JwtConfig;
import br.com.APIrest.APIrest.security.JwtRequisicao;
import br.com.APIrest.APIrest.security.UsuarioLogin;
import br.com.APIrest.APIrest.service.ServiceUsuariosDetailsImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class ControllerUsuariosLogin {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtConfig jwtConfig;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody UsuarioLogin usuarioLogin) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(usuarioLogin.getUsername(), usuarioLogin.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = this.jwtConfig.generateJwtToken(authentication);

        ServiceUsuariosDetailsImplement userDetails = (ServiceUsuariosDetailsImplement) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtRequisicao(
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getNome(),
                userDetails.getSobrenome(),
                roles,
                jwt));
    }
}