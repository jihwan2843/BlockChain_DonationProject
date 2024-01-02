import MyprofileCategory from "../components/MyprofileCategory";

const Myprofile = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5">
        <MyprofileCategory />
      </div>
      <div className="bg-yellow-100 w-4/5">
        <div className="border border-black min-h-screen mt-20 ml-2">right</div>
      </div>
    </div>
  );
};
export default Myprofile;
