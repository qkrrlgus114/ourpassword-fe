import "../css/Loading.css";

function Loading() {
  return (
    <div className="loading">
      <img src="/assets/loading.gif" alt="" />
      <div className="loading_text">변환중...</div>
    </div>
  );
}

export default Loading;
