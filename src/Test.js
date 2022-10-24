import { useState } from "react";

export default function Test({ data }) {
  //   const { OPEN_ID, BZ_NM, SMPL_DESC, FD_CS } = data;
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="container">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.BZ_NM.toLowerCase().includes(
                searchTerm.toLowerCase()
              ) ||
              val.SMPL_DESC.toLowerCase().includes(
                searchTerm.toLowerCase()
              )
            ) {
              return val;
            }
          })
          .map((x, key) => {
            return (
              <div key={key}>
                <p>{x.BZ_NM}</p>
                <p>{x.SMPL_DESC}</p>
                <p>{x.FD_CS}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
// else if (
//               val.sta_nm
//                 .toLowerCase()
//                 .includes(searchTerm.toLowerCase()) ||
//               val.sido_nm
//                 .toLowerCase()
//                 .includes(searchTerm.toLowerCase())
//             ) {
//               return val;
//             }
