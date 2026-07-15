package com.Services;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.stereotype.Service;


import com.Model.Scheme;
import com.Model.Users;
import com.Repository.UserRepository;



@Service
public class UserServices {
	
	@Autowired
	 private UserRepository repo;
	
	public Users saveUser(Users user) {
		user.setRole("CITIZEN");
		return repo.save(user);
	}

	 public Users login(String email, String password) {
	        return repo.findByEmailAndPassword(email, password);
	    }
	 
	 public List<Users> getAllCitizens() {

		    return repo.findByRole("CITIZEN");
		}

	 public List<Users> getAllOfficers() {
		// TODO Auto-generated method stub
		return repo.findByRole("OFFICER");
	 }

	 public Users saveOfficer(Users officer) {
		 officer.setRole("OFFICER");
		return repo.save(officer);
	 }

	    public Users getProfile(Long id) {
	        
				
					return repo.findById(id)
					        .orElseThrow(() ->
					                new RuntimeException("User not found"));
				
	

}}
