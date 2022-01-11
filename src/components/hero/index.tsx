import React from 'react'
import { Button } from '..'
import { IHeroProps } from '../../types'
import './styles.scss'

const Hero: React.FC<IHeroProps> = ({
  id,
  picture,
  name,
  fullName,
  handleSelectHero,
  handleCompareHero,
}) => {
  return (
    <section id={id} className="hero-items">
      <section className="hero-body">
        <section className="thumbnail">
          <img src={picture} title={name} alt={name} />
        </section>
        <section className="hero-info">
          <h2 className="hero-info-name">{name}</h2>
          <h3 className="hero-info-fullname">{fullName}</h3>
          <Button color="primary" onClick={() => handleSelectHero(id)}>ver detalhes</Button>
          <Button color="secondary" onClick={() => handleCompareHero(id)}>Comparar</Button>
        </section>
      </section>
    </section>
  )
}

export default Hero
