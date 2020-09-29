import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        alt="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      ></img>

      <div className="home__row">
        <Product
          id="1"
          title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce "
          price={121}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>

        <Product
          id="2"
          title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
          price={731}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="iBUYPOWER Gaming PC Computer Desktop  "
          price={110}
          rating={5}
          image="https://m.media-amazon.com/images/I/819XYUimTuL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>

        <Product
          id="4"
          title="Apple AirPods with Charging Case (Wired) "
          price={391}
          rating={5}
          image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>

        <Product
          id="5"
          title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless "
          price={191}
          rating={5}
          image="https://m.media-amazon.com/images/I/81T70LF0wWL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor"
          price={111}
          rating={5}
          image="https://m.media-amazon.com/images/I/81x+9uFY1QL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
