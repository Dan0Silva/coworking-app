interface UserType {
  // id: string

  firstName: string
  lastName: string
  cpf: string
  email: string
  birthDate: string
  phoneNumber: string

  password: string
  confirmPassword: string

  // balanceAccount: string
  // createdAt: string
  // updatedAt: string
}

interface ResponseJson {
  validate: boolean
  toast: ToastShowParams
}

interface Action {
  type: string
  payload: any
}
