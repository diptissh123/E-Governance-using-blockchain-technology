package com.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Model.Certificates;
import com.dto.CertificateApplicationDTO;

public interface CertificateRepository extends JpaRepository<Certificates, Long>{

	long count();

	List<Certificates> findByUser_Id(Long userId);


}
