import { useState } from "react";
import "./App01.css";

const App01 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    console.log("open");
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <div className={isOpen ? "overlay open" : "overlay close"}>
        <div onClick={() => closeHandler()}>X</div>
        <div className="overlay-content">
          <div>Item01</div>
          <div>Item02</div>
          <div>Item03</div>
          <div>Item04</div>
          <div>Item05</div>
        </div>
      </div>
      <div className="header" onClick={() => openHandler()}>
        &#9776;
      </div>
      <div className="content">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quos
          adipisci a deserunt, nisi ad maiores repudiandae iste alias earum quod
          explicabo tempora! Tempora veritatis, temporibus distinctio quod
          sapiente rerum!
        </div>
      </div>
      <div className="footer">3</div>
    </div>
  );
};

export default App01;
