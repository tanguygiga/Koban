package com.nekonomy.spring.web.repository;


import com.nekonomy.model.CommandePizza;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ICommandePizzaRepository extends JpaRepository<CommandePizza, Integer> {

}
