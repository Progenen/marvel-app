export default class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=77fd253f16962a849d818c65e1e54551'

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }


    getCharacterById = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
    }

}