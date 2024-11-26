import React from "react";
import Layout from "../components/Layout/Layout";
import TopCard from "../components/HomeSection/TopCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Divider } from "@mui/material";
import CarouselHome from "../components/HomeSection/CarouselHome";

const Home = () => {
  return (
    <Layout>
      <div className="container lg:w-[90vw] max-h-[90vh]  ">
        <div className="lg:flex py-10 justify-around lg:pl-16">
          <div className="lg:w-1/2 flex text-center items-center mb-5 lg:mb-0 ">
            <h1 className="text-balance text-[2rem] lg:text-[3.5rem] lg:leading-[4rem] leading-9 uppercase text-purple-800 font-semibold">
              Caring for Your Loved Ones with{" "}
              <span className=" animate-pulse font-bold text-orange-600">
                Expert Home Nursing Services
              </span>
            </h1>
          </div>
          <div className="lg:w-1/2 lg:animate-float-in animate-float-down lg:pl-4">
            <TopCard
              rounded="true"
              cardHeader="This Is A Card"
              cardMedia="https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              cardContent="Seva hi param dharma hai"
              cardFooter="Be ready for the best service"
            />
          </div>
        </div>
        <div className="fixed bottom-5 right-5 animate-pulse ">
          <WhatsAppIcon
            sx={{
              lg: { fontSize: "7rem" },
              fontSize: "3rem",
              color: "green",
            }}
          />
        </div>
      </div>
      <Divider />
      <CarouselHome />
      <Divider />

      <div className="container lg:w-[90vw] max-h-[90vh] lg:pl-16 ">
        <div className="lg:flex py-10 justify-around">
          <div className="lg:w-1/2 lg:animate-float-in-reverse animate-float-up lg:pl-20">
            <TopCard
              rounded="true"
              cardHeader="Second Card"
              cardMedia="https://images.pexels.com/photos/7446986/pexels-photo-7446986.jpeg?auto=compress&cs=tinysrgb&w=600"
              cardContent="Seva hi param dharma hai"
              cardFooter="Be ready for the best service"
            />
          </div>
          <div className="lg:w-1/2 flex text-center items-center mt-5 lg:mb-0 lg:pl-16 ">
            <h2 className="text-balance text-[2rem] lg:text-[3.5rem] lg:leading-[4rem] leading-9 uppercase text-purple-800 font-semibold">
              Caring for Your Loved Ones with{" "}
              <span className=" animate-pulse font-bold text-orange-600">
                Expert Home Nursing Services
              </span>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
