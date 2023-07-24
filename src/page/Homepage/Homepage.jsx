import Navbar from "../../components/Navbar.jsx/Navbar";
import Button from "../../components/Button.jsx/Button";
import Card from "../../components/Card/card";
import Heading from "../../components/Heading/Heading";
import Bundlescard from "../../components/BundlesCard/BundlesCard";
import UserMainSlider from "../../components/UserMainSlider/UserMainSlider";
import Carousel from "../../components/Carousel/Carousel";
import MoveCard from "../../components/MoveCard/MoveCard";
import SecondBundleCard from "../../components/SecondBundleCard/SecondBundleCard";
import ThirdBundleCard from "../../components/ThirdBundleCard/ThirdBundleCard";
import Fotter from "../../components/Footer/Fotter";
import { Footer } from "flowbite-react";
export default function Homepage() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className=" w-full py-12 sm:py-0 px-4 mx-auto ">
        <div className=" max-w-8xl mx-auto sm:my-20 md:my-20   ">
          <div className="grid sm:my-20 md:my-20  md:grid-cols-2 lg:grid-cols-2 md:space-x-4 2xl:space-x-0  ">
            <div className="space-y-4 sm:ms-10  md:ms-14 2xl:ms-52 ">
              <p className=" max-w-md  font-bold  text-4xl md:text-7xl  text-white  ">
                Discover digital art & Collect NFTs
              </p>
              <p className="w-full  max-w-xl text-2xl text-white">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
              <Button
                color="bg-purple-600 px-12  rounded-[20px] py-3 my-5 hover:bg-purple-700  active:bg-purple-800"
                txt="Get started"
                img={require("../../assests/RocketLaunch.png")}
                imgstyle="inline pe-2"
              />
              <div className="max-w-md grid grid-cols-3 my-1 ">
                <p className=" font-bold text-2xl text-white  ">
                  240k+ <br /> Total Sale
                </p>

                <p className="   text-2xl text-white">
                  240k+ <br /> Total Sale
                </p>

                <p className="text-2xl text-white  ">
                  240k+ <br /> Total Sale
                </p>
              </div>
            </div>

            <Card img={require("../../assests/Image Placeholder.png")}/>
          </div>
        </div>
      </div>
      {/* 2nd page */}
      <div className=" max-w-full  px-7  sm:py-0  sm:ms-10  md:ms-10 2xl:ms-52  my-10  ">
        <h1 className="font-bold text-4xl text-white">Trending Collection</h1>
        <span>
          <h3 className="text-xl text-white mt-3">
            Checkout our weekly updated trending collection."
          </h3>
        </span>
      </div>
      <div className="max-w-full  px-7  sm:py-0  sm:ms-10  md:ms-10 2xl:ms-52  my-10 ">
        <MoveCard
          card={
            <Bundlescard
              img1={require("../../assests/Primary Photo Placeholder.png")}
              img2={require("../../assests/Secondary Photo Placeholder.png")}
              img3={require("../../assests/Secondary Photo Placeholder-1.png")}
              img4={require("../../assests/Avatar Placeholder-5.png")}
              txt="1025+"
              txt1="DSGN Animals"
              txt2="MrFox"
            />
          }
          card2={
            <Bundlescard
              img1={require("../../assests/Primary Photo Placeholder-1.png")}
              img2={require("../../assests/Primary Photo Placeholder-1.png")}
              img3={require("../../assests/Primary Photo Placeholder-1.png")}
              img4={require("../../assests/Avatar Placeholder-6.png")}
              txt="1025+"
              txt1="Magic Mushrooms"
              txt2="Shroomie"
            />
          }
          card3={
            <Bundlescard
              img1={require("../../assests/Primary Photo Placeholder-2.png")}
              img2={require("../../assests/Secondary Photo Placeholder-2.png")}
              img3={require("../../assests/Secondary Photo Placeholder-3.png")}
              img4={require("../../assests/Avatar Placeholder-1.png")}
              txt="1025+"
              txt1="DSGN Disco Machines"
              txt2="BeKind2Robots"
            />
          }
        />
      </div>
      <Heading
        txt1="Trending Collection"
        txt2="Checkout our weekly updated trending collection."
        img={require("../../assests/RocketLaunch.png")}
        bttxt="Get Started"
        imgstyle="inline pe-2"
      />
      <UserMainSlider />
      <Heading
        txt1="Discover More NFTs"
        txt2="Explore new trending NFTs"
        img={require("../../assests/Eye.png")}
        bttxt="See All"
        imgstyle="inline pe-2 mt-1"
      />

      {/* 2nd slider */}
      <div className="max-w-full  px-7  sm:py-0  sm:ms-10  md:ms-10 2xl:ms-52  my-10 ">
        <MoveCard
          card={
            <SecondBundleCard
              img1={require("../../assests/planet.png")}
              img4={require("../../assests/Avatar Placeholder-1.png")}
              txt1="Distant Galaxy"
              txt2="MoonDancer"
              txt3="Price"
              txt5="1.63 ETH"
              txt6="0.33 wETH"
            />
          }
          card2={
            <SecondBundleCard
              img1={require("../../assests/planet.png")}
              img4={require("../../assests/Avatar Placeholder-1.png")}
              txt1="Distant Galaxy"
              txt2="MoonDancer"
              txt3="Price"
              txt5="1.63 ETH"
              txt6="0.33 wETH"
            />
          }
          card3={
            <SecondBundleCard
              img1={require("../../assests/planet.png")}
              img4={require("../../assests/Avatar Placeholder-1.png")}
              txt1="Distant Galaxy"
              txt2="MoonDancer"
              txt3="Price"
              txt5="1.63 ETH"
              txt6="0.33 wETH"
            />
          }
        />
      </div>
      <Heading txt1="Discover More NFTs" bg="border-0" />
      <div className="max-w-screen-2xl  px-7  sm:py-0  sm:ms-10  md:ms-10 2xl:ms-52  my-10 ">
        <div className="grid max-w-full gap-2 grid-cols-2 lg:gap-6 lg:grid-cols-4 ">
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
          <ThirdBundleCard
            img1={require("../../assests/Category Icon.png")}
            txt1="Art"
          />
        </div>
      </div>
      <div className="max-w-screen-2xl px-16 sm:py-0 sm:ms-10 md:ms-10 2xl:ms-52 my-10">
        <div className="bg-gradient-to-t from-violet-600 z-0">
          <img
            className="w-screen z-0  "
            src={require("../../assests/NFT Highlight.png")}
            alt=""
          />
        </div>
      </div>
      {/* 4th card */}
      <Heading
        txt1="How it works"
        txt2="Find out how to get started"
        bg="border-0"
        />
         <div className="max-w-screen-2xl  px-7  sm:py-0  sm:ms-10  md:ms-10 2xl:ms-52  my-10 ">
        <div className="grid max-w-full grid-cols-1 lg:gap-6 sm:grid-cols-3 ">
        <SecondBundleCard
              img1={require("../../assests/Icon.png")}
              txt1="Distant Galaxy"
              hd="px-16"
              hid="hidden "
              hid1="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
            />
        <SecondBundleCard
              img1={require("../../assests/Icon.png")}
              txt1="Distant Galaxy"
              hd="px-16"
              hid="hidden "
              hid1="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
            />
        <SecondBundleCard
              img1={require("../../assests/Icon.png")}
              txt1="Distant Galaxy"
              hd="px-16"
              hid="hidden "
              hid1="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
            />
            </div>
            </div>
            <Carousel img={require("../../assests/Photo.png")}  hid1="hidden" hid2="hidden"/>
            <Fotter/>
    </div>
  );
}
