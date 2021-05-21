import React from "react";
import "./Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Desktop, Tablet, Mobile } from "../../components/Responsive/Reponsive";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam architecto amet ad iusto laboriosam iste voluptatum temporibus, sunt a repellendus laudantium modi odit ut cum? Corporis porro iure necessitatibus.",
      author: "Steve Job",
      company: "Apple Inc",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, eumquisquam harum nemo pariatur blanditiis maiores dolorum repudiandae minima qui facere aliquam animi adipisci expedita eos, et praesentium accusantium porro!",
      author: "Bill Gate",
      company: "Microsoft Inc",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente distinctio aut deserunt maiores vitae possimus error nostrum adipisci, maxime earum itaque placeat et eaque quaerat neque nihil dolores unde.",
      author: "Donald Trum",
      company: "United State",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam architecto amet ad iusto laboriosam iste voluptatum temporibus, sunt a repellendus laudantium modi odit ut cum? Corporis porro iure necessitatibus.",
      author: "Samuel",
      company: "Family Software",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente distinctio aut deserunt maiores vitae possimus error nostrum adipisci, maxime earum itaque placeat et eaque quaerat neque nihil dolores unde.",
      author: "Peter Nevil",
      company: "Augen Software",
    },
  ];

  const renderItem = (text, author, company) => {
    return (
      <div className="testimonial-item">
        <div className="testimonial-icon">
          <FaQuoteLeft />
        </div>

        <div className="testimonial-text">{text}</div>

        <div className="testimonial-start">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div className="testimonial-author">{author}</div>
        <div className="testimonial-company">{company}</div>
      </div>
    );
  };

  return (
    <div className="testimonials">
      <div className="page-header">testimonials</div>
      <Mobile>
        <div className="grid1">
          {testimonials.map((item) => {
            return (
              <div className="col-w1">
                {renderItem(item.text, item.author, item.company)}
              </div>
            );
          })}
        </div>
      </Mobile>

      <Tablet>
        <div className="grid2">
          {testimonials.map((item) => {
            return (
              <div className="col-w1">
                {renderItem(item.text, item.author, item.company)}
              </div>
            );
          })}
        </div>
      </Tablet>

      <Desktop>
        <div className="grid2">
          {testimonials.map((item) => {
            return (
              <div className="col-w1">
                {renderItem(item.text, item.author, item.company)}
              </div>
            );
          })}
        </div>
      </Desktop>
    </div>
  );
};

export default Testimonials;
