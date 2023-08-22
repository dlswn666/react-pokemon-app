import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from '../../components/pokeCard';
import AutoComplete from '../../components/AutoComplete';

function MainPage() {
    // 모든 데이터
    const [allPokemons, setAllPokemons] = useState([]);
    const [displayedPokemons, setDisplayedPokemons] = useState([]);
    //한번에 보여지는 데이터 수
    const limitNum = 20;
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=0`;

    // const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        fetchPokeData(true);
    }, []);

    // useEffect(() => {
    //     handleSearchInput(debouncedSearchTerm);
    // }, [debouncedSearchTerm]);

    const filterDisplayedPokemonData = (allPokemonsData, displayedPokemons = []) => {
        const limit = displayedPokemons.length + limitNum;
        const array = allPokemonsData.filter((pokemon, index) => index + 1 <= limit);
        return array;
    };

    const fetchPokeData = async () => {
        try {
            const response = await axios.get(url);
            setAllPokemons(response.data.results);
            setDisplayedPokemons(filterDisplayedPokemonData(response.data.results));
        } catch (error) {
            console.error(error);
        }
    };

    // const handleSearchInput = async (searchTerm) => {
    //     if (searchTerm.length > 0) {
    //         try {
    //             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    //             const pokemonData = {
    //                 url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}`,
    //                 name: searchTerm,
    //             };
    //             setDisplayedPokemons([pokemonData]);
    //         } catch (error) {
    //             setDisplayedPokemons([]);
    //             console.error(error);
    //         }
    //     } else {
    //         fetchPokeData(true);
    //     }
    // };

    return (
        <article className="pt-6">
            <header className="flex flex-col gap-2 w-full px-4 z-50">
                <AutoComplete allPokemons={allPokemons} setDisplayedPokemons={setDisplayedPokemons} />
            </header>
            <section className="pt-6 flex flex-col justify-content items-center overflow-auto z-0">
                <div className="flex flex-row flex-wrap gap-[16px] items-center justify-center px-2 max-w-4xl">
                    {displayedPokemons.length > 0 ? (
                        displayedPokemons.map(({ url, name }, index) => (
                            <PokeCard key={url} url={url} name={name}></PokeCard>
                        ))
                    ) : (
                        <h2 className="font-medium text-lg text-slate-900 mb-1">포켓몬이 없습니다.</h2>
                    )}
                </div>
            </section>
            <div className="text-center">
                {allPokemons.length > displayedPokemons.length && displayedPokemons.length !== 1 && (
                    <button
                        onClick={() => setDisplayedPokemons(filterDisplayedPokemonData(allPokemons, displayedPokemons))}
                        className="bg-slate-800 px-6 py-2 my-4 text-abse rounded-lg font-bold text-white"
                    >
                        더 보기
                    </button>
                )}
            </div>
        </article>
    );
}

export default MainPage;
