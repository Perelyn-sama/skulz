import Header from "components/Header";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import WalletModal from "modals/WalletModal";
import { useState } from "react";
import { useWalletModalToggle } from "state/application/hooks";

const Home = () => {
  const [amount, setAmount] = useState(1);
  const toggleWalletModal = useWalletModalToggle();
  const { account } = useActiveWeb3React();

  const increment = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };
  const decrement = () => {
    if (amount < 1) {
      return;
    }
    setAmount(amount - 1);
  };
  return (
    <>
      <Header />
      <div
        className="min-h-screen h-full bg-black bg-cover bg-no-repeat bg-center w-full text-white"
        style={{
          // background: "url(https://www.kaijufrenznft.com/img/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          paddingTop: 120,
        }}
      >
        <div className="flex flex-col items-center">
          <p
            className=" text-white font-turret-road"
            style={{ textShadow: "2px 2px 5px #000000", fontSize: "4rem" }}
          >
            Kaiju Season
          </p>
          <p
            className="font-turret-road"
            style={{
              textShadow: "2px 2px 5px #000000",
              fontSize: "calc(1.325rem + .9vw)",
              marginTop: -10,
              marginBottom: 8,
            }}
          >
            is upon us.
          </p>
          <p
            className="font-bitter"
            style={{
              textShadow: "2px 2px 5px #000000",
              fontSize: "0.7rem",
              marginBottom: "1rem",
            }}
          >
            Are you ready for the rampage?
          </p>

          {/* Start */}
          <div className="max-w-800 w-2/3 lg:w-1/3 pt-0 pb-8">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="justify-center items-center flex text-black gap-4 w-full max-w-400">
                <div
                  className="flex items-center justify-center h-12 w-12 bg-white rounded-full text-2xl font-bold text-center cursor-pointer"
                  onClick={decrement}
                >
                  -
                </div>
                <div className="rounded-full bg-white flex-1 text-center font-bold text-2xl">
                  {amount}
                </div>
                <div
                  className="flex items-center justify-center h-12 w-12 bg-white  rounded-full text-2xl font-bold text-center cursor-pointer"
                  onClick={increment}
                >
                  +
                </div>
              </div>
              {account ? (
                <nav className="flex items-center w-1/2 mt-6">
                  <a className="rounded-full hover:bg-white whitespace-nowrap py-3 px-7 hover:text-black outline-none border-2 hover:border-none cursor-pointer flex justify-center items-center no-underline transition-all duration-200 ease-in-out w-full">
                    Mint
                  </a>
                </nav>
              ) : (
                <nav
                  className="flex items-center w-1/2 mt-6"
                  onClick={toggleWalletModal}
                >
                  <a className="rounded-full hover:bg-white whitespace-nowrap py-3 px-7 hover:text-black outline-none border-2 hover:border-none cursor-pointer flex justify-center items-center no-underline transition-all duration-200 ease-in-out w-full">
                    Connect wallet
                  </a>
                </nav>
              )}
            </div>
          </div>
          {/* End */}

          <div className="mt-5">
            <img
              style={{ borderRadius: 75 }}
              src="https://www.kaijufrenznft.com/img/preview.gif"
              alt=""
              className="w-250 lg:w-400"
            />
          </div>
        </div>
      </div>
      <WalletModal ENSName={undefined} />{" "}
    </>
  );
};

export default Home;
