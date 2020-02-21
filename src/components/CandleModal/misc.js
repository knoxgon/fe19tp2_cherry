export const parseDatePrev = (e) => {
  e.setDate(e.getDate() - 1)
  return parseInt((new Date(e).getTime()).toString().substring(0,  10))
} 
export const parseDate = (e) => parseInt((new Date(e).getTime()).toString().substring(0,  10))
export const normDatePrev = (e) => {
  const d = parseDatePrev(e);
  return new Date(d * 1000)
}
