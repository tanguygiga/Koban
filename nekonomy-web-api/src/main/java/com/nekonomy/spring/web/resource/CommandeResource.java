package com.nekonomy.spring.web.resource;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nekonomy.model.Commande;
import com.nekonomy.model.CommandeComplete;
import com.nekonomy.model.CommandePizza;
import com.nekonomy.model.StatutCommande;
import com.nekonomy.spring.web.repository.ICommandePizzaRepository;
import com.nekonomy.spring.web.repository.ICommandeRepository;

/**
 * Resource Commande.
 */
@RestController
@RequestMapping("/commandes")
public class CommandeResource {

	@Autowired
	private ICommandeRepository commandeDao;
	@Autowired
	private ICommandePizzaRepository commandePizzaDao;

	@RequestMapping(method = RequestMethod.GET)
	public List<Commande> listAllCommandes() {
		List<Commande> list = this.commandeDao.findAll();
		return list;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void ajouterCommande(@RequestBody CommandeComplete commandeComplete) {
		commandeComplete.setDateCommande(LocalDateTime.now());
		commandeComplete.setStatutCommande(StatutCommande.NON_TRAITE);

		this.commandeDao.save(commandeComplete.getCommande());
		for (CommandePizza cp : commandeComplete.getCommandesPizza()) {
			cp.getId().setCommande(commandeComplete.getCommande());
			System.out.println(cp);
			this.commandePizzaDao.save(cp);
		}
	}
}
