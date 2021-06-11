import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
const DataTable = () => {
  const [data, setData] = useState();
  const [addFlag, setAddFlag] = useState(false);
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Price",
      field: "price",
    },
    {
      title: "Quantity",
      field: "quantity",
    },
  ];
  useEffect(async () => {
    const products = await axios
      .get("http://localhost:5000/Product")
      .then(function (response) {
        setData(response.data);
        if (data) {
          setAddFlag(false);
        }
      });
  }, [addFlag]);
  const deleteProduct = async (id) => {
    const uri = "http://localhost:5000/Product";
    await axios
      .delete(`${uri}/${id}`)
      .then((response) => console.log(response));
    setAddFlag(true);
  };
  const addProduct = async (product) => {
    await axios
      .post("http://localhost:5000/Product/add", product)
      .then((response) => console.log(response));
    setAddFlag(true);
  };
  const updateProduct = async (updated) => {
    const uri = "http://localhost:5000/Product";
    await axios.patch(`${uri}/${updated._id}`, updated);
    setAddFlag(true);
  };
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
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  addProduct(newRow);
                  resolve();
                }, 2000);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                deleteProduct(selectedRow._id);
                resolve();
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                updateProduct(updatedRow);
                resolve();
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
          }}
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
