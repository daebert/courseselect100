import React from "react";
import BinIcon from "../../assets/icons/BinIcon";

type DeleteEntityProps = {
  onDeleteClick: () => void;
};

function DeleteEntity({ onDeleteClick }: DeleteEntityProps): JSX.Element {
  return (
    <div>
      {" "}
      <BinIcon onClick={onDeleteClick} />
    </div>
  );
}

export default DeleteEntity;
