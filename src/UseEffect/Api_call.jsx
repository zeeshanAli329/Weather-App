import { IoSearch } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cloud, Sun } from "lucide-react";

const Api_call = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

 const fetchWeather = async (query) => {
  try {
    const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=6972fd71157e40268f063922250809&q=${query}&aqi=no`
    );

    const data = await res.json();
    if(data.error){
      setError(data.error.message);
      setLoading(true);
    }
    else{
      setWeather(data);
      setLoading(false);
      setError("");
    }
    
  } catch (error) {
    console.log(error);
    setError("Failed to fetch weather..!");
  }
 };
   useEffect(() =>{
    fetchWeather("auto:ip");
   },[])

  // ----------bg-chages-weather-condition------

  const Bg_changes = (condition) =>{

  const cond = condition.toLowerCase();

  if (cond.includes("partly cloudy")) return "/images/cloud.jpg";
  if (cond.includes("sunny")) return "/images/sunny-bg.jpeg";
  if (cond.includes("cloudy")) return "/images/cloudy-bg.webp";
  if (cond.includes("rain")) return "/images/tb-bg.svg";
  if (cond.includes("snow")) return "/images/snow-bg.svg";
  if (cond.includes("thunder")) return "/images/storm-bg.jpeg";
  if (cond.includes("overcast")) return "/images/overcast-bg.jpeg";
  if (cond.includes("clear")) return "/images/clear-bg.jpg";
  if (cond.includes("Light rain shower")) "/images/light-rain-bg.jpg";
    return "images/defaul-bg.jpeg";

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
      console.log(data);
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
      : `url('images/defaul-bg.jpeg')`
  }}
>

      <div className="flex flex-wrap w-full  md:gap-0   sm:flex sm:flex-wrap">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2  flex flex-col lg:justify-between gap-14 md:gap-0 md:p-10 w-full  lg:h-full sm:w-full md:h-auto ">
          {/* Logo */}
          <div className="flex justify-between ">
            <Link to="/" onClick={() => clearContent()}>
        
             <svg
  className="md:h-20 md:w-[150px] h-[100px] w-[100px]  md:ml-0 mt-3 md:mt-0 lg:h-[120px] lg:w-[150px] "
  version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  width="260pt"
  height="230pt"
  viewBox="0 0 260 230"
  preserveAspectRatio="xMidYMid meet"
>
  <g
    transform="translate(0,230) scale(0.1,-0.1)"
    fill="#ffffff"
    stroke="none"
  >
    <path d="M1274 2149 c-10 -20 -14 -48 -12 -75 3 -40 1 -44 -19 -44 -22 0 -53 -33 -53 -58 0 -9 7 -11 20 -7 31 10 50 -12 50 -56 0 -39 0 -39 40 -39 40 0 40 0 40 39 0 44 19 66 50 56 25 -8 27 11 4 43 -9 13 -26 22 -40 22 -15 0 -23 4 -19 11 19 30 -8 139 -35 139 -5 0 -17 -14 -26 -31z m41 -40 c8 -24 -2 -69 -15 -69 -13 0 -23 38 -16 66 8 29 22 31 31 3z m13 -121 c-4 -29 -36 -31 -54 -3 -13 20 -12 21 22 23 32 2 35 0 32 -20z"/>
    <path d="M1010 2113 c0 -15 91 -265 100 -276 5 -5 18 -6 30 -2 l22 7 -22 23 c-29 31 -24 79 8 83 12 2 22 7 22 11 0 17 -38 41 -63 41 -22 0 -27 5 -27 25 0 25 -69 112 -70 88z"/>
    <path d="M1551 2085 c-19 -22 -31 -47 -31 -64 0 -25 -3 -28 -25 -23 -16 3 -33 -2 -45 -13 -26 -23 -25 -33 3 -37 31 -4 36 -52 7 -83 l-22 -23 22 -7 c12 -4 25 -3 30 2 12 13 103 273 98 279 -3 2 -19 -11 -37 -31z"/>
    <path d="M1188 1860 c-9 -16 -29 -32 -43 -36 -23 -6 -26 -10 -21 -33 4 -14 8 -32 9 -39 2 -15 -233 -122 -285 -129 -20 -3 -51 0 -68 6 -36 12 -36 15 -6 -64 19 -54 35 -204 42 -400 5 -138 9 -167 29 -212 43 -95 177 -204 373 -302 l82 -41 83 41 c184 93 330 208 372 295 15 31 21 75 27 214 10 213 31 388 52 429 23 43 21 52 -10 41 -56 -22 -80 -15 -279 74 -44 20 -79 41 -78 48 1 7 5 25 9 39 5 22 2 27 -20 33 -14 3 -33 19 -43 34 -9 15 -18 29 -19 31 -2 2 -15 -6 -30 -18 -34 -26 -79 -27 -122 -1 -18 11 -33 20 -35 20 -1 0 -10 -13 -19 -30z m224 -55 c27 -36 14 -55 -30 -47 -43 8 -122 9 -171 2 -29 -4 -34 -2 -37 16 -5 31 33 53 83 50 23 -2 46 -7 52 -10 6 -4 11 -3 11 2 0 6 8 8 19 5 10 -3 22 0 25 6 9 14 28 5 48 -24z m-19 -91 c33 -8 121 -42 195 -75 73 -32 147 -59 164 -59 29 0 30 -1 24 -32 -16 -76 -27 -198 -34 -370 -7 -146 -12 -190 -26 -217 -40 -76 -176 -183 -340 -267 l-76 -39 -87 45 c-186 97 -321 214 -342 298 -5 20 -12 114 -15 207 -6 159 -14 249 -31 338 -7 37 -7 37 26 37 19 0 63 14 99 31 244 116 323 134 443 103z"/>
    <path d="M1190 1631 c-30 -10 -96 -37 -146 -59 -55 -25 -107 -42 -129 -42 -36 0 -37 -1 -30 -27 17 -70 26 -150 31 -293 3 -97 11 -170 20 -196 26 -73 148 -175 302 -253 l62 -31 62 31 c156 79 276 179 302 253 9 26 17 99 20 196 5 144 14 224 31 293 7 26 6 27 -30 27 -23 0 -76 17 -136 45 -176 79 -252 91 -359 56z m182 -32 c24 -7 45 -13 48 -14 3 0 32 -14 65 -30 l60 -28 -45 -6 c-59 -8 -69 -15 -92 -67 -10 -24 -21 -44 -23 -44 -5 0 -39 62 -40 72 -1 22 -45 37 -110 38 -104 0 -152 -34 -109 -77 17 -17 14 -18 -54 -21 -62 -2 -74 -6 -91 -27 -24 -31 -37 -32 -37 -2 -1 12 -4 39 -8 60 -4 25 -3 36 4 32 5 -3 10 -1 10 6 0 7 3 9 6 6 4 -3 16 -1 28 5 11 7 23 13 26 14 11 2 47 18 90 38 25 11 47 21 50 22 3 0 16 5 30 11 56 24 134 28 192 12z m-28 -231 c18 -59 34 -109 36 -112 3 -2 20 47 39 110 l34 114 83 0 c49 0 84 -4 84 -10 0 -5 -11 -10 -25 -10 l-25 0 0 -180 0 -180 25 0 c14 0 25 -6 25 -13 0 -10 -26 -13 -105 -13 -81 -1 -105 2 -105 13 0 8 12 13 30 13 l30 0 -1 173 c-1 196 6 201 -74 -56 -26 -84 -51 -147 -57 -145 -6 2 -25 51 -41 108 l-31 103 22 38 c12 21 22 47 22 58 0 18 -6 21 -39 21 -34 0 -41 4 -49 28 l-10 27 -1 -27 c-1 -38 -21 -36 -21 2 0 27 -3 30 -30 30 -16 0 -30 5 -30 10 0 7 33 10 92 8 l91 -3 31 -107z m311 63 c-1 -9 -6 -65 -10 -126 -11 -174 -12 -179 -24 -181 -7 -2 -8 -1 -1 3 7 3 7 9 1 16 -20 25 -17 259 4 280 8 8 12 17 10 19 -3 3 1 5 9 5 8 0 13 -7 11 -16z m-365 -63 c0 -7 -45 -92 -99 -188 l-98 -175 43 -3 c61 -4 95 15 122 68 29 59 47 65 39 14 -4 -22 -7 -54 -7 -71 l0 -33 -155 0 c-122 0 -155 3 -155 13 0 8 45 92 99 188 l100 174 -45 3 c-54 4 -86 -14 -104 -57 -19 -46 -30 -37 -30 24 l0 55 145 0 c109 0 145 -3 145 -12z m-190 -63 c0 -9 -55 -109 -67 -123 -12 -13 -17 -28 -14 -44 0 -5 -4 -8 -10 -8 -5 0 -8 -4 -5 -8 2 -4 -4 -13 -15 -20 -10 -7 -20 -9 -20 -5 -13 78 -13 163 1 176 10 9 11 9 6 0 -4 -7 2 -17 14 -23 25 -13 50 -1 74 35 14 22 36 34 36 20z m116 -157 c-1 -36 2 -43 23 -48 36 -8 6 -26 -46 -28 -46 -1 -55 11 -23 28 11 6 20 20 20 31 0 18 16 59 24 59 1 0 2 -19 2 -42z m202 -100 c8 -8 45 -13 101 -14 102 -1 120 -8 97 -33 -9 -10 -14 -21 -11 -24 3 -4 3 -5 0 -4 -3 2 -26 -16 -53 -40 -26 -24 -68 -56 -94 -71 -27 -15 -48 -31 -48 -35 0 -5 -4 -6 -9 -2 -5 3 -15 -1 -23 -8 -7 -7 -28 -19 -46 -25 -29 -10 -40 -8 -85 13 -78 37 -163 85 -152 85 6 0 2 5 -7 11 -25 14 -22 39 5 40 12 1 58 1 103 0 62 -2 83 1 93 13 7 9 18 13 24 9 5 -3 7 -1 3 5 -3 6 -2 13 4 17 5 3 10 15 10 25 0 21 35 50 60 50 9 0 22 -6 28 -12z"/>
    <path d="M615 1320 c-19 -36 -20 -90 -2 -90 18 0 37 43 37 85 0 43 -14 45 -35 5z"/>
    <path d="M1950 1315 c0 -42 19 -85 37 -85 18 0 17 54 -2 90 -21 40 -35 38 -35 -5z"/>
    <path d="M540 1253 c0 -26 23 -82 40 -101 17 -18 25 -20 41 -12 23 13 75 88 66 96 -11 11 -67 -37 -74 -64 -6 -24 -7 -24 -19 16 -6 24 -18 49 -24 57 -13 16 -30 20 -30 8z"/>
    <path d="M2020 1228 c-11 -18 -20 -44 -20 -58 -1 -24 -1 -24 -14 5 -13 31 -63 72 -74 61 -3 -4 8 -25 24 -49 38 -53 72 -60 95 -20 22 38 34 93 20 93 -6 0 -20 -15 -31 -32z"/>
    <path d="M530 1131 c0 -28 22 -71 49 -95 21 -19 21 -19 21 3 0 28 -22 71 -49 95 -21 19 -21 19 -21 -3z"/>
    <path d="M2044 1128 c-29 -31 -44 -62 -44 -89 0 -22 0 -22 21 -3 29 26 51 71 47 96 -3 19 -4 19 -24 -4z"/>
    <path d="M648 1123 c-33 -38 -50 -93 -29 -93 11 0 46 55 56 88 8 26 -6 29 -27 5z"/>
    <path d="M1925 1119 c10 -34 45 -89 56 -89 16 0 9 36 -13 70 -29 42 -53 53 -43 19z"/>
    <path d="M656 1023 c-10 -13 -21 -43 -24 -65 l-5 -40 -12 29 c-15 34 -77 91 -83 74 -5 -16 29 -71 58 -93 42 -31 63 -12 89 79 12 41 2 48 -23 16z"/>
    <path d="M1921 1008 c26 -92 47 -111 89 -80 29 22 63 77 58 93 -6 17 -68 -40 -84 -76 l-13 -30 -1 36 c0 35 -31 89 -50 89 -5 0 -4 -15 1 -32z"/>
    <path d="M682 930 c-23 -35 -24 -82 -3 -103 12 -12 33 65 29 106 l-3 32 -23 -35z"/>
    <path d="M1894 908 c2 -31 9 -65 15 -75 9 -16 11 -15 21 12 13 35 7 64 -21 96 l-20 24 5 -57z"/>
    <path d="M550 901 c0 -27 77 -91 110 -91 21 0 -23 58 -60 79 -42 23 -50 25 -50 12z"/>
    <path d="M2004 891 c-33 -20 -78 -71 -69 -79 9 -10 66 22 90 50 41 49 32 61 -21 29z"/>
    <path d="M722 845 c-18 -39 -15 -61 14 -92 l25 -28 -4 64 c-6 73 -18 93 -35 56z"/>
    <path d="M1855 861 c-4 -7 -9 -40 -12 -74 l-4 -62 25 28 c29 31 32 60 12 96 -9 16 -15 20 -21 12z"/>
    <path d="M600 791 c0 -17 69 -69 100 -76 41 -9 44 -5 17 28 -21 27 -117 65 -117 48z"/>
    <path d="M787 786 c-14 -35 -6 -66 23 -98 25 -28 29 -30 30 -13 0 29 -18 88 -33 109 -13 18 -14 18 -20 2z"/>
    <path d="M1786 773 c-8 -17 -18 -50 -21 -74 l-7 -44 31 33 c31 33 40 73 22 101 -7 11 -13 7 -25 -16z"/>
    <path d="M1951 784 c-43 -12 -99 -59 -87 -71 12 -12 83 18 111 47 16 16 27 32 24 34 -2 2 -24 -2 -48 -10z"/>
    <path d="M1704 705 c-55 -86 -55 -121 -1 -71 28 26 41 60 35 97 -3 21 -7 18 -34 -26z"/>
    <path d="M860 714 c0 -32 16 -64 44 -86 45 -37 44 -6 -3 69 -30 49 -41 54 -41 17z"/>
    <path d="M945 670 c9 -44 28 -75 60 -96 57 -37 37 31 -27 92 l-40 39 7 -35z"/>
    <path d="M1625 673 c-32 -32 -65 -82 -65 -100 0 -40 73 24 89 77 7 23 11 44 8 46 -2 2 -17 -8 -32 -23z"/>
    <path d="M666 679 c19 -32 154 -66 154 -39 0 6 -25 21 -55 33 -59 23 -111 26 -99 6z"/>
    <path d="M1850 678 c-63 -22 -90 -38 -90 -54 0 -19 56 -10 111 16 56 26 71 44 37 46 -13 1 -39 -3 -58 -8z"/>
    <path d="M1556 596 c-37 -45 -52 -101 -25 -94 20 5 79 93 79 117 0 18 -24 7 -54 -23z"/>
    <path d="M1040 596 c0 -28 65 -106 87 -106 23 0 7 43 -31 84 -43 48 -56 53 -56 22z"/>
    <path d="M1462 553 c-33 -36 -47 -82 -25 -83 18 0 65 66 67 94 1 14 0 26 -2 26 -3 0 -21 -17 -40 -37z"/>
    <path d="M1140 546 c0 -25 59 -96 79 -96 18 0 9 27 -22 67 -35 45 -57 56 -57 29z"/>
    <path d="M1230 493 c0 -19 48 -63 69 -63 20 0 9 22 -24 49 -34 29 -45 32 -45 14z"/>
    <path d="M1335 484 c-38 -40 -41 -47 -23 -54 19 -7 68 42 68 69 0 27 -8 25 -45 -15z"/>
    <path d="M1010 417 c0 -23 71 -72 113 -78 29 -5 29 -4 -18 35 -47 39 -95 61 -95 43z"/>
    <path d="M1530 406 c-32 -19 -90 -76 -90 -89 0 -16 51 4 89 34 56 44 57 92 1 55z"/>
    <path d="M1150 332 c0 -23 55 -72 92 -82 33 -9 35 -8 26 9 -6 11 -24 29 -42 40 -55 34 -76 43 -76 33z"/>
    <path d="M1380 323 c-45 -26 -68 -52 -70 -77 -1 -15 7 -13 44 15 24 18 50 42 56 53 18 29 10 32 -30 9z"/>
    <path d="M1285 239 c-22 -11 -51 -29 -65 -40 l-25 -20 25 -20 c14 -11 43 -29 65 -40 l40 -21 40 21 c22 11 51 29 65 40 l25 20 -25 20 c-14 11 -43 29 -65 40 l-40 21 -40 -21z"/>
  </g>
</svg>
{/* <img
                src="/images/zm-logo.png"
                
                alt="logo"
                className="bg-white md:h-16 md:w-full h-[100px] w-[200px] md:ml-0  mt-0 md:mt-0 lg:h-[150px] lg:w-[200px] "
              /> */}
            </Link>
            <div className=" ">
               <form 
            onSubmit={(e) => handleLocation(e)}
            className="flex items-center  border-b border-white/50 pb-1 lg:hidden mt-12 md:mt-6 w-[200px] mr-4 md:w-[300px]"
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
