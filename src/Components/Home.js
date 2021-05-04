import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import Sliders from "./Sliders";
import SliderLarge from "./SliderLarge";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

function Home() {
  const [indexCarousel, setIndexCarousel] = useState(0);

  if (indexCarousel === 6) {
    setIndexCarousel(1);
  } else if (indexCarousel === -1) {
    setIndexCarousel(6);
  }

  const tophandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="home_container">
        <span
          className="home_leftarrow"
          onClick={() => {
            setIndexCarousel(indexCarousel - 1);
          }}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 120, fill: "#9298a1" }} />
        </span>
        <span
          className="home_rightarrow"
          onClick={() => {
            setIndexCarousel(indexCarousel + 1);
          }}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 120, fill: "#9298a1" }} />
        </span>
        <img
          alt="carousel_image"
          className={indexCarousel === 0 ? "home_image" : "home_image_off"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/audible/BHM_Gateway_Blackphone_1500x600_v6._CB662267011_.jpg"
        />
        <img
          alt="carousel_image"
          className={indexCarousel === 1 ? "home_image" : "home_image_off"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-NzVjNGNkMzQt-w1500._CB658917691_.jpg"
        />
        <img
          alt="carousel_image"
          className={indexCarousel === 2 ? "home_image" : "home_image_off"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-ZmM5ODUxNTkt-w1500._CB661607392_.jpg"
        />
        <img
          alt="carousel_image"
          className={indexCarousel === 3 ? "home_image" : "home_image_off"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3822_TVOD_Bundles_Launch_Gateway/RB-3822_TVOD_Bundles_Launch_GatewayTallhero_1500x600._CB660136818_.jpg"
        />
        <img
          alt="carousel_image"
          className={indexCarousel === 4 ? "home_image" : "home_image_off"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OGNhZDRmNzYt-w1500._CB412118632_.jpg"
        />
        <img
          alt="carousel_image"
          className={indexCarousel === 5 ? "home_image" : "home_image_off"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV4._CB411870756_.jpg"
        />
      </div>
      <div className="home_content">
        <div className="home_row">
          <Product
            title="Outlet: Wardrobe refresh"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_C_379x304_B08HZ94FRN_9535075b._SY304_CB661359563_.jpg"
            }
            link="Shop now"
          />
          <Product
            title="Keep up with Alexa: February edition"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZjMzMTkwMjYt/ZjMzMTkwMjYt-NTNiZWJhNTct-w379._SY304_CB661376892_.jpg"
            }
            link={"Learn more about what's new"}
          />
          <Product
            title="Celebrate Black History Makers"
            image={
              "https://m.media-amazon.com/images/I/81C53CvGY-L._SS500_.jpg"
            }
            link={"See more"}
          />
          <Product
            title="Deals on overstocked shows in Outlet"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_SH_379x304_B08GYDGM5Y_aefc6ad9._SY304_CB661359563_.jpg"
            }
            link={"See More"}
          />
        </div>
        <div className="home_row">
          <Product
            title="Small space hacks"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/M2U4NzgxM2Et/M2U4NzgxM2Et-OTkzMTY1NTQt-w379._SY304_CB660842212_.jpg"
            }
            link="Shop solutions for every room"
          />
          <Product
            title="Looks to love"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/FLOJO/vday_2021/GW/additional_cards/VDAY_FLOJO_Topcard_1X._SY304_CB659598814_.jpg"
            }
            link={"Shop the latest styles from The Drop"}
          />
          <Product
            title="Facemasks under $13"
            image={
              "https://m.media-amazon.com/images/I/7105wkaj7EL._AC_UL320_.jpg"
            }
            link={"Shop adult & child 4-packs"}
          />
          <Product
            title="Exclusive styles from The Drop"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/FLOJO/cellajaneblog/GW/cellajaneblog_FLOJO_Topcard_1X._SY304_CB660564186_.jpg"
            }
            link={"Discover new influencer collections"}
          />
        </div>
      </div>
      <div className="home_sliders">
        <div className="home_row">
          <Sliders
            title={"Best sellers in Kindle eBooks"}
            image1={
              "https://m.media-amazon.com/images/I/51r9ZiBU6rL._AC_SY200_.jpg"
            }
            image2={
              "https://m.media-amazon.com/images/I/51T6FVlTV7L._AC_SY200_.jpg"
            }
            image3={
              "https://m.media-amazon.com/images/I/41uGNOp3f9L._AC_SY200_.jpg"
            }
            image4={
              "https://m.media-amazon.com/images/I/41DPq03IAOL._AC_SY200_.jpg"
            }
            image5={
              "https://m.media-amazon.com/images/I/41yZvlGPZOL._AC_SY200_.jpg"
            }
            image6={
              "https://m.media-amazon.com/images/I/517cGFH5eUL._AC_SY200_.jpg"
            }
            image7={
              "https://m.media-amazon.com/images/I/51bUH+CiOKL._AC_SY200_.jpg"
            }
            image8={
              "https://m.media-amazon.com/images/I/416mBhHXQ1L._AC_SY200_.jpg"
            }
            image9={
              "https://m.media-amazon.com/images/I/51BpY73Mt3L._AC_SY200_.jpg"
            }
            image10={
              "https://m.media-amazon.com/images/I/4128YGmVaoL._AC_SY200_.jpg"
            }
            image11={
              "https://m.media-amazon.com/images/I/51hGX3tMp6L._AC_SY200_.jpg"
            }
            image12={
              "https://m.media-amazon.com/images/I/51xox6iXE3L._AC_SY200_.jpg"
            }
            image13={
              "https://m.media-amazon.com/images/I/51xbbNWBwCL._AC_SY200_.jpg"
            }
          />
        </div>

        <div className="home_row">
          <SliderLarge
            title={"Recommended for you from out brands"}
            image1={
              "https://m.media-amazon.com/images/I/41BP+I+4z5L._AC_SY200_.jpg"
            }
            image2={
              "https://m.media-amazon.com/images/I/41V-7SlC-sL._AC_SY200_.jpg"
            }
            image3={
              "https://m.media-amazon.com/images/I/41NbpZuFoFL._AC_SY200_.jpg"
            }
            image4={
              "https://m.media-amazon.com/images/I/71XuesoTuiL._AC_SS450_.jpg"
            }
            image5={
              "https://m.media-amazon.com/images/I/810NSz9ho6L._AC_SS450_.jpg"
            }
            image6={
              "https://m.media-amazon.com/images/I/51bNI1GHuBL._AC_SY200_.jpg"
            }
            image7={
              "https://m.media-amazon.com/images/I/51+-cHRsftL._AC_SY200_.jpg"
            }
            image8={
              "https://m.media-amazon.com/images/I/41R6fPIz43L._AC_SY200_.jpg"
            }
            image9={
              "https://m.media-amazon.com/images/I/41PIyzUSPVL._AC_SY200_.jpg"
            }
            image10={
              "https://m.media-amazon.com/images/I/51HSJvTej+L._AC_SY200_.jpg"
            }
            image11={
              "https://m.media-amazon.com/images/I/41R6fPIz43L._AC_SY200_.jpg"
            }
            image12={
              "https://m.media-amazon.com/images/I/514MFoT12NL._AC_SY200_.jpg"
            }
            image13={
              "https://m.media-amazon.com/images/I/41PIyzUSPVL._AC_SY200_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            title="Support local makers"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YWMyZGM1NDYt/YWMyZGM1NDYt-ZjY3OTAwZDkt-w379._SY304_CB660159095_.jpg"
            }
            link="See more on handmade"
          />
          <Product
            title="Preschool toys"
            image={
              "https://m.media-amazon.com/images/I/71AQdj-aJfL._AC_UL320_.jpg"
            }
            link={"Shop more gifts"}
          />
          <Product
            title="Trending: gold-toned jewelry"
            image={
              "https://m.media-amazon.com/images/I/71i6I2pD92L._AC_UL320_.jpg"
            }
            link={"New finishing touches"}
          />
          <Product
            title="Smart home made easy"
            image={
              "https://m.media-amazon.com/images/I/81K94riXXGL._AC_UL320_.jpg"
            }
            link={"More Alexa Certified for Humans devices"}
          />
        </div>
        <div className="home_row">
          <SliderLarge
            title={"Best Sellers in Kitchen & Dining"}
            image1={
              "https://m.media-amazon.com/images/I/51ueSTVOxIL._AC_SY200_.jpg"
            }
            image2={
              "https://m.media-amazon.com/images/I/51YKeZbGDML._AC_SY200_.jpg"
            }
            image3={
              "https://m.media-amazon.com/images/I/61VAwrMWfjL._AC_SY200_.jpg"
            }
            image4={
              "https://m.media-amazon.com/images/I/51-GoapRM6L._AC_SY200_.jpg"
            }
            image5={
              "https://m.media-amazon.com/images/I/51G3Hn3P7JL._AC_SY200_.jpg"
            }
            image6={
              "https://m.media-amazon.com/images/I/51P0HXlAeLL._AC_SY200_.jpg"
            }
            image7={
              "https://m.media-amazon.com/images/I/513Rk1vlcBL._AC_SY200_.jpg"
            }
            image8={
              "https://m.media-amazon.com/images/I/41pblBTZv-L._AC_SY200_.jpg"
            }
            image9={
              "https://m.media-amazon.com/images/I/41kygBpa3iL._AC_SY200_.jpg"
            }
            image10={
              "https://m.media-amazon.com/images/I/51q68LHK0wL._AC_SY200_.jpg"
            }
            image11={
              "https://m.media-amazon.com/images/I/41IAkDvluSL._AC_SY200_.jpg"
            }
            image12={
              "https://m.media-amazon.com/images/I/41kgnC0h2EL._AC_SY200_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <SliderLarge
            title={"Best Sellers in Clothing, Shoes & Jewelry"}
            image1={
              "https://m.media-amazon.com/images/I/31rjjW6eocL._AC_SY200_.jpg"
            }
            image2={
              "https://m.media-amazon.com/images/I/41I2SSK6XlL._AC_SY200_.jpg"
            }
            image3={
              "https://m.media-amazon.com/images/I/41-YF3uCPJL._AC_SY200_.jpg"
            }
            image4={
              "https://m.media-amazon.com/images/I/41BCtQPNNCL._AC_SY200_.jpg"
            }
            image5={
              "https://m.media-amazon.com/images/I/51nOXd8+MCL._AC_SY200_.jpg"
            }
            image6={
              "https://m.media-amazon.com/images/I/51v+23Q2KGL._AC_SY200_.jpg"
            }
            image7={
              "https://m.media-amazon.com/images/I/41MSx0H7ctL._AC_SY200_.jpg"
            }
            image8={
              "https://m.media-amazon.com/images/I/41OQI3i4+RL._AC_SY200_.jpg"
            }
            image9={
              "https://m.media-amazon.com/images/I/41GgkrLSurL._AC_SY200_.jpg"
            }
            image10={
              "https://m.media-amazon.com/images/I/31jaE7bnCeL._AC_SY200_.jpg"
            }
            image11={
              "https://m.media-amazon.com/images/I/41oJ0r4jyrL._AC_SY200_.jpg"
            }
            image12={
              "https://m.media-amazon.com/images/I/41YFhS+yHkL._AC_SY200_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            title="Shop makeup best sellers"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Beauty_Mass_/XCM_Manual_ORIGIN_1269603_1384172_US_us_beauty_traffic_drivers_inclusive_images_us_en_3415230_379x304_1X_en_US._SY304_CB403256514_.jpg"
            }
            link="See more"
          />
          <Product
            title="Like-new computers with a guarantee"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Consumer_Electronics/XCM_Manual_1309885_1580149_US_us_ce_gw_3682938_379x304_1X_en_US._SY304_CB660205298_.jpg"
            }
            link="Shop Amazon Renewed"
          />
          <Product
            title="So new, so you"
            image={
              "https://m.media-amazon.com/images/I/81+HcYgDo1L._AC_UL320_.jpg"
            }
            link="See more from Amazon Launchpad"
          />
          <Product
            title="Men’s shoe edit"
            image={
              "https://m.media-amazon.com/images/I/71vuf8p1viL._AC_UL320_.jpg"
            }
            link="Shop men's fashion"
          />
        </div>
        <div className="home_row">
          <SliderLarge
            title={"Gifts for kids 9 to 11 years"}
            image1={
              "https://m.media-amazon.com/images/I/512k-k6HTYL._AC_SY200_.jpg"
            }
            image2={
              "https://m.media-amazon.com/images/I/51LNu-ryAZL._AC_SY200_.jpg"
            }
            image3={
              "https://m.media-amazon.com/images/I/51cFaokF9OL._AC_SY200_.jpg"
            }
            image4={
              "https://m.media-amazon.com/images/I/41nbjJbKsFL._AC_SY200_.jpg"
            }
            image5={
              "https://m.media-amazon.com/images/I/51t7HZn3NUL._AC_SY200_.jpg"
            }
            image6={
              "https://m.media-amazon.com/images/I/51NxiMrzxWL._AC_SY200_.jpg"
            }
            image7={
              "https://m.media-amazon.com/images/I/51UWBgHB9OL._AC_SY200_.jpg"
            }
            image8={
              "https://m.media-amazon.com/images/I/51oTZGkgeIL._AC_SY200_.jpg"
            }
            image9={
              "https://m.media-amazon.com/images/I/91pppKEetvL._AC_UL320_.jpg"
            }
            image10={
              "https://m.media-amazon.com/images/I/51PC7fAe0dL._AC_SY200_.jpg"
            }
            image11={
              "https://m.media-amazon.com/images/I/61s8NTVqs1L._AC_SY200_.jpg"
            }
            image12={
              "https://m.media-amazon.com/images/I/81GgcelyW7L._AC_UL320_.jpg"
            }
          />
        </div>

        <div className="home_row">
          <Product
            title="Must-see fashion deals"
            image={
              "https://m.media-amazon.com/images/I/812ANjtOqdL._AC_UL320_.jpg"
            }
            link="See more sales & deals"
          />
          <Product
            title="Looks to love"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/FLOJO/vday_2021/GW/additional_cards/VDAY_FLOJO_Topcard_1X._SY304_CB659598814_.jpg"
            }
            link={"Shop the latest styles from The Drop"}
          />
          <Product
            title="Household best sellers"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumables/XCM_CUTTLE_1268455_1378432_US_3381215_379x304_1X_en_US._SY304_CB404451985_.jpg"
            }
            link={"See more Alexa enabled devices"}
          />
          <Product
            title="Comfortable men's tops"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/PLF/AmazonEssentials/2021/FEB_TrafficDrivers/GWDesktop_SingleImageCard_758X608_CatCard_1x._SY304_CB659862458_.jpg"
            }
            link={"Discover Amazon Essentials"}
          />
        </div>
        <div className="home_row">
          <SliderLarge
            title={"Most-loved lounge for her"}
            image1={
              "https://m.media-amazon.com/images/I/51s2BCvtyRL._AC_SY200_.jpg"
            }
            image2={
              "https://m.media-amazon.com/images/I/51n29B5JQ1L._AC_SY200_.jpg"
            }
            image3={
              "https://m.media-amazon.com/images/I/31P1NkMgH2L._AC_SY200_.jpg"
            }
            image4={
              "https://m.media-amazon.com/images/I/31vRxgv6-xL._AC_SY200_.jpg"
            }
            image5={
              "https://m.media-amazon.com/images/I/51YdkQNLFqL._AC_SY200_.jpg"
            }
            image6={
              "https://images-na.ssl-images-amazon.com/images/I/61en5swFtTL._AC_UL160_SR160,160_.jpg"
            }
            image7={
              "https://m.media-amazon.com/images/I/41Ii799tCeL._AC_SY200_.jpg"
            }
            image8={
              "https://images-na.ssl-images-amazon.com/images/I/5160-jdnyuL._AC_UL160_SR160,160_.jpg"
            }
            image9={
              "https://images-na.ssl-images-amazon.com/images/I/813n8yutafL._AC_UL160_SR160,160_.jpg"
            }
            image10={
              "https://images-na.ssl-images-amazon.com/images/I/61vtill6UpL._AC_UL160_SR160,160_.jpg"
            }
            image11={
              "https://images-na.ssl-images-amazon.com/images/I/5163y3gW3IL._AC_UL160_SR160,160_.jpg"
            }
            image12={
              "https://images-na.ssl-images-amazon.com/images/I/8112bB3WqHL._AC_UL160_SR160,160_.jpg"
            }
          />
        </div>
      </div>

      <div className="home_container_leftfilter"></div>
      <div className="home_container_rightfilter"></div>

      <div className="home_bottomContainer" onClick={tophandler}>
        <h3 className="home_bottomConatainer_text">Back to Top</h3>
      </div>
      <div className="home_bottomBottom">
        <img
          className="home_bottomImage"
          src="data:image/png;base64,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"
          alt="amazon_logo"
        />
        <p> Amazon Clone made by @liconl</p>
      </div>
    </div>
  );
}

export default Home;
