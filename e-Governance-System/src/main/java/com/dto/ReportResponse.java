package com.dto;

public class ReportResponse {

    private long totalCitizens;
    private long totalOfficers;
    private long totalSchemes;
    private long totalApplications;
    private long approvdApplications;
    private long pendingApprovals;
    private long rejectedApplication;
    
    
    
    
    public long getApprovdApplications() {
		return approvdApplications;
	}
	public void setApprovdApplications(long approvdApplications) {
		this.approvdApplications = approvdApplications;
	}
	public long getRejectedApplication() {
		return rejectedApplication;
	}
	public void setRejectedApplication(long rejectedApplication) {
		this.rejectedApplication = rejectedApplication;
	}
	private long certificatesIssued;
	public long getTotalCitizens() {
		return totalCitizens;
	}
	public void setTotalCitizens(long totalCitizens) {
		this.totalCitizens = totalCitizens;
	}
	public long getTotalOfficers() {
		return totalOfficers;
	}
	public void setTotalOfficers(long totalOfficers) {
		this.totalOfficers = totalOfficers;
	}
	public long getTotalSchemes() {
		return totalSchemes;
	}
	public void setTotalSchemes(long totalSchemes) {
		this.totalSchemes = totalSchemes;
	}
	public long getTotalApplications() {
		return totalApplications;
	}
	public void setTotalApplications(long totalApplications) {
		this.totalApplications = totalApplications;
	}
	public long getPendingApprovals() {
		return pendingApprovals;
	}
	public void setPendingApprovals(long pendingApprovals) {
		this.pendingApprovals = pendingApprovals;
	}
	public long getCertificatesIssued() {
		return certificatesIssued;
	}
	public void setCertificatesIssued(long certificatesIssued) {
		this.certificatesIssued = certificatesIssued;
	}

    // Getters and Setters
    
}