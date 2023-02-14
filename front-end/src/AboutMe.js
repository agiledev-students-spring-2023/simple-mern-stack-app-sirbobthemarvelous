import meImg from './Robert.jpeg'
import { Link } from 'react-router-dom'

/**
 * A React component that is used for the header displayed at the top of every page of the site.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
    return (
        <>
          <article className="aboutMe-article">
          <img src={meImg} />
            <p>{"I'm a Junior at NYU, majoring in Computer Science at the College of Arts and Science, and I'm planning on graduating Early and jumping into an industry job ASAP."}
            {"I've still been very open minded in terms of projects and potential career paths so my coding resume has been a bit scattershot"}
            {"In terms of extracirriculars this year I've focused a bit more on trying to spend more time with my friends that stayed with me through quarantine and reconnecting those that I've lost through it."}
            {"I'm a big fan of TV, books and video games, some of my Favorites include Steven Universe, The Seven Husbands of Evelyn Hugo and Password"}
            </p>
            
          </article>
        </>
      )
}

// make this component available to be imported into any other file
export default AboutMe
