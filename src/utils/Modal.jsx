export const Modal = () => {
  const openButton = document.querySelector("[data-open-modal]");
  const closeButton = document.querySelector("[data-close-modal]");
  const modal = document.querySelector("[data-modal]");

  const handleOpen = () => {
    modal.showModal();
  };
  
  const handleClose = () => {
    modal.close();
  }

  return (
    <div>
      <button data-open-modal onClick={handleOpen}>Open</button>
      <dialog>
        <div>This is a modal</div>
        <button data-close-modal onClick={handleClose}>Close</button>
      </dialog>
    </div>
  )
}