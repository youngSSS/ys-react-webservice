import React from "react";
import { DataGrid } from "@material-ui/data-grid";

import "../styles/routes/Board.scss";

function Board() {
  const columns = [
    { field: "id", headerName: "ID", flex: 1, headerAlign: "center" },
    { field: "title", headerName: "Title", flex: 4, headerAlign: "center" },
    { field: "writer", headerName: "Writer", flex: 2, headerAlign: "center" },
    { field: "date", headerName: "Date", type: "date", flex: 2, headerAlign: "center" },
  ];

  const rows = [
    { id: 1, title: "Snow", writer: "Jon", date: "20200421" },
    { id: 2, title: "Lannister", writer: "Cersei", date: "20200421" },
    { id: 3, title: "Lannister", writer: "Jaime", date: "20200421" },
    { id: 4, title: "Stark", writer: "Arya", date: "20200421" },
    { id: 5, title: "Targaryen", writer: "Daenerys", date: "20200421" },
    { id: 6, title: "Melisandre", writer: "Audi", date: "20200421" },
    { id: 7, title: "Clifford", writer: "Ferrara", date: "20200421" },
    { id: 8, title: "Frances", writer: "Rossini", date: "20200421" },
    { id: 9, title: "Roxie", writer: "Harvey", date: "20200421" },
  ];

  function handleRowClick(rowData) {
    // console.log(rowData);
    // TODO: rowData를 이용하여 해당 글의 세부 페이지로 이동
  }

  return (
    <div className="page">
      <div className="board-search">
        <input className="board-search-bar" />
        <button className="board-search-btn">검색</button>
      </div>

      <div className="board">
        <DataGrid rows={rows} columns={columns} pageSize={5} disableColumnMenu={true} hideFooterSelectedRowCount={true} onRowClick={(data) => handleRowClick(data.row)} />
      </div>
    </div>
  );
}

export default Board;
