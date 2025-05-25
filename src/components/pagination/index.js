// components/Pagination.js
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Button from "../button";
import "./pagination.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  /***  Handles navigation to the previous page  ***/
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  /*** Handles navigation to the next page  ***/
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">

      {/* Previous Page Button */}
      <Button
        customClass="previous-btn"
        onClick={handlePrev}
        disabled={currentPage === 1}
        text="Previous"
        icon={<GrFormPrevious size="20px" />}
      />

      {/* Current Page Indicator */}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      
      {/* Next Page Button */}
      <Button
        customClass="next-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        text="Next"
        icon={<MdOutlineNavigateNext size="20px" />}
        iconPosition="right"
      />
    </div>
  );
};

export default Pagination;
