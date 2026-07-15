package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Model.Scheme;
import com.Services.SchemeService;

@RestController
@RequestMapping("/E-Governance")
@CrossOrigin("*")
public class SchemeController {

    @Autowired
    private SchemeService schemeService;
    
    @PostMapping("/add")
    public Scheme saveScheme(@RequestBody Scheme scheme) {
        return schemeService.saveScheme(scheme);
    }

    @GetMapping("/schemes")
    public List<Scheme> viewSchemes() {

        return schemeService.getAllSchemes();
    }
    
    @GetMapping("/scheme/{id}")
    public Scheme getSchemeById(
            @PathVariable Long id) {

        return schemeService.findById(id);
    }

    
    @PutMapping("/update-scheme/{id}")
    public ResponseEntity<?> updateScheme(
            @PathVariable Long id,
            @RequestBody Scheme scheme) {

        return ResponseEntity.ok(
                schemeService.updateScheme(id, scheme));
    }
    
    @DeleteMapping("/delete-scheme/{id}")
    public ResponseEntity<String> deleteScheme(
            @PathVariable Long id) {

        schemeService.deleteScheme(id);

        return ResponseEntity.ok(
                "Scheme Deleted Successfully");
    }
  
}