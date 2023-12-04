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

interface Space {
  name: string
  price: string
  address: {
    number: string
    address: string
    bairro: string // em ingles, n achei o nome em ingless
  }
  blocks: {
    name: string
    peopleLimit: number
    description: string
    spaceId: number // ou uuid sla
    blockCategoryId: {
      name: string
      range: [number, number] // min e max e pessoas
    }
  }
  avaliations: [
    {
      user: UserType
      rate: number // ou string ?
    },
  ]
}
