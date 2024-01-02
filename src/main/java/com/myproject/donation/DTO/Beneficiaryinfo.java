package com.myproject.donation.DTO;

public class Beneficiaryinfo {
  private String beneEmail;
  private String benePasswd;
  private String beneName;
  private int benePhone;
  private int ssn1;
  private int ssn2;
  private String beneAddress;
  private String beneWalletAddr;
  public String getBeneEmail() {
    return beneEmail;
  }
  public void setBeneEmail(String beneEmail) {
    this.beneEmail = beneEmail;
  }
  public String getBenePasswd() {
    return benePasswd;
  }
  public void setBenePasswd(String benePasswd) {
    this.benePasswd = benePasswd;
  }
  public String getBeneName() {
    return beneName;
  }
  public void setBeneName(String beneName) {
    this.beneName = beneName;
  }
  public int getBenePhone() {
    return benePhone;
  }
  public void setBenePhone(int benePhone) {
    this.benePhone = benePhone;
  }
  public int getSsn1() {
    return ssn1;
  }
  public void setSsn1(int ssn1) {
    this.ssn1 = ssn1;
  }
  public int getSsn2() {
    return ssn2;
  }
  public void setSsn2(int ssn2) {
    this.ssn2 = ssn2;
  }
  public String getBeneAddress() {
    return beneAddress;
  }
  public void setBeneAddress(String beneAddress) {
    this.beneAddress = beneAddress;
  }
  public String getBeneWalletAddr() {
    return beneWalletAddr;
  }
  public void setBeneWalletAddr(String beneWalletAddr) {
    this.beneWalletAddr = beneWalletAddr;
  }
}
