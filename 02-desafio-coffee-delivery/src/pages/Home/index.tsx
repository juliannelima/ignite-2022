import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

import ImgBanner from '../../assets/ImgBanner.svg'

import ImgCoffee from '../../assets/img/Coffee.svg'

import {
  Banner,
  ButtonBuy,
  CoffeeBuy,
  CoffeeCard,
  CoffeeList,
  CounterBuy,
  HomeContainer,
  Info,
  Item,
  TagList,
  Wrapper,
} from './styles'

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

      <section>
        <h2>Nossos Cafés</h2>

        <CoffeeList>
          {[1, 2, 3, 4, 5, 6].map((coffee) => (
            <CoffeeCard key={coffee}>
              <header>
                <img src={ImgCoffee} alt="Café tradicional" />

                <TagList>
                  <span>Tradicional</span>
                  <span>Alcoólico</span>
                  <span>Gelado</span>
                </TagList>
              </header>

              <main>
                <strong>Expresso Tradicional</strong>
                <span>
                  O tradicional café feito com água quente e grãos moídos
                </span>
              </main>

              <CoffeeBuy>
                <section>
                  <span>R$</span>
                  <strong> 9,90</strong>
                </section>

                <div>
                  <CounterBuy>
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </CounterBuy>

                  <ButtonBuy>
                    <ShoppingCart size={22} weight="fill" />
                  </ButtonBuy>
                </div>
              </CoffeeBuy>
            </CoffeeCard>
          ))}
        </CoffeeList>
      </section>
    </HomeContainer>
  )
}
