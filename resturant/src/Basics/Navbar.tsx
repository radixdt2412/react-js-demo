import React,{FC} from "react";
import { menuType } from "./menuApi";

interface parmsType{
  filterItem:(category: string) => void,
  menuList:string[]
}
const navbar:FC<parmsType> = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem:string) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;