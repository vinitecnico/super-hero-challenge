import React from 'react'
import { heroPowerstats, IPowerstatsProps } from '../../types'

const Powerstats: React.FC<IPowerstatsProps> = ({ item }) => {
  const _heroPowerstats: heroPowerstats[] = [
    'combat',
    'durability',
    'intelligence',
    'power',
    'speed',
    'strength',
  ]

  return (
    <dl>
      {_heroPowerstats?.map((value) => {
        return (
          <dt key={value}>
            <b>{value}</b>: {item[value] === 'null' ? '0' : item[value]}
          </dt>
        )
      })}
    </dl>
  )
}

export default Powerstats
