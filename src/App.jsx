import "./App.css";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiWechatFill } from "react-icons/ri";

// import header from "../src/assets/img/header.jpg";
import { useEffect, useState } from "react";
import Cuci from "./components/Cuci/Cuci";
import Footer from "./components/Footer/Footer";

function App() {
  const [allCuci, setAllCuci] = useState([]);
  const [cuciShow, setCuciShow] = useState(20);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyv8TVoRMkTZhyxuL7bdFKrfpO6i31-KAftbSWT_HkuQOi2XESdhs0bQ8ND9AD7Lcg/exec"
    )
      .then((res) => res.json())
      .then((data) => setAllCuci(data.data));
  }, []);

  return (
    <>
      {/* <img src={header} alt="" /> */}
      <div className="relative bg-black">
        <div className="bg-black text-white">
          <h2 className="pt-5 text-4xl font-bold mb-2">LIVE CUCI UPDATE</h2>
          <p className="pb-5 text-2xl text-orange-500">( Past 24 Hours )</p>
          <div className="px-8 py-3">
            <hr className="" />
          </div>
          <div className="py-4">
            <p className="flex justify-center">
              Join channel telegram untuk dapatkan update Live Cuci setiap minit{" "}
              <a href="https://t.me/livecuci">
                <FaTelegram className="ml-4 text-sky-400 bg-white rounded-full text-3xl"></FaTelegram>
              </a>
            </p>
            <p className="py-3">
              The graphs below show the live cuci in HPWINVIP for the past 24
              hours for games like 918KISS, MEGA888, PUSSY888, PLAYBOY,
              PLAYTECH, GW99, JOKER and others
            </p>
          </div>
          <div className="flex items-center justify-center text-2xl uppercase pb-4">
            <h3 className="mr-3">Share On :</h3>
            <a
              className="mr-2 bg-blue-800 p-1 rounded-sm"
              href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.hpwin.net%2Flive-cuci%2F&linkname=Live%20Cuci&linknote="
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              className="mr-2 bg-green-900 p-1 rounded-sm"
              href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fwww.hpwin.net%2Flive-cuci%2F&linkname=Live%20Cuci&linknote="
            >
              <IoLogoWhatsapp></IoLogoWhatsapp>
            </a>
            <a
              className="bg-lime-900 p-1 text-white rounded"
              href="https://www.addtoany.com/ext/wechat/share/#url=https%3A%2F%2Fwww.hpwin.net%2Flive-cuci%2F&title=Live%20Cuci"
            >
              <RiWechatFill></RiWechatFill>
            </a>
          </div>
          <div className="bg-gray-600 py-7 mx-12">
            <a className="" href="https://t.me/livecuci">
              <img
                className="mx-auto rounded-md"
                src="../src/assets/img/telebanner.png"
                alt=""
              />
            </a>
          </div>
          <div className="pt-6 pb-7 text-2xl">
            <h3>Live CUCI update (past 24 hours)</h3>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-teal-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className=" w-1/6 px-6 py-3">
                PLATFORM
              </th>
              <th scope="col" className="w-1/6 px-6 py-3">
                AMOUNT
              </th>
              <th scope="col" className="px-6 py-3">
                GAME
              </th>
              <th scope="col" className="w-1/6 px-6 py-3">
                TIME
              </th>
              <th scope="col" className="w-1/6 px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="">
        {allCuci.slice(0, cuciShow).map((cuci, idx) => (
          <Cuci key={idx} cuci={cuci}></Cuci>
        ))}
      </div>
      <div className={cuciShow === allCuci.length ? "hidden" : ""}>
        <button
          onClick={() => setCuciShow(allCuci.length)}
          className="btn w-full uppercase hover:transparent rounded"
        >
          Show more..!
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
