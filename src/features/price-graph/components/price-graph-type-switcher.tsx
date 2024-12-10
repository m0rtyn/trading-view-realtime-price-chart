import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { useState } from 'react'

// TODO: complete this component
export const PriceGraphTypeSwitcher = () => {
  const [chartType, setChartType] = useState('baseline')

  const handleBaselineToggle = () => {
    setChartType('baseline')
  }
  const handleCandleToggle = () => {
    setChartType('candlestick')
  }

  return (
    <ToggleGroup.Root type='single'>
      <ToggleGroup.Item
        value='area'
        onClick={handleBaselineToggle}
      >
        Baseline
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value='candlestick'
        onClick={handleCandleToggle}
        disabled
      >
        Candle
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
