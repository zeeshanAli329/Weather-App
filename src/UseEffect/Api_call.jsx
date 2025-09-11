import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cloud, Sun } from "lucide-react";

const Api_call = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");


  // ----------bg-chages-weather-condition------

  const Bg_changes = (condition) =>{
    







    const cond = condition.toLowerCase();

  if (cond.includes("partly cloudy")) return "/images/partlycloud-bg.jpg";
  if (cond.includes("sunny")) return "/images/sunny-bg.jpeg";
  if (cond.includes("cloudy")) return "/images/cloudy-bg.webp";
  if (cond.includes("rain")) return "/images/tb-bg.svg";
  if (cond.includes("snow")) return "/images/snow-bg.svg";
  if (cond.includes("thunder")) return "/images/storm-bg.jpeg";
  if (cond.includes("overcast")) return "/images/overcast-bg.jpeg";
    return "/images/defaul-bg.jpeg";

  }
  const date = () => {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
  };

  const time = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  async function handleLocation(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=6972fd71157e40268f063922250809&q=${location}&aqi=no`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function clearContent() {
    setLoading(true);
    setLocation("");
  }

  const Shimmer = ({ className }) => (
    <div
      className={`relative overflow-hidden rounded-md bg-white/20 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );

  return (
    <div className="flex justify-center items-center w-full max-h-[1200px] ">



<div
  className="max-w-[1400px] w-screen h-screen flex bg-cover bg-center text-white transition-all duration-500 ease-in-out"
  style={{
    backgroundImage: weather
      ? `url(${Bg_changes(weather.current.condition.text)})`
      : `url('/images/defaul-bg.jpeg')`
  }}
>

      <div className="flex flex-wrap w-full  md:gap-0   sm:flex sm:flex-wrap">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2  flex flex-col lg:justify-between gap-14 md:gap-0 md:p-10 w-full  lg:h-full sm:w-full md:h-auto ">
          {/* Logo */}
          <div className="flex justify-between ">
            <Link to="/" onClick={() => clearContent()}>
              <img
                src="/images/weather-app-logo.svg"
                alt="logo"
                className="md:h-16 md:w-full h-[20px] w-[39px] md:ml-0 ml-4 mt-7 md:mt-0"
              />
            </Link>
            <div className=" ">
               <form 
            onSubmit={(e) => handleLocation(e)}
            className="flex items-center  border-b border-white/50 pb-1 lg:hidden mt-6 w-[200px] mr-4 md:w-[300px]"
            >
            <input
              type="text"
              placeholder="Search Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-white placeholder:text-white w-full focus:outline-none"
            />
            <button type="submit" className="ml-3">
              <IoSearch className="h-4 w-4" />
            </button>
          </form>
            </div>
          </div>
          

          {/* ---------------------Time-----Loction---Temprature-- */}
          <div className="mb-8  space-y-4  flex justify-center lg:justify-start items-center md:gap-40  md:mt-20 lg:mt-0">
            {loading ? (
              <div className="space-y-4">
                <div className="flex gap-4">

                <Shimmer className="h-[100px] w-[200px]" />
                <Shimmer className="h-8 w-[150px]" />
                </div>
                <Shimmer className="h-5 w-[220px]" />
              </div>
            ) : (
              <>
              <div className="  ">
                <div className="flex gap-6">

                <h1 className="text-[90px] font-bold leading-none">
                  {weather.current.temp_c}°
                </h1>
                <p className="text-3xl mt-6">{weather.location.name}</p>
                </div>

                {/* -----------Time-------- */}
                <p className="text-base opacity-80">
                  {time()} - {date()}
                </p>
              </div>
              </>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:flex md:justify-center lg:flex md:w-[100%] lg:w-[44%] w-full h-auto backdrop-blur-md bg-white/10">

        <div className=" w-full flex flex-col p-8 lg:pt-14 md:pt-0 pt-0  sm:w-full md:flex md:justify-center lg:justify-center  lg:w-full md:w-[45%]  ">
          {/* Search */}
          <div className="hidden md:hidden lg:flex  ">

          <form
            onSubmit={(e) => handleLocation(e)}
            className="hidden md:hidden lg:flex items-center w-full border-b border-white/50 md:pb-2 pb-0 "
            >
            <input
              type="text"
              placeholder="Search Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-white placeholder:text-white w-full focus:outline-none"
              />
            <button type="submit" className="ml-3">
              <IoSearch className="h-6 w-6" />
            </button>
          </form>
              </div>

          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold">Weather Details...</h2>
            {loading ? (
              <div className="space-y-5">
                <Shimmer className="h-6 w-[250px]" />
                <Shimmer className="h-6 w-[200px]" />
                <Shimmer className="h-6 w-[180px]" />
                <Shimmer className="h-6 w-[220px]" />
                <Shimmer className="h-6 w-[220px]" />
                <Shimmer className="h-6 w-[220px]" />
              </div>
            ) : (
              <ul className="space-y-4 text-lg">
                <li className="uppercase font-medium tracking-wide flex gap-6">
                  {weather.current.condition.text}
                  <Sun className="text-[#ffb72797]" />
                </li>
                <li className="flex justify-between">
                  <p>Temp max:</p>{" "}
                  <span className="flex gap-8">
                    {weather.current.temp_c + 3}°C
                    <img src="./images/tmp-max.svg"></img>
                  </span>
                </li>
                <li className="flex justify-between">
                  <p>Temp min:</p>
                  <span className="flex gap-8">
          
                    {weather.current.temp_c - 1}°C
                    <img src="./images/temp-min.svg"></img>
                  </span>
                </li>
                <li className="flex justify-between">
                  <p>Humidity:</p>
                  <span className="flex gap-8">
                    
                    {weather.current.humidity}%
                    <img src="./images/humi.svg"></img>
                  </span>
                </li>
                <li className="flex justify-between">
                  <p>Cloudy: </p>
                  <span className="flex gap-8">
                
                    {weather.current.cloud}%
                    <img src="./images/cloud.svg"></img>
                  </span>
                </li>
                <li className="flex justify-between">
                  <p>Wind: </p>
                  <span className="flex gap-8">
                   
                    {weather.current.wind_kph} km/h
                    <img src="./images/wind.svg"></img>
                  </span>
                </li>
              </ul>
            )}
          </div>

          <div className="mt-auto hidden md:flex md:flex-col ">
            <h2 className="text-xl font-semibold mb-3">
              Today&apos;s Weather Forecast...
            </h2>
            {loading ? (
              <Shimmer className="h-[70px] w-full " />
            ) : (
              <div className="flex items-center justify-between bg-white/10 rounded-xl px-6 py-4">
                <span className="flex items-center justify-around lg:space-x-40 md:space-x-10">
                  <span className="text-2xl lg:flex lg:gap-3">
                    {weather.current.condition.text}
                  </span>
                  <span className="text-lg">{time()}</span>
                </span>
                <span className="text-lg">{}</span>
                <span className="text-lg">{weather.current.temp_c}°</span>
              </div>
            )}
          </div>
        </div>
            </div>
      </div>
      <style>{`
      .transition-bg {
        transition: background-image 0.5s ease-in-out;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
            }
            }
      `}</style>
    </div>
            </div>
  );
};

export default Api_call;
