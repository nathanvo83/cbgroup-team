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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias
        eaque, ad dolore veniam provident. Itaque vel vitae corrupti. Aliquam
        suscipit odit itaque debitis quos earum voluptas enim dolore numquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        quaerat tempora recusandae voluptates eaque aspernatur mollitia sequi
        iusto. Velit ipsam nulla perferendis totam ratione cum suscipit illo
        ipsum dolorem iusto.
      </div>
      <div className="about-us-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quas
        laborum consequuntur! Minima facere ipsa obcaecati iure similique ex,
        laudantium dolore quia rem voluptate laborum ea unde nisi ullam vel.
      </div>
      <div className="about-us-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quidem
        illum? Voluptatem alias possimus nihil unde dignissimos dolorum dolor
        expedita dicta incidunt velit culpa assumenda quia, adipisci quo
        temporibus voluptatum?
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
