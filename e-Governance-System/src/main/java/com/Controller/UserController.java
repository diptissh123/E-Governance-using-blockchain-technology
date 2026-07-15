package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Model.Scheme;
import com.Model.Users;
import com.Services.UserServices;

@RestController
@RequestMapping("/E-Governance")
public class UserController {

    @Autowired
    private UserServices userService;
    
    @GetMapping("/profile/{id}")
    public ResponseEntity<?> getProfile(
            @PathVariable Long id) {

        Users user = userService.getProfile(id);

        return ResponseEntity.ok(user);
    }

    @GetMapping("/citizens")
    public List<Users> getAllCitizens() {

        return userService.getAllCitizens();
    }
    
    
    @GetMapping("/officer")
    public List<Users> getAllOfficers() {

        return userService.getAllOfficers();
    }
    
    @PostMapping("/addOfficer")
    public Users saveOfficer(@RequestBody Users Officer) {
        return userService.saveOfficer(Officer);
    }
}