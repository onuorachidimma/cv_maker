const ColorPicker = ({ name, value, onChange }) => {
  return (
    <label>
      <input type="color" name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default ColorPicker;