package com.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Model.Users;
import com.Services.UserServices;
import com.dto.LoginRequest;
import com.dto.LoginResponse;
import com.util.JwtUtil;

@RestController
@RequestMapping("/E-Governance")
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private UserServices userService;
	
	@PostMapping("/register")
	public Users savaUser(@RequestBody Users user) {
	
	return userService.saveUser(user);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(
	        @RequestBody LoginRequest request) {

	    Users user = userService.login(
	            request.getEmail(),
	            request.getPassword());

	    if(user == null) {

	        return ResponseEntity
	                .badRequest()
	                .body("Invalid Email Or Password");
	    }

	    String token = JwtUtil.generateToken(
	            user.getEmail(),
	            user.getRole());

	    LoginResponse response =
	            new LoginResponse(
	                    token,
	                    user.getRole(),
	                    user.getId());
	    
	    
	    return ResponseEntity.ok(response);
	}
}
