import { api } from './api'

export type CoverageArea = {
  points: Point[]
}

export type Point = {
  x: number
  y: number,
}

export type Store = {
  id: string
  tradingName: string
  document: string,
  coverageArea: CoverageArea
  address: Point
  // user
}

export async function findAllStores() {
  return await api.get('/stores')
}

export async function findNearestStores(lat: number, lng: number) {
  return await api.get('/stores/nearest', {
    params: {
      lat,
      lng
    }
  })
}
