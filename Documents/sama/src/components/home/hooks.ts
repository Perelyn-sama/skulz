import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";
// import { getAllNftItems } from "./actions";
// import { NFT } from "./types";
import { ethers, Contract } from "ethers";
import { toast, TypeOptions } from "react-toastify";

export function useMintNFT(): (
  contract: Contract,
  amount: number,
  cb?: Function
) => void {
  const dispatch = useDispatch();
  return useCallback(
    async (contract, amount, cb) => {
      console.log("useMintNFT");
      const price = 0.15 * amount;
      const bnPrice = ethers.utils.parseEther(price.toString());

      try {
        const tx = await contract.mint(amount, {
          value: bnPrice,
          gasLimit: 2000000,
        });
        const receipt = await tx.wait();
        console.log(receipt);
        toast.success(
          `Successfully minted ${amount} NFT${amount > 1 ? "s" : ""}`
        );
        cb && cb();
      } catch (error) {
        console.log("err", error.message);
        toast.error(error.message);
        cb && cb();
      }
    },
    [dispatch]
  );
}
