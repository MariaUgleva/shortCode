import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import CopyToClipboard from "react-copy-to-clipboard";
import { copyLinkAction } from "../../redux/actions/copiedLink";

const Links: React.FC = (): JSX.Element => {
  // состояние для копирования ссылки
  const [value, setValue] = useState({ text: "", copied: false });
  // берем ссылки и скопированную ссылку из redux
  const { links, copied } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  // ф-я для копирования ссылки по нажатию на кнопку
  const handleCopyClick = useCallback((): void => {
    setValue({ text: value.text, copied: true });
  }, []);
  // ф-я отправляет в redux скопированную ссылку
  const handleCopy = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      dispatch(copyLinkAction(event.currentTarget.id));
    },
    [dispatch]
  );
  return (
    <div className="links">
      {links.map((item) => (
        <div key={item.id} className="links__item">
          <span className="links__item-original">{item.originalLink.substring(0, 30)}</span>
          <div className="links__item-box">
            <span className="links__item-short">{item.shortLink}</span>
            <CopyToClipboard onCopy={handleCopyClick} text={item.shortLink}>
              <button
                id={item.id}
                onClick={handleCopy}
                className={
                  copied === item.id
                    ? "btn links__item-btn links__item-btn_copied"
                    : "btn links__item-btn"
                }
              >
                {copied === item.id ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Links;
