import React from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import AsideComponent from "./AsideComponent";

export default function Aside() {
  return (
    <div className="px-[20px]  h-full py-3 ">
      <Link to="/Add">
        <AsideComponent variant="primary" icons={<IoAdd />} action="Add Task" />
      </Link>

      <Link to="/incomplete">
        <AsideComponent
          icons={<MdOutlineIncompleteCircle />}
          action="Incomplete"
          variant="secondary"
        />
      </Link>

      <Link to="/complete">
        <AsideComponent
          variant="defolt"
          icons={<GrCompliance />}
          action="Complete"
        />
      </Link>
      <Link to="/filter">
        <AsideComponent
          variant="primary"
          icons={<FaFilter />}
          action="Filter"
        />
      </Link>
    </div>
  );
}
