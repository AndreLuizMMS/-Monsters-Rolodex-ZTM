import './index.css';

function SearchInput(props) {
  return (
    <input
      className={props.className}
      type="search"
      placeholder={props.placeholder}
      onChange={props.changeHandler}
    />
  );
}

export default SearchInput;
