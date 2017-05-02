package com.nekonomy.spring.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nekonomy.model.Ingredient;

public interface IIngredientRepository extends JpaRepository<Ingredient, Integer> {

}