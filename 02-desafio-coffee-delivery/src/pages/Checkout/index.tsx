import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import ImgCoffee from '../../assets/img/Coffee.svg'

import { Counter } from '../../components/Counter'

import {
  ButtonDelete,
  CheckoutAddressCard,
  CheckoutCard,
  CheckoutCoffeeCard,
  CheckoutContainer,
  CheckoutPayCard,
  CoffeCardCart,
  ConfirmOrder,
  PayCards,
  Subtitle,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutCard>
        <Title>Complete seu pedido</Title>

        <CheckoutAddressCard>
          <Subtitle variant="yellow-dark">
            <MapPinLine size={22} />

            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Subtitle>

          <form>
            <input type="text" placeholder="CEP" required />
            <input type="text" placeholder="Rua" required />
            <div>
              <input type="text" placeholder="Número" required />
              {/* <InputComplemento type="text" placeholder="Complemento" /> */}
            </div>
            <div>
              <input type="text" placeholder="Bairro" required />
              <input type="text" placeholder="Cidade" required />
              {/* <InputUF type="text" placeholder="UF" required /> */}
            </div>
          </form>
        </CheckoutAddressCard>

        <CheckoutPayCard>
          <Subtitle variant="purple-main">
            <CurrencyDollar size={22} />

            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Subtitle>

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
        </CheckoutPayCard>
      </CheckoutCard>

      <CheckoutCard>
        <Title>Cafés selecionados</Title>

        <CheckoutCoffeeCard>
          <CoffeCardCart>
            <img src={ImgCoffee} alt="" />

            <div>
              <span>Expresso Tradicional</span>
              <section>
                <Counter />
                <ButtonDelete>
                  <Trash size={16} />
                  <span>REMOVER</span>
                </ButtonDelete>
              </section>
            </div>

            <span>R$ 9,90</span>
          </CoffeCardCart>

          <CoffeCardCart>
            <img src={ImgCoffee} alt="" />

            <div>
              <span>Expresso Tradicional</span>
              <section>
                <Counter />
                <ButtonDelete>
                  <Trash size={16} />
                  <span>REMOVER</span>
                </ButtonDelete>
              </section>
            </div>

            <span>R$ 9,90</span>
          </CoffeCardCart>

          <table>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>R$29,70</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>R$29,70</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>R$29,70</td>
              </tr>
            </tbody>
          </table>

          <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
        </CheckoutCoffeeCard>
      </CheckoutCard>
    </CheckoutContainer>
  )
}
