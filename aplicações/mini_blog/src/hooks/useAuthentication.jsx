import { db } from "../firebase/config"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth"

import { useState, useEffect } from "react"

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  //cleanup
  //deal with memory leak
  const [cancelled, setCalcelled] = useState(false)

  const auth = getAuth()

  const checkedIfIsCancelled = () => {
    if (cancelled) {
      return
    }
  }

  //register
  const createUser = async (data) => {
    checkedIfIsCancelled()
    setLoading(true)
    setError(null)
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, { displayName: data.displayName })

      setLoading(false)

      return user
    } catch (error) {
      console.log("erro", error)
      let systemError

      if (error.message.includes("Password")) {
        systemError = "A senha deve conter 6 ou mais dígitos."
      } else if (error.message.includes("email-already")) {
        systemError = "E-mail já cadastrado."
      } else {
        systemError = "Ocorreu um erro, por favor tente mais tarde."
      }
      setError(systemError)
      console.log(systemError)
      setLoading(false)
    }
  }
  //logout - signOut
  const logout = async (userAuth) => {
    checkedIfIsCancelled()
    await signOut(userAuth)
  }

  //login - signIn
  const login = async (data) => {
    checkedIfIsCancelled()
    setLoading(true)
    setError(null)
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      setLoading(false)
      await updateProfile(user, { displayName: data.displayName })

      setLoading(false)
      console.log("response login: ", user)

      return user
    } catch (error) {
      console.log(error)
      let systemError
      if (error.message.includes("user-not-found")) {
        systemError = "Usuário não encontrado."
      } else if (error.message.includes("invalid-credential)")) {
        systemError = "E-mail ou senha inválido!"
      } else {
        systemError = "Ocorreu um erro, por favor tente mais tarde."
      }
      setError(systemError)
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => setCalcelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  }
}
