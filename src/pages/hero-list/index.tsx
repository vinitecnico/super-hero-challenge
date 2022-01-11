import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Content, Loading, Hero } from '../../components'
import { getByName } from '../../clients'
import { useParams } from 'react-router-dom'
import { Result } from '../../types'

const HeroList: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [heros, setHeros] = useState<Result[] | null>([])
  const { heroName } = useParams()
  console.log('here >>>', heroName)

  const getHero = async () => {
    if (heroName) {
      var response = await getByName(heroName)
      const {
        data: { results },
      } = response
      setHeros(results)
      console.log('here 2<<<', results)
    }

    setLoading(false)
  }

  const handleSelectHero = (id: string) => console.log('here >>>')
  const handleCompareHero = (id: string) => console.log('here >>>')

  useEffect(() => {
    getHero()
  }, [heroName])

  return (
    <Content noBgColor={false}>
      {loading && <Loading />}
      {!loading && heros && (
        <>
          <Breadcrumbs crumbs={[heroName || '']} />
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
