import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/abi";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);
  const { enableWeb3, isWeb3Enabled } = useMoralis();

  const { data: data1, error: error1, runContractFunction: runMintNFT, isFetching: isfetching1, isLoading: isloading1 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xD99e7a2B5fA64275BE9F3e3EC4e8f12915071cdD", // your contract address on the testnet here
      functionName: "mintNFT", // function name
      msgValue: 100,
      params: {

      },
    });

  const { data: data2, error: error2, runContractFunction: runREfund, isFetching: isfetching2, isLoading: isloading2 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xD99e7a2B5fA64275BE9F3e3EC4e8f12915071cdD", // your contract address on the testnet here
      functionName: "refund", // function name
      // msgValue: 100,
      params: {

      },
    });

  const { data: data3, error: error3, runContractFunction: runWithdraw, isFetching: isfetching3, isLoading: isloading3 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xD99e7a2B5fA64275BE9F3e3EC4e8f12915071cdD", // your contract address on the testnet here
      functionName: "refund", // function name
      // msgValue: 100,
      params: {

      },
    });




  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });


  return (
    <div>
      {hasMetamask ? (
        isWeb3Enabled ? (
          "Connected! "
        ) : (
          <button onClick={() => enableWeb3()}>Connect</button>
        )
      ) : (
        "Please install MetaMask"
      )}
      <br />
      {isWeb3Enabled ? (
        <button onClick={() => runMintNFT()}>
          Mint E-ticket NFT
        </button>
      ) : (
        ""
      )}
      <br /><br />
      {isWeb3Enabled ? (
        <button onClick={() => runREfund()}>
          refund
        </button>
      ) : (
        ""
      )}
      <br />
      {isWeb3Enabled ? (
        <button onClick={() => runWithdraw()}>
          withdraw
        </button>
      ) : (
        ""
      )}
    </div>
  );
}