import { format } from 'date-fns'

export const formatDate = (timeframe: number) =>
  format(timeframe, 'dd.MM.yyyy HH:mm')
