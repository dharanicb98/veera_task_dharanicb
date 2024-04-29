import React, { useEffect, useState } from "react";
import Table from "../../components/hkTable";
import PageHeader from "../../components/pageHeader";
import { getAllUsers } from "../../services/users";
import { BUTTON_STYLE, INPUT_STYLE } from "../../constants";

const TABLE_COLUMNS = [
  {
    fieldName: "id",
    headName: "ID",
    className: "w-[150px]",
  },
  {
    fieldName: "name",
    headName: "Name",
    className: "w-[200px]",
  },
  {
    fieldName: "age",
    headName: "Age",
    className: "w-[200px]",
  },
  {
    fieldName: "country",
    headName: "Country",
    className: "w-[200px]",
  },
  {
    fieldName: "email",
    headName: "Email",
    className: "w-[150px]",
  },
];

const UserTable = () => {
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState({ column_name: "id", column_value: "" });
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    getData();
  }, [filter]);

  async function getData() {
    try {
      const data = await getAllUsers(query);
      setRows(data);
    } catch (e) {
      alert(e?.message);
    }
  }

  const handleQuery = (e, type) => {
    let value = e.target.value;
    if (type === "select") {
      setQuery({ column_name: value, column_value: "" });
    } else {
      setQuery((prev) => ({ ...prev, column_value: value }));
    }
  };

  function handleClear() {
    setQuery({ column_name: "id", column_value: "" });
    setFilter((prev) => !prev);
  }

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter((prev) => !prev);
  };

  return (
    <div className="h-screen mx-10 mt-20">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center w-full m-3 mt-6">
        {" "}
        <PageHeader title="User Table" />
        <form onSubmit={handleFilter}>
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center w-full gap-3">
            <select
              className={`${INPUT_STYLE} text-sm h-[38px] md:h-[49px] md:text-lg w-[50%]`}
              onChange={(e) => handleQuery(e, "select")}
              value={query?.column_name}
            >
              <option value="id">ID</option>
              <option value="name">Name</option>
              <option value="age">Age</option>
              <option value="country">Country</option>
              <option value="email">Email</option>
            </select>

            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center w-full gap-3">
              <input
                value={query?.column_value}
                className={`border ${INPUT_STYLE} h-[38px] md:h-[49px] md:w-[250px] lg:w-[350px]`}
                onChange={(e) => handleQuery(e, "input")}
              />
              <div className="flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center gap-2">
                <button type={"submit"} className={`${BUTTON_STYLE}`}>
                  Filter
                </button>
                <button
                  type="button"
                  className={`${BUTTON_STYLE}`}
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {rows ? (
        <Table rows={rows} columns={TABLE_COLUMNS} />
      ) : (
        <div className="flex justify-center items-center h-screen text-black font-bold text-2xl">
          Sorry No Data Found
        </div>
      )}
    </div>
  );
};

export default UserTable;
