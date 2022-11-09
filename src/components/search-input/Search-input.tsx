import { ChangeEventHandler } from 'react';

import './index.css';

type serachInputProps = {
  className: string;
  placeholder?: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
};

//prettier-ignore
function SearchInput({ className, placeholder, changeHandler } : serachInputProps) {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={e => changeHandler(e)}
    />
  );
}

export default SearchInput;
