import { Link } from "react-router-dom";

const Domesticdonation = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center">
      <div className="border border-black w-full h-[500px] grid grid-cols-3 gap-5 p-3">
        <div className="border border-black">
          <div>asdfasdf</div>
          <Link to="/beneficiary">국내사업 종류</Link>
        </div>
        <div className="border border-black">국내사업 종류</div>
        <div className="border border-black">국내사업 종류</div>
        <div className="border border-black">국내사업 종류</div>
        <div className="border border-black">국내사업 종류</div>
        <div className="border border-black">국내사업 종류</div>
      </div>
    </div>
  );
};
export default Domesticdonation;
