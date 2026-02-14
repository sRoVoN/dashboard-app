import { ProductsResponse } from './../../types/products';



export const fetchProducts = async(
      page: number = 1,
      limit: number = 10
): Promise<ProductsResponse> => {
try {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
    if(! res.ok){
        throw new Error(`status : ${res.status} `)
    }
  const data : ProductsResponse = await res.json();
  return data;
  console.log(data)
    
} catch (error:any) {
    console.error("Error fetching products:", error);
    throw new Error(error?.massage || "Failed to fetch products")    
}
}