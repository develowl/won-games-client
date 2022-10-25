import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color={'black'} size={'small'}>
      My Profile
    </Heading>

    <S.Form>
      <TextField
        name={'name'}
        placeholder={'Name'}
        label={'Name'}
        initialValue={'John Cage'}
      />
      <TextField
        disabled
        type={'email'}
        name={'email'}
        placeholder={'E-mail'}
        label={'E-mail'}
        initialValue={'johncage@gmail.com'}
      />
      <TextField
        type={'password'}
        name={'password'}
        placeholder={'Type your password'}
        label={'Password'}
      />
      <TextField
        type={'password'}
        name={'password'}
        placeholder={'New password'}
        label={'Password'}
      />
      <Button size={'large'}>Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
