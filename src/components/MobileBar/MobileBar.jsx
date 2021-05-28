import { useState, useEffect } from "react";
import "./MobileBar.css";
import { menuData } from "../../data/menu";
import { FaBars, FaTimes, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileBar = () => {
  const [isItemOpen, setIsItemOpen] = useState(false);
  const [isSubItemOpen, setIsSubItemOpen] = useState(false);
  const [subItems, setSubItems] = useState("");
  const [subItemHeader, setSubItemHeader] = useState("");

  useEffect(() => {
    // console.log("1");
    document.body.style.overflow = "auto";
    return () => {
      // console.log("2");
    };
  }, []);

  const isItemOpenHandler = () => {
    if (isItemOpen) {
      document.body.style.overflow = "auto";
      setIsSubItemOpen(false);
      setIsItemOpen(false);
    } else {
      document.body.style.overflow = "hidden";
      setIsItemOpen(true);
    }
  };

  const isSubItemOpenHandler = (text, subs) => {
    console.log("subitem", subs);

    if (subs !== undefined) {
      let temp = subs.map((sub) => {
        return (
          <Link key={sub.text} className="mobilebar-link" to={sub.link}>
            <div
              className="mobilebar-subitem"
              onClick={() => isItemOpenHandler()}
            >
              {sub.text}
            </div>
          </Link>
        );
      });

      setSubItemHeader(text);
      setSubItems(temp);

      setIsSubItemOpen(!isSubItemOpen);
    } else {
      setIsSubItemOpen(false);
      setIsItemOpen(true);
    }
  };

  // ITEM
  const renderItem = () => {
    return (
      <div>
        <div className="mobilebar-header" onClick={() => isItemOpenHandler()}>
          <FaTimes />
          <div className="mobilebar-header-text">CBGROUP</div>
          <div></div>
        </div>
        <div className="mobilebar-item-content">
          {menuData.map((item) => {
            return item.subs !== undefined ? (
              <div key={item.text} className="mobilebar-link">
                <div
                  className="mobilebar-item"
                  onClick={() => isSubItemOpenHandler(item.text, item.subs)}
                >
                  {item.text}

                  <div>{item.subs !== undefined ? <FaAngleRight /> : ""}</div>
                </div>
              </div>
            ) : (
              <Link key={item.text} className="mobilebar-link" to={item.link}>
                <div
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
      <div>
        <div
          className="mobilebar-header"
          onClick={() => isSubItemOpenHandler()}
        >
          <FaTimes />
          <div className="mobilebar-header-text">{subItemHeader}</div>
          <div></div>
        </div>
        <div className="mobilebar-subitem-content">{subItems}</div>
      </div>
    );
  };

  // HEADER
  const renderHeader = () => {
    return (
      <div className="mobilebar-header" onClick={() => isItemOpenHandler()}>
        <FaBars />
        CBGROUP
        <div></div>
      </div>
    );
  };

  const renderMenu = () => {
    return isItemOpen ? (
      <div className="mobilebar-modal">
        <div className="mobilebar-modal-scrollable">
          <div className="mobilebar-modal-content">
            {/* Item */}
            {isSubItemOpen ? renderSubItem() : renderItem()}
            {/* <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              voluptatum officiis molestiae excepturi facilis, nemo iure
              sapiente fugit amet deserunt illum voluptates earum. Sequi sit
              tempora non quisquam! Distinctio, fuga.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              consectetur, voluptatibus exercitationem quod iusto molestias nisi
              officiis illo asperiores, ea atque quam ab at fuga! Est voluptatum
              ex nesciunt! Eius.
            </div> */}
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  };

  return (
    <div className="mobilebar">
      {/* SubItem */}
      {/* {renderSubItem()} */}

      {/* Item */}
      {/* {renderItem()} */}

      {/* Header */}
      {renderHeader()}

      {renderMenu()}
    </div>
  );
};

export default MobileBar;
