import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();


  const getApi = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(async (res) => {
        await setProduct(res.data.find((item) => item.id == id));
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
    <h1>Product Description</h1>
    <button onClick={() => navigate("/")} style={{cursor:"pointer", background:"black",color:"#fff",padding:"10px",borderRadius:"10px"}}>Ana sehifeye qayit</button>
      <div>
        { product&& (
          <>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>
              <h2>price: {product.price} $</h2>
            </div>
            <div>
              <h2>Category: {product.category.name} </h2>
            </div>
            <div>
              <img src={product.images[0]} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Detail;
