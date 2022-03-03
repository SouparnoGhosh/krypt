import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import { Loader } from "./";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// Creates the input component
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism my-2 w-full rounded-sm border-none bg-transparent p-2 text-sm text-white outline-none"
  />
);

export default function Welcome() {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-start justify-between py-12 px-4 md:p-20 mf:flex-row">
        {/* LHS portion has button and grid*/}
        <div className="flex flex-1 flex-col items-start justify-start mf:mr-10">
          {/* The top headings */}
          <h1 className="text-gradient py-1 text-3xl text-white sm:text-5xl">
            Send Crypto <br /> across the world
          </h1>
          <p className="mt-5 w-11/12 text-left text-base font-light text-white md:w-9/12">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypt.
          </p>

          {/* Creates connect wallet button */}
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="my-5 flex cursor-pointer flex-row items-center justify-center rounded-full bg-blue-600 p-3 text-base font-bold text-white hover:rounded-lg hover:bg-gray-300 hover:text-blue-600"
            >
              Connect Wallet
            </button>
          )}

          {/* Creating the 6 cell grid on LHS lower side */}
          <div className="grid-col-2 mt-10 grid w-full sm:grid-cols-3">
            <div className={`rounded-t-xl sm:rounded-tr-none ${commonStyles}`}>
              Reliability
            </div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`sm:rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low Fees</div>
            <div className={`rounded-b-2xl sm:rounded-bl-none ${commonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        {/* Creating the form on RHS */}
        <div className="mt-10 flex w-full flex-1 flex-col items-center justify-start mf:mt-0">
          <div className="eth-card .white-glassmorphism my-5 flex h-40 w-full flex-col items-start justify-end rounded-xl p-3 sm:w-72 ">
            <div className="flex h-full w-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                {!currentAccount ? (
                  <p className="text-sm font-light text-white">
                    {currentAccount}
                  </p>
                ) : (
                  <p className="text-sm font-light text-white">Address</p>
                )}
                <p className="mt-1 text-lg font-semibold text-white">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="blue-glassmorphism flex w-full flex-col items-center justify-start p-5 sm:w-96">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="my-2 h-[1px] w-full bg-gray-400" />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-2 w-full cursor-pointer rounded-full border-[1px] border-[#3d4f7c] p-2 text-white hover:bg-[#3d4f7c]"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
