function ErrorModal({ message, closeErrorModal }) {
  return (
    <div className="error_orverlay">
      <div className="error_content">
        <div className="error_icon"> X</div>
        <div className="error_title">{message}</div>
        <button className="error_btn" onClick={closeErrorModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
