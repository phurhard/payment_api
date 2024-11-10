import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const FormField: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="form-field">{children}</div>;
};

export const FormItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="form-item">{children}</div>;
};

export const FormLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <label className="form-label">{children}</label>;
};

export const FormControl: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="form-control">{children}</div>;
};

export const FormDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="form-description">{children}</p>;
};

export const FormMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="form-message">{children}</p>;
};
