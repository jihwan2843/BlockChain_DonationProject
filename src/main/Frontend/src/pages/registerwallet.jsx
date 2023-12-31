import axios from "axios";
import MyprofileCategory from "../components/MyprofileCategory";
import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

const Registerwallet = ({ email }) => {
  const { sdk } = useSDK();
  const [wallet, setWallet] = useState();

  const onClickRegisterMetaMask = async () => {
    try {
      const account = await sdk?.connect();
      setWallet(account[0]);
      console.log(wallet);
      RegisterWalletAddr();
    } catch (error) {
      console.log(error);
    }
  };

  const RegisterWalletAddr = () => {
    axios({
      method: "post",
      url: "/api/RegisterWalletAddrFromReact",
      data: {
        wallet: wallet,
        email: email,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5">
        <MyprofileCategory />
      </div>
      <div className="bg-yellow-100 w-4/5">
        <div className="border border-black min-h-screen mt-20 p-10 ml-2">
          <h2 className="text-xl font-semibold mb-4">
            메타마스크 지갑 주소 등록
          </h2>
          <h4>등록을 누르기 전에 메타마스크에 로그인 해주세요</h4>
          <div
            onClick={onClickRegisterMetaMask}
            className="bg-blue-100 border mt-4 border-black rounded-lg pl-3 py-2 w-16 "
          >
            등록
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registerwallet;
