import { useState } from "react"
import "./styles.css"

export default function App() {
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generatePassword() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?"
    let newPassword = ""

    for (let i = 0; i < passwordSize; i++) {
      const index = Math.floor(Math.random() * characters.length)
      newPassword += characters[index]
    }

    setPassword(newPassword)
    setCopy("Copiar")
  }

  function copyPassword() {
    navigator.clipboard.writeText(password)
    setCopy("Copiado!")
  }

  return(
    <div className="app">
      <h1>Gerador de senha</h1>

      <input 
        type="number" 
        name="passwordSize" 
        id="passwordSize"
        placeholder="Tamanho da senha"
        min={1} 
        value={passwordSize} 
        onInput={(ev) => setPasswordSize(ev.target.value)}
      />

      <button className="button" onClick={generatePassword}>Gerar senha com {passwordSize} caracteres</button>

      <button className="button" onClick={copyPassword}>{copy}</button>

      <p>{password}</p>
    </div>
  )
}


