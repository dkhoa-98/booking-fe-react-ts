import React from "react";
import Banner from "../components/Banner/Banner";
import Featured from "../components/Featured/Featured";
import HeaderHome from "../components/HeaderHome/HeaderHome";
const HomePage: React.FC = () => {
  return (
    <div>
      <HeaderHome />
      <Banner />
      <Featured
        title="Địa điểm nổi bật"
        desc="Hãy bắt đầu chuyến hành trình chinh phục thế giới của bạn"
      />
      <Featured
        title="Vòng vòng phố thị Sài Gòn"
        desc="Top chỗ ở sạch đep, giá tốt tại TP.Hồ Chí Minh cho chuyến du lịch và công tác của bạn."
      />
      <Featured
        title="Lang thang Đà Lạt hoa gió"
        desc="Đến Đà Lạt cùng người thương để thấy cảm xúc vẫn vẹn nguyên như những lần đầu."
      />
    </div>
  );
};

export default HomePage;
