import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Content, Loading } from '../../components'
import { getByName } from '../../clients'
import { useParams } from 'react-router-dom'

const HeroList: React.FC = () => {
  const [heros, setHeros] = useState({ loading: false, items: [] })
  const { heroName } = useParams()
  console.log('here >>>', heroName)

  const getHero = async () => {
    if (heroName) {
      var result = await getByName(heroName)
    }

    console.log('here 2<<<')
  }

  useEffect(() => {
    getHero()
  }, [heroName])

  return (
    <Content noBgColor={false}>
      {heros.loading && <Loading />}
      {!heros.loading && heros && (
        <>
          <Breadcrumbs crumbs={[heroName || ""]} />
          {/* {setHeros?.items?.map((hero, index) => (
            <Product key={index} item={hero} handleChooseProduct={handleChooseProduct} />
          ))} */}
        </>
      )}
    </Content>
  )
}

export default HeroList
