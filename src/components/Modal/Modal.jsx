import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = (e) => {
if(e.target === e.currentTarget) {
   this.props.onClose()
}
  }

  render() {
    return createPortal(
      <Overlay onClick={this.handleClickBackdrop}>
        <ModalWindow>
          <img src={this.props.image} alt="ph" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
