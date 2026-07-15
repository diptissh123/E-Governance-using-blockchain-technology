package com.Model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class IssuedCertificate {

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name="certificate_id")
    private Certificates certificate;

    private String certificateNumber;

    private LocalDate issueDate;

    private String certificatePdf;

    private String qrCode;

    private String blockchainHash;

    private String blockchainTransactionId;

}
