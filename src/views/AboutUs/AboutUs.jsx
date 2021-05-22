import React from "react";
import "./AboutUs.css";
import { Desktop, Mobile, Tablet } from "../../components/Responsive/Reponsive";
import nzcb from "../../assets/images/Partners/NZCB.png";

function AboutUs() {
  const renderItem01 = () => {
    return (
      <div className="item-content">
        <div className="item-img">
          <img src={nzcb} alt="1" />
        </div>
      </div>
    );
  };
  const renderItem02 = () => {
    return (
      <div className="item-content">
        <div className="about-us-title">AMAZON GOOGLE</div>
        <div className="about-us-subtitle">Director</div>
        <div className="about-us-subtitle">
          LBP (Licensed Building Practitioner)
        </div>

        <div className="about-us-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat
          aperiam architecto aspernatur eius obcaecati deserunt blanditiis, hic
          expedita velit nihil. Eius illo omnis error quod voluptatum, quam
          dignissimos cumque.
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          praesentium possimus at voluptatum obcaecati repellendus magni
          provident optio impedit ipsam repudiandae quo vitae magnam, adipisci
          dolore nihil recusandae, ratione consectetur.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          iure itaque in, perferendis molestiae ullam laboriosam. Voluptatem
          dolor cupiditate ullam reiciendis tempore voluptatibus delectus, aut
          debitis porro praesentium eos harum?
        </div>
      </div>
    );
  };
  const renderItem03 = () => {
    return (
      <div className="item-content">
        <div className="item-img">
          <img src={nzcb} alt="1" />
        </div>
        <div className="about-us-text">
          <div className="about-us-title">AMAZON GOOGLE</div>
          <div className="about-us-subtitle">Director</div>
          <div className="about-us-subtitle">
            LBP (Licensed Building Practitioner)
          </div>
          <div className="about-us-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga.
            Consequatur rerum quis tempore nemo magnam molestiae placeat,
            temporibus ducimus nulla ipsam nostrum alias dicta repellat velit
            minus minima repellendus.
          </div>
        </div>
      </div>
    );
  };
  const renderItem04 = () => {
    return (
      <div className="item-content">
        <div className="item-img">
          <img src={nzcb} alt="1" />
        </div>
        <div className="about-us-text">
          <div className="about-us-title">AMAZON GOOGLE</div>
          <div className="about-us-subtitle">Director</div>
          <div className="about-us-subtitle">
            LBP (Licensed Building Practitioner)
          </div>
          <div className="about-us-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            voluptates sapiente animi modi odio, alias quaerat dolorum autem
            nostrum doloremque exercitationem ipsa, esse voluptas voluptatem et
            repellendus iure, ab recusandae!
          </div>
        </div>
      </div>
    );
  };
  const renderItem05 = () => {
    return (
      <div className="item-content">
        <div className="item-img">
          <img src={nzcb} alt="1" />
        </div>
        <div className="about-us-text">
          <div className="about-us-title">AMAZON GOOGLE</div>
          <div className="about-us-subtitle">Director</div>
          <div className="about-us-subtitle">
            LBP (Licensed Building Practitioner)
          </div>
          <div className="about-us-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            rem expedita quam possimus doloremque eius quaerat qui nesciunt
            recusandae. Sint exercitationem quis quisquam eaque! Aperiam odit
            laboriosam illum rerum delectus?
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="about-us">
      <div className="page-header">About Us</div>
      <div className="about-us-text">
        CB Group has completed countless renovations and home improvements in
        Auckland. Our focus and determination are both solely centred around
        you, the client. Your satisfaction is what makes us tick, and is the
        driving force that helps us to create and renovate the most stunning
        spaces.
        <br />
        With your vision and our expertise, you can be sure that your home
        renovation will capture your heart.
        <br />
        If you are looking for home improvements in Aucklands areas, then House
        Renovation London is your premier choice. Not only do we cover full
        house renovations, house extensions and loft conversions, but we also
        fit in brand new kitchens and bathrooms. We are also able to take on
        smaller scale projects such as painting & decorating, tiling or
        plastering.
      </div>

      <div className="page-header">Our team</div>
      <div className="about-us-content">
        <Desktop>
          <div className="grid3">
            <div className="col-w1">{renderItem01()}</div>
            <div className="col-w2">{renderItem02()}</div>
          </div>
          <div className="grid3">
            <div className="col-w1">{renderItem03()}</div>
            <div className="col-w1">{renderItem04()}</div>
            <div className="col-w1">{renderItem05()}</div>
          </div>
        </Desktop>

        <Tablet>
          <div className="grid1">
            <div className="col-w1">{renderItem01()}</div>
            <div className="col-w1">{renderItem02()}</div>
          </div>
          <div className="grid2">
            <div className="col-w1">{renderItem03()}</div>
            <div className="col-w1">{renderItem04()}</div>
            <div className="col-w1">{renderItem05()}</div>
          </div>
        </Tablet>

        <Mobile>
          <div className="grid1">
            <div className="col-w1">{renderItem01()}</div>
            <div className="col-w1">{renderItem02()}</div>
            <div className="col-w1">{renderItem03()}</div>
            <div className="col-w1">{renderItem04()}</div>
            <div className="col-w1">{renderItem05()}</div>
          </div>
        </Mobile>
      </div>
    </div>
  );
}

export default AboutUs;
