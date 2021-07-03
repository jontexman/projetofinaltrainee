import {
    ProfileBox,
    InformationBox,
    Text,
    UserImage,
} from './styles';
import UserPlaceholder from '../../assets/placeholder-user.png';

export const Profile = (props) => {
    return (
        <ProfileBox>
            {props.image ? <UserImage src={props.image} /> : <UserImage src={UserPlaceholder} />}

            <InformationBox>
                <Text>{props.name}</Text>
                <Text>{`\n`}</Text>
                <Text>{props.email}</Text>
            </InformationBox>
        </ProfileBox>
    )
}