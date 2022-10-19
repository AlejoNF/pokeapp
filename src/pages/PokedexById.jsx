import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon404 from "../components/pokedexId/Pokemon404";
import "./styles/pokedexById.css";

const PokedexById = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, []);
  console.log(pokemon);

  if (hasError) {
    return <Pokemon404 />;
  }

  return (
    <article className="pokemonid__container">
      <section className="pokemonid__card">
        <header
          className={`pokemonid__header bg-${pokemon?.types[0].type.name}`}
        >
          <img
            className="pokemonid__img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>

        <div className="pokemonid__info">
          <h1 className={`pokemonid__id letter-${pokemon?.types[0].type.name}`}>
            # {pokemon?.id}
          </h1>

          <h2
            className={`pokemonid__name letter-${pokemon?.types[0].type.name} `}
          >
            {pokemon?.name}
          </h2>

          <ul className="pokemonid__list">
            <li className="pokemonid__item">
              Weight <span className="pokemonid__span">{pokemon?.weight}</span>
            </li>
            <li className="pokemonid__item">
              Height <span className="pokemonid__span">{pokemon?.height}</span>
            </li>
          </ul>
        </div>
        <br />

        <div className="pokemonid__about">
          <div className="pokemonid__about-info">
            <h3 className="about__title">Type </h3>
            <ul className="about__list">
              {pokemon?.types.map((type) => (
                <li
                  key={type.slot}
                  className={`about-item bg-${pokemon?.types[0].type.name}`}
                >
                  <span className="about-span">{type.type.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pokemonid__about-info">
            <h3 className="about__title">Abilities:</h3>

            <ul className="about__list">
              {pokemon?.abilities.map((ability) => (
                <li key={ability.ability.slot} className="about-item">
                  <span className="about-span">{ability.ability.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pokemonid__more">
        <h3 className="stats__title">Stats</h3>
        <div className="more__container">
          <ul className="stats__list">
            {pokemon?.stats.map((stat) => (
              <li className="stats__item" key={stat.name}>
                {stat.stat.name} :
                <span className="stats__value"> {stat.base_stat} </span>
              </li>
            ))}
          </ul>

          <div className="pokemonid__sprites">
            <div className="pokemonid__sprites-front-red">
              <img
                className="pokemonid__sprites-front"
                src={pokemon?.sprites.front_default}
                alt=""
              />
            </div>
            
              <div className="pokemonid__sprites-back-red">
                <img
              className="pokemonid__sprites-back"
              src={pokemon?.sprites.back_default}
              alt=""
            />
              </div>
            
          </div>
        </div>
      </section>

      <section className="pokemonid__movements">
        <h3 className="movements__title">Movements</h3>
        <ul className="movements__list">
          {pokemon?.moves.map((movement) => (
            <li key={movement.move.name} className="movements__item">
              {movement.move.name}{" "}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokedexById;
