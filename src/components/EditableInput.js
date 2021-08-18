import React, { useState } from 'react';

const EditableInput = ({ defaultValue, onSave }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [input, setInput] = useState('');

  const onEditInput = () => {
    if (!isEditable) {
      setIsEditable(true);
    }
    if (isEditable) {
      setIsEditable(false);
    }
  };

  const onSaveInput = async () => {
    const trimmed = input.trim();

    if (trimmed === '') {
      alert('Display name can not be empty.');
    } else if (trimmed !== defaultValue) {
      await onSave(input);
      setInput('');
      setIsEditable(false);
    }
  };

  const onInputChange = event => {
    setInput(event.target.value);
  };

  return (
    <div className="editable-input">
      <input
        onChange={onInputChange}
        defaultValue={defaultValue}
        type="text"
        disabled={!isEditable && 'disabled'}
      />
      <button onClick={onEditInput}>
        {isEditable ? (
          <i className="far fa-times-circle"></i>
        ) : (
          <i className="fas fa-pen"></i>
        )}
      </button>
      {isEditable && (
        <button onClick={onSaveInput}>
          <i className="fas fa-check"></i>
        </button>
      )}
    </div>
  );
};

export default EditableInput;
