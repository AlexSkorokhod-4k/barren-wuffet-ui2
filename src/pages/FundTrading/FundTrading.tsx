import React, { FunctionComponent, useEffect, useState } from "react";
import { t } from "@lingui/macro";
import { useNetwork } from "wagmi";

import { getTokens } from "../../config/tokens";
import SwapBox from "../../components/SwapBox/SwapBox";
import PriceChart from "../../components/Charts/PriceChart";
import TradingOrders from "../../components/Fund/OpenOrders";
import Tabs from "../../components/Tabs/Tabs";
import ActionSelector from "../../components/Fund/ActionSelector";
import { Action, ActionTypes } from "../../config/actions";
import OpenPositions from "../../components/Fund/OpenPositions";

const OrderList: FunctionComponent = (props) => {
  return (
    <div>
      <div>
        <Tabs
          options={[
            {
              label: t`Positions`,
              content: (
                <div>
                  <OpenPositions />
                </div>
              ),
            },
            {
              label: t`Orders`,
              content: <TradingOrders />,
            },
          ]}
        />
      </div>
    </div>
  );
};

const FundTrading = () => {
  const [actionToPerform, setActionToPerform] = useState<Action>();
  useEffect(() => {
    document.title = "Barren Wuffet | Fund Trading";
  }, []);

  const { chain } = useNetwork();

  const tokens = chain ? getTokens(chain.id) : [];

  const fromTokenAddress = tokens[0]?.address;
  const toTokenAddress = tokens[1]?.address;

  // const indexPricesUrl = getServerUrl(chainId, "/prices");
  // const { data: indexPrices } = useQuery([indexPricesUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  //   refreshInterval: 500,
  //   refreshWhenHidden: true,
  // });

  return (
    <div className="container mx-auto">
      <div className="flex flex-row ">
        <div className="md:basis-3/4">
          <div className="bg-gray-dark mx-5 mb-2 rounded-xl px-5 py-5">
            {chain && (
              <ActionSelector
                chainId={chain.id}
                selectedAction={actionToPerform}
                onSelectAction={(action: Action) => setActionToPerform(action)}
                actionType={ActionTypes.Trading}
              />
            )}
          </div>
          <div className="bg-gray-dark mx-5 mb-10 rounded-xl px-5 py-1">
            <PriceChart
              title={"USD/ETH"}
              priceFeed={() => []}
              fromToken={fromTokenAddress}
              toToken={toTokenAddress}
            />
          </div>
          <div className="bg-gray-dark mx-5 mb-10 rounded-xl px-8 py-1">
            <OrderList />
          </div>
        </div>
        <div className="md:basis-1/4">
          <div className="bg-gray-dark mx-5 mb-10 rounded-xl px-8 py-1">
            <SwapBox tokens={tokens} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundTrading;
