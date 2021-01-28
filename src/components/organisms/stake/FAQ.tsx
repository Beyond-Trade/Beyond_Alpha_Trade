import FAQChip from "../../atomic/stake/FAQChip";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GeneralButton from "../../atomic/GeneralButton";
const FAQleft = [
  {
    faqNo: 1,
    question: "What is Beyond protocol?",
    answer:
      "Beyond is a decentralized platform for synthetic financial products. Users gain exposure to the underlying asset price without holding the actual asset through synthetic products",
  },
  {
    faqNo: 2,
    question:
      "How does Beyond protocol different from other defi derivatives protocol?",
    answer:
      "Beyond protocol is layer 2 solution resolving the issue of scalability, network congestion and high transaction fee. Beyond implies the innovative approach of combining the usual Bid/Ask Order book and mechanism of automated market maker. Beyond provides the arbitrage profits opportunities with the synthetic asset and its underlying assets. Arbitagers can buy the synthetics and use it to unlock the corresponding value of BYN tokens. Beyond protocol also has a special feature call synthetic auctions whereby during the price discrepancy of more than 10% between the synthetic  and underlying assets, the equilibrium in the price for the synthetic is restored.",
  },
  {
    faqNo: 3,
    question:
      "What can I earn by participating in the Beyond Finance protocol?",
    answer: (
      <p>
        1.Staked BYN tokens – Earn a Staking Reward.
        <br />
        2.Staked/ BYN Holders – Earn Portion of Transaction Fee.
        <br />
        3.Investing (minting) Synthetic Assets – Earn Portion of Newly Minted
        BYN Tokens as Added Incentive.
        <br />
        4.Beyond Governance – Receive Additional BYN Incentive.
        <br />
        5.Liquidity Provider – Earn LP rewards.
        <br />
        6.Lower Collateralization Ratio – Less Capital Intensive for Users of
        BYN platform to Invest (mint) Synthetic Assets
      </p>
    ),
  },
  {
    faqNo: 4,
    question: "What is Beyond’s development roadmap?",
    answer: (
      <p>
        1Q 2021 – BYN Token Distribution Beyond exchange official version launch{" "}
        <br />• Improved security. Enhanced scalability for mass user adoption{" "}
        <br />
        • Adoption of BIP for community voting (ex. fee sharing ratio, new asset
        creations)
        <br />
        2Q 2021 – New asset class introduction of unlisted private stocks, IEOs
        and probability events Future & Options update <br />
        • Expansion into crypto derivatives platform <br />
        2H 2021 – Platform migration from current Ethereum 1.0 (TBD)
        <br />
        • Enhanced transaction speed and lower network fee <br />
        1H 2022 – Completion of full Decentralized Autonomous Organization
        transition <br />• All decisions related to exchange operation will be
        autonomously done by BIP process
      </p>
    ),
  },
  {
    faqNo: 5,
    question: "What is the first step to do in the Beyond Protocol?",
    answer:
      "Stake BYN token, then invest in synthetic to trade various synthetic products in the Beyond exchange.",
  },
  {
    faqNo: 6,
    question:
      "What is the process of trading synthetic assets in the Beyond Protocol?",
    answer: (
      <p>
        Step 1 - Purchase the BYN Token
        <br />
        Step 2 - Stake the BYN Token and get Staking reward OR - Issued with
        Synthetic Token USDb.
        <br />
        Step 3 -Trade/Invest USDb for multi asset synthetic products.
        <br />
        Step 4 - Earn Profit from investment/Trade
        <br />
        Step 5 - Redeem BYN token
      </p>
    ),
  },
];
const FAQright = [
  {
    faqNo: 7,
    question: "Why stake BYN?",
    answer: (
      <p>
        1. Stake BYN to receive the staking rewards.
        <br />
        2. Staking BYN allows the BYN holder to invest (mint) synthetic assets
        and earn additional rewards in BYN.
        <br />
        3. Stake BYN to earn the portion of trading fee from the Beyond
        Exchange. <br />
        Further if the BYN holder, stakes at least 50,000 BYN, the staker is
        eligible to participate in the Beyond Governance via voting and every
        participant is rewarded with the BYN token for the contribution.
      </p>
    ),
  },
  {
    faqNo: 8,
    question: "Where do I get the BYN token?",
    answer:
      "From then Beyond Exchange, swap with your ETH and get BYN token. Alternatively BYN will be available in the other DEX and Centralized exchanges. ",
  },
  {
    faqNo: 9,
    question: "What does it mean by “Invest” synthetics?",
    answer:
      "For the ease of understanding and for the greater mass adoption, Beyond exchange uses the term “Invest” synthetics, instead of the term “Mint” synthetics which is generally used in the Blockchain Defi world. It means that BYN token is staked with a certain collateralization ratio and synthetic USDb gets issued for trading",
  },
  {
    faqNo: 10,
    question: "What does collateral ratio of 300% mean?",
    answer:
      "The ratio of collateral of 300% is used to back each synthetic assets invested. For instance, a user can invest 1 USDb in the share pool, by staking 3USD worth of BYN token.",
  },
  {
    faqNo: 11,
    question: "What is Redemption fee?",
    answer: (
      <p>
        Redemption fee is for those staker to motivate to stake more and to
        prevent from selling the reward token and to maintain the BYN price and
        circulation. <br />
        To promote and incentify our early investors to stake their reward
        tokens as long as possible (~12-months). The redemption fees are
        applied. For instance, the following example is to set a redemption fee
        deduction schedule to the reward tokens.
      </p>
    ),
  },
  {
    faqNo: 12,
    question:
      "What do I do if my wallet is not connecting to the Beyond Platform?",
    answer: (
      <p>
        Please clear your browser's cache. To clear the cache, follow the
        following steps:
        <br />
        1. Open Chrome browser.
        <br />
        2. At the top right, click More.
        <br />
        3. Click More tools. Clear browsing data.
        <br />
        4. At the top, choose a time range. To delete everything, select All
        time.
        <br />
        5. Next to "Cookies and other site data" and "Cached images and files,"
        check the boxes.
        <br />
        6. Click Clear data.
      </p>
    ),
  },
];
function FAQ() {
  const [toggle, setToggle] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const handleToggle = (faqNo: any) => {
    setActiveFAQ(faqNo);
    if (faqNo === activeFAQ) {
      setToggle((prev) => !prev);
    } else {
      setToggle(true);
    }
  };

  const history = useHistory();

  return (
    <div className="px-20 py-12">
      <h1 className="text-2xl xxl:text-5xl xl:pt-4 xxl:pt-8 font-bold text-customBlack-500">
        FAQs
      </h1>
      {/* <p className="text-xs font-bold xxl:text-lg py-6 mt-3 text-customBlack-500">
        We always appreciate if you take a minute to look at the most common
        questions.
      </p> */}
      <div className="lg:flex mt-4">
        <div className="w-full xl:mr-2 lg:mr-2">
          {FAQleft.map((FAQ, i) => (
            <div
              className={`p-5 bg-gray-300 mt-2 ${
                toggle && FAQ.faqNo === activeFAQ
                  ? "border-customBlack-550"
                  : ""
              }`}
            >
              <div className="flex justify-between">
                <h5 className="text-sm xxl:text-base text-gray-900 font-medium">
                  {FAQ.question}
                </h5>
                <button
                  className="focus:outline-none"
                  onClick={() => handleToggle(FAQ.faqNo)}
                >
                  {toggle && FAQ.faqNo === activeFAQ ? (
                    <img src="/assets/Icons/collapsible-minus.svg" alt="img" />
                  ) : (
                    <img src="/assets/Icons/collapsible-plus.svg" alt="img" />
                  )}
                </button>
              </div>
              {toggle && FAQ.faqNo === activeFAQ ? (
                <div className="flex border-t-2 border-gray-500 p-3 m-3 font-normal text-xs xxl:text-sm justify-content">
                  {FAQ.answer}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="w-full xl:ml-2 lg:ml-2">
          {FAQright.map((FAQ, i) => (
            <div
              className={`p-5 mt-2 bg-gray-300 ${
                toggle && FAQ.faqNo === activeFAQ
                  ? "border-customBlack-550"
                  : ""
              }`}
            >
              <div className="flex justify-between border-b">
                <h5 className="text-sm xxl:text-base text-gray-900 font-medium">
                  {FAQ.question}
                </h5>
                <button
                  className="focus:outline-none"
                  onClick={() => handleToggle(FAQ.faqNo)}
                >
                  {toggle && FAQ.faqNo === activeFAQ ? (
                    <img src="/assets/Icons/collapsible-minus.svg" alt="img" />
                  ) : (
                    <img src="/assets/Icons/collapsible-plus.svg" alt="img" />
                  )}
                </button>
              </div>
              {toggle && FAQ.faqNo === activeFAQ ? (
                <div className="flex bg-gray-300 p-3 m-3 border-t-2 border-gray-500 font-normal text-xs xxl:text-sm justify-content">
                  {FAQ.answer}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div>
          <h2 className="font-bold mt-12 text-2xl xxl:text-5xl text-customBlack-500">
            Contact Us
          </h2>
          <p className="text-xl font-semibold xxl:text-3xl my-6 text-customBlack-500">
            If you did not find an answer to your question you can always
            contact us.
          </p>
          <GeneralButton
            submitting={false}
            submit={() =>
              window.open("mailto:contact@beyondfinance.io", "_blank")
            }
            textValue={"Contact Us"}
            otherClasses={
              "bg-customPink mt-4 px-8 py-2 xxl:text-xl font-bold text-base"
            }
          />
        </div>
        {/* <div> <img
            src="/assets/Images/chatIllustration.svg"
            style={{ height: "270px" }}
            alt="img"
            className="m-auto ml-20 mt-10"
          /></div> */}
      </div>
    </div>
  );
}

export default FAQ;
