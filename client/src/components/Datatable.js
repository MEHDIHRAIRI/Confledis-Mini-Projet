import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
const DataTable = () => {
  const [data, setData] = useState();
  const columns = [
    {
      title: "Name",
      field: "Name",
    },
    {
      title: "Price",
      field: "Price",
    },
    {
      title: "Quality",
      field: "Quality",
    },
  ];
  return (
    <div
      style={{
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "50px",
      }}
    >
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <br />
      <div>
        <MaterialTable
          title="Products List"
          data={data}
          columns={columns}
          options={{ exportButton: true }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DataTable;
