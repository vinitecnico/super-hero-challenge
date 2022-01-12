import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Content, Loading, Hero } from '../../components'
import { getByName } from '../../clients'
import { useNavigate, useParams } from 'react-router-dom'
import { Result } from '../../types'

const HeroList: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [heros, setHeros] = useState<Result[] | null>([])
  const [hasError, setHasError] = useState(false)
  const { heroName } = useParams()
  const navigate = useNavigate()

  const getHeros = async () => {
    try {
      setHasError(false)
      if (heroName) {
        var response = await getByName(heroName)
        const {
          data: { results, error },
        } = response

        if (error) throw error
        setHeros(results)
      }
    } catch {
      setHasError(true)
    } finally {
      setLoading(false)
    }
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
      {!loading && (
        <>
          <Breadcrumbs crumbs={['home', heroName || '']} />
          {!hasError ? (
            <>
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
          ) : (
            <h3>personagem não encontrado ;(</h3>
          )}
        </>
      )}
    </Content>
  )
}

export default HeroList
