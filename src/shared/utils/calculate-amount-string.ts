import { addAmountPostfix } from './add-amount-postfix'

export const calculateAmountString = (
  isRoi: boolean,
  roi: number,
  pnl: number,
  valueBadge: string
) => {
  return `${isRoi ? Number(roi).toFixed(2) : addAmountPostfix(Number(pnl))}${
    valueBadge || ''
  }`
}
