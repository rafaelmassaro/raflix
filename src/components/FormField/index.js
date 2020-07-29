import React from 'react';

function FormField({ tag, label, type, name, value, onChange }){
    return(
        <div>
            <label>
                {label}:

                {tag  === 'textarea' ? (
                <textarea
                  type={type}
                  name= {name}
                  value={value}
                  onChange={onChange}
                />
            ) : (
                <input
                  type={type}
                  name= {name}
                  value={value}
                  onChange={onChange}
                />
            )} 
              
            </label>
        </div>
    );
}

export default FormField;