const portfolioProjects = [
  {
    id: "basketball",
    number: "Project 01",
    title: "Basketball Shooting Robot",
    categories: ["robotics", "vision"],
    featured: true,
    thumbnail: { src: "assets/basketBallRobot/basket-model.png", alt: "농구 슈팅 로봇 대표 이미지" },
    summary: "임베디드 환경의 연산 한계를 분석하고 OpenCV 기반 경량 비전 파이프라인과 슈팅 기구를 통합한 로봇입니다.",
    tags: ["OpenCV", "Raspberry Pi", "Arduino", "Servo Control", "Encoder / PID"],
    lead: "골대 인식, 거리 조절, 정렬 판단과 슈팅 동작을 하나의 로봇 시스템으로 연결한 프로젝트입니다.",
    info: [
      { label: "Period", value: "2024.07 - 2025.06" },
      { label: "Team", value: "2 members" },
      { label: "Role", value: "Team Lead · Mechanical Design · Computer Vision · System Integration · Motion Control" },
      { label: "Type", value: "Capstone Design" }
    ],
    story: [
      "약 1.2m 거리의 골대를 카메라로 인식하고, 로봇이 골대와 지정 거리로 정렬된 뒤 공을 발사하도록 구성했습니다.",
      "초기에는 TensorFlow Lite와 YOLOv5를 검토했지만 Raspberry Pi에서 필요한 실시간성을 확보하기 어려워 OpenCV 기반 영상처리로 전환했습니다."
    ],
    problem: "작은 모터로 목표 거리까지 공을 보내야 했고, 제한된 Raspberry Pi 연산 성능에서 골대 위치를 안정적으로 판단해야 했습니다.",
    approach: "슈팅 기구의 기계적 이득을 조정하고 HSV 마스크, Canny Edge, contour와 사각형 후보 검출을 조합했습니다. 중심 좌표가 허용 범위에서 20프레임 연속 유지될 때만 슈팅 신호를 발생하도록 조건을 추가했습니다.",
    architecture: ["USB Camera", "Raspberry Pi<br>OpenCV", "Center & Distance Logic", "Arduino Mega<br>Wheel Alignment", "Shooting Motor<br>PID"],
    architectureNote: "카메라 입력 → 골대 형상 검출 → 위치 안정화 → Serial 명령 → Wheel Alignment → PID Shooting Control",
    challenges: [
      "YOLOv5 추론 속도가 낮아 실시간 주행과 제어가 불안정해지는 문제",
      "제한된 모터 출력으로 목표 거리와 높이까지 공을 보내야 하는 문제",
      "조명 변화와 중심 좌표 흔들림으로 슈팅 신호가 잘못 발생할 수 있는 문제"
    ],
    resultLesson: "하드웨어 제약이 있는 실시간 시스템에서는 가장 복잡한 알고리즘보다 전체 제어 주기를 안정적으로 유지하는 방법이 중요하다는 점을 확인했습니다. 테스트에서 약 60%의 슈팅 성공률을 확인했습니다. TODO: 반복 테스트 횟수와 조건별 결과 정리 필요.",
    media: [
      { type: "image", label: "CAD", src: "assets/basketBallRobot/basket-model.png", alt: "농구 슈팅 로봇 CAD 모델링" },
      { type: "image", label: "Display", src: "assets/basketBallRobot/basket-back.png", alt: "농구 슈팅 로봇 후면 디스플레이" },
      { type: "image", label: "Circuit", src: "assets/basketBallRobot/basket-circuit.png", alt: "농구 슈팅 로봇 회로 구성", className: "diagram" },
      { type: "video", label: "Assembly", src: "assets/basketBallRobot/basket-assem.mp4" },
      { type: "video", label: "Camera Detection", src: "assets/basketBallRobot/basket-scanning.mp4" },
      { type: "video", label: "Demo 1", src: "assets/basketBallRobot/basket-demo-1.mp4" },
      { type: "video", label: "Demo 2", src: "assets/basketBallRobot/basket-demo-2.mp4" },
      { type: "video", label: "Demo 3", src: "assets/basketBallRobot/basket-demo-3.mp4" },
      { type: "video", label: "Result", src: "assets/basketBallRobot/basket-shooting.mp4" }
    ]
  },
  {
    id: "mountain",
    number: "Project 02",
    title: "Mountain Rescue Robot",
    categories: ["robotics", "mapping"],
    featured: true,
    thumbnail: null,
    summary: "산악 환경에서 위험 요소와 조난자를 탐색하기 위해 복수 센서와 이동 플랫폼을 통합한 구조 로봇 프로젝트입니다.",
    tags: ["ROS", "LiDAR", "Depth Camera", "Sensor Integration"],
    lead: "사람이 접근하기 어려운 산악 지형에서 탐지와 맵핑을 수행하기 위한 구조 로봇 시스템 프로젝트입니다.",
    info: [
      { label: "Period", value: "TODO: 확인 필요" },
      { label: "Team", value: "TODO: 확인 필요" },
      { label: "Role", value: "TODO: 담당 범위 확인 필요" },
      { label: "Type", value: "Rescue Robotics" }
    ],
    story: [
      "산악 환경은 경사, 장애물, 시야 차단과 비정형 지형 때문에 실내·평지용 이동 로봇보다 복합적인 센서 구성과 구조 안정성이 필요합니다.",
      "LiDAR, Depth Camera, 열화상 센서와 이동 플랫폼이 서로 어떤 정보를 담당하고 어떻게 연결되는지를 중심으로 전체 시스템을 구성했습니다."
    ],
    problem: "단일 센서나 평지용 이동 구조만으로는 산악 환경의 지형과 조난자 탐색 조건을 안정적으로 처리하기 어렵습니다.",
    approach: "LiDAR 기반 맵핑, 깊이 정보와 열화상 탐지의 역할을 구분하고, 비정형 지형을 고려한 이동 플랫폼과 센서 통합 구조를 설계했습니다.",
    architecture: ["Mobile Platform", "LiDAR Mapping", "Depth Camera", "Thermal Sensor", "Detection Logic"],
    architectureNote: "이동 플랫폼과 복수 센서의 역할을 분리한 뒤 탐색·탐지 흐름으로 통합",
    challenges: [
      "비정형 지형에서 주행 안정성과 장애물 대응을 함께 고려해야 하는 문제",
      "서로 다른 센서의 좌표, 시야와 탐지 범위를 통합해야 하는 문제",
      "센서와 구동계가 추가될수록 중량, 전원과 기구 배치 제약이 커지는 문제"
    ],
    resultLesson: "TODO: 실제 구현 범위, 주행·탐지 결과와 개선 과정 확인 필요.",
    mediaPlaceholders: [
      { title: "TODO", text: "대표 이미지: 전체 로봇 사진 또는 CAD 렌더" },
      { title: "TODO", text: "조립 구조: 프레임, 구동계와 센서 배치" },
      { title: "TODO", text: "시스템 구성: 센서 연결 또는 제어 구조" },
      { title: "TODO", text: "핵심 메커니즘: 비정형 지형 대응 구조" },
      { title: "TODO", text: "작동 영상: 산악 환경 주행, 맵핑 또는 탐지 결과" }
    ]
  },
  {
    id: "ros",
    number: "Project 03",
    title: "Custom ROS Mapping Robot",
    categories: ["robotics", "mapping"],
    featured: true,
    thumbnail: null,
    summary: "직접 구성한 모터·LiDAR·전원 시스템을 ROS 명령과 연결한 모바일 맵핑 플랫폼입니다.",
    tags: ["ROS", "YDLidar", "Serial", "Motor Control"],
    lead: "상용 플랫폼이 아닌 커스텀 이동 로봇에서 Teleoperation, 모터 제어와 LiDAR 맵핑 흐름을 구성한 프로젝트입니다.",
    info: [
      { label: "Period", value: "TODO: 확인 필요" },
      { label: "Team", value: "TODO: 확인 필요" },
      { label: "Role", value: "TODO: 담당 범위 확인 필요" },
      { label: "Type", value: "ROS Mapping" }
    ],
    story: [
      "YDLidar X4 Pro와 엔코더 모터를 사용한 커스텀 플랫폼에서 키보드 제어 명령을 받아 실제 바퀴 구동으로 전달하는 흐름을 구성했습니다.",
      "ROS, RViz, 시리얼 통신과 Arduino 모터 제어가 연결되는 전체 데이터 흐름을 확인하는 데 집중했습니다."
    ],
    problem: "직접 제작한 이동 플랫폼에서 ROS 명령, 시리얼 통신, 모터 제어와 LiDAR 좌표계를 끊김 없이 연결해야 했습니다.",
    approach: "Teleoperation과 cmd_vel 흐름을 Arduino 구동 제어로 전달하고, LiDAR 장착 높이와 Static TF 설정을 함께 검토했습니다.",
    architecture: ["Keyboard Teleop", "cmd_vel", "ROS Node", "Serial / Arduino", "Motor Drive & LiDAR"],
    architectureNote: "Teleop → cmd_vel → ROS Node → Serial → Arduino 모터 제어 / LiDAR → RViz",
    challenges: [
      "로봇 좌표계와 LiDAR 좌표계의 위치 관계를 정확히 설정해야 하는 문제",
      "Ubuntu와 ROS 버전, 컴퓨팅 보드의 호환성을 검토해야 하는 문제",
      "소프트웨어 명령과 실제 모터 응답 사이의 차이를 조정해야 하는 문제"
    ],
    resultLesson: "TODO: 최종 ROS 버전, SLAM 패키지, 완성 지도와 반복 주행 결과 확인 필요.",
    mediaPlaceholders: [
      { title: "TODO", text: "대표 이미지: 완성된 로봇 플랫폼" },
      { title: "TODO", text: "조립 구조: LiDAR 장착 위치와 구동계" },
      { title: "TODO", text: "시스템 구성: ROS 노드, TF 또는 배선 구조" },
      { title: "TODO", text: "핵심 결과: RViz 화면 또는 완성 지도" },
      { title: "TODO", text: "작동 영상: 원격 조종 또는 반복 주행 시연" }
    ]
  },
  {
    id: "cleaning",
    number: "Project 04",
    title: "Line-Tracing Cleaning Robot",
    categories: ["robotics"],
    featured: false,
    thumbnail: null,
    summary: "다중 컬러 센서와 엔코더 모터를 이용해 여러 색상의 경로를 순환하며 청소하도록 구성한 로봇입니다.",
    tags: ["Arduino Mega", "TCS34725", "TCA9548A", "State Machine"],
    lead: "색상 라인을 따라 이동하고 각 경로의 끝에서 방향을 전환해 다음 청소 구간으로 이동하는 로봇 프로젝트입니다.",
    info: [
      { label: "Period", value: "TODO: 확인 필요" },
      { label: "Team", value: "TODO: 확인 필요" },
      { label: "Role", value: "TODO: 담당 범위 확인 필요" },
      { label: "Type", value: "Embedded Robotics" }
    ],
    story: [
      "Red, Blue, Light Green, Green 라인을 구분하고 갈색 바닥과의 차이를 이용해 지정된 청소 경로를 반복하도록 구성했습니다.",
      "여러 컬러 센서를 동시에 사용하면서 주행, U턴과 청소 동작이 이어지는 상태 흐름을 설계했습니다."
    ],
    problem: "동일 I2C 주소를 사용하는 컬러 센서 3개를 연결하고, 센서별 편차를 보정하면서 복수 경로를 반복 주행해야 했습니다.",
    approach: "TCA9548A I2C 멀티플렉서로 센서를 분리하고, 엔코더 모터와 경로 상태머신을 결합해 라인 추종과 U턴을 구성했습니다.",
    architecture: ["Color Sensors", "TCA9548A", "Arduino Mega", "Motor Driver", "Encoder Motors / Cleaning Unit"],
    architectureNote: "색상 감지 → 경로 상태 판단 → 모터 제어 → 종단 감지 → U턴 및 다음 경로 이동",
    challenges: [
      "동일 주소의 I2C 센서를 동시에 사용해야 하는 문제",
      "센서 개체 편차와 바닥색에 따른 인식 차이를 보정해야 하는 문제",
      "라인 추종과 U턴, 청소 동작을 하나의 상태 흐름으로 연결해야 하는 문제"
    ],
    resultLesson: "TODO: 색상 기준값, 반복 주행 성공률과 개선 과정 확인 필요.",
    mediaPlaceholders: [
      { title: "TODO", text: "대표 이미지: 완성된 청소 로봇" },
      { title: "TODO", text: "조립 구조: 컬러 센서 3개의 배치와 하부 구조" },
      { title: "TODO", text: "시스템 구성: 센서, 멀티플렉서와 모터 연결" },
      { title: "TODO", text: "핵심 메커니즘: 라인 추종 및 청소 장치" },
      { title: "TODO", text: "작동 영상: 다중 색상 라인 반복 주행" }
    ]
  },
  {
    id: "sensor",
    number: "Project 05",
    title: "Photoacoustic Gas Sensor Research",
    categories: ["sensor"],
    featured: false,
    thumbnail: null,
    summary: "VOCs를 ppb 수준에서 검출하기 위한 PAS 센서 구조와 Lock-in Amplifier 기반 신호 처리 연구입니다.",
    tags: ["PAS", "Lock-in Amplifier", "Signal Processing"],
    lead: "미세 광음향 신호를 검출하기 위한 센서 구조와 아날로그 신호 처리 회로를 연구한 학부 연구 프로젝트입니다.",
    info: [
      { label: "Period", value: "TODO: 확인 필요" },
      { label: "Team", value: "TODO: 확인 필요" },
      { label: "Role", value: "TODO: 담당 범위 확인 필요" },
      { label: "Type", value: "Undergraduate Research" }
    ],
    story: [
      "VOCs를 ppb 수준에서 검출하기 위한 NDIR 및 Photoacoustic Spectroscopy 기반 센서 연구에 참여했습니다.",
      "센서 구조뿐 아니라 Pre-amplifier, Band-pass Filter, Lock-in Amplifier와 위상 제어를 포함한 신호 처리 흐름을 다뤘습니다."
    ],
    problem: "미세 광음향 신호에서 잡음을 줄이고 기준 신호와 측정 신호의 위상을 맞춰 유효 성분을 분리해야 했습니다.",
    approach: "전치 증폭, 대역 통과 필터, 위상 조절과 Phase Sensitive Detector를 연결한 Lock-in Amplifier 구조를 연구했습니다.",
    architecture: ["NDIR / PAS Cell", "Pre-amplifier", "Band-pass Filter", "Phase Control", "Lock-in Detection"],
    architectureNote: "광음향 신호 → 증폭 및 필터링 → 기준 위상 정렬 → 동기 검출 → 결과 분석",
    challenges: [
      "미세 신호가 회로 잡음과 환경 변화에 묻히는 문제",
      "필터 대역과 위상 조건이 측정 결과에 직접 영향을 주는 문제",
      "기계·광학 센서 구조와 전자 신호 처리 조건을 함께 조정해야 하는 문제"
    ],
    resultLesson: "TODO: 확정된 연구 성과, 본인 담당 범위와 실험 결과 확인 필요.",
    mediaPlaceholders: [
      { title: "TODO", text: "대표 이미지: PAS 센서와 전체 실험 장치" },
      { title: "TODO", text: "조립 구조: 센서 셀 및 측정 장비 구성" },
      { title: "TODO", text: "회로 구성: 증폭, 필터와 Lock-in Amplifier" },
      { title: "TODO", text: "핵심 결과: 필터 전후 파형 또는 위상 측정 결과" },
      { title: "TODO", text: "실험 영상: 측정 절차 또는 장비 작동" }
    ]
  },
  {
    id: "printer",
    number: "Project 06",
    title: "DIY Delta 3D Printer",
    categories: ["mechanical"],
    featured: false,
    thumbnail: null,
    summary: "프레임, 베드, 전장, 냉각과 펌웨어를 직접 선정하고 통합한 델타 구조 3D 프린터입니다.",
    tags: ["Klipper", "TMC2209", "24V System", "Mechanical Build"],
    lead: "기성품 조립을 넘어 주요 구조와 전장 부품을 직접 선정하고 통합한 델타 3D 프린터 프로젝트입니다.",
    info: [
      { label: "Period", value: "TODO: 확인 필요" },
      { label: "Team", value: "Personal Build" },
      { label: "Role", value: "TODO: 담당 범위 확인 필요" },
      { label: "Type", value: "Machine Design" }
    ],
    story: [
      "Ø310mm 빌드 베드, 24V 전원, MKS Gen V2.1 보드, TMC2209 드라이버와 Klipper 기반 시스템을 구성했습니다.",
      "베드 체결, 전원 용량, 배선, 냉각과 델타 기구 보정을 개별 부품이 아닌 하나의 장비 시스템으로 검토했습니다."
    ],
    problem: "열팽창, 원형 베드 체결, 24V 고전류 배선과 델타 기구의 기하학적 보정을 함께 고려해야 했습니다.",
    approach: "6061 알루미늄 캐리어와 6점 지지 베드 구조를 검토하고, TMC2209와 Klipper/Mainsail 기반 제어 구성을 선택했습니다.",
    architecture: ["Delta Frame", "Heated Bed", "MKS Gen V2.1", "TMC2209 / Motors", "Klipper / Mainsail"],
    architectureNote: "기구 프레임과 베드 → 24V 전원 및 구동계 → 펌웨어와 보정 환경 통합",
    challenges: [
      "가열 과정의 열팽창을 고려해 베드를 안정적으로 체결해야 하는 문제",
      "약 14.6A급 24V 부하를 고려한 배선과 전원 구성이 필요한 문제",
      "델타 구조의 기하학적 오차와 베드 평면을 보정해야 하는 문제"
    ],
    resultLesson: "TODO: 출력 정밀도, 반복 출력 결과와 열 안정성 검증 자료 필요.",
    mediaPlaceholders: [
      { title: "TODO", text: "대표 이미지: 완성된 DIY Delta 3D Printer" },
      { title: "TODO", text: "조립 구조: 프레임, 델타 암과 베드" },
      { title: "TODO", text: "시스템 구성: 제어 보드, 전원과 배선" },
      { title: "TODO", text: "핵심 결과: 캘리브레이션 결과와 실제 출력물" },
      { title: "TODO", text: "작동 영상: 캘리브레이션 또는 출력 과정" }
    ]
  }
];
