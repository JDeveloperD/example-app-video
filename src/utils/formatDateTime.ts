import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatToTime = (date: Date) => {
  return dayjs(date).tz('America/Lima').format('h:mm A')
}
