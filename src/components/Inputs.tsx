
function InputLogin({ 
  inputElement, 
  setInputElement,
  placeholder,
  type='text',
  Icon,
}: {
  inputElement: string,
  setInputElement: (e: string) => void,
  type?: string,
  placeholder: string,
  Icon: React.ElementType,
}) {

  const handleElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputElement(e.target.value);
  }

  return (
    <>
      {inputElement === '' && (
          <div className="absolute top-2 left-2">
            <Icon className="size-5" />
          </div>
        )}
      <input 
        className="text-center h-9 w-60 border rounded-2xl"
        type={type} 
        placeholder={placeholder}
        value={inputElement}
        onChange={handleElement}
        required
      />
    </>
  );
}

export { InputLogin };