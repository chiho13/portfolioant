import React, {Component} from 'react';
import './Home.scss';
import avatar from '../../assets/avatar.jpg';
import smallCover from '../../assets/smallcover.jpg';
import largeCover from '../../assets/largecover.jpg';

const ProfileCard = React.lazy(() => import ('../../components/profileCard/profileCard'));
const SkillCard = React.lazy(() => import ('../../components/skillCard/skillCard'));

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <React.Suspense fallback={< div > Loading ...</div>}>
                    <ProfileCard
                        avatarImage={avatar}
                        smallCoverImage={smallCover}
                        largeCoverImage={largeCover}/>
                    <SkillCard/>
                </React.Suspense>
            </div>
        );
    }
}
