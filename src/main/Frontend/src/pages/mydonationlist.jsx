import MyprofileCategory from "../components/MyprofileCategory";

const Mydonationlist = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5">
        <MyprofileCategory />
      </div>
      <div className="bg-yellow-100 w-4/5">
        <div className="border border-black min-h-screen mt-20 ml-2">
          <table className="bg-blue-100 flex flex-col justify-center items-center border border-black">
            <tr>
              <th>No</th>
              <th>구분</th>
              <th>후원종류</th>
              <th>납부일</th>
              <th>후원금액</th>
            </tr>
            <tr>
              <td>1</td>
              <td>국내</td>
              <td>국내후원</td>
              <td>오늘</td>
              <td>100000</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Mydonationlist;
