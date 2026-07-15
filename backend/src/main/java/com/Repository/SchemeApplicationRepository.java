package com.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Model.Applications;


public interface SchemeApplicationRepository extends JpaRepository<Applications, Long>{

	List<Applications> findByUserId(Long userId);

	long countByStatus(String string);

	

}
