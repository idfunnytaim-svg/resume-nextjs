import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '사물인식을 통한 그리퍼 제어',
      startedAt: '2025-11',
      endedAt: '2025-12',
      where: '고려대학교 지능정보 SW아카데미',
      descriptions: [
        {
          content:
            'Cornell Grasp Dataset을 활용해 CNN 기반 사물 인식 및 그리퍼 제어 모델을 구현했습니다.',
        },
        {
          content:
            'RGB 카메라 입력을 기반으로 객체를 인식하고, 추론 결과를 Arduino serial communication으로 전달해 servo motor 제어까지 연동했습니다.',
        },
        {
          content:
            'LeNet-5와 AlexNet 구조를 동일 과제에 적용해 정확도와 실시간 적용 가능성을 기준으로 비교·평가했습니다.',
        },
        {
          content:
            '고려대학교 지능정보 SW아카데미 결과 발표회 및 프로젝트 시상식에서 장려상을 수상했습니다.',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '로봇핸드 그리퍼 제어기술의 효과에 관한 연구',
      startedAt: '2022-03',
      endedAt: '2022-11',
      where: '호서대학교 시스템제어공학과',
      descriptions: [
        {
          content:
            '1인 졸업 프로젝트로 Google Teachable Machine을 활용해 사물 인식 기반 로봇 핸드 그리퍼 제어 실험을 수행했습니다.',
        },
        {
          content:
            '사물 종류에 따른 집기 성능을 비교하고, 실험 설계·데이터 수집·분석·보고서 작성을 단독으로 수행했습니다.',
        },
        {
          content:
            '단순 모델 사용이 아니라 실제 적용 가능성을 기준으로 제어 방식의 장단점을 비교했습니다.',
        },
      ],
    },
    {
      title: '확산소화기',
      startedAt: '2020-10',
      endedAt: '2020-11',
      where: '호서대학교 3학년 설계 프로젝트',
      descriptions: [
        {
          content: '화재 확산 방지를 위한 소화기 구조를 구상하고 설계했습니다.',
        },
        {
          content: '1인 설계 프로젝트로 작품 제작과 기능 테스트를 수행했습니다.',
        },
      ],
    },
  ],
};

export default project;
