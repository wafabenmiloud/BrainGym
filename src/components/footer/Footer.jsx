import React from 'react'
import './Footer.css';
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <footer>
      <div>
      <h3>BrainGym</h3>
            <p>
              Tunisie<br/><br/>
              <strong>Phone:</strong> +216 52 095 367<br/>
              <strong>Email:</strong> braingym@gmail.com<br/>
            </p>
      </div>
      <div>
      <h4>Useful Links</h4>
            <ul>
              <li> <Link className='link' to="/">Home</Link></li>
              <li> <Link className='link'  to="/">About us</Link></li>
              <li> <Link className='link' to="/">Courses</Link></li>
            </ul>
      </div>
      <div>
      <h4>Our Services</h4>
            <ul>
              <li> <Link className='link'  to="/Cours">Courses</Link></li>
              <li> <Link className='link'  to="/News">News</Link></li>
            </ul>
      </div>
      <div className="footer-newsletter">
      <h4>Join Our Newsletter</h4>
            <form>
              <input type="email" required placeholder="email@gmail.com"/>
              <input type="submit" value="Subscribe"/>
            </form>
      </div>
    </footer>
  )
}
