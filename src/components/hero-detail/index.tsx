import React from 'react'
import { Powerstats } from '..'
import { IHeroDetailProps } from '../../types'
import './styles.scss'

const HeroDetail: React.FC<IHeroDetailProps> = ({ hero }) => {
  return (
    <section>
      <article className="hero-detail">
        <section className="row">
          <section className="hero-detail-images col-sm-6 col-md-6 col-12">
            <img className="image" src={hero?.image?.url} alt={hero.name} />
          </section>
          <section className="hero-detail-presentation col-sm-6 col-md-6 col-12">
            <h1 className="hero-detail-presentation-title">{hero.name}</h1>
            <h2 className="hero-detail-presentation-subtitle">{hero.biography['full-name']}</h2>
            <h3>powerstats</h3>
            <Powerstats item={hero?.powerstats} />
            <h3>detalhes</h3>
            <dl>
              <dt>
                <b>cor dos olhos</b>: {hero?.appearance['eye-color']}
              </dt>
              <dt>
                <b>sexo</b>: {hero?.appearance['gender']}
              </dt>
              <dt>
                <b>cor do cabelo</b>: {hero?.appearance['hair-color']}
              </dt>
              <dt>
                <b>altura</b>: {hero?.appearance['height']}
              </dt>
              <dt>
                <b>peso</b>: {hero?.appearance['weight']}
              </dt>
              <dt>
                <b>raça</b>: {hero?.appearance['race']}
              </dt>
              <dt>
                <b>primeira aparição</b>: {hero?.biography['first-appearance']}
              </dt>
              <dt>
                <b>lugar de Nascimento</b>: {hero?.biography['place-of-birth']}
              </dt>
              <dt>
                <b>editora</b>: {hero?.biography['publisher']}
              </dt>
              <dt>
                <b>profissão</b>: {hero?.work['occupation']}
              </dt>
              <dt>
                <b>base</b> {hero?.work['base']}
              </dt>
            </dl>
          </section>
        </section>
      </article>
    </section>
  )
}

export default HeroDetail
