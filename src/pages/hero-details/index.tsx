import React, { useState, useEffect } from 'react'
import { Content, Breadcrumbs, HeroDetail, Loading } from '../../components'
import { getByHeroId } from '../../clients'
import { useParams } from 'react-router-dom'
import { Result } from '../../types'

const HeroDetails: React.FC = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [hero, setHero] = useState<Result>()

  useEffect(() => {
    getHeros()
  }, [id])

  const getHeros = async () => {
    if (id) {
      var response = await getByHeroId(id)
      console.log(response.data)
      setHero(response?.data)
    }

    setLoading(false)
  }

  return (
    <>
      <Content noBgColor={false}>
        {loading && <Loading />}
        {!loading && hero && (
          <>
            <Breadcrumbs crumbs={['home', hero.name, 'details']} />
            <HeroDetail hero={hero} />
          </>
        )}
      </Content>
    </>
  )
}

export default HeroDetails
