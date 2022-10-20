import React from 'react';

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        className="shadow border rounded w-full py-2 px-3 text-gray-700"
        ref={inputRef}
        value={formData[id]}
        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
        onBlur={() => console.log(checkRegex())}
        {...inputProps}
      />
      <div className="mt-1 mb-3 text-xs text-red-500">에러메시지</div>
    </div>
  );


export default FormInput;
