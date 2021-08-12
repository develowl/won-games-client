import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name={'email'}
        placeholder={'email'}
        type={'email'}
        icon={<Email />}
      />

      <TextField
        name={'password'}
        placeholder={'password'}
        type={'password'}
        icon={<Lock />}
      />

      <S.ForgotPassword href={'#'}>Forgot your password?</S.ForgotPassword>

      <Button size={'large'} fullWidth>
        Sign in now
      </Button>

      <S.SignUpLink>
        Don&apos;t have an account?{' '}
        <Link href={'sign-up'}>
          <a>Sign up</a>
        </Link>
      </S.SignUpLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
