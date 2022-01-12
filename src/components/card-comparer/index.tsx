import React from 'react'
import { Button, Powerstats } from '..'
import { ICardComparerProps } from '../../types'
import './styled.scss'

const CardComparer: React.FC<ICardComparerProps> = ({hero, handleRemoveHero}) => {
  return (
    <article className="card col-md-3 col-11">
      <img src={hero?.image?.url} alt={hero?.name} />
      <aside>
        <h1>{hero?.name}</h1>
       <Powerstats item={hero.powerstats} />
        <Button color="secondary" onClick={() => handleRemoveHero(hero.id)}>
          Remover
        </Button>
      </aside>
    </article>
  )
}

export default CardComparer
