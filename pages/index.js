import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/abi";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const [isNFTMinted, setIsNFTMinted] = useState(false);

  const handleMintNFT = async () => {
    await runMintNFT();
    setIsNFTMinted(true);
  };
  const { data: data1, error: error1, runContractFunction: runMintNFT, isFetching: isfetching1, isLoading: isloading1 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0x8c692D9F7942CA423DF706c0E763be2cC993050B", // your contract address on the testnet here
      functionName: "mintNFT", // function name
      msgValue: 100,
      params: {

      },
    });

  /*const { data: data2, error: error2, runContractFunction: runcurrentPrice, isFetching: isfetching2, isLoading: isloading2 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0x4901AD8C2d069e3138ACFcFC078AE8Ec07F75AC5", // your contract address on the testnet here
      functionName: "currentPrice", // function name
      // msgValue: 100,
      params: {

      },
    });

  const { data: data3, error: error3, runContractFunction: runisNFTMinted, isFetching: isfetching3, isLoading: isloading3 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0x4901AD8C2d069e3138ACFcFC078AE8Ec07F75AC5", // your contract address on the testnet here
      functionName: "isNFTMinted", // function name

      // msgValue: 100,
      params: {

      },
    });

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
  */






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
      <h3>Current Price of Ticket: 1 Wei</h3>






      {isWeb3Enabled ? (
        <>
          <button onClick={handleMintNFT}>
            Buy E-ticket NFT
          </button>
          {isNFTMinted && <p>Ticket Purchased Successful  Import in Metamask</p>}
        </>
      ) : (
        ""
      )}
      <br /><br />




    </div>
  );
}
