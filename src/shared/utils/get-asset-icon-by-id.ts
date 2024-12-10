import { FC, SVGProps } from 'react'
import {
  AdaAssetIcon,
  AvalancheAssetIcon,
  BnbAssetIcon,
  BnbLargeAssetIcon,
  BtcAssetIcon,
  BtcLargeAssetIcon,
  DogeAssetIcon,
  EthAssetIcon,
  EthLargeAssetIcon,
  LtcAssetIcon,
  LtcLargeAssetIcon,
  UnknownAssetIcon,
  TronAssetIcon,
  PolkadotAssetIcon,
  PolygonAssetIcon,
  CosmosAssetIcon,
  FilecoinAssetIcon,
  ChainlinkAssetIcon,
  ChainlinkLargeAssetIcon,
  SolanaAssetIcon,
  SolanaLargeAssetIcon,
  UniswapAssetIcon,
  UniswapLargeAssetIcon,
  MoneroAssetIcon,
  XrpAssetIcon,
  XrpLargeAssetIcon,
  StellarAssetIcon,
  AptosAssetIcon,
  NearAssetIcon,
  NearLargeAssetIcon,
  FormAssetPlaceholder
} from 'shared/icons'
import { AssetId } from 'shared/types'
import { TheToken } from 'shared/ui'

const ASSET_ID_TO_ICON_MAP: Record<AssetId, FC<SVGProps<SVGSVGElement>>> = {
  ADA: AdaAssetIcon, // ada
  AVAX: AvalancheAssetIcon, // avalanche
  BNB: BnbAssetIcon, // binance
  BTC: BtcAssetIcon, // bitcoin
  DOGE: DogeAssetIcon, // doge coin
  ETH: EthAssetIcon, // ethereum
  LTC: LtcAssetIcon, //
  DOT: PolkadotAssetIcon, // polkadot
  MATIC: PolygonAssetIcon, // polygon
  TRX: TronAssetIcon, // tron
  ATOM: CosmosAssetIcon, // cosmos
  FIL: FilecoinAssetIcon, // filecoin
  LINK: ChainlinkAssetIcon, // chainlink
  SOL: SolanaAssetIcon, // solana
  UNI: UniswapAssetIcon, // uniswap
  XLM: StellarAssetIcon, // stellar
  XMR: MoneroAssetIcon, // monero
  XRP: XrpAssetIcon, // xrp
  APT: AptosAssetIcon, // Aptos
  NEAR: NearAssetIcon // Near
}

const ASSET_ID_TO_LARGE_ICON_MAP: Record<
  AssetId,
  FC<SVGProps<SVGSVGElement>>
> = {
  BNB: BnbLargeAssetIcon, // binance
  BTC: BtcLargeAssetIcon, // bitcoin
  ETH: EthLargeAssetIcon, // ethereum
  LTC: LtcLargeAssetIcon, // litecoin
  LINK: ChainlinkLargeAssetIcon, // chainlink
  SOL: SolanaLargeAssetIcon, // solana
  UNI: UniswapLargeAssetIcon, // uniswap
  XRP: XrpLargeAssetIcon, // xrp
  NEAR: NearLargeAssetIcon, // near

  // TODO: Change on large icons or remove from assetId's if we don't need them anymore
  APT: AptosAssetIcon, // Aptos
  XLM: StellarAssetIcon, // stellar
  XMR: MoneroAssetIcon, // monero
  DOT: PolkadotAssetIcon, // polkadot
  MATIC: PolygonAssetIcon, // polygon
  TRX: TronAssetIcon, // tron
  ATOM: CosmosAssetIcon, // cosmos
  FIL: FilecoinAssetIcon, // filecoin
  DOGE: DogeAssetIcon, // doge coin
  ADA: AdaAssetIcon, // ada
  AVAX: AvalancheAssetIcon // avalanche
}

export const getAssetIconById = (assetId: AssetId | 'TheToken', isLarge?: boolean) => {
  if (assetId === 'TheToken') return TheToken

  const assetMap = isLarge ? ASSET_ID_TO_LARGE_ICON_MAP : ASSET_ID_TO_ICON_MAP

  const Icon =
    assetMap[assetId] || (isLarge ? FormAssetPlaceholder : UnknownAssetIcon)
  if (!Icon) console.error(`Asset icon for ${assetId} not found`)
  return Icon
}
