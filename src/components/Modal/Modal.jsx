import { Overlay, ModalWindow } from "./Modal.styled"

export const Modal = ({image}) => {
   return (
      <Overlay>
  <ModalWindow >
    <img src={image} alt="ph" />
  </ModalWindow>
</Overlay>
   )
}