const heroMedia = [
  { src: "assets/hero/basket-shooting.png", alt: "ProtoKIL 농구 슈팅 로봇의 실제 동작 모습" }
];

const portfolioProjects = [
  {
    id: "basketball",
    number: "Project 02",
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
      { label: "Role", value: "Team Lead · Robotics System Design & Integration · Computer Vision" },
      { label: "Type", value: "Capstone Design" }
    ],
    story: [
      "약 1.2m 거리의 골대를 카메라로 인식하고, 로봇이 골대와 지정 거리로 정렬된 뒤 공을 발사하도록 구성했습니다.",
      "초기에는 TensorFlow 환경을 구성하고 YOLOv5의 학습 에폭을 조정하며 약 3개월간 골대 인식과 카메라 추론을 테스트했습니다.",
      "림의 타원 검출과 사각형 후보 검출을 거쳐 최종적으로 골대 형상의 contour 매칭 방식을 선택했으며, Raspberry Pi에서 실시간 제어 성능을 확보하기 위해 OpenCV 기반 파이프라인으로 전환했습니다."
    ],
    problem: "작은 모터로 목표 거리까지 공을 보내야 했고, 제한된 Raspberry Pi 연산 성능에서 골대 위치를 안정적으로 판단해야 했습니다.",
    approach: "슈팅 기구의 기계적 이득을 조정하고 HSV 마스크, Canny Edge와 contour 매칭을 조합했습니다. 실제 골대의 세로 길이, 영상에 검출된 골대의 픽셀 높이와 초점거리 매개변수를 이용해 단안 카메라 거리 추정을 반복 보정했습니다. 중심 좌표가 허용 범위에서 20프레임 연속 유지될 때만 슈팅 신호를 발생하도록 조건을 추가했습니다.",
    architectureFlow: true,
    architecture: [
      { title: "USB Camera", subtitle: "Vision Input", description: "카메라 영상 입력" },
      { title: "Raspberry Pi", subtitle: "OpenCV", description: "골대 형상 검출" },
      { title: "Center & Distance", subtitle: "Alignment Logic", description: "중심·거리 좌표 계산" },
      { title: "Arduino Mega", subtitle: "Wheel Motor", description: "슈팅 위치로 이동" },
      { title: "Shooting Motor", subtitle: "PID", description: "PID 슈팅 제어" }
    ],
    challenges: [
      "YOLOv5 추론 속도가 낮아 실시간 주행과 제어가 불안정해지는 문제",
      "제한된 모터 출력으로 목표 거리와 높이까지 공을 보내야 하는 문제",
      "조명 변화와 중심 좌표 흔들림으로 슈팅 신호가 잘못 발생할 수 있는 문제"
    ],
    resultLesson: "하드웨어 제약이 있는 실시간 시스템에서는 복잡한 알고리즘보다 전체 제어 주기를 안정적으로 유지하는 것이 중요하다는 점을 확인했습니다. 또한 비차단 로직과 PID 제어, 시스템 통합을 고려한 하드웨어 설계의 중요성을 배웠습니다.<br><br>100회가 넘는 비공식 반복 시도에서 절반 이상 성공하는 수준을 확인했지만, 테스트 조건과 횟수를 체계적으로 기록하지 않아 정량 성과로 제시하지 않았습니다.<br><br><strong>주요 하드웨어:</strong> USB Webcam, Raspberry Pi, Arduino Mega, Encoder Motor, Motor Driver, 18650 Battery, PD Power Bank, Cooler, Buck Converter",
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
    number: "Project 01",
    title: "Mountain Detection Robot",
    categories: ["robotics", "mapping"],
    featured: true,
    thumbnail: { src: "assets/mountainDetectionRobot/mdr-overview.PNG", alt: "Mountain Detection Robot 전체 모습" },
    summary: "산악 환경의 위험 요소와 사람 탐지를 목표로 복수 센서와 이동 플랫폼을 통합한 로봇 프로토타입입니다.",
    tags: ["ROS", "LiDAR", "Depth Camera", "Sensor Integration"],
    lead: "산악 지형에서 탐지와 매핑을 수행해 구조 활동을 보조하는 개념을 하드웨어 프로토타입으로 구현한 프로젝트입니다.",
    info: [
      { label: "Period", value: "2025.06 - 2025.12" },
      { label: "Team", value: "6 members" },
      { label: "Role", value: "Mechanical Design · Hardware Integration · Presentation" },
      { label: "Type", value: "Capstone Design Contest" }
    ],
    story: [
      "산악 환경은 경사, 장애물, 시야 차단과 비정형 지형 때문에 드론이나 실내·평지용 이동 로봇보다 복합적인 센서 구성과 구조 안정성이 필요합니다. 장시간 순찰을 고려해 대용량 배터리를 탑재할 수 있는 이동 플랫폼을 설계하는 데 의의를 두었습니다.",
      "LiDAR, Depth Camera, 열화상 센서와 이동 플랫폼이 서로 어떤 정보를 담당하고 어떻게 연결되는지를 중심으로 전체 시스템을 구성했습니다."
    ],
    problem: "단일 센서나 평지용 이동 구조만으로는 산악 지형과 사람 탐지 조건을 안정적으로 처리하기 어렵습니다. 험준한 환경을 이동해야 하므로 플랫폼을 컴팩트하게 구성하고 전자 부품을 물로부터 보호하는 구조도 필요했습니다.",
    approach: "LiDAR 매핑, 깊이 정보와 열화상 탐지의 역할을 구분하고 무한궤도형 이동 플랫폼에 센서를 통합했습니다. 설계 단계에서 모든 부품을 미리 어셈블리해 크기를 줄였으며, LiDAR 장착부에는 유선형 하우징을 적용해 우천 시 빗물 유입을 줄일 수 있도록 설계했습니다. 실제 방수 성능은 검증하지 않았습니다.",
    architectureFlow: false,
    architecture: [
      { title: "Mobile Platform", subtitle: "Tracked Drive", description: "비정형 지형 이동" },
      { title: "LiDAR", subtitle: "Scanning & Mapping", description: "주변 지형 매핑" },
      { title: "Depth Camera", subtitle: "AI Detection", description: "인체·장애물 탐지" },
      { title: "Thermal Camera", subtitle: "Heat Detection", description: "인체·화재 열원 감지" },
      { title: "Detection Logic", subtitle: "GPS & LoRa", description: "위치 공유·관제 연결" }
    ],
    challenges: [
      "비정형 지형에서 주행 안정성과 장애물 대응을 함께 고려해야 하는 문제",
      "서로 다른 센서의 좌표, 시야와 탐지 범위를 통합해야 하는 문제",
      "센서와 구동계가 추가될수록 중량, 전원과 기구 배치 제약이 커지는 문제"
    ],
    resultLesson: "<strong>팀 구현 결과:</strong> LiDAR 스캐닝과 매핑을 구현했지만 SLAM 기반 자율주행까지는 완성하지 못했습니다. AI Camera는 서보모터와 연계해 인체 추적과 장애물 감지를 구현했고, Thermal Camera는 AI Camera와의 연동에는 실패했지만 열원 감지 테스트를 완료했습니다. GPS 좌표를 프로그램과 앱에서 핀포인트로 지정·표시하는 기능을 구현했으며, 핀포인트 간 자율 이동은 구현하지 않았습니다. LoRa Module은 다중 로봇 관제 시스템의 기반으로 구성했으나 별도 검증은 진행하지 않았습니다.<br><br><strong>개인 기여:</strong> 로봇 모델링, 하드웨어 통합과 배선을 담당했습니다. 컴퓨터공학과·자동차공학과 팀원들과 역할을 분담하며, 각 분야의 결과물을 하나의 프로토타입으로 통합했습니다.<br><br><strong>주요 하드웨어:</strong> LiDAR, AI Camera, Thermal Camera, GPS Module, LoRa Module, Jetson Orin Nano, DC Motor, Servo Motor, Motor Driver, 24V Battery, Buck Converter",
    media: [
      { type: "image", label: "Overview", src: "assets/mountainDetectionRobot/mdr-overview.PNG", alt: "Mountain Detection Robot 전체 모습" },
      { type: "image", label: "Sketch", src: "assets/mountainDetectionRobot/mdr-sketch.PNG", alt: "Mountain Detection Robot 초기 스케치" },
      { type: "image", label: "Modeling", src: "assets/mountainDetectionRobot/mdr-modeling.PNG", alt: "Mountain Detection Robot CAD 모델링" },
      { type: "image", label: "Assembly", src: "assets/mountainDetectionRobot/mdr-assembly.PNG", alt: "Mountain Detection Robot 조립 구조" },
      { type: "image", label: "Camera", src: "assets/mountainDetectionRobot/mdr-camera.PNG", alt: "Mountain Detection Robot 카메라 탐지 화면" },
      { type: "video", label: "LiDAR", src: "assets/mountainDetectionRobot/mdr-lidar.mp4" },
      { type: "image", label: "GPS", src: "assets/mountainDetectionRobot/mdr-gps.PNG", alt: "Mountain Detection Robot GPS 화면" }
    ]
  },
  {
    id: "ros",
    number: "Project 04",
    title: "Custom ROS Mapping Robot",
    categories: ["robotics", "mapping"],
    featured: false,
    thumbnail: null,
    summary: "직접 구성한 모터·LiDAR·전원 시스템을 ROS 명령과 연결한 모바일 매핑 플랫폼입니다.",
    shortSummary: "ROS 명령과 LiDAR 매핑을 연결한 커스텀 모바일 플랫폼입니다.",
    tags: ["ROS", "YDLidar", "Serial", "Motor Control"],
    lead: "상용 플랫폼이 아닌 커스텀 이동 로봇에서 Teleoperation, 모터 제어와 LiDAR 매핑 흐름을 구성한 프로젝트입니다.",
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
    architectureFlow: false,
    architecture: [
      { title: "Keyboard Teleop", subtitle: "User Input", description: "주행 명령 입력" },
      { title: "cmd_vel", subtitle: "Velocity Command", description: "속도 명령 전달" },
      { title: "ROS Node", subtitle: "Control Bridge", description: "명령 변환·중계" },
      { title: "Serial / Arduino", subtitle: "Motor Control", description: "구동 명령 전달" },
      { title: "Motor & LiDAR", subtitle: "Drive & Mapping", description: "주행·지도 시각화" }
    ],
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
    number: "Project 05",
    title: "Line-Tracing Cleaning Robot",
    categories: ["robotics"],
    featured: false,
    thumbnail: null,
    summary: "다중 컬러 센서와 엔코더 모터를 이용해 여러 색상의 경로를 순환하며 청소하도록 구성한 로봇입니다.",
    shortSummary: "다중 컬러 라인을 따라 반복 주행하는 청소 로봇입니다.",
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
    architectureFlow: true,
    architecture: [
      { title: "Color Sensors", subtitle: "Line Detection", description: "바닥 색상 감지" },
      { title: "TCA9548A", subtitle: "I2C Multiplexer", description: "센서 채널 분리" },
      { title: "Arduino Mega", subtitle: "State Machine", description: "경로 상태 판단" },
      { title: "Motor Driver", subtitle: "Motion Control", description: "주행 방향 제어" },
      { title: "Cleaning Unit", subtitle: "Encoder Drive", description: "청소·다음 경로 이동" }
    ],
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
    id: "printer",
    number: "Project 03",
    title: "DIY Delta 3D Printer",
    categories: ["mechanical"],
    featured: true,
    thumbnail: { src: "assets/delta3Dprinter/delta-modeling-1.PNG", alt: "DIY Delta 3D Printer CAD 모델링" },
    summary: "PETG 브라켓과 ABS 툴헤드·핫엔드 마운트를 직접 설계하며 조립과 개선을 반복하고 있는 델타 3D 프린터 프로젝트입니다.",
    tags: ["Klipper", "TMC2209", "24V System", "Mechanical Build"],
    lead: "부품 선정, 모델링, 조립과 재설계를 반복하며 완성도를 높이고 있는 개인 제작 프로젝트입니다.",
    info: [
      { label: "Period", value: "TODO: 확인 필요" },
      { label: "Team", value: "Personal Build" },
      { label: "Role", value: "Mechanical Design · Component Selection · System Integration" },
      { label: "Type", value: "Ongoing Personal Build" }
    ],
    story: [
      "Ø310mm 빌드 베드, 24V 전원, MKS Gen V2.1 보드, TMC2209 드라이버와 Klipper 기반 시스템을 구성했습니다.",
      "베드 체결, 전원 용량, 배선, 냉각과 델타 기구 보정을 개별 부품이 아닌 하나의 장비 시스템으로 검토했습니다.",
      "PETG 브라켓과 ABS 툴헤드·핫엔드 마운트를 직접 설계하고 외주 3D 프린팅으로 제작했습니다.",
      "툴헤드 배선을 정리하기 위한 PCB도 EasyEDA로 설계·제작해 적용했습니다.",
      "세 차례 어셈블리를 진행했지만 부품 개선이 필요할 때마다 다시 분해하고 모델을 수정해 재주문했습니다. 현재 하부 시스템 구성을 확정했으며, 최종 어셈블리와 Klipper 설정을 다음 단계로 진행하고 있습니다."
    ],
    problem: "부품을 실제 조립한 뒤에야 드러나는 간섭과 치수 문제를 해결하면서, 열팽창과 원형 베드 체결, 24V 고전류 배선까지 함께 고려해야 했습니다.",
    approach: "6061 알루미늄 캐리어와 6점 지지 베드 구조를 검토하고, 어셈블리 과정에서 발견한 간섭을 모델에 반영해 부품을 반복 개선했습니다. 제어 구성은 TMC2209와 Klipper/Mainsail을 기준으로 선정했습니다.",
    architectureFlow: false,
    architecture: [
      { title: "Delta Frame", subtitle: "Motion Structure", description: "3축 델타 운동" },
      { title: "Build Bed", subtitle: "Ø310 / Heater Ø300", description: "출력면 가열·지지" },
      { title: "MKS Gen V2.1", subtitle: "Control Board", description: "구동 신호 제어" },
      { title: "TMC2209", subtitle: "Motor Driver", description: "스테퍼 모터 구동" },
      { title: "Klipper / Mainsail", subtitle: "Firmware & UI", description: "보정·출력 관리" }
    ],
    challenges: [
      "가열 과정의 열팽창을 고려해 베드를 안정적으로 체결해야 하는 문제",
      "약 14.6A급 24V 부하를 고려한 배선과 전원 구성이 필요한 문제",
      "델타 구조의 기하학적 오차와 베드 평면을 보정해야 하는 문제"
    ],
    resultLesson: "현재 진행 중인 프로젝트로, 세 차례의 조립과 분해를 거치며 하부 시스템과 주요 부품 배치를 확정했습니다. 완성된 프린터의 성능을 과장하기보다, 실제 조립에서 발견한 간섭을 모델링과 부품 재제작으로 해결하는 반복 설계 과정을 중심으로 기록하고 있습니다.<br><br><strong>다음 단계:</strong> 최종 어셈블리, Klipper 설정, 캘리브레이션과 출력 검증",
    media: [
      { type: "image", label: "Modeling 1", src: "assets/delta3Dprinter/delta-modeling-1.PNG", alt: "DIY Delta 3D Printer CAD 모델링 전체 모습" },
      { type: "image", label: "Modeling 2", src: "assets/delta3Dprinter/delta-modeling-2.PNG", alt: "DIY Delta 3D Printer CAD 모델링 상세" },
      { type: "placeholder", label: "TODO", text: "추가 미디어 예정" }
    ]
  }
];
