import { useEffect, useState } from 'react';
import request from '../util/helper';
import DataTableProduct from '../DataTable/DataTableProduct';

export default function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await request("Product/GetAll", "get")
        setProduct(response)
    }
    console.log(product)

    return (
        <DataTableProduct data={product} itemsPerPage={5} reloadProduct={getProduct}/>
      
    )
}
