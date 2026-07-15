package com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.stereotype.Repository;

import com.Model.Users;


@Repository
public interface UserRepository extends JpaRepository<Users, Long>{

	Users findByEmailAndPassword(String email, String password);

	Users findByEmail(String email);

	List<Users> findByRole(String role);
	
	long countByRole(String role);
	
	

}
