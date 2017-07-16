export default function search(param, page = 10) {
  return axios.get(`https://itunes.apple.com/search?term=${param}&limit=${page}`)
}
