package com.nekonomy.spring.web.repository;


import com.nekonomy.model.Commande;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ICommandeRepository extends JpaRepository<Commande, Integer> {

}
