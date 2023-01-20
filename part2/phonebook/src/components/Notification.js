const successStyle = {
  fontFamily: 'Calibri',
  color: 'black',
  background: 'green',
  fontWeight: '400',
  fontSize: '1.5em',
  textAlign: 'center',
  maxWidth: '33%',
  borderStyle: 'solid',
  borderRadius: '10px',
  padding: '5px 1em 5px 1em',
  marginBottom: '1em',
}
const errorStyle = { ...successStyle, background: 'darkRed' }

const Notification = ({ message, isError }) => {
  if (!message) return
  console.log(isError)
  return <div style={isError ? errorStyle : successStyle}>{message}</div>
}

export default Notification
