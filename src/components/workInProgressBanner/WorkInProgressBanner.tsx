import "./styles.css";

export function WorkInProgressBanner() {
  return (
    <div className="work-in-progress">
      <h1 className="white-text">Strona w budowie</h1>
      <p className="white-text">
        😍 Jeszcze chwila i powstanie tutaj witryna unikalnego i przebojowego
        klubu studenckiego, jakiego świat nie widział!
      </p>
      <p className="white-text">
        👉 Tymczasem zapraszamy Cię na naszego&nbsp;
        <a
          href="https://www.facebook.com/Klub.Studencki.Bajer/"
          target="_blank"
          rel="noreferrer"
        >
          Facebooka!
        </a>
      </p>
    </div>
  );
}
