const portfolioProjects = [
  {
    id: "basketball",
    number: "Project 01",
    title: "Basketball Shooting Robot",
    categories: ["robotics", "vision"],
    featured: true,
    thumbnail: {
      src: "assets/basketBallRobot/basket-model.png",
      alt: "농구 슈팅 로봇 대표 이미지"
    },
    summary:
      "Raspberry Pi 환경에서 YOLO 기반 인식의 성능 한계를 경험한 뒤, OpenCV 기반 경량 비전 파이프라인으로 재설계한 농구 슈팅 로봇 프로젝트입니다.",
    tags: ["OpenCV", "Raspberry Pi", "Arduino", "Servo Control"],
    lead:
      "라즈베리파이 기반 환경에서 실시간 골대 인식과 슈팅 트리거를 구현하기 위해, 딥러닝 기반 접근의 한계를 분석하고 경량 비전 파이프라인으로 재설계한 프로젝트입니다.",
    info: [
      { label: "Period", value: "2024.07 - 2025.06" },
      { label: "Team", value: "Team of 2" },
      { label: "Role", value: "Vision / Control / Design" },
      { label: "Type", value: "Capstone Design" }
    ],
    media: [
      { type: "image", label: "Main", src: "assets/basketBallRobot/basket-model.png", alt: "농구 슈팅 로봇 대표 사진" },
      { type: "image", label: "Vision", src: "assets/basketBallRobot/basket-assem.png", alt: "골대 인식 화면" },
      { type: "image", label: "Circuit", src: "assets/basketBallRobot/basket-circuit.png", alt: "농구 로봇 회로 구성", className: "diagram" },
      { type: "image", label: "CAD", src: "assets/basketBallRobot/basket-model.png", alt: "농구 로봇 CAD 렌더링", className: "diagram" },
      { type: "image", label: "Mechanism", src: "assets/basketBallRobot/basket-back.png", alt: "슈팅 메커니즘 상세" },
      { type: "video", label: "Demo", src: "assets/basketBallRobot/basket-shooting-1.mp4", poster: "assets/basketBallRobot/basket-model.png" }
    ],
    story: [
      "이 프로젝트의 핵심은 단순히 공을 발사하는 장치를 만드는 것이 아니라, 제한된 연산 성능을 가진 임베디드 환경에서 골대를 안정적으로 인식하고, 그 결과를 실제 하드웨어 동작으로 연결하는 것이었습니다.",
      "초기에는 YOLOv5 기반 객체 인식을 적용했지만, Raspberry Pi 환경에서 프레임 저하와 오검출 문제가 발생했습니다. 이후 골대의 사각형 구조, 색상 정보, 중심 좌표 안정성을 활용하는 OpenCV 기반 파이프라인으로 방향을 전환했습니다."
    ],
    problem:
      "딥러닝 모델은 인식 성능이 좋더라도 임베디드 환경에서는 추론 속도, 발열, 프레임 저하, 실시간 제어 지연 문제가 발생할 수 있었습니다.",
    approach:
      "골대의 형태적 특징에 집중하여 HSV 필터링, Canny Edge, contour, 사각형 후보 검출, 중심 좌표 안정화 로직을 조합했습니다.",
    architecture: ["USB Camera", "OpenCV Vision", "Center / Distance Logic", "Arduino Serial", "Servo Shooting"],
    architectureNote:
      "카메라 입력 → 골대 후보 검출 → 중심 좌표 안정화 → 조건 충족 시 Arduino로 Shoot 명령 전송",
    challenges: [
      "YOLOv5 사용 시 프레임 저하와 실시간성 부족",
      "조명 변화에 따른 골대 오검출",
      "중심 좌표가 흔들릴 때 슈팅 트리거가 불안정해지는 문제"
    ],
    resultLesson:
      "실시간 시스템에서는 가장 고성능의 알고리즘보다 하드웨어 환경에 맞는 알고리즘 선택이 중요하다는 점을 배웠습니다. 또한 센서 입력, 비전 결과, 모터 동작 사이의 연결 구조를 설계하며 시스템 통합 관점의 중요성을 경험했습니다."
  },
  {
    id: "mountain",
    number: "Project 02",
    title: "Autonomous Mountain Detection Robot",
    categories: ["robotics", "mapping"],
    featured: true,
    thumbnail: null,
    summary:
      "산악 환경에서의 탐지와 맵핑을 목표로, LiDAR와 AI Depth Camera, 열화상 카메라를 결합한 구조로봇 콘셉트 및 시스템 설계 프로젝트입니다.",
    tags: ["LiDAR", "Depth Camera", "Mapping", "Robot Design"],
    lead:
      "산악 지형의 불규칙한 환경에서 탐지와 맵핑을 수행하기 위한 구조로봇 콘셉트 설계 프로젝트입니다.",
    info: [
      { label: "Focus", value: "Rescue / Detection" },
      { label: "Sensor", value: "LiDAR / Depth / Thermal" },
      { label: "Role", value: "Concept / Mechanical Design" },
      { label: "Status", value: "Prototype Planning" }
    ],
    mediaPlaceholder: {
      title: "3D Model / Concept Render",
      text: "산악 로봇 CAD 렌더링, 센서 배치도, 주행 구조 이미지를 넣는 영역"
    },
    story: [
      "산악 환경은 평지나 실내와 달리 지형의 경사, 장애물, 시야 차단, GPS 불안정성 등으로 인해 단순 주행 로봇보다 복합적인 센서 구성과 구조 안정성이 필요합니다.",
      "이 프로젝트는 LiDAR 기반 맵핑과 AI Depth Camera, 열화상 카메라를 결합해 탐지 로봇의 시스템 구성을 설계하는 것을 목표로 했습니다."
    ],
    architecture: ["Rugged Frame", "LiDAR Mapping", "Depth Camera", "Thermal Camera", "Detection Logic"]
  },
  {
    id: "ros",
    number: "Project 03",
    title: "Custom ROS2 Mapping Robot",
    categories: ["robotics", "mapping"],
    featured: true,
    thumbnail: null,
    summary:
      "YDLidar X4 Pro와 엔코더 모터를 활용해 키보드 제어, 시리얼 통신, ROS2 기반 맵핑 구조를 구성한 자율주행 로봇 플랫폼 프로젝트입니다.",
    tags: ["ROS2", "YDLidar", "Serial", "Motor PID"],
    lead:
      "상용 TurtleBot 구조를 참고하되, 직접 구성한 모터·LiDAR·전원 시스템을 ROS2와 연결한 맵핑 로봇 프로젝트입니다.",
    mediaPlaceholder: {
      title: "RViz Screenshot / Robot Photo",
      text: "맵핑 결과 캡처, 주행 플랫폼 사진, 노드 구조도를 넣으면 좋습니다."
    },
    story: [
      "목표는 단순히 LiDAR를 연결하는 것이 아니라, 실제 주행 플랫폼에서 키보드 제어 명령을 받고, 이를 시리얼 통신을 통해 Arduino 모터 제어로 전달하며, RViz에서 맵핑 결과를 확인하는 구조를 만드는 것이었습니다."
    ],
    architecture: ["Keyboard Teleop", "cmd_vel", "C++ Node", "Arduino PID", "Motor Drive"]
  }
];

const otherProjects = [
  {
    title: "Line-Tracing Robot Vacuum",
    description:
      "TCS34725 컬러센서와 I2C 멀티플렉서를 활용해 다중 색상 라인을 인식하고, 라인트레이싱과 U턴 동작을 수행하는 청소 로봇 구조를 구현했습니다.",
    tags: ["Arduino Mega", "TCS34725", "PID"]
  },
  {
    title: "Photoacoustic Gas Sensor Research",
    description:
      "VOCs ppb 단위 검출을 목표로 PAS 센서 구조와 Lock-in Amplifier 기반 신호 처리 구조를 연구했습니다.",
    tags: ["PAS", "LIA", "Sensor"]
  },
  {
    title: "Delta 3D Printer Build",
    description:
      "Klipper 기반 델타 3D 프린터 구성을 위해 보드, 스텝 드라이버, 베드 구조, 전원 시스템을 검토하고 설계했습니다.",
    tags: ["Klipper", "MKS", "Mechanical Build"]
  }
];
