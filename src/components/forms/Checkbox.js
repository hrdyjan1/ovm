import React from 'react'
import ErrorFeedback from './ErrorFeedback'

const Checkbox = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched },
    id,
    label,
}) => {
    return (
        <React.Fragment>
            
            <input
                name={name}
                id={id}
                type="checkbox"
                value={value}
                checked={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            
            <label htmlFor={id}>{label}</label>
        
            {touched[name] && <ErrorFeedback error={errors[name]} />}
        </React.Fragment>
    );
};

export default Checkbox