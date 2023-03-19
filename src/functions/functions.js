const getCharacters = async(url, setNext, setBack, setPages, setCharacters) => {
    const api = await fetch(url)
    const {info, results} = await api.json()
    setNext(info.next)
    info.prev != null ? setBack(info.prev) : setBack(null)
    setPages(info.pages)
    setCharacters(results)
}

const getCharacter = async (id, setPersonaje) => {
    const api = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const result = await api.json()
    setPersonaje(result)
}

export {
    getCharacters,
    getCharacter
}