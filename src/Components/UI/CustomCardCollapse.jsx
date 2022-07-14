import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CustomCardCollapse = ({
  header,
  children,
  className,
  defaultCollapse,
}) => {
  const [open, setOpen] = useState(defaultCollapse);

  return (
    <div className={`customCardCollapseContainer ${className || ""}`}>
      <div className="headerComponent">
        <div className="w-100 ">{header}</div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          className="arrowButton"
        >
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
      </div>
      <div className="cardBody">
        <Collapse in={open}>
          <div id="collapse-text">{children}</div>
        </Collapse>
      </div>
    </div>
  );
};

export default CustomCardCollapse;
