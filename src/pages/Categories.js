import { useEffect, useState } from 'react';
import request from '../util/helper';
import DataTableCategory from '../DataTable/DataTableCategory';

export default function Categories() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);
    console.log(category)

    const getCategory = async () => {
        const response = await request("Category/GetAll", "get")
        setCategory(response)
    }

    return (
        <DataTableCategory data={category} itemsPerPage={5} reloadCategory={getCategory}/>
    )
}
