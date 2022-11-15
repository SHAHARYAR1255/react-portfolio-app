import React from 'react'
import CV from '../../assets/cv.pdf';


function CTA() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(CV).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = CV;
        alink.click();
      })
    })
  }

  return (
    <div className="cta">
      {/* <a href={CV} className="btn">Download CV</a> */}
      <a className="btn" onClick={onButtonClick}>
        Download CV
      </a>
      <a href="#contact" className='btn'> Lets talk</a>
    </div>
  )
}

export default CTA