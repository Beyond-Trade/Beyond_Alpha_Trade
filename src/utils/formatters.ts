import BigNumber from 'bignumber.js';
import format from 'date-fns/format';
import numbro from 'numbro';
import { BigNumberish } from 'ethers/utils';

const DEFAULT_CURRENCY_DECIMALS = 2;
export const FIAT_CURRENCY_DECIMALS = 2;
export const SHORT_CRYPTO_CURRENCY_DECIMALS = 4;
export const LONG_CRYPTO_CURRENCY_DECIMALS = 8;

type NumericValue = string | number;

const getPrecision = (amount: NumericValue) => {
	if (amount >= 1) {
		return DEFAULT_CURRENCY_DECIMALS;
	}
	if (amount > 0.01) {
		return SHORT_CRYPTO_CURRENCY_DECIMALS;
	}
	return LONG_CRYPTO_CURRENCY_DECIMALS;
};

export const formatCurrency = (value: NumericValue, decimals = DEFAULT_CURRENCY_DECIMALS) => {
	if (!value || !Number(value)) {
		return 0;
	}

	return numbro(value).format({
		thousandSeparated: true,
		trimMantissa: decimals > FIAT_CURRENCY_DECIMALS ? true : false,
		mantissa: decimals,
	});
};

export const formatCurrencyWithSign = (
	sign: string | null | undefined,
	value: NumericValue,
	decimals?: number
) => `${sign}${formatCurrency(value, decimals || getPrecision(value))}`;
