import ImgIllustration from '../../assets/img/Illustration.svg'
import ImgLocation from '../../assets/img/Location.svg'
import ImgDeliveryTime from '../../assets/img/DeliveryTime.svg'
import ImgPayment from '../../assets/img/Payment.svg'

import {
  SuccessCard,
  SuccessCards,
  SuccessContainer,
  SuccessInfo,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessInfo>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <SuccessCards>
          <SuccessCard>
            <img src={ImgLocation} alt="" />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </SuccessCard>
          <SuccessCard>
            <img src={ImgDeliveryTime} alt="" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </SuccessCard>
          <SuccessCard>
            <img src={ImgPayment} alt="" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </SuccessCard>
        </SuccessCards>
      </SuccessInfo>

      <img src={ImgIllustration} alt="" />
    </SuccessContainer>
  )
}
