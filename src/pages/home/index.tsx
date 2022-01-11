import React from 'react'
import { Content } from '../../components'

const Home: React.FC = () => {
  return (
      <Content noBgColor>
        <section className="home-body col-12">
          <h3 className="home-body-title">
            Utilize a barra de pesquisa para encontrar o seus heróis favoritos.
          </h3>
        </section>
      </Content>
  )
}

export default Home
