import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '홍성현 Resume';
const description =
  'AI, Computer Vision, Robotics, Object Recognition, Gripper Control 중심의 웹 이력서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '홍성현 Resume Preview',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Seonghyeon',
        lastName: 'Hong',
        username: 'idfunnytaim-svg',
        gender: 'male',
      },
    },
  },
};
