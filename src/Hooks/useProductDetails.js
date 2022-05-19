import { useEffect, useState } from "react";

const useProductDetail = (inventoryId) => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://camera-warehouse.herokuapp.com/product/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, [inventoryId]);
  return [detail, setDetail];
};

export default useProductDetail;
