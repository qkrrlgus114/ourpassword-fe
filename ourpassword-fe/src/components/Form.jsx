function Form() {
  return (
    <div className="form">
      <div className="form_input">
        <div className="form_group">
          <label htmlFor="form_type">암호화 방식</label>
          <input
            id="form_type"
            className="form_type"
            type="text"
            placeholder="암호화 방식"
          ></input>
        </div>
        <div className="form_group">
          <label htmlFor="form_key">Key</label>
          <input
            id="form_key"
            className="form_key"
            type="text"
            placeholder="암호 키"
          ></input>
        </div>
        <div className="form_group">
          <label htmlFor="form_content">내용</label>
          <input
            id="form_content"
            className="form_content"
            type="text"
            placeholder="암호화 내용"
          ></input>
        </div>
        <button className="btn_encrypt">변환하기</button>
      </div>
    </div>
  );
}

export default Form;
