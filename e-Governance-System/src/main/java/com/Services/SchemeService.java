package com.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.Scheme;
import com.Repository.SchemeRepository;

@Service
public class SchemeService {

    @Autowired
    private SchemeRepository repository;
       
 

    public Scheme saveScheme(Scheme scheme) {
        return repository.save(scheme);
    }
    
    public List<Scheme> getAllSchemes() {
        return repository.findAll();
    }
    
    public Scheme updateScheme(Long id, Scheme updatedScheme) {

        Scheme scheme = repository.findById(id)
                .orElseThrow(() ->
                new RuntimeException("Scheme Not Found"));

        scheme.setSchemeName(updatedScheme.getSchemeName());
        scheme.setCategory(updatedScheme.getCategory());
        scheme.setDescription(updatedScheme.getDescription());
        scheme.setEligibility(updatedScheme.getEligibility());
        scheme.setBenefitAmount(updatedScheme.getBenefitAmount());
        scheme.setLastDate(updatedScheme.getLastDate());
        scheme.setStatus(updatedScheme.getStatus());

        return repository.save(scheme);
    }

    public Scheme findById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                new RuntimeException("Scheme Not Found"));
    }

    public void deleteScheme(Long id) {

        Scheme scheme = repository.findById(id)
                .orElseThrow(() ->
                new RuntimeException("Scheme Not Found"));

        repository.delete(scheme);
    }
	
}