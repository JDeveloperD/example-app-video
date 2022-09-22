import {
  Alert,
  Button,
  Checkbox,
  FiLock,
  MdOutlineAlternateEmail,
  Spinner,
  TextField
} from '@components'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ValidationSchema from './ValidationSchema'
import { useState } from 'react'
import { useRouter } from 'next/router'

type Credentials = {
  email: string,
  password: string
}

const AuthFormSignIn = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorAuth, setErrorAuth] = useState<null|string>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Credentials>({
    resolver: yupResolver(ValidationSchema)
  })

  const onSubmit = async (data: Credentials) => {
    setIsLoading(true)

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    setIsLoading(false)

    if (res?.error) {
      setErrorAuth(res.error)
    } else {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorAuth && (
        <Alert
          color='danger'
          className='mb-4'
          message={errorAuth}
          closeFn={() => { setErrorAuth(null) }}
        />
      )}
      <TextField
        type='email'
        error={!!errors.email}
        helperText={errors.email?.message as string}
        placeholder='Email'
        className='mb-4'
        autoComplete='off'
        icon={<MdOutlineAlternateEmail />}
        {...register('email')}
      />
      <TextField
        type='password'
        error={!!errors.password}
        helperText={errors.password?.message as string}
        placeholder='Contraseña'
        className='mb-4'
        icon={<FiLock />}
        {...register('password')}
      />
      <div className='mb-4'>
        <Checkbox name='value32432' id={'c-1'} label='Recordar contraseña' />
      </div>
      <Button
        variant='contained'
        color='primary'
        block
        disabled={isLoading}
      >
        {isLoading && (<Spinner size='sm' className='me-2' />)}
        Iniciar sesión
      </Button>
    </form>
  )
}

export default AuthFormSignIn
