import { Card, HeaderContainer, Location } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <div>
        <Location>
          <MapPin size={22} weight="fill" />

          <span>Palmas, TO</span>
        </Location>
        <Card>
          <ShoppingCart size={22} weight="fill" />
        </Card>
      </div>
    </HeaderContainer>
  )
}
