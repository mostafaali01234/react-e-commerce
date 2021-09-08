import axios from "axios";
import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "./fetchAction";

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    //     fetch("https://course-api.com/react-store-products")
    //       .then((res) => console.log(res.data))
    //       .then((res) => {
    //         if (res.error) {
    //           throw res.error;
    //         }
    //         dispatch(fetchProductsSuccess(res.data));
    //         return res.data;
    //       })
    //       .catch((error) => {
    //         dispatch(fetchProductsError(error));
    //       });
    //   };

    axios
      .get("https://course-api.com/react-store-products")
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
