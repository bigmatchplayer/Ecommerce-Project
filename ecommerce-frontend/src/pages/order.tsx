import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";

import { Link } from "react-router-dom";

import { Column } from "react-table";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },{
    Header: "Quantity",
    accessor: "quantity",

  }
  ,{
    Header: "Amount",
    accessor: "amount",
    

  }
  ,{
    Header: "Status",
    accessor: "status",
    

  }
  ,{
    Header: "Action",
    accessor: "action",
    

  }
];

const Order = () => {

    const [rows]= useState<DataType[]>([

        {
            _id: "hjsjskak",
            amount: 7382,
            quantity: 7,
            discount: 323,
            status: <span className="red">Processing</span>,
            action: <Link to={"/order/hjsjskak"}>View</Link>,
          }


    ])
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length>6,
    

  )();
  return (
    <div className="container">
      <h1>My Orders</h1>

      {Table}
    </div>
  );
};

export default Order;
