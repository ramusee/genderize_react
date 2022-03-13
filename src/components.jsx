function Input() {
  return <input className="form__name" type="text" placeholder="Enter name" />;
}
function Button() {
  return <input className="form__btn" type="submit" value="Submit" />;
}
function Output(props) {
  return (
    <div className="form__result">
      <p className="result__gender">{props.resultUserInfo.gender || props.resultUserInfo || 'Who to guess?'} </p>
      <p className="result__country">{props.resultUserInfo.country} </p>
    </div>
  );
}
export {Input, Button, Output}