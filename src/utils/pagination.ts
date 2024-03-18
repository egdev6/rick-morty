/* eslint-disable @typescript-eslint/no-explicit-any */
export const getLastPage = (lastPage: any) => {
  if (!lastPage.info) return 0
  return lastPage?.info.pages
}

export const getCurrentPage = (last: any): number => {
  if (!last.info) return 0
  if (!last.info.next) return last.info.pages
  const urlParams = new URLSearchParams(last.info.next.split('?')[1])
  return parseInt(urlParams.get('page') || '1') - 1
}
