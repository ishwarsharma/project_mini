
//Through this I can do anything like CRUD;

import axios from "axios";

const API_URL="http://localhost:8080";

class ProductService{

postProduct(product){
    return axios.post(API_URL+"/postProduct",product);
}

getAllProduct(){
    return axios.get(API_URL+"/");
}
getProductById(id){
    return axios.get(API_URL+"/"+id);
}

deleteProduct(id){
return axios.get(API_URL+"/deleteProduct/"+id);
}

editProduct(product){
  return axios.post(API_URL+"/editProduct/"+product.id,product);
}



}

export default new ProductService;   