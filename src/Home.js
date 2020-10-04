import React from 'react';
import './Home.css';
import Product from './Product';

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
          price={1221}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>

        <Product
          id="2"
          title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
          price={7931}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>

        <Product
          id="7"
          title="Samsung Galaxy Note 8 N950 Factory Unlocked Phone 64GB Midnight Black (Renewed)"
          price={47931}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31MOhFUAM6L._AC_SX368_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="PlayStation 4 Pro 1TB Console - Call of Duty: Modern Warfare Bundle "
          price={42410}
          rating={5}
          image="https://m.media-amazon.com/images/I/811lXXWxrdL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>

        <Product
          id="4"
          title="Apple AirPods with Charging Case (Wired) "
          price={34391}
          rating={5}
          image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>

        <Product
          id="5"
          title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless "
          price={12291}
          rating={5}
          image="https://m.media-amazon.com/images/I/81T70LF0wWL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor"
          price={1121}
          rating={5}
          image="https://m.media-amazon.com/images/I/81x+9uFY1QL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="8"
          title="Samsung Electronics UN43NU6900FXZA / UN43NU6950FXZA 4K Smart LED TV, 43inch (Renewed) "
          price={222391}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/512cwtGsBsL._AC_SX184_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="JBL Bar 5.1 4K Ultra HD 5.1-Channel Soundbar with True Wireless Surround Speakers (Renewed)"
          price={19921}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31ULMPPqZ9L._AC_US327_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="8"
          title="Samsung 75 Q60T QLED 4K UHD Smart TV with Alexa Built-in QN75Q60TAFXZA 2020 (Renewed) "
          price={1212391}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41IEawxibrL._AC_US327_FMwebp_QL65_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
