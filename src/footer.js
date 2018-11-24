import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="page-footer light-green darken-3">
            <div className="container">
            ©{(new Date()).getFullYear()} Copyright
            <a className="grey-text text-lighten-4 right" href="https://github.com/qiqetes">@qiqete</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer;