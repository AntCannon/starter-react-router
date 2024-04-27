import { useNavigate, Navigate } from 'react-router-dom'

export default function NewsLetter() {

  const navigate = useNavigate()
  function signedUp() {
    alert("You have been signed up for our newsletter!")
    navigate("/about")
  }
  
  return (
    <section><h3>Sign Up For Our Newsletter</h3>
      <button onClick={signedUp} >Sign me up for hourly updates!</button>
    </section>
  );
};