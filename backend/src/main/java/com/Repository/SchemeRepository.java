package com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Model.Scheme;

public interface SchemeRepository extends JpaRepository<Scheme, Long> {
	
	long countByStatus(String status);

}
