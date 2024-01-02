import { Link } from "react-router-dom";

const Header = ({ isLogin, setIsLogin }) => {
  return (
    <div className="bg-pink-300 h-16 flex">
      <div className="bg-blue-100 w-4/5 flex flex-row items-center">
        <div className="border border-black mx-2 px-4">로고</div>
        <div className="flex flex-row gap-8 bg-yellow-100">
          <Link to="/domesticdonation">국내 후원하기</Link>
          <Link to="/international">해외 후원하기</Link>
          <div>NFT 구매하기</div>
        </div>
      </div>
      <div className="bg-green-100 w-1/5 flex flex-row items-center pl-4">
        {isLogin ? (
          <div
            className="border border-black mr-3"
            onClick={() => setIsLogin(false)}
          >
            로그아웃
          </div>
        ) : (
          <Link to="/login" className="border border-black mr-3">
            로그인
          </Link>
        )}
        {isLogin ? (
          <Link to="/myprofile" className="border border-black ml-3">
            MyProfile
          </Link>
        ) : (
          <div
            className="border border-black ml-3"
            onClick={() => alert("로그인을 해주세요")}
          >
            MyProfile
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
