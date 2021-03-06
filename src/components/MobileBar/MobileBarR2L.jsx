import { useState } from "react";
import "./MobileBarR2L.css";
import { menuData } from "../../data/menu";
import { FaBars, FaTimes, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileBarR2L = () => {
  const [isItemOpen, setIsItemOpen] = useState(false);
  const [isSubItemOpen, setIsSubItemOpen] = useState(false);
  const [subItems, setSubItems] = useState("");
  const [subItemHeader, setSubItemHeader] = useState("");

  const isItemOpenHandler = () => {
    if (isItemOpen) {
      setIsSubItemOpen(false);
      setIsItemOpen(false);
    } else {
      setIsItemOpen(true);
    }
  };

  const isSubItemOpenHandler = (text, subs) => {
    console.log(`->> ${subs}`);
    if (subs !== undefined) {
      let temp = subs.map((sub) => {
        return (
          <Link className="mobilebar-link" to={sub.link}>
            <div
              key={sub.text}
              className="mobilebar-subitem"
              onClick={() => isItemOpenHandler()}
            >
              {sub.text}
            </div>
          </Link>
        );
      });

      console.log(temp);

      setSubItemHeader(text);
      setSubItems(temp);

      setIsSubItemOpen(!isSubItemOpen);
    } else {
      console.log(`else`);
      setIsSubItemOpen(false);
      setIsItemOpen(true);
    }
  };

  // ITEM
  const renderItem = () => {
    return (
      <div
        className={
          isItemOpen
            ? isSubItemOpen
              ? "mobilebar-item-overlay subitem-open"
              : "mobilebar-item-overlay open"
            : "mobilebar-item-overlay close"
        }
      >
        <div className="mobilebar-header" onClick={() => isItemOpenHandler()}>
          <FaTimes />
          <div className="mobilebar-header-text">CBGROUP</div>
          <div></div>
        </div>
        <div className="mobilebar-item-content">
          {menuData.map((item) => {
            return item.subs !== undefined ? (
              <Link className="mobilebar-link">
                <div
                  key={item.text}
                  className="mobilebar-item"
                  onClick={() => isSubItemOpenHandler(item.text, item.subs)}
                >
                  {item.text}

                  <div>{item.subs !== undefined ? <FaAngleRight /> : ""}</div>
                </div>
              </Link>
            ) : (
              <Link className="mobilebar-link" to={item.link}>
                <div
                  key={item.text}
                  className="mobilebar-item"
                  onClick={() => isItemOpenHandler()}
                >
                  {item.text}

                  <div>{item.subs !== undefined ? <FaAngleRight /> : ""}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  // SUBITEM
  const renderSubItem = () => {
    return (
      <div
        className={
          isSubItemOpen
            ? "mobilebar-subitem-overlay open"
            : "mobilebar-subitem-overlay close"
        }
      >
        <div
          className="mobilebar-header"
          onClick={() => isSubItemOpenHandler()}
        >
          <FaTimes />
          <div className="mobilebar-header-text">{subItemHeader}</div>
          <div></div>
        </div>
        <div className="mobilebar-subitem-content">
          {/* <div className="mobilebar-subitem">--{subItemHeader}--</div> */}
          {subItems}
        </div>
      </div>
    );
  };

  return (
    <div className="mobilebar">
      {/* SubItem */}
      {renderSubItem()}

      {/* Item */}
      {renderItem()}

      <div className="mobilebar-header" onClick={() => isItemOpenHandler()}>
        <FaBars />
      </div>
    </div>
  );
};

export default MobileBarR2L;
