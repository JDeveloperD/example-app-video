import * as yup from 'yup'

const ValidationSchema = yup.object({
  email: yup.string().trim().required('El correo electrónico es requerido'),
  password: yup.string().trim().required('La contraseña es obligatoria')
})

export default ValidationSchema
