import { Route, Routes } from "react-router-dom";

// 준영님
import ProductList from './component/productlist'
import ProductBuy from './component/productbuy'

// 유경님
import Detail from "./component/Detail";
import Bidding from "./component/Bidding";
import Update from "./component/Update";
//Timer랑 Table은 Detail 안에 있음

//페이징 테스트
import ProductListPage from "./component/paging1";

const ProductMain = () => {
  return (
    <>
      <Routes> 
        <Route path='/list' element={<ProductList />} />
        <Route path='/buy' element={<ProductBuy />} />
        <Route path="/detail/:product_id" element={<Detail />} />
        {/* 여기를 detail쪽에서 설정한 변수랑 똑같이 맞춰야되니까 product_id로 */}
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/update/:product_id" element={<Update />} />
        {/* 페이징 샘플 컴포넌트 */}
        <Route path='/listpage' element={<ProductListPage />} />
      </Routes>
    </>
  );
};
export default ProductMain;
