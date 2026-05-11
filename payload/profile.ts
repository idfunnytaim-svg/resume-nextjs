import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: {
    title: '홍성현',
    small: 'AI / Computer Vision / Robotics',
  },
  contact: [
    {
      title: 'wwkkrr@naver.com',
      link: 'mailto:wwkkrr@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'GitHub',
      link: 'https://github.com/idfunnytaim-svg',
      icon: faGithub,
    },
  ],
  notice: {
    title: 'Computer Vision과 Robotics 기반 End-to-End AI 시스템 구현을 공부하고 있습니다.',
    icon: faBell,
  },
};

export default profile;
