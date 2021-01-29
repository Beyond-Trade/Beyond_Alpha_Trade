// import React from "react";
// import ReactPaginate from 'react-paginate';
// function PaginationComponent({data}:any){
//     const getPages=()=>{
//         const buttons=data.map((item:any,index:any)=>(
//             <button>{index + 1}</button>
//         ))
//         return buttons;
//     }
//     return(
//     //     <div className="flex justify-center items-center mt-4"> <ReactPaginate
//     //     previousLabel={'previous'}
//     //     nextLabel={'next'}
//     //     breakLabel={'...'}
//     //     breakClassName={'break-me'}
//     //     pageCount={3}
//     //     marginPagesDisplayed={2}
//     //     pageRangeDisplayed={5}
//     //     // onPageChange={this.handlePageClick}
//     //     containerClassName={'pagination'}
//     //     // subContainerClassName={'pages pagination'}
//     //     activeClassName={'active'}
//     //   /> </div>
//     <ReactPaginate
//     previousLabel={'<'}
//     nextLabel={'>'}
//     breakLabel={"...."}
//     breakClassName={'p-2 border'}
//     pageCount={30}
//     marginPagesDisplayed={2}
//     pageRangeDisplayed={1}
//     // onPageChange={this.handlePageClick}
//     containerClassName={'flex p-4 justify-center items-center mt-4'}
//     nextClassName={"bg-customBlack-500 text-white py-2 px-3  rounded"}
//     previousClassName={"bg-customBlack-500 text-white py-2 px-3 rounded border-0"}
//     pageLinkClassName={"p-2 border m-1"}
//     activeClassName={"bg-customBlack-500 text-white border-black m-1"}
//     // pageClassName={"bg-customBlack-50 rounded mx-1"}
//     // pageLinkClassName={"p-2 bg-customBlack-50"}
//     // activeClassName={"bg-customBlack-550 text-white"}
//     // subContainerClassName={'pages pagination'}
// /> 

//     )
// }
// export default PaginationComponent;


import { ceil } from "lodash";
import * as React from "react";
import GeneralButton from "../../atomic/GeneralButton";

interface IProps {
  data: any;
  pageSize: number;
  onChange: Function;
}

function Pagination({ data, pageSize, onChange }: IProps) {
    const [activePage, setActive] = React.useState(1)
  const pageNumber = ceil(data.length / pageSize);
  let pages: number[] = [];
  for (let i = 0; i < pageNumber; i++) {
    pages.push(i);
  }
  const handleChange = (page:any) => {
      if(page > pageNumber){
          return;
      }
      if(page < 1){
          return;
      }
      const tempData = [...data]
    //   const index = (page*pageSize)-1
      const index = ((page-1)*pageSize)

      const records:any = tempData.splice(index, pageSize)
      onChange(records)
      setActive(page)
  }

  return (
    <div className="flex justify-end">
        <GeneralButton
          submitting={false}
          submit={()=>handleChange(activePage-1)}
          textValue={"Prev"}
          otherClasses="mx-1 p-1 text-white bg-customBlack-500"
        />
      {/* <button
        type="button"
        className="focus:outline-none p-1 border border-secondaryGray text-secondaryGray mx-1"
        onClick={()=>handleChange(activePage-1)}
      >
        Prev
      </button> */}
      {pages.map((item, index) => (
          <GeneralButton
          submitting={false}
          submit={()=>handleChange(index+1)}
          textValue={index + 1}
          otherClasses={`mx-1 p-2 text-white ${activePage === index + 1 ? "bg-customBlack-500":"bg-customBlack-500"}`}
        />
        // <button
        //   type="button"
        //   className="focus:outline-none p-1 border border-secondaryGray text-secondaryGray mx-1"
        //   onClick={()=>handleChange(index+1)}
        // >
        //   {index + 1}
        // </button>
      ))}
      <GeneralButton
          submitting={false}
          submit={()=>handleChange(activePage+1)}
          textValue={"Next"}
          otherClasses="mx-1 p-1 text-white bg-customBlack-500"
        />
      {/* <button
        type="button"
        className="focus:outline-none p-1 border border-secondaryGray text-secondaryGray mx-1"
        onClick={()=>handleChange(activePage+1)}
      >
        Next
      </button> */}
    </div>
  );
}

export default Pagination;