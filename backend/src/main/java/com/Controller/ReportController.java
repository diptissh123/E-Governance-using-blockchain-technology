package com.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Services.ReportService;
import com.dto.ReportResponse;

@RestController
@RequestMapping("/E-Governance")
@CrossOrigin(origins = "*")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping("/reports")
    public ResponseEntity<ReportResponse> getReports() {
        return ResponseEntity.ok(
                reportService.getReports());
    }
}