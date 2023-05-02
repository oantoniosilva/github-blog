import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PhotoProfile, ProfileContainer, ProfileDetails } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <PhotoProfile
        src="https://github.com/oantoniosilva.png"
        alt="User photo"
      />

      <ProfileDetails>
        <header>
          <h1>Antonio Silva</h1>

          <ExternalLink text="GitHub" href="#" />
        </header>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            @antoniosilva
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Freelancer
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />2 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
