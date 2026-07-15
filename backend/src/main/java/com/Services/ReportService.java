package com.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Repository.CertificateRepository;
import com.Repository.SchemeApplicationRepository;
import com.Repository.SchemeRepository;
import com.Repository.UserRepository;
import com.dto.ReportResponse;

@Service
public class ReportService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SchemeRepository schemeRepository;

    @Autowired
    private SchemeApplicationRepository applicationRepository;

    @Autowired(required = false)
    private CertificateRepository certificateRepository;

    public ReportResponse getReports() {

        ReportResponse report = new ReportResponse();

        report.setTotalCitizens(
                userRepository.countByRole("CITIZEN"));

        report.setTotalOfficers(
                userRepository.countByRole("OFFICER"));

        report.setTotalSchemes(
                schemeRepository.count());

        report.setTotalApplications(
                applicationRepository.count());

        report.setPendingApprovals(
                applicationRepository.countByStatus("PENDING"));

        if (certificateRepository != null) {
            report.setCertificatesIssued(
                    certificateRepository.count());
        }

        return report;
    }
}