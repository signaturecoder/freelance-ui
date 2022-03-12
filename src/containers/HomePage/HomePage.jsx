import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Header, StyledButton, Footer, ContactUs } from "../../components";
import { servicesArray } from "../../Utitlity/utility";
import pricingArray from "../../Utitlity/BuisnessParams.json";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

import disney_logo from "../../images/disney_logo.svg";
import netflix_logo from "../../images/netflix_logo.svg";
import amazon_logo from "../../images/amazon_logo.svg";
import hotstar_logo from "../../images/hotstar_logo.svg";
import twenty_century_fox_logo from "../../images/twenty_century_fox_logo.svg";
import sony_logo from "../../images/sony_logo.svg";
import universal_pictures_logo from "../../images/universal_pictures_logo.svg";
import warner_bros_logo from "../../images/warner_bros_logo.svg";
import bottom_open_arrow_logo from "../../images/bottom_open_arrow_logo.svg";
import how_it_works from "../../images/how_it_works.svg";
import sign_up_icon from "../../images/sign_up_icon.svg";
import upload_file_icon from "../../images/upload_file_icon.svg";
import analytics_icon from "../../images/analytics_icon.svg";
import group_232 from "../../images/group_232.png";

const ServiceBox = ({ uniqueId, title, imgPath, imgDesc }) => (
  <div className="servicebox__container" key={uniqueId}>
    <div className="servicebox__inner__icon__wrapper">
      <img className="inner__icon--img" src={imgPath} alt={imgDesc}></img>
    </div>
    <Typography variant="subtitle2" className="inner__icon--title">
      {title}
    </Typography>
  </div>
);

const renderSericeBox = (servicesArray) => {
  return servicesArray.map((box) => (
    <Grid item key={box.id}>
      <ServiceBox
        uniqueId={box.id}
        title={box.title}
        imgPath={box.imgPath}
        imgDesc={box.imgDesc}
      />
    </Grid>
  ));
};

const PricingBox = ({ uniqueId, title, priceInDollar }) => (
  <div className="pricingbox__container" key={uniqueId}>
    <Typography variant="body" align="center" gutterBottom component="div">
      {title}
    </Typography>
    <Typography variant="h5" align="center" gutterBottom component="div">
      ${priceInDollar}
    </Typography>
    <StyledButton variant="outlined" btnName="GET STARTED" />
  </div>
);

const renderPricingBox = (pricingArray) => {
  return pricingArray.map((priceBox) => (
    <Grid item key={priceBox.id} mt={2}>
      <PricingBox
        uniqueId={priceBox.id}
        title={priceBox.title}
        priceInDollar={priceBox.priceInDollar}
      />
    </Grid>
  ));
};
const HomePage = () => {
  const history = useHistory();

  const handleDemoBtnClicked = () => {
    history.push("/screenplay");
  };
  return (
    <div className="homepage">
      <section className="homepage__wrapper" id="home">
        <Header />
        {/* Title */}
        <div className="homepage_inner_wrapper">
          <Typography variant="h3" align="center" color="primary">
            AI Revolution in the
          </Typography>
          <Typography variant="h3" align="center" color="primary">
            Entertainment Industry
          </Typography>

          <Typography
            variant="paragraph"
            align="center"
            style={{
              wordWrap: "break-word",
              width: "65%",
              marginTop: "5%",
            }}
          >
            <strong>AI MOVIES</strong> helps filmmakers make intelligent
            decisions during the pre-production stage of different works that
            include movies, web series, music videos, albums, trailers, posters
            etc.
          </Typography>

          {/* Demo Button */}
          <div style={{ marginTop: "3%" }}>
            <StyledButton
              variant="outlined"
              btnName="GET FREE DEMO"
              btnClicked={handleDemoBtnClicked}
            />
          </div>
          <div className="icons">
            <img className="icon" src={disney_logo} alt="Disney_logo"></img>
            <img className="icon" src={netflix_logo} alt="Netflix_logo"></img>
            <img className="icon" src={amazon_logo} alt="Amazon_logo"></img>
            <img className="icon" src={hotstar_logo} alt="Hotstar logo "></img>
            <img
              className="icon"
              src={twenty_century_fox_logo}
              alt="20th-century-fox logo"
            ></img>
            <img className="icon" src={sony_logo} alt="sony logo"></img>
            <img
              className="icon"
              src={universal_pictures_logo}
              alt="Universal_Pictures_logo"
            ></img>
            <img
              className="icon"
              src={warner_bros_logo}
              alt="Warner_Bros logo"
            ></img>
          </div>
          <img
            style={{ width: "1em" }}
            src={bottom_open_arrow_logo}
            alt="Bottom Open Arrow  logo"
          ></img>
        </div>
      </section>
      <section id="howitworks" className="section-2">
        <article className="section-2__article">
          <Typography
            variant="paragraph"
            align="center"
            style={{
              wordWrap: "break-word",
              width: "75%",
              marginTop: "3%",
            }}
          >
            Our insights based on cutting edge{" "}
            <strong>Artificial Intelligence</strong> help the producers analyze
            the screenplay, music, and many more crafts to know deep insights
            about the various attributes of the craft.{" "}
          </Typography>
          <Typography
            variant="paragraph"
            align="center"
            style={{
              wordWrap: "break-word",
              width: "75%",
              marginTop: "2%",
            }}
          >
            We help you create an opportunity for enhancing craft, speeding up
            operations of the production house and give you insights to make
            your work financially viable. Individual craftsmen and production
            houses can increase their opportunity of success with{" "}
            <strong>AI MOVIES</strong>
          </Typography>
        </article>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          style={{
            wordWrap: "break-word",
            width: "100%",
            paddingTop: "5%",
          }}
        >
          How it works
        </Typography>
        <div className="section-2__inner">
          <div className="section-2__inner--container">
            <img
              className="section-2__inner--image"
              src={how_it_works}
              alt="music_player.png"
            ></img>
            <div className="section-2__inner--bottom">
              <div className="bottom-box">
                <div
                  className="avatar__container"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <img
                    className="avatar__icon"
                    src={sign_up_icon}
                    alt="Sign Up Icon"
                    style={{ width: "30px" }}
                  ></img>
                </div>
                <div className="bottom-box--right">
                  <p>Sign Up</p>
                  <p className="avatar__icon--description">
                    Sign up in just few steps
                  </p>
                </div>
              </div>
              <div className="bottom-box">
                <div className="avatar__container">
                  <img
                    className="avatar__icon"
                    src={upload_file_icon}
                    alt="Upload File Icon"
                    style={{ width: "30px" }}
                  ></img>
                </div>
                <div className="bottom-box--right">
                  <p>Upload</p>
                  <p className="avatar__icon--description">
                    Upload or Copy and Paste your Script
                  </p>
                </div>
              </div>
              <div className="bottom-box">
                <div className="avatar__container">
                  <img
                    className="avatar__icon"
                    src={analytics_icon}
                    alt="Analytics Icon"
                    style={{ width: "30px" }}
                  ></img>
                </div>
                <div className="bottom-box--right">
                  <p>Analyse</p>
                  <p className="avatar__icon--description">
                    Let our AI work for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services__section">
        <Typography
          variant="h3"
          component="h3"
          align="center"
          style={{
            wordWrap: "break-word",
            width: "100%",
            paddingTop: "5%",
          }}
        >
          Our Services
        </Typography>

        <div className="services__section--inner">
          <img
            className="services__img--left"
            src={group_232}
            alt="services group-232 "
          ></img>
          <div className="services__section--right">
            <h4 style={{ fontSize: "1.2em" }}>Screenplay Analytics</h4>
            <p
              style={{
                letterSpacing: "0.54px",
                color: " #F3F6F9",
                fontSize: "1.2em",
              }}
            >
              Helps writers and production houses know the success % of the
              screenplay. It also assists in knowing the factors that are
              impacting the success % and provides writers and production houses
              with tools and recommendations to interact and change the
              screenplay  dynamically to improve the success percentage.
            </p>
            <StyledButton
              variant="outlined"
              btnName="GET FREE DEMO"
              btnClicked={handleDemoBtnClicked}
            />
          </div>
        </div>
        <Typography
          variant="h5"
          component="h5"
          align="center"
          style={{
            wordWrap: "break-word",
            width: "100%",
            paddingTop: "3%",
          }}
        >
          Services Coming Soon...
        </Typography>
        <Grid container wrap="wrap" spacing={2} className="servicebox__wrapper">
          {renderSericeBox(servicesArray)}
        </Grid>
      </section>
      <section id="pricing" className="pricing__section">
        <Typography
          variant="h3"
          component="h3"
          align="center"
          style={{ wordWrap: "break-word" }}
        >
          Pricing
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="primary"
          style={{ width: "400px" }}
        >
          We make it simple for you. Try our Free Basic version and then contact
          us for more of what you see.
        </Typography>

        <Grid container spacing={2} className="pricingbox__wrapper">
          {renderPricingBox(pricingArray)}
        </Grid>
      </section>
      <section id="research" className="research__section">
        <Typography
          variant="h3"
          component="h3"
          align="center"
          style={{ wordWrap: "break-word", paddingBottom: "1%" }}
        >
          Research Paper
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          gutterBottom
          component="div"
          style={{ fontWeight: 700 }}
        >
          Application of Artificial Intelligence for Movie Script Analysis:
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          gutterBottom
          component="div"
          style={{ fontWeight: 700, paddingBottom: "1%" }}
        >
          {" "}
          A case of tollywood film Shatamanambhavti
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="primary"
          gutterBottom
          component="div"
          style={{ fontSize: "0.8em" }}
        >
          To combine movie data and social data with Artificial Intelligence(AI)
          for craft enhancement,
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="primary"
          gutterBottom
          component="div"
          style={{ fontSize: "0.8em", paddingBottom: "1%" }}
        >
          {" "}
          increasing operations speed, enable predictive forecasting and conduct
          risk management.
        </Typography>

        <StyledButton variant="outlined" btnName="DOWNLOAD" />
      </section>
      <ContactUs id="contact" />
      <Footer />
    </div>
  );
};

export default HomePage;
