import React, { useState } from "react";
import { Button, Input, Label, Modal } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    console.log("Button on App.js is clicked")
  }
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input />
        </div>
        <Button onClick={() => setIsOpen(true)}>
          otherbutton
        </Button>
        <Button>Reset</Button>
        <ModalComponent />
      </div>
      </div>
  )
}

export default App
