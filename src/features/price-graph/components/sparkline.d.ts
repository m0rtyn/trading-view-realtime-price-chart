declare module '@fnando/sparkline' {
  export function sparkline(
    svgElement: SVGSVGElement,
    data: (number | { value: number })[],
    options: {
      spotRadius?: number
      cursorWidth?: number
      interactive?: boolean
    }
  ): void
}
