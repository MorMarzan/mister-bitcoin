import axios from 'axios'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

window.getRate = getRate

function getRate() {

  return 'rate'
}

function getMarketPriceHistory() {

  return 'market price'
}

function getAvgBlockSize() {

  return 'avg block'
}

