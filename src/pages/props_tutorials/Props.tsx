import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

interface buttonProp {
  buttonTitle: string;
  onChangeValue?: () => void;
};

/* 
Btn.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func,
} 
*/

function Btn({ buttonTitle, onChangeValue }: buttonProp) {
  return (
    <button
      onClick={onChangeValue}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px, 20px",
        border: 0,
        borderRadius: 3,
      }}>{buttonTitle}</button>
  );
}

// How to enable a parent component to send data to a child component.
export const Props = () => {
/*  
   *  Save Changes버튼을 클릭하면 해당버튼과 Continue버튼이 같이 Refresh됐지만,
   *  MemorizeBtn 컴포넌트를 React.memo()로 바꾸고 MemorizeBtn 컴포넌트를 사용하면
   *  바뀌는 객체만 다시 렌더링하고, Continue버튼은 다시 렌더링 되지 않는다.
*/
  const MemorizeBtn = React.memo(Btn)
  const [value, setValue] = React.useState("Save Changes")
  const changeValue = () => setValue("Revert Changes")
 
  return (
    <div>
      <MemorizeBtn buttonTitle={value} onChangeValue={changeValue} />&nbsp;
      <MemorizeBtn buttonTitle="Continue" />
      <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}
