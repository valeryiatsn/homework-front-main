import {ChangeEvent, useState} from 'react';

export const HW3 = () => {
  // ❗ Массив с данными не трогаем! Текст не меняем !

  const [currentText, setCurrentText] = useState('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
  };

  const handleSave = () => {
    if (currentText.trim()) {
      setTexts((prevTexts) => [...prevTexts, currentText.trim()]);
      setCurrentText('');
    }
  };

  return (
    <div id={'hw03'}>
      {currentText ? (
        <h1 id={'hw03-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
      )}

      <input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />

      <button id={'hw03-button'} onClick={() => handleSave}>
        Сохранить
      </button>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => {
          return (
            <li key={index} id={`hw03-task-${index}`}>
              {el}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
