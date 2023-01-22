import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import ImgCoffee from '../../assets/img/Coffee.svg'

import {
  Address,
  CheckoutCoffeCard,
  CheckoutContainer,
  CheckoutInfo,
  CoffeCardButton,
  CoffeCardCart,
  CoffeCardSummary,
  InfoCart,
  InputComplemento,
  InputUF,
  Pay,
  PayCards,
  PayHeader,
} from './styles'
import { Counter } from '../../components/Counter'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutInfo>
        <header>Complete seu pedido</header>

        <Address>
          <div>
            <MapPinLine size={22} />

            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <form>
            <input type="text" placeholder="CEP" required />
            <input type="text" placeholder="Rua" required />
            <div>
              <input type="text" placeholder="Número" required />
              <InputComplemento type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" required />
              <input type="text" placeholder="Cidade" required />
              <InputUF type="text" placeholder="UF" required />
            </div>
          </form>
        </Address>

        <Pay>
          <PayHeader>
            <CurrencyDollar size={22} />

            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PayHeader>

          <PayCards>
            <button>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </button>
            <button>
              <Bank size={16} />
              <span>cartão de débito</span>
            </button>
            <button>
              <Money size={16} />
              <span>dinheiro</span>
            </button>
          </PayCards>
        </Pay>
      </CheckoutInfo>

      <CheckoutCoffeCard>
        <header>Cafés selecionados</header>

        <section>
          <CoffeCardCart>
            <img src={ImgCoffee} alt="" />

            <InfoCart>
              <span>Expresso Tradicional</span>

              <div>
                <Counter />

                <button>
                  <Trash size={16} />
                  REMOVER
                </button>
              </div>
            </InfoCart>

            <span>R$ 9,90</span>
          </CoffeCardCart>
          <CoffeCardSummary>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>R$29,70</td>
              </tr>{' '}
              <tr>
                <td>Total de itens</td>
                <td>R$29,70</td>
              </tr>{' '}
              <tr>
                <td>Total de itens</td>
                <td>R$29,70</td>
              </tr>
            </tbody>
          </CoffeCardSummary>

          <CoffeCardButton>CONFIRMAR PEDIDO</CoffeCardButton>
        </section>
      </CheckoutCoffeCard>
    </CheckoutContainer>
  )
}
