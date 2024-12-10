import { useState } from 'react'
import { MAX_USER_NAME_LENGHT } from 'shared/constants/restrictive-units'

export const useValidateUserName = () => {
  const [name, setName] = useState('')
  const [isNameInvalid, setIsNameInvalid] = useState(false)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.length > MAX_USER_NAME_LENGHT) {
      setIsNameInvalid(true)
      return
    } else {
      setIsNameInvalid(false)
    }

    setName(value)
  }

  return {
    name,
    handleNameChange,
    isNameInvalid
  }
}
