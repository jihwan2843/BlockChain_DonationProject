const App = () => {
  return (
    <div className="bg-red-100 min-h-screen">
      <div className="bg-pink-300 h-16 flex ">
        <div className="bg-blue-100 w-4/5 flex flex-row">
          <div>로고</div>
          <div>국내 후원하기</div>
          <div>해외 후원하기</div>
          <div>NFT 구매하기</div>
        </div>
        <div className="bg-green-100 w-1/5 flex flex-row">
          <div>로그인</div>
          <div>내 프로필</div>
        </div>
      </div>
    </div>
  );
};

export default App;
