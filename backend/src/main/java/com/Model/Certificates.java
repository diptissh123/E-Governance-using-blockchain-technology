package com.Model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

@Entity
public class Certificates {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private long certificateNumber;
	private long studentName;
	private Date issueDate;
	private String hashValue;
	private String certificateType;
	private String fullName;
	private String fatherName;
	private String motherName;
	private String aadhaar;
	private String mobile;
	private String address;
	private String annualIncome;
	private String caste;
	private String subCaste;
	private String birthPlace;
	private LocalDate birthDate;
	private String status;
	private LocalDate applicationDate;
	private String certificateFile;
	private String verificationStatus;
	private String verificationRemarks;
	private LocalDate verificationDate;
	
	@ManyToOne
	@JoinColumn(name="verifiedBy")
	private Users verifiedOfficer;
	private String rationCard;

	private String incomeProof;

	private String casteProof;

	private String residenceProof;

	private String hospitalCertificate;
	
	
	 
	@Transient
	private Long userId;
	
	@ManyToOne
    @JoinColumn(name = "userId")
    private Users user;
	
	 	public String getRationCard() {
		return rationCard;
	}
	public void setRationCard(String rationCard) {
		this.rationCard = rationCard;
	}
	public String getIncomeProof() {
		return incomeProof;
	}
	public void setIncomeProof(String incomeProof) {
		this.incomeProof = incomeProof;
	}
	public String getCasteProof() {
		return casteProof;
	}
	public void setCasteProof(String casteProof) {
		this.casteProof = casteProof;
	}
	public String getResidenceProof() {
		return residenceProof;
	}
	public void setResidenceProof(String residenceProof) {
		this.residenceProof = residenceProof;
	}
	public String getHospitalCertificate() {
		return hospitalCertificate;
	}
	public void setHospitalCertificate(String hospitalCertificate) {
		this.hospitalCertificate = hospitalCertificate;
	}
		public String getVerificationStatus() {
		return verificationStatus;
	}
	public void setVerificationStatus(String verificationStatus) {
		this.verificationStatus = verificationStatus;
	}
	public String getVerificationRemarks() {
		return verificationRemarks;
	}
	public void setVerificationRemarks(String verificationRemarks) {
		this.verificationRemarks = verificationRemarks;
	}
	public LocalDate getVerificationDate() {
		return verificationDate;
	}
	public void setVerificationDate(LocalDate verificationDate) {
		this.verificationDate = verificationDate;
	}
	public Users getVerifiedOfficer() {
		return verifiedOfficer;
	}
	public void setVerifiedOfficer(Users verifiedOfficer) {
		this.verifiedOfficer = verifiedOfficer;
	}

	 
	 

	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getCertificateFile() {
		return certificateFile;
	}
	public void setCertificateFile(String certificateFile) {
		this.certificateFile = certificateFile;
	}
	public String getCertificateType() {
		return certificateType;
	}
	public void setCertificateType(String certificateType) {
		this.certificateType = certificateType;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getMotherName() {
		return motherName;
	}
	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}
	public String getAadhaar() {
		return aadhaar;
	}
	public void setAadhaar(String aadhaar) {
		this.aadhaar = aadhaar;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAnnualIncome() {
		return annualIncome;
	}
	public void setAnnualIncome(String annualIncome) {
		this.annualIncome = annualIncome;
	}
	public String getCaste() {
		return caste;
	}
	public void setCaste(String caste) {
		this.caste = caste;
	}
	public String getSubCaste() {
		return subCaste;
	}
	public void setSubCaste(String subCaste) {
		this.subCaste = subCaste;
	}
	public String getBirthPlace() {
		return birthPlace;
	}
	public void setBirthPlace(String birthPlace) {
		this.birthPlace = birthPlace;
	}
	public LocalDate getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDate getApplicationDate() {
		return applicationDate;
	}
	public void setApplicationDate(LocalDate applicationDate) {
		this.applicationDate = applicationDate;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getCertificateNumber() {
		return certificateNumber;
	}
	public void setCertificateNumber(long certificateNumber) {
		this.certificateNumber = certificateNumber;
	}
	public long getStudentName() {
		return studentName;
	}
	public void setStudentName(long studentName) {
		this.studentName = studentName;
	}
	public Date getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(Date issueDate) {
		this.issueDate = issueDate;
	}
	public String getHashValue() {
		return hashValue;
	}
	public void setHashValue(String hashValue) {
		this.hashValue = hashValue;
	}
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	
	
	
}
