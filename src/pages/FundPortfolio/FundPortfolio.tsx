import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AssetBox from "../../components/Fund/AssetBox";
import walletImg from "../../img/icons/walletIcon.svg";

export default function FundPortfolio(props: any) {
  const [selected]: any = useOutletContext();
  const { assetBalances, protocolBalances, wallet } = selected || {};

  useEffect(() => {
    document.title = "Barren Wuffet | Fund Portfolio";
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mx-5 mb-10 rounded-xl px-8 py-12 bg-gray-dark">
        <div className="grid grid-cols-3 gap-16">
          {assetBalances?.map((asset: any) => (
            <AssetBox asset={asset} key={asset.name}></AssetBox>
          ))}
          {protocolBalances?.map((asset: any) => (
            <AssetBox asset={asset} key={asset.name}></AssetBox>
          ))}
        </div>
        {/* <hr className="" /> */}
        <div className="grid grid-cols-3 gap-16 mt-12 pt-12 border-t border-gray-700">
          <AssetBox
            asset={{ name: "Wallet", dollarValue: wallet, img: walletImg }}
          ></AssetBox>
        </div>
      </div>
    </div>
  );
}
