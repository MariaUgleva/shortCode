import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { fetchShortLink } from "../../Functions/fetchShotrLink";
import { addLinkAction } from "../../redux/actions/linksActions";

const Form: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // состояние ошибки введенных данных
  const [error, setError] = useState("");
  // состояние данных из input
  const [inputData, setInputData] = useState("");
  // отслеживаем изменение введенных данных
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setInputData(event.target.value);
    },
    [inputData]
  );
  // ф-я вызывает ф-ю запроса, анализирует результат и либо отправляет ссылку в store, либо ставит ошибку в true и очищает input (всегда)
  const handleSend = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (inputData) {
      const result = await fetchShortLink(inputData);
      if (await result) {
        setError('');
        dispatch(
          addLinkAction({
            id: nanoid(),
            originalLink: result.result.original_link,
            shortLink: result.result.full_short_link,
          })
        );
      } else setError("Server error");
    } else setError("Please add a link");
    setInputData("");
  };
  return (
    <div className="form">
      <div className="form__inner">
        <div className="form__input-box">
          <input
            onChange={handleChange}
            className= {error ? 'form__input form__input_error' : 'form__input'}
            placeholder="Shorten a link here..."
            value={inputData}
          />
          {error ? <div className='error'>{error}</div> : <div className='error'></div>}
        </div>
        <button onClick={handleSend} className="btn form__btn">
          Shorten It!
        </button>
      </div>
    </div>
  );
};
export default Form;
