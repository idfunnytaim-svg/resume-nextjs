import { ISkill } from '../component/skill/ISkill';

const programming: ISkill.Skill = {
  category: 'Programming',
  items: [
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Data Preprocessing',
      level: 2,
    },
    {
      title: 'Arduino',
      level: 2,
    },
  ],
};

const deepLearning: ISkill.Skill = {
  category: 'Deep Learning / Computer Vision',
  items: [
    {
      title: 'CNN',
      level: 2,
    },
    {
      title: 'LeNet-5',
      level: 2,
    },
    {
      title: 'AlexNet',
      level: 2,
    },
    {
      title: 'Image Classification',
      level: 2,
    },
    {
      title: 'Cornell Grasp Dataset',
      level: 2,
    },
  ],
};

const aiEngineering: ISkill.Skill = {
  category: 'AI Engineering',
  items: [
    {
      title: 'Model Training',
      level: 2,
    },
    {
      title: 'Model Evaluation',
      level: 2,
    },
    {
      title: 'Training Log Analysis',
      level: 2,
    },
    {
      title: 'End-to-End AI Pipeline',
      level: 2,
    },
  ],
};

const robotics: ISkill.Skill = {
  category: 'Robotics / Control',
  items: [
    {
      title: 'Gripper Control',
      level: 2,
    },
    {
      title: 'Servo Motor Control',
      level: 2,
    },
    {
      title: 'Serial Communication',
      level: 2,
    },
    {
      title: 'Object Recognition Based Control',
      level: 2,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Experiment Design',
    },
    {
      title: 'Data Analysis',
    },
    {
      title: 'Technical Report Writing',
    },
    {
      title: 'Mentoring',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programming, deepLearning, aiEngineering, robotics, misc],
  tooltip: '1: 기초 학습 수준\n2: 프로젝트 구현 가능 수준\n3: 실무 독립 수행 가능 수준',
};

export default skill;
