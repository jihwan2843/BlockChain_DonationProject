package com.myproject.donation.Mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.myproject.donation.DTO.Userinfo;

@Mapper
public interface UserinfoMapper {
  @Insert("Insert into userinfo(useremail, userpasswd) values(#{useremail},#{userpasswd})")
  public void SignupUser(Userinfo userinfo);
  
  @Select("select * from userinfo where useremail=#{useremail}")
  public Userinfo GetUserinfoForLogin(@Param("useremail") String email);

  // 지갑 주소값이 default이기 때문에 등록한 지갑주소 값으로 수정하기 userwalletaddr
  @Update("update userinfo set userwalletaddr=#{userwalletaddr} where useremail=#{useremail}")
  public void RegisterWalletAddr(Userinfo userinfo);
}
