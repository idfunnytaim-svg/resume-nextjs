import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    'Computer Vision과 Robotics 분야를 중심으로, AI 모델을 단순히 학습시키는 데 그치지 않고 실제 동작 가능한 시스템으로 연결하는 경험을 쌓아왔습니다. 특히 RGB camera input 기반 object recognition과 robotic gripper control을 주제로 프로젝트를 수행하며, 데이터 처리부터 모델 학습·평가, 하드웨어 제어 연동까지 하나의 흐름으로 구현하는 데 집중했습니다.',

    '고려대학교 지능정보 SW아카데미에서는 Cornell Grasp Dataset을 활용한 사물 인식 기반 그리퍼 제어 프로젝트를 수행했습니다. CNN 기반 모델을 학습하고, LeNet-5와 AlexNet 구조를 동일 과제에 적용해 정확도와 적용 가능성을 비교했습니다. 이후 추론 결과를 Arduino serial communication으로 전달하여 servo motor 제어까지 연동하며 End-to-End AI pipeline 구현 경험을 쌓았습니다.',

    '학부 졸업 프로젝트에서는 Google Teachable Machine을 활용해 로봇핸드 그리퍼 제어 실험을 진행했습니다. 사물 종류에 따른 집기 성능 차이를 확인하기 위해 실험 조건을 설계하고, 데이터를 수집·분석하며 어떤 제어 방식이 실제 적용에 더 적합한지 비교했습니다. 이를 통해 단순한 결과 확인이 아니라 문제 정의, 실험 설계, 성능 비교, 개선 방향 도출의 중요성을 배웠습니다.',

    '현재는 Python, CNN, Computer Vision, model evaluation, data preprocessing을 기반으로 실무형 AI 개발 역량을 확장하고 있습니다. 제한된 환경에서도 문제를 작게 나누어 구현하고, 모델의 성능뿐 아니라 실제 시스템에 적용 가능한지를 함께 고려하는 AI 엔지니어로 성장하고자 합니다.',
  ],
  sign: '홍성현',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
