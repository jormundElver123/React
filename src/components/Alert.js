import React from "react";

export default function Alert(props) {
  //   const capitalizeFirstWord = (word) =>
  //   {
  //       const lower = word.toLowerCase();
  //       return lower.charAt(0).toUpperCase() + lower.slice(1);
  //   }

  return (
    <div style={{height: '30px'}}>
      {/* //if alert is not null then it will return the div part */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert">
          {/* {capitalizeFirstWord(props.alert.type)} :  */}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
