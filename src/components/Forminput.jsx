import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useContext } from 'react';
import { FormContext } from '../pages/Users/Users';


// id, pw 유효성 확인을 위한 정규식

// 별명 중복 검사 코드 추가하기

const USEREMAIL_REGEX = new RegExp(
  '^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(.[0-9a-zA-Z_-]+){1,2}$'
);
const USERPW_REGEX = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$');

const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidUserEmail: '@ 를 사용하세요',
  invalidUserPW: '8자 이상 영문, 숫자를 사용하세요.',
};

export default function Forminput({errData, setErrData, id, label, inputProps, errMessage}) {
  const inputRef = useRef(null)
  const { formData, setFormData } = useContext(FormContext)

    // 커스텀 에러 메시지
    const checkRegex = () => {
      let result
      const value = formData[id];
      if (value.length === 0) {
        return result = 'required';
        ;
      } else {
        switch (id) {
          case 'useremail':
            result = USEREMAIL_REGEX.test(value) ? true : 'invalidUserEmail';
            break
          case 'userpw':
            result = USERPW_REGEX.test(value) ? true : 'invalidUserPW';
            break
          default:
            return;
        }
      }
      setErrData({...errData, [id]: result})
    };

  // 최초 1회 로드 시 ID input에 포커스
  
  useEffect(()=>{
    if(id === 'nickname'){
      inputRef.current.focus()
    }
  },[])

  return(
    <Form id="form" className='mb-2'>

      <Form.Label 
        htmlFor={id}
        className='d-block mb-1'>
        {label}
      </Form.Label>

      <Form.Control 
        id={id}
        {...inputProps}
        ref={inputRef}
        value={formData[id]}
        onChange={(e)=> setFormData({...formData, [id]:e.target.value})}
        onBlur={()=>checkRegex()}
        className='shadow-sm p-3 w-full border' />

      <Form.Text className="text-danger m-1">
        {/* {errData[id] !== true ? ERROR_MSG[errData[id]] : ''} */}
      </Form.Text>
    </Form>
  )
}
