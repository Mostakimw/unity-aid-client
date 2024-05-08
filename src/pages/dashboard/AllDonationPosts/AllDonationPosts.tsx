import React, { useState } from "react";
import { Button, Modal, Table } from "antd";
import type { TableColumnsType } from "antd";
import {
  useDeleteSingleDonationPostMutation,
  useGetAllDonationPostQuery,
} from "../../../redux/features/donation/donationApi";
import { TDonation } from "../../../types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import UpdateDonationPost from "./UpdateDonationPost";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

// title, category, amount, totalreceived, edit, delete

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

const AllDonationPosts = () => {
  const { data: donationData } = useGetAllDonationPostQuery(undefined);
  const [deleteData] = useDeleteSingleDonationPostMutation(undefined);
  const [open, setOpen] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState(null);

  //! table data
  const tableData = donationData?.data?.map(
    ({ _id, title, category, amount, totalReceived }: TDonation) => ({
      key: _id,
      title,
      category,
      amount: `$${amount}`,
      totalReceived: `$${totalReceived}`,
    })
  );

  //! delete data handler
  const handlePostDelete = async (id: string) => {
    const res = await deleteData(id).unwrap();
    if (res.success) {
      toast.success("Deleted");
    }
  };

  // ! modal code start
  const showModal = (id: null) => {
    setOpen(true);
    setCurrentId(id);
  };

  const handleCancel = () => {
    setOpen(false);
    setCurrentId(null);
  };
  // ! modal code end

  //! column data
  const columns: TableColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Need Amount",
      dataIndex: "amount",
    },
    {
      title: "Total Received",
      dataIndex: "totalReceived",
    },
    {
      title: "Actions",
      render: (item) => {
        return (
          <div className="space-x-2">
            <Button
              size="small"
              className="text-[#001529]"
              onClick={() => showModal(item.key)}
            >
              <EditOutlined />
            </Button>

            <Button
              size="small"
              className="text-red-500"
              onClick={() => handlePostDelete(item.key)}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Modal open={open} onCancel={handleCancel} footer={null}>
        <UpdateDonationPost id={currentId} setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default AllDonationPosts;
