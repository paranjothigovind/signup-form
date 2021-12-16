import React from 'react';

interface TextInputProps {
    label: string;
    value: string;
    onChange?: any;
    type: string;
    errors: Array<string>
}
  

export const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange,
    type,
    errors
}) => {
    return(
        <div className="form-group">
            <label>{label}</label>
            <input type={type} disabled={false} className="form-control input" value={value} onChange={onChange} />
            {errors && <span style={{fontSize: 12}} className="text-danger">{errors[0]}</span>}
        </div>
    )
}