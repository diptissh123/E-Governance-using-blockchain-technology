package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Model.Applications;
import com.Model.Scheme;
import com.Services.ApplicationService;
import com.Services.SchemeService;

@RestController
@RequestMapping("/E-Governance")
@CrossOrigin("*")
public class applicationController {
	
	
    @Autowired
    private ApplicationService applicationService;
    
    // Citizen applies for scheme
    @PostMapping("/apply")
    public Applications applyScheme(
            @RequestBody Applications application) {
    	System.out.println(application);


        return applicationService.applyScheme(application);
    }
    
    
    @GetMapping("/my-applications/{userId}")
    public List<Applications> getMyApplications(
            @PathVariable Long userId) {

        return applicationService.getApplicationsByUserId(userId);
    }
    
    

    
    
    // Officer/Admin views all applications
    @GetMapping("/applications")
    public List<Applications> getAllApplications() {

        return applicationService.getAllApplications();
    }
    
    
    
	@PutMapping("/approve/{id}")
	public Applications approveApplication(
	        @PathVariable Long id) {

	    return applicationService.approveApplication(id);
	    

	}

	@PutMapping("/reject/{id}")
	public Applications rejectApplication(
	        @PathVariable Long id) {

	    return applicationService.rejectApplication(id);
	}
}
