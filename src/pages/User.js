import React, { useEffect, useState } from "react";
import DataTableUser from "../DataTable/DataTableUser";
import request from "../util/helper";

const User = () => {

  const [user, setUSer] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await request("User/GetAll", "get")
    setUSer(res)
  }

  return <DataTableUser data={user} itemsPerPage={7} reloadNewUser={getUser} />
};

export default User;
