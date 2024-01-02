package com.myproject.donation;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.donation.DTO.Userinfo;
import com.myproject.donation.Mapper.UserinfoMapper;


@RequestMapping("/api")
@RestController
public class RestApiController {
  
  @Autowired
  private UserinfoMapper usermapper;

  // 회원가입하기
  @PostMapping(value = "/SignupFromReact")
  public String signup(@RequestBody Map<String, Object> data){
    
    // React에서 회원가입 시도한 데이터 가지고 오기
    String useremail = (String) data.get("email");
    String userpasswd = (String)data.get("password");


    Userinfo userinfo = new Userinfo(useremail,userpasswd);

    usermapper.SignupUser(userinfo);
  
    return "Signup Success";
  }

  // 수혜자 전용 회원가입하기
  @PostMapping(value = "/BeneficialySignup")
  public String BeneficialySignup(@RequestBody Map<String, Object> data){
    
    System.out.println(data);
    // React에서 회원가입 시도한 데이터 가지고 오기
    //String useremail = (String) data.get("email");
    //String userpasswd = (String)data.get("password");

  
    return "Signup Success";
  }












  // 로그인 하기
  @PostMapping(value = "/LoginFromReact")
  public String login(@RequestBody Map<String, Object> data){
    
    // React에서 로그인 시도한 데이터 가지고 오기
    String useremail = (String) data.get("email");
    String userpasswd = (String)data.get("password");

    Userinfo userinfo = usermapper.GetUserinfoForLogin(useremail);
    if(userinfo.getUseremail().equals(useremail) && userinfo.getUserpasswd().equals(userpasswd)){
      return "Login Success";
    }else{
      return "Login Failure";
    }    
  }

  // 지갑 주소 등록하기
  @PostMapping(value = "/RegisterWalletAddrFromReact")
  public String RegisterWallet(@RequestBody Map<String,Object> data) {
      System.out.println(data);
      String useremail = (String)data.get("email");
      String userwalletaddr = (String)data.get("wallet");
      
      Userinfo userinfo = new Userinfo();
      userinfo.setUserwalletaddr(userwalletaddr);
      userinfo.setUseremail(useremail);
      
      // Mapper 이용해서 DB에 저장
      usermapper.RegisterWalletAddr(userinfo);
      
      return "Register Success";
  }
  
}
