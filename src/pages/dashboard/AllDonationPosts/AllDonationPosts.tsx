import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    // filters: [
    //   {
    //     text: 'London',
    //     value: 'London',
    //   },
    // ],
  },
];

// title, category, amount, totalreceived, edit, delete

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

const AllDonationPosts = () => {
  const tableData = data.map((item) => ({
    key: item.key,
    name: item.name,
    age: item.age,
    address: item.address,
  }));
  
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AllDonationPosts;
