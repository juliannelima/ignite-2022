import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import ImgBanner from '../../assets/ImgBanner.svg'

import { Banner, HomeContainer, Info, Item, Wrapper } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <Info>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <Wrapper>
            <Item color="white" variant="yellow-dark">
              <div>
                <ShoppingCart weight="fill" />
              </div>

              <span>Compra simples e segura</span>
            </Item>
            <Item color="white" variant="base-text">
              <div>
                <Package weight="fill" />
              </div>

              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item color="white" variant="yellow-main">
              <div>
                <Timer weight="fill" />
              </div>

              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item color="white" variant="purple-main">
              <div>
                <Coffee weight="fill" />
              </div>

              <span>O café chega fresquinho até você</span>
            </Item>
          </Wrapper>
        </Info>

        <img src={ImgBanner} alt="" />
      </Banner>
    </HomeContainer>
  )
}
