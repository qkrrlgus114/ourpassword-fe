function ErrorModal({ message, closeErrorModal }) {
  return (
    <div className="error_orverlay">
      <div className="error_content">
        <img className="error_icon" src="/assets/close_icon.png" alt="" />
        <div className="error_title">{message}</div>
        <button className="error_btn" onClick={closeErrorModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
