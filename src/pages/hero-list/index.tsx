import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Content, Loading, Hero } from '../../components'
import { getByName } from '../../clients'
import { useNavigate, useParams } from 'react-router-dom'
import { Result } from '../../types'

const HeroList: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [heros, setHeros] = useState<Result[] | null>([])
  const { heroName } = useParams()
  const navigate = useNavigate()

  const getHeros = async () => {
    if (heroName) {
      var response = await getByName(heroName)
      const {
        data: { results },
      } = response
      setHeros(results)
    }

    setLoading(false)
  }

  const handleSelectHero = (id: string) => {
    navigate(`/hero-details/${id}`)
  }
  
  const handleCompareHero = (id: string) => console.log('here >>>')

  useEffect(() => {
    getHeros()
  }, [heroName])

  return (
    <Content noBgColor={false}>
      {loading && <Loading />}
      {!loading && heros && (
        <>
          <Breadcrumbs crumbs={['home', heroName || '']} />
          {heros?.map((hero) => (
            <Hero
              key={hero.id}
              id={hero.id}
              picture={hero?.image?.url}
              name={hero.name}
              fullName={hero?.biography['full-name']}
              handleSelectHero={handleSelectHero}
              handleCompareHero={handleCompareHero}
            />
          ))}
        </>
      )}
    </Content>
  )
}

export default HeroList
