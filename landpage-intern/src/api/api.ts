import { IRequest } from "../App"

export const api = {
  baseUrl: import.meta.env.VITE_API_URL ?? "http://localhost:3131",
  getAll(path: string) {
    return fetch(this.baseUrl + path)
  },

  create(path: string, body: IRequest) {
    return fetch(this.baseUrl + path, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json"
      }),
      body: JSON.stringify(body)
    })
  }
}
