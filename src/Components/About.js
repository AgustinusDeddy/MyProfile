import React, {Component} from 'react'

export default class About extends Component {

    render () {
        return (
            <div className="firstPanel col-md-4 col-md-offset-4">
                <h3 style={{color:'orange'}}>About Me</h3>
                <p style={{textAlign:'justify'}}>
                    Hi everyone. My name is Agustinus Deddy Arief Wibowo. I born and raised in Yogyakarta, Indonesia. 
                    I obtained my bachelor degree, Bachelor degree in Electronics Engineering majoring in Computer, from Multimedia University in 2012.
                    I did my Final year Project on Guarded Vehicle project. It is a project where we implement various image processing techniques to monitor 
                    the vehicle's surrounding and generate warning for suspicious activity. The owner would be notified through SMS and email. The project was developed on
                    MATLAB and under supervision of Dr Rudi Heriansyah.
                </p>
                <p style={{textAlign:'justify'}}>
                    During my study and works, I picked up several technical skills such as C#, C, ASP .Net, MVC, Javascript, jQuery, SQL, HTML, CSS and Bootstrap. 
                    Other than those technical skills, I also joined several activities such as Table Tennis Club, International Student Society Night, Save Gaza charity event,
                    Sports Day event, Pangkor Island Festival volunteer (Arduino Workshop), Yogyakarta Earthquake volunteer, etc. 
                    I have published three publication, Landslide Detection on Optical Image, On the Detection of Possible Landslides in Post-Event Satellite Images: A Probability Map
                    Approach and Automated Vehicle Monitoring System.
                </p>
                <p style={{textAlign:'justify'}}>
                    On my free time I like to watch movies, play games, watch sports particularly football (unfortunately I'm not good at playing :) ).  

                </p>
            </div>
        )
    }
}