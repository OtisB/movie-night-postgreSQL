import './Error.css';

function Error({ text }) {
  return (
    <div className='error-msg'>
      <h2>{text}</h2>
    </div>
  )
}

export default Error
