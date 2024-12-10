import { useLayoutEffect, useRef } from 'react'
import { Milliseconds } from 'shared/types'
import { RAFCallback } from '../types'
import { MIN_MS_PER_FRAME } from '../constants'

export const useAnimationFrame = (updateChartFrame: RAFCallback | null) => {
  const callbackRef = useRef<RAFCallback | null>(null)
  const frameRef = useRef<number | null>(null)
  const lastTimeframeRef = useRef<number>(performance.now())

  callbackRef.current = updateChartFrame

  const animate = (timeSinceStart: number) => {
    if (!callbackRef.current) return

    // NOTE: framerate equals to 30fps
    // TODO: check guard expression: if (now - lastTimeframeRef.current < MIN_MS_PER_FRAME) return
    if (timeSinceStart - lastTimeframeRef.current >= MIN_MS_PER_FRAME) {
      const timestamp = timeSinceStart + performance.timeOrigin
      const frameTiming = {
        timestamp: Math.ceil(timestamp) as Milliseconds,
        delta: (timeSinceStart - lastTimeframeRef.current) as Milliseconds
      }
      callbackRef.current(frameTiming)
      lastTimeframeRef.current = timeSinceStart
    }

    frameRef.current = window.requestAnimationFrame(animate)
  }

  useLayoutEffect(() => {
    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      if (!frameRef?.current) return
      cancelAnimationFrame(frameRef?.current)
    }
  })
}
