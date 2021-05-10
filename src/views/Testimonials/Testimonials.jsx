import React from "react";
import "./Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Desktop, Tablet, Mobile } from "../../components/Responsive/Reponsive";

const Testimonials = () => {
  const renderItem = () => {
    return (
      <div className="testimonials-item">
        <div className="content">
          <div className="icon">
            <FaQuoteLeft />
          </div>
          <div>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              laudantium, accusamus saepe aspernatur error repellendus.
              Blanditiis, recusandae, laboriosam sapiente aliquid repellendus,
              quo reprehenderit perspiciatis iste omnis culpa adipisci
              exercitationem facere!
            </div>
            <br />
          </div>
        </div>

        <div className="footer">
          <div className="subtitle">TradeMe (Founder)</div>
          <div className="title">John Robinson</div>
        </div>
      </div>
    );
  };

  return (
    <div className="testimonials">
      <div className="header">testimonials</div>
      <Mobile>
        <div className="testimonials-content mobile">
          {renderItem()}
          {renderItem()}
          {renderItem()}
          {renderItem()}
          {renderItem()}
        </div>
      </Mobile>

      <Tablet>
        <div className="testimonials-content tablet">
          {renderItem()}
          {renderItem()}
          {renderItem()}
          {renderItem()}
          {renderItem()}
        </div>
      </Tablet>

      <Desktop>
        <div className="testimonials-content desktop">
          {renderItem()}
          {renderItem()}
          {renderItem()}
          {renderItem()}
          {renderItem()}
        </div>
      </Desktop>
    </div>
  );
};

export default Testimonials;
