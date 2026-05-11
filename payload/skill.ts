import { ISkill } from '../component/skill/ISkill';

const programming: ISkill.Skill = {
  category: 'Programming Language',
  items: [
    {
      title: 'Python3',
      level: 1,
    },
    {
      title: 'C',
      level: 1,
    },
    {
      title: 'MATLAB',
      level: 1,
    },
  ],
};

const aiComputerVision: ISkill.Skill = {
  category: 'AI / Computer Vision',
  items: [
    {
      title: 'CNN',
      level: 1,
    },
    {
      title: 'LeNet-5',
      level: 1,
    },
    {
      title: 'AlexNet',
      level: 1,
    },
    {
      title: 'Image Classification',
      level: 1,
    },
    {
      title: 'Cornell Grasp Dataset',
      level: 1,
    },
    {
      title: 'Model Training / Evaluation',
      level: 1,
    },
    {
      title: 'Data Preprocessing',
      level: 1,
    },
  ],
};

const controlSimulation: ISkill.Skill = {
  category: 'Control / Simulation Tools',
  items: [
    {
      title: 'LabVIEW',
      level: 1,
    },
    {
      title: 'PSIM',
      level: 1,
    },
    {
      title: 'FEMM',
      level: 1,
    },
    {
      title: 'PSpice',
      level: 1,
    },
  ],
};

const embeddedHardware: ISkill.Skill = {
  category: 'Embedded / Hardware',
  items: [
    {
      title: 'Arduino',
      level: 1,
    },
    {
      title: 'Raspberry Pi 4',
      level: 1,
    },
    {
      title: 'PLC',
      level: 1,
    },
    {
      title: 'EtherMotion',
      level: 1,
    },
    {
      title: 'Servo Motor Control',
      level: 1,
    },
    {
      title: 'Serial Communication',
      level: 1,
    },
  ],
};

const engineering: ISkill.Skill = {
  category: 'Engineering Experience',
  items: [
    {
      title: 'Experiment Design',
      level: 1,
    },
    {
      title: 'Data Analysis',
      level: 1,
    },
    {
      title: 'Technical Report Writing',
      level: 1,
    },
    {
      title: 'Teaching / Tutoring',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programming, aiComputerVision, controlSimulation, embeddedHardware, engineering],
  tooltip: '1: 학습 및 사용 경험\n2: 프로젝트 구현 가능 수준\n3: 실무 독립 수행 가능 수준',
};

export default skill;
