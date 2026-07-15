package com.Controller;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;


import org.springframework.core.io.UrlResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.Model.Certificates;
import com.Services.CertificateService;
import com.dto.CertificateApplicationDTO;

@RestController
@RequestMapping("/E-Governance")
@CrossOrigin("*")
public class CertificateController {
	
	@Autowired
	private CertificateService certificateService;
	
	@PostMapping("/apply-certificate")
	public Certificates saveCertificate(
	        @ModelAttribute Certificates application,
	        @RequestParam("document1") MultipartFile document1,
	        @RequestParam(value = "document2", required = false) MultipartFile document2)
	        throws IOException {

	    application.setApplicationDate(LocalDate.now());

	    String uploadDir = "C:/uploads/";

	    File folder = new File(uploadDir);
	    if (!folder.exists()) {
	        folder.mkdirs();
	    }

	    if (!document1.isEmpty()) {

	        String fileName = System.currentTimeMillis() + "_" + document1.getOriginalFilename();

	        document1.transferTo(new File(uploadDir + fileName));

	        switch (application.getCertificateType()) {

	            case "INCOME":
	                application.setRationCard(fileName);
	                break;

	            case "CASTE":
	                application.setRationCard(fileName);
	                break;

	            case "DOMICILE":
	                application.setResidenceProof(fileName);
	                break;

	            case "BIRTH":
	                application.setHospitalCertificate(fileName);
	                break;
	        }
	    }

	    if (document2 != null && !document2.isEmpty()) {

	        String fileName = System.currentTimeMillis() + "_" + document2.getOriginalFilename();

	        document2.transferTo(new File(uploadDir + fileName));

	        switch (application.getCertificateType()) {

	            case "INCOME":
	                application.setIncomeProof(fileName);
	                break;

	            case "CASTE":
	                application.setCasteProof(fileName);
	                break;
	        }
	    }

	    return certificateService.saveCertificate(application);
	}
	
	
	
	
	@GetMapping("/documents/{fileName}")
	public ResponseEntity<Resource> viewDocument(@PathVariable String fileName) throws IOException {

	    Path path = Paths.get("C:/uploads").resolve(fileName);

	    Resource resource = new UrlResource(path.toUri());

	    if (!resource.exists() || !resource.isReadable()) {
	        return ResponseEntity.notFound().build();
	    }

	    String contentType = Files.probeContentType(path);

	    if (contentType == null) {
	        contentType = "application/octet-stream";
	    }

	    return ResponseEntity.ok()
	            .contentType(MediaType.parseMediaType(contentType))
	            .header(HttpHeaders.CONTENT_DISPOSITION,
	                    "inline; filename=\"" + fileName + "\"")
	            .body(resource);
	}
	
	@GetMapping("/all-certificates")
	public List<Certificates> getAllCertificates() {
	    return certificateService.getAllCertificates();
	}

	@GetMapping("/my-certificates/{userId}") 
	public List<CertificateApplicationDTO>
	myCertificates(
	        @PathVariable Long userId) {

	    return certificateService.getMyCertificates(userId);
	}
	
	@PutMapping("/approve-certificate/{id}")
	public Certificates approve(
	        @PathVariable Long id) {

	    return certificateService.approve(id);
	    
	}

	@PutMapping("/reject-certificate/{id}")
	public Certificates reject(
	        @PathVariable Long id) {

	    return certificateService.reject(id);
	}
	
//	@GetMapping("/download-certificate/{id}")
//	public ResponseEntity<Resource>
//	downloadCertificate(
//	        @PathVariable Long id) {
//				return null;
//
//	}
}
