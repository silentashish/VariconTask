import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { GetDataApi } from "../redux/actions";

const Home = () => {
  // using redux to fetch data from mockup api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetDataApi());
  }, []);

  // getting state from redux
  const data = useSelector((state: any) => state);
  console.log(data);
  const loading = data ? data.loading : true;
  const { WeatherData, NewsData, HeadingData }: any = data ? data.data : {};

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) return <h1>Checking this loading</h1>;

  return (
    <>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-3">
          {/* Left Columns starts here */}
          <div className="w-full lg:w-3/12 px-3 mb-5 lg:mb-0">
            <div className="w-full px-2 py-4">
              <h1 className="font-serif font-bold text-3xl text-gray-800 mb-4 lg:mb-10">
                Headlines
              </h1>
              <p className="font-serif text-gray-800 font-normal text-base mb-2">
                {WeatherData.place}
              </p>
              <hr />
              <div className="flex items-center mt-3 mb-3">
                <FontAwesomeIcon
                  icon={faCloud}
                  className="text-gray-400 block text-3xl"
                />
                <div className="ml-3">
                  <p className="text-gray-600 font-serif text-xs">Now</p>
                  <p className="text-gray-800 font-serif font-bold text-lg">
                    {WeatherData.now}
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex mt-3">
                <div className="w-1/4 border-r border-gray-300 text-center">
                  <p className="text-gray-600 font-serif text-xs">03:00</p>
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="text-gray-400 block text-3xl my-3 mx-auto"
                  />
                  <p className="text-gray-800 font-serif font-bold text-lg">
                    {WeatherData.threemorning}
                  </p>
                </div>
                <div className="w-1/4 border-r border-gray-300 text-center">
                  <p className="text-gray-600 font-serif text-xs">06:00</p>
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="text-gray-400 block text-3xl my-3 mx-auto"
                  />
                  <p className="text-gray-800 font-serif font-bold text-lg">
                    {WeatherData.sixmorning}
                  </p>
                </div>
                <div className="w-1/4 border-r border-gray-300 text-center">
                  <p className="text-gray-600 font-serif text-xs">03:00</p>
                  <FontAwesomeIcon
                    icon={faSun}
                    className="text-yellow-500 block text-3xl my-3 mx-auto"
                  />
                  <p className="text-gray-800 font-serif font-bold text-lg">
                    {WeatherData.threeevening}
                  </p>
                </div>
                <div className="w-1/4  text-center">
                  <p className="text-gray-600 font-serif text-xs">03:00</p>
                  <FontAwesomeIcon
                    icon={faSun}
                    className="text-yellow-500 block text-3xl my-3 mx-auto"
                  />
                  <p className="text-gray-800 font-serif font-bold text-lg">
                    {WeatherData.sixevening}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Left Column ends here */}
          {/* Middle Column starts here*/}
          <div className="w-full lg:w-6/12 px-3">
            <div
              className="flex flex-wrap md:flex-row-reverse -mx-2 bg-gray-100 py-4 cursor-pointer"
              onClick={() => handleOpenModal()}
            >
              <div className="w-full md:w-3/5 px-2  h-52">
                <img
                  src={NewsData[0].image}
                  alt="headline-img"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full md:w-2/5 px-2 mt-4 md:mt-0">
                <h1 className="font-serif font-bold text-3xl text-red-500 mb-2">
                  {NewsData[0].title}
                </h1>
                <h6 className="text-gray-800 font-serif font-medium text-lg mb-4">
                  {NewsData[0].detail}
                </h6>
                <p className="text-gray-800 font-seriff font-normal text-base">
                  {NewsData[0].continue}
                </p>
              </div>
            </div>
            <div className="h-5"></div>
            <div className="flex flex-wrap -mx-3 ">
              <div
                className="w-full md:w-3/5 px-3 bg-gray-100 mb-4 md:mb-0 py-4 md:py-0 cursor-pointer"
                onClick={() => handleOpenModal()}
              >
                <div className="w-full h-52">
                  <img
                    src={NewsData[1].image}
                    alt="headline-img"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h1 className="font-serif font-bold text-3xl text-red-500 mb-2 mt-2">
                  {NewsData[1].title}
                </h1>
                <h6 className="text-gray-800 font-serif font-medium text-lg mb-4">
                  {NewsData[1].detail}
                </h6>
                <p className="text-gray-800 font-seriff font-normal text-base">
                  {NewsData[1].continue}
                </p>
              </div>
              <div className="w-full md:w-2/5 px-3 cursor-pointer">
                <div
                  className="cursor-pointer"
                  onClick={() => handleOpenModal()}
                >
                  <div className="w-full h-40">
                    <img
                      src={NewsData[2].image}
                      alt="headline-img"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="bg-red-500 py-3 px-2 mb-4 lg:mb-0">
                    <h6 className="text-white font-serif font-medium text-lg mb-4">
                      {NewsData[2].detail}
                    </h6>
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleOpenModal()}
                >
                  <ShortNews
                    titleRed={HeadingData[0].titleRed}
                    title={HeadingData[0].title}
                    onClick={() => handleOpenModal()}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Middle Column ends here*/}
          {/* Right Column starts here */}
          <div className="w-full lg:w-3/12 px-3 mt-4 lg:mt-0">
            <div
              className="px-2 py-4  bg-gray-100 cursor-pointer"
              onClick={() => handleOpenModal()}
            >
              <div className="w-full h-40 mb-2">
                <img
                  src={NewsData[3].image}
                  alt="headline-img"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h1 className="font-serif font-bold text-3xl text-red-500 mb-2">
                {NewsData[0].title}
              </h1>
              <h6 className="text-gray-800 font-serif font-medium text-lg mb-4">
                {NewsData[0].detail}
              </h6>
              <p className="text-gray-800 font-seriff font-normal text-base">
                {NewsData[0].continue}
              </p>
            </div>
            <div className="cursor-pointer" onClick={() => handleOpenModal()}>
              <ShortNews
                titleRed={HeadingData[1].titleRed}
                title={HeadingData[1].title}
              />
            </div>
            <div className="cursor-pointer" onClick={() => handleOpenModal()}>
              <ShortNews
                titleRed={HeadingData[2].titleRed}
                title={HeadingData[2].title}
                onClick={() => handleOpenModal()}
              />
            </div>
          </div>
          {/* Right Column ends here */}
        </div>
      </div>
      {/* Modal */}
      {showModal && <Modal closeModal={handleCloseModal} />}
    </>
  );
};

const ShortNews = ({ titleRed, title }: any) => {
  return (
    <div className="bg-gray-100 pt-1 px-1 pb-4 border-t border-red-500 mt-2">
      <h6 className="text-titleColor font-serif font-medium text-lg mb-4">
        <span className="text-red-500">{titleRed}</span> {title}
      </h6>
    </div>
  );
};

export default Home;
