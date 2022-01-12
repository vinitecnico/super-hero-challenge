import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Content, Loading, Hero, Button } from '../../components'
import { getByName } from '../../clients'
import { useNavigate, useParams } from 'react-router-dom'
import { heroPowerstats, Result } from '../../types'
import './styled.scss'

const HeroList: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [heros, setHeros] = useState<Result[] | null>([])
  const [compares, setCompares] = useState<Result[] | null>([])
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

  const handleCompareHero = (id: string) => {
    const data = compares ? compares : []
    const response = heros?.find((hero) => hero.id === id)
    if (response) data.push(response)
    setCompares([...data])
  }

  useEffect(() => {
    getHeros()
  }, [heroName])

  const _heroPowerstats: heroPowerstats[] = [
    'combat',
    'durability',
    'intelligence',
    'power',
    'speed',
    'strength',
  ]

  const handleRemoveHero = (id: string) => {
    const data = compares?.filter((compare) => compare.id !== id) || []
    setCompares(data)
  }

  return (
    <Content noBgColor={false}>
      {loading && <Loading />}
      {!loading && (
        <>
          <Breadcrumbs crumbs={['home', heroName || '']} />
          {!hasError ? (
            <>
              {compares && compares?.length > 0 && (
                <section className="row card-list">
                  {compares?.map((compare) => (
                    <article className="card col-md-3 col-11" key={compare.id}>
                      <img src={compare?.image?.url} alt={compare?.name} />
                      <aside>
                        <h1>{compare?.name}</h1>
                        <dl>
                          {_heroPowerstats?.map((value) => {
                            return (
                              <dt key={value}>
                                <b>{value}</b>: {compare?.powerstats[value]}
                              </dt>
                            )
                          })}
                        </dl>
                        <Button color="secondary" onClick={() => handleRemoveHero(compare.id)}>
                          Remover
                        </Button>
                      </aside>
                    </article>
                  ))}
                </section>
              )}
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
