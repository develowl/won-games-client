import Heading from 'components/Heading'
import { PaymentCardProps } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCardProps[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color={'black'} size={'small'}>
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.cardNumber}>
        <img src={card.img} alt={card.flag} />
        <span>{card.cardNumber}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
