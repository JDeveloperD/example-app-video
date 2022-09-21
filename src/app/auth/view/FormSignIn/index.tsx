import { Button, Checkbox, FiLock, MdOutlineAlternateEmail, TextField } from '@components'

const AuthFormSignIn = () => {
  return (
    <form action="">
      <TextField
        type='email'
        error={false}
        helperText='El correo es requerido'
        placeholder='Email'
        className='mb-4'
        icon={<MdOutlineAlternateEmail />}
      />
      <TextField
        type='password'
        error={false}
        helperText='La contraseña es requerida'
        placeholder='Contraseña'
        className='mb-4'
        icon={<FiLock />}
      />
      <div className='mb-4'>
        <Checkbox name='value32432' id={'c-1'} label='Recordar contraseña' />
      </div>
      <Button
        variant='contained'
        color='primary'
        block
        >Iniciar sesión</Button>
    </form>
  )
}

export default AuthFormSignIn
