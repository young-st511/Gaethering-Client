import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import styled from 'styled-components';

type InputProp<T extends FieldValues> = {
  label?: string | undefined;
  plHolder?: string | undefined;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  options?: RegisterOptions<T, Path<T>>;
};

function Input<T extends FieldValues>({
  label,
  plHolder,
  name,
  type = 'text',
  register,
  options,
}: InputProp<T>) {
  return (
    <StyledInput className="input-container">
      <label>
        {label && <div className="label">{label}</div>}
        <input
          {...register(name, options)}
          placeholder={plHolder}
          autoComplete="off"
          type={type}
        />
      </label>
    </StyledInput>
  );
}

export default Input;

const StyledInput = styled.div`
  input {
    width: 100%;
    box-sizing: border-box;
    padding-left: 1rem;
    font-size: 1.6rem;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray2};

    ::placeholder {
      color: ${({ theme }) => theme.color.gray2};
    }
  }
`;