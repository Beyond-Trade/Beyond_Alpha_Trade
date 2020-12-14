import React from 'react'

const alertStyle = {
  backgroundColor: '#ffffff',
  color: 'black',
  padding: '10px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
  fontFamily: 'Arial',
  boxSizing: 'border-box'
}

const buttonStyle = {
  marginLeft: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#FFFFFF'
}

const AlertTemplate = ({ message, options, style, close }) => {
  return (
    <div style={{ ...alertStyle, ...style }}>
      {options.type === 'info' && <img src="/assets/Icons/info.png" className="w-6 mr-2" />}
      {options.type === 'success' && <img src="/assets/Icons/success.png" className="w-6 mr-2" />}
      {options.type === 'error' && <img src="/assets/Icons/error.png" className="w-6 mr-2" />}
      <span style={{ flex: 2 }}>{message}</span>
      <button onClick={close} style={buttonStyle}>
      <img src="/assets/Icons/Cross.svg" className="w-3" />
      </button>
    </div>
  )
}

export default AlertTemplate