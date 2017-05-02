package com.nekonomy.spring.web.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.nekonomy.model.Pizza;

public interface IPizzaRepository extends JpaRepository<Pizza, Integer> {

	Pizza findByCode(String code);

	@Modifying
	@Transactional
	@Query("select pizza from Pizza pizza where pizza.typePizza='PIZZA' and pizza.actif=true")
	List<Pizza> findPizzaActual();

	@Modifying
	@Transactional
	@Query("select pizza from Pizza pizza where pizza.typePizza='OUICHE' and pizza.actif=true")
	List<Pizza> findOuicheActual();

}
