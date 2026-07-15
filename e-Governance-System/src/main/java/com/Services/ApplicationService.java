package com.Services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.Applications;
import com.Model.Users;
import com.Repository.SchemeApplicationRepository;
import com.Repository.UserRepository;

@Service
public class ApplicationService {

    @Autowired
    private SchemeApplicationRepository repository;

    public Applications applyScheme(Applications application) {

        application.setApplicationDate(LocalDate.now());
        application.setStatus("Pending");

        return repository.save(application);
    }
    
    public Applications approveApplication(Long id) {

        Applications application =
                repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Application Not Found"));

        application.setStatus("Approved");

        return repository.save(application);
    }
    
    
    public Applications rejectApplication(Long id) {

        Applications application =
                repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Application Not Found"));

        application.setStatus("Rejected");

        return repository.save(application);
    }

	public List<Applications> getAllApplications() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	public List<Applications> getApplicationsByUserId(Long userId) {
		// TODO Auto-generated method stub
	    return repository.findByUserId(userId);
	}


}
