package fr.pizzeria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

@Entity
public class Ingredient {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String nom;
	private Integer quantite;
	private Double prix;
	private Boolean archive;
	
	public Ingredient(){
		this.archive = false;
	}
	
	public Ingredient(String nom, Integer qte, Double prix){
		this();
		this.nom = nom;
		this.quantite = qte;
		this.prix = prix;
	}

	public Ingredient(Integer id, String nom, Integer qte, Double prix) {
		this(nom, qte, prix);
		this.id = id;
	}

	public Ingredient(String nom, Integer qte, Double prix, Boolean archi){
		this();
		this.nom = nom;
		this.quantite = qte;
		this.prix = prix;
		this.archive = archi;
	}
	
	public Ingredient(Integer id, String nom, Integer qte, Double prix, Boolean archi) {
		this(nom, qte, prix, archi);
		this.id = id;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Integer getQuantite() {
		return quantite;
	}

	public void setQuantite(Integer quantite) {
		this.quantite = quantite;
	}

	public Double getPrix() {
		return prix;
	}

	public void setPrix(Double prix) {
		this.prix = prix;
	}

	public Boolean getArchive() {
		return archive;
	}

	public void setArchive(Boolean archive) {
		this.archive = archive;
	}

	@Override
	public int hashCode() {
		return new HashCodeBuilder(17, 37).append(this.nom).toHashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == null) {
            return false;
        }
        if (obj == this) {
            return true;
        }
        if (obj.getClass() != getClass()) {
            return false;
        }
        Ingredient rhs = (Ingredient) obj;
        return new EqualsBuilder().append(this.nom, rhs.nom).isEquals();
	}
}
