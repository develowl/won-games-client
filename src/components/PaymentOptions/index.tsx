import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { Label } from 'components/Checkbox/styles'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './styles'

export type PaymentOptionsProps = {
  cards?: PaymentCardProps[]
  handlePayment: () => void
}

export type PaymentCardProps = {
  cardNumber: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom color={'black'} size={'small'}>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.cardNumber}>
              <S.CardInfo>
                <Label htmlFor={card.cardNumber}>
                  <img src={card.img} alt={card.flag} />
                  {card.cardNumber}
                </Label>
              </S.CardInfo>
              <Radio
                name={'credit-card'}
                id={card.cardNumber}
                value={card.cardNumber}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}
          <S.AddCard role={'button'}>
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as={'a'} fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
