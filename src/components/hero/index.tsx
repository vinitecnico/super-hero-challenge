import React from 'react'
import { IHeroProps } from '../../types'
import './styles.scss'

const Product: React.FC<IHeroProps> = ({
  id,
  picture,
  name,
  fullName,
  handleSelectHero,
  handleCompareHero,
}) => {
  return (
    <section id={id} className="product-items">
      <section className="product-body" onClick={() => handleSelectHero(id)}>
        <section className="thumbnail">
          <img src={picture} title={name} alt={name} />
        </section>
        <section className="product-info">
          <h2 className="product-info-amount">{name}</h2>
          <h3 className="product-info-name">{fullName}</h3>
        </section>
      </section>
    </section>
  )
}

export default Product
