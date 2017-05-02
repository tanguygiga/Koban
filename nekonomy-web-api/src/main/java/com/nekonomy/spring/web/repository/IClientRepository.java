package com.nekonomy.spring.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nekonomy.model.Client;

public interface IClientRepository extends JpaRepository<Client, Integer> {
	
	Client findById(Integer id) ;

	Client findByEmailAndMotDePasse(String email, String motDePasse);
}
