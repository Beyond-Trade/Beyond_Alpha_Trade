import { AbiItem } from "web3-utils";

export const BeyondExProxAbi: AbiItem | AbiItem[] = [
  {
    inputs: [
      {
        internalType: "contract IUSDSynth",
        name: "_usdSynthToken",
        type: "address",
      },
      {
        internalType: "contract IPriceConsumerV3",
        name: "_price",
        type: "address",
      },
      { internalType: "contract IBeyond", name: "_beyond", type: "address" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "beyond",
    outputs: [{ internalType: "contract IBeyond", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "beyondExchange",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "beyondTokenValueInDollar",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "burnUSDbToReleaseCollateral",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "burnUSDbToSettleCollatteralRatio",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "checkUserCollatteral",
    outputs: [
      { internalType: "uint256", name: "bUSDAmountInBYN", type: "uint256" },
      {
        internalType: "uint256",
        name: "collatteralValueInBYN",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "additionalBYNValueForCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "additionalCollatteralValueInUSDb",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collatteralRatioUpdated",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "checkUserReward",
    outputs: [{ internalType: "uint256", name: "reward", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "claimReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "closeLoan",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "collatteral",
    outputs: [
      { internalType: "address", name: "investor", type: "address" },
      { internalType: "uint256", name: "bUSDValue", type: "uint256" },
      { internalType: "uint256", name: "USDbValueinBYN", type: "uint256" },
      { internalType: "uint256", name: "collatteralValue", type: "uint256" },
      {
        internalType: "uint256",
        name: "currentCollatteralRatio",
        type: "uint256",
      },
      { internalType: "uint256", name: "rewardClaimTime", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "collatteralRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth1", type: "string" },
      { internalType: "string", name: "_synth2", type: "string" },
      { internalType: "address", name: "_beneficiary", type: "address" },
      { internalType: "uint256", name: "_value", type: "uint256" },
    ],
    name: "convertSynths",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_value", type: "uint256" },
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "createLoan",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "currentTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "getBYN",
    outputs: [
      { internalType: "uint256", name: "unstackedBYN", type: "uint256" },
      { internalType: "uint256", name: "stackedBYN", type: "uint256" },
      { internalType: "uint256", name: "totalBYN", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getBeyondTokenValue",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "getSynthAddress",
    outputs: [
      { internalType: "bytes32", name: "_synth", type: "bytes32" },
      {
        internalType: "contract ISynth",
        name: "_contractAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "interval",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "loanDetails",
    outputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint256", name: "loanValue", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "loanFeeRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth", type: "string" },
      { internalType: "address", name: "_address", type: "address" },
      { internalType: "uint256", name: "_value", type: "uint256" },
    ],
    name: "mintSynth",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_value", type: "uint256" },
      { internalType: "address", name: "_minter", type: "address" },
    ],
    name: "mintUSDSynth",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price",
    outputs: [
      { internalType: "contract IPriceConsumerV3", name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardClaimTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "rewardCycleDetail",
    outputs: [
      { internalType: "uint256", name: "cycle", type: "uint256" },
      { internalType: "uint256", name: "currentCycleReward", type: "uint256" },
      { internalType: "uint256", name: "previousCycleReward", type: "uint256" },
      {
        internalType: "uint256",
        name: "cycleRewardRemaining",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "setBeyondExchangeAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "setCollatteralRatio",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth", type: "string" },
      {
        internalType: "contract ISynth",
        name: "synthAddress",
        type: "address",
      },
    ],
    name: "setSynthAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "start",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "startExchange",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "string", name: "source", type: "string" }],
    name: "stringToBytes32",
    outputs: [{ internalType: "bytes32", name: "result", type: "bytes32" }],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth", type: "string" },
      { internalType: "address", name: "_beneficiary", type: "address" },
      { internalType: "uint256", name: "_value", type: "uint256" },
    ],
    name: "synthToUSD",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "synthToken",
    outputs: [{ internalType: "contract ISynth", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalMintedUSDb",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalStackedBYN",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tradeFeeRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "usdSynthToken",
    outputs: [
      { internalType: "contract IUSDSynth", name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
      { internalType: "uint256", name: "_time", type: "uint256" },
    ],
    name: "userRewardDetails",
    outputs: [
      { internalType: "uint256", name: "_cycleReward", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
