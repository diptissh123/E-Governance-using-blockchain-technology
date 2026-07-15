package com.Services;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.Certificates;
import com.Model.Users;
import com.Repository.CertificateRepository;
import com.Repository.UserRepository;
import com.dto.CertificateApplicationDTO;

@Service
public class CertificateService {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CertificateRepository certificateRepo;


public Certificates saveCertificate(Certificates application) {



    application.setStatus("Pending");

    Users user = userRepository.findById(application.getUserId())
            .orElseThrow(() -> new RuntimeException("User not found"));

    application.setUser(user);
    return certificateRepo.save(application);
}

	public Certificates approve(Long id) {

	    Certificates application =
	    		certificateRepo.findById(id)
	            .orElseThrow(() ->
	                    new RuntimeException("Not Found"));

	    application.setStatus("Approved");
	    
	    // Generate certificate number
	    application.setCertificateNumber(System.currentTimeMillis());

	    // Issue date
	    application.setIssueDate(new Date());

	    
	    return certificateRepo.save(application);
	}
	
	public Certificates reject(Long id) {

	    Certificates application =
	    		certificateRepo.findById(id)
	            .orElseThrow(() ->
	                    new RuntimeException("Not Found"));

	    application.setStatus("Rejected");

	    return certificateRepo.save(application);
	}

	public List<CertificateApplicationDTO> getMyCertificates(Long userId) {

		List<Certificates> certificates = certificateRepo.findByUser_Id(userId);

	    return certificates.stream().map(c -> {
	        CertificateApplicationDTO dto = new CertificateApplicationDTO();

	        dto.setId(c.getId());
	        dto.setCertificateType(c.getCertificateType());
	        dto.setApplicationDate(c.getApplicationDate());
	        dto.setStatus(c.getStatus());

	        return dto;
	    }).collect(Collectors.toList());
	}

	public List<Certificates> getAllCertificates() {
		// TODO Auto-generated method stub
		return certificateRepo.findAll();
	}


	
}
