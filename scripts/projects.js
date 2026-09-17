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
    thumbnail: { src: "assets/hero/basket-shooting.png", alt: "농구 슈팅 로봇 완성 모습" },
    summary: "임베디드 환경의 연산 한계를 분석하고 OpenCV 기반 경량 비전 파이프라인과 슈팅 기구를 통합한 로봇입니다.",
    tags: ["OpenCV", "Raspberry Pi", "Arduino", "Servo Control", "Encoder / PID"],
    lead: "OpenCV 비전과 거리·정렬 판단, 슈팅 제어를 통합한 농구 로봇",
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
    problem: "제한된 Raspberry Pi 연산 성능과 모터 출력 안에서\n골대를 안정적으로 인식하고 발사해야 했음.",
    approach: "YOLOv5 대신 HSV·Canny·contour 기반 파이프라인을 적용하고 단안 거리 추정을 반복 보정했습니다. 중심 좌표가 20프레임 연속 안정될 때만 슈팅하도록 설계했습니다.",
    architectureFlow: true,
    architecture: [
      { title: "USB Camera", subtitle: "Vision Input", description: "카메라 영상 입력" },
      { title: "Raspberry Pi", subtitle: "OpenCV", description: "골대 형상 검출" },
      { title: "Center & Distance", subtitle: "Alignment Logic", description: "중심·거리 좌표 계산" },
      { title: "Arduino Mega", subtitle: "Wheel Motor", description: "슈팅 위치로 이동" },
      { title: "Shooting Motor", subtitle: "PID", description: "PID 슈팅 제어" }
    ],
    challenges: ["YOLOv5 추론 지연으로 실시간 제어 주기가 불안정했음.","조명 변화와 좌표 흔들림이 오발 신호 유발."],
    result: "100회 이상 비공식 반복 시험에서 약 60회 이상 성공을 확인.",
    lesson: "YOLOv5 추론 지연은 경량 OpenCV 처리로, 좌표 흔들림은 20프레임 안정 조건으로 보완했습니다.",
    media: [
      { type: "image", label: "Overview", src: "assets/hero/basket-shooting.png", alt: "농구 슈팅 로봇 완성 모습" },
      { type: "video", label: "Result", src: "assets/basketBallRobot/basket-result.mp4" },
      { type: "video", label: "Camera Detection", src: "assets/basketBallRobot/basket-scanning.mp4" },
      { type: "image", label: "Modeling", src: "assets/basketBallRobot/basket-modeling.png", alt: "농구 슈팅 로봇 CAD 모델링" },
      { type: "video", label: "Assembly", src: "assets/basketBallRobot/basket-assembly.mp4" },
      { type: "image", label: "System", src: "assets/basketBallRobot/basket-system.png", alt: "농구 슈팅 로봇 시스템 구성", className: "diagram" },
      { type: "video", label: "Test 1", src: "assets/basketBallRobot/basket-demo-1.mp4" },
      { type: "video", label: "Test 2", src: "assets/basketBallRobot/basket-demo-2.mp4" },
      { type: "video", label: "Test 3", src: "assets/basketBallRobot/basket-demo-3.mp4" }
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
    lead: "산악 탐지·매핑을 위한 다중 센서 로봇 프로토타입",
    info: [
      { label: "Period", value: "2025.06 - 2025.12" },
      { label: "Team", value: "6 members" },
      { label: "Role", value: "Mechanical Design · Hardware Integration · Presentation" },
      { label: "Type", value: "Capstone Design" }
    ],
    story: [
      "산악 환경은 경사, 장애물, 시야 차단과 비정형 지형 때문에 드론이나 실내·평지용 이동 로봇보다 복합적인 센서 구성과 구조 안정성이 필요합니다. 장시간 순찰을 고려해 대용량 배터리를 탑재할 수 있는 이동 플랫폼을 설계하는 데 의의를 두었습니다.",
      "LiDAR, Depth Camera, 열화상 센서와 이동 플랫폼이 서로 어떤 정보를 담당하고 어떻게 연결되는지를 중심으로 전체 시스템을 구성했습니다."
    ],
    problem: "비정형 지형 주행과 사람 탐지를 위해 복수 센서를 배치하고, 중량·전원·방수 제약을 함께 해결해야 했음.",
    approach: "LiDAR·Depth·Thermal·GPS의 역할을 나누고 전체 부품을 CAD 어셈블리해 무한궤도 플랫폼에 통합했습니다. LiDAR에는 우천 유입을 줄이는 유선형 하우징을 적용했습니다.",
    architectureFlow: false,
    architecture: [
      { title: "Mobile Platform", subtitle: "Tracked Drive", description: "비정형 지형 이동" },
      { title: "LiDAR", subtitle: "Scanning & Mapping", description: "주변 지형 매핑" },
      { title: "Depth Camera", subtitle: "AI Detection", description: "인체·장애물 탐지" },
      { title: "Thermal Camera", subtitle: "Heat Detection", description: "인체·화재 열원 감지" },
      { title: "Detection Logic", subtitle: "GPS & LoRa", description: "위치 공유·관제 연결" }
    ],
    challenges: ["센서별 시야·탐지 범위와 좌표 기준을 함께 고려","센서와 대용량 배터리의 중량을 제한된 공간에 배치"],
    result: "LiDAR 매핑, AI Camera 인체 추적·장애물 감지,\nThermal 열원 감지와 GPS 위치 표시를 구현.\n로봇 어셈블리 및 서보모터 등 구동을 성공하였으나\n3차원 매핑, SLAM 등의 과제를 남겨둔 상태.",
    lesson: "기구 설계·배선·하드웨어 통합을 담당하며 다분야 결과물을 하나의 프로토타입으로 연결했습니다.",
    media: [
      { type: "image", label: "Overview", src: "assets/mountainDetectionRobot/mdr-overview.PNG", alt: "Mountain Detection Robot 전체 모습" },
      { type: "video", label: "Result", src: "assets/mountainDetectionRobot/mdr-result-web.mp4" },
      { type: "image", label: "Modeling", src: "assets/mountainDetectionRobot/mdr-modeling.PNG", alt: "Mountain Detection Robot CAD 모델링" },
      { type: "image", label: "Assembly", src: "assets/mountainDetectionRobot/mdr-assembly.PNG", alt: "Mountain Detection Robot 조립 구조" },
      { type: "video", label: "LiDAR", src: "assets/mountainDetectionRobot/mdr-lidar.mp4" },
      { type: "image", label: "Camera", src: "assets/mountainDetectionRobot/mdr-camera.PNG", alt: "Mountain Detection Robot 카메라 탐지 화면" },
      { type: "image", label: "GPS", src: "assets/mountainDetectionRobot/mdr-gps.PNG", alt: "Mountain Detection Robot GPS 화면" },
      { type: "image", label: "Sketch", src: "assets/mountainDetectionRobot/mdr-sketch.PNG", alt: "Mountain Detection Robot 초기 스케치" },
      { type: "image", label: "Presentation", src: "assets/mountainDetectionRobot/mdr-presentation.jpg", alt: "Mountain Detection Robot 하드웨어 제작 및 센서 하우징 설계 발표 장면" }
    ]
  },
  {
    id: "ros",
    number: "Project 05",
    title: "Custom ROS Mapping Robot",
    categories: ["robotics", "mapping"],
    featured: false,
    thumbnail: { src: "assets/rosMappingRobot/ros-overview.png", alt: "Honey Bot ROS 매핑 로봇 완성 모습" },
    summary: "직접 설계한 이동 플랫폼에 ROS 2와 LiDAR 환경을 구축하며 하드웨어·소프트웨어 연동 가능성을 검토한 단기 프로젝트입니다.",
    shortSummary: "ROS 2 환경과 LiDAR 시각화를 검토한 커스텀 모바일 플랫폼입니다.",
    tags: ["ROS 2", "YDLidar", "LattePanda", "Mechanical Design"],
    lead: "커스텀 이동 로봇의 ROS 2 기반 LiDAR 시각화 및 제어 연동 검토",
    info: [
      { label: "Period", value: "2025.06.12 - 2025.06.18" },
      { label: "Team", value: "Personal Project" },
      { label: "Role", value: "Robot System Design · Mechanical Design · ROS 2 Environment Setup" },
      { label: "Type", value: "Ideal Dream Factory Project" }
    ],
    story: [
      "YDLidar X4 Pro, 엔코더 모터와 LattePanda Alpha를 사용한 커스텀 플랫폼을 직접 모델링하고 조립했습니다.",
      "Ubuntu 24.04와 ROS 2 Jazzy 환경에서 YDLidar 데이터의 RViz2 시각화까지 구현했습니다. 이후 rosserial이 ROS 1 기반 패키지임을 확인하고 Foxy·Noetic 병행 환경을 검토했으나, 환경 전환과 모터 제어 연동은 프로젝트 기간 내 완료하지 못했습니다."
    ],
    problem: "일주일 내로 ROS 명령, 시리얼 통신, 모터 제어와 LiDAR 좌표계를 연결.",
    approach: "Ubuntu 24.04·ROS 2 Jazzy에서 YDLidar LaserScan을 RViz2로 시각화하고, teleop·cmd_vel을 MCU로 전달할 구조를 설계했습니다.",
    architectureFlow: false,
    architecture: [
      { title: "Keyboard Teleop", subtitle: "User Input", description: "주행 명령 입력" },
      { title: "cmd_vel", subtitle: "Velocity Command", description: "속도 명령 전달" },
      { title: "ROS Node", subtitle: "Control Bridge", description: "명령 변환·중계" },
      { title: "Serial / Arduino", subtitle: "Motor Control", description: "구동 명령 전달" },
      { title: "Motor & LiDAR", subtitle: "Drive & Mapping", description: "주행·지도 시각화" }
    ],
    challenges: ["LattePanda 내장 MCU와 ROS 2 사이의 통신 방식을 확정해야 함.","OS·ROS 배포판·패키지 호환성을 제작 초기에 검증하지 못하였음."],
    result: "LiDAR 시각화까지 구현했으며 모터 연동과 SLAM은 완료하지 못했음.",
    lesson: "rosserial의 ROS 2 제약을 확인했고 후속 방식으로 micro-ROS 또는 별도 시리얼 브리지를 선정했습니다.",
    media: [
      { type: "image", label: "Overview", src: "assets/rosMappingRobot/ros-overview.png", alt: "Honey Bot ROS 매핑 로봇 완성 모습" },
      { type: "video", label: "Running", src: "assets/rosMappingRobot/ros-running-web.mp4" },
      { type: "video", label: "RViz", src: "assets/rosMappingRobot/ros-rviz-web.mp4" },
      { type: "image", label: "Modeling", src: "assets/rosMappingRobot/ros-modeling.PNG", alt: "Honey Bot ROS 매핑 로봇 CAD 모델링" },
      { type: "image", label: "Structure", src: "assets/rosMappingRobot/ros-description.png", alt: "Honey Bot LiDAR와 구동 부품 구조 설명" },
      { type: "image", label: "System", src: "assets/rosMappingRobot/ros-system.png", alt: "Honey Bot에서 계획한 ROS 2와 내장 Arduino 시스템 흐름" }
    ]
  },
  {
    id: "cleaning",
    number: "Project 04",
    title: "Line-Tracing Cleaning Robot",
    categories: ["robotics"],
    featured: false,
    thumbnail: { src: "assets/linetracingRobot/lcr-overview.png", alt: "Line-Tracing Cleaning Robot 완성 모습" },
    summary: "다중 컬러 센서와 엔코더 모터를 이용해 여러 색상의 경로를 순환하며 청소하도록 구성한 로봇입니다.",
    shortSummary: "다중 컬러 라인을 따라 반복 주행하는 청소 로봇입니다.",
    tags: ["Arduino Mega", "TCS34725", "TCA9548A", "State Machine"],
    lead: "색상 라인을 따라 구간을 이동하며 먼지를 흡입하는 청소 로봇",
    info: [
      { label: "Period", value: "2025.03 - 2025.06" },
      { label: "Team", value: "5 members" },
      { label: "Role", value: "Programming · System Integration · Robot System Design" },
      { label: "Type", value: "Embedded Robotics" }
    ],
    story: [
      "Red, Blue, Light Green, Green 라인을 구분하고 갈색 바닥과의 차이를 이용해 지정된 청소 경로를 반복하도록 구성했습니다.",
      "여러 컬러 센서를 동시에 사용하면서 주행, 커브, U턴과 청소 동작이 이어지는 상태 흐름을 설계했습니다.",
      "24V 13A 이상의 전력이 필요한 흡입 모터를 구동하기 위해 6S6P 배터리 시스템을 구성하고, 별도 스위치 대신 SSR로 흡입 모터를 제어했습니다."
    ],
    problem: "동일 I2C 주소의 컬러 센서 3개를 분리, 센서 편차 속에서도 반복 경로를 안정적으로 주행해야 했음.",
    approach: "TCA9548A로 센서 채널을 분리하고 5단계 위치 오차와 이탈 시간을 PID에 반영했습니다. 센서 홀더와 분할형 흡입관을 재설계하고 SSR로 흡입 모터를 제어했습니다.",
    architectureFlow: true,
    architecture: [
      { title: "Color Sensors", subtitle: "Line Detection", description: "바닥 색상 감지" },
      { title: "TCA9548A", subtitle: "I2C Multiplexer", description: "센서 채널 분리" },
      { title: "Arduino Mega", subtitle: "State Machine", description: "경로 상태 판단" },
      { title: "Motor Driver", subtitle: "Motion Control", description: "주행 방향 제어" },
      { title: "Cleaning Unit", subtitle: "Encoder Drive", description: "청소·다음 경로 이동" }
    ],
    challenges: ["센서 높이·바닥 조건에 따라 색상 인식 오차가 커짐.","커브·U턴·흡입을 하나의 비차단 제어 흐름으로 묶을 필요성."],
    result: "최종 시연에서 주행과 흡입을 구현.\n20회 시험에서 경로 이탈 3회(15%), U턴 실패 1회(5%)를 기록하였음.",
    lesson: "센서 높이와 바퀴 체결 상태가 주행 신뢰성에 직접 영향을 준다는 점을 확인하고 구조를 보완했습니다.",
    media: [
      { type: "image", label: "Overview", src: "assets/linetracingRobot/lcr-overview.png", alt: "Line-Tracing Cleaning Robot 완성 모습" },
      { type: "video", label: "Result", src: "assets/linetracingRobot/lcr-linetracing-web.mp4" },
      { type: "video", label: "Cleaning", src: "assets/linetracingRobot/lcr-cleaning.mp4" },
      { type: "image", label: "System", src: "assets/linetracingRobot/lcr-system.png", alt: "Line-Tracing Cleaning Robot 전원·구동·센서 시스템 구성", className: "diagram" },
      { type: "image", label: "Concept Modeling", src: "assets/linetracingRobot/lcr-modeling.png", alt: "청소 로봇 플랫폼과 주요 부품 배치 개념 모델" },
      { type: "image", label: "Improved Modeling", src: "assets/linetracingRobot/lcr-improved.png", alt: "센서·흡입관·먼지함을 통합한 청소 로봇 개선 CAD 모델" }
    ]
  },
  {
    id: "printer",
    number: "Project 03",
    title: "DIY Delta 3D Printer",
    categories: ["mechanical"],
    featured: true,
    thumbnail: { src: "assets/delta3Dprinter/delta-modeling-1.PNG", alt: "DIY Delta 3D Printer CAD 모델링" },
    summary: "PETG 브라켓과 ABS 툴헤드·핫엔드 마운트를 직접 설계하며 조립과 개선을 반복한 델타 3D 프린터 프로젝트입니다.",
    tags: ["Klipper", "TMC2209", "24V System", "Mechanical Build"],
    lead: "부품 선정부터 모델링·조립·재설계까지 반복한 개인 델타 3D 프린터 프로젝트",
    info: [
      { label: "Period", value: "2025.01 - 2025.09" },
      { label: "Team", value: "Personal Build" },
      { label: "Role", value: "Mechanical Design · Component Selection · System Integration" },
      { label: "Type", value: "Personal Build" }
    ],
    story: [
      "Ø310mm 빌드 베드, 24V 전원, MKS Gen V2.1 보드, TMC2209 드라이버와 Klipper 기반 시스템을 구성했습니다.",
      "베드 체결, 전원 용량, 배선, 냉각과 델타 기구 보정을 개별 부품이 아닌 하나의 장비 시스템으로 검토했습니다.",
      "PETG 브라켓과 ABS 툴헤드·핫엔드 마운트를 직접 설계하고 외주 3D 프린팅으로 제작했습니다.",
      "툴헤드 배선을 정리하기 위한 PCB도 EasyEDA로 설계·제작해 적용했습니다.",
      "세 차례 어셈블리를 진행했지만 부품 개선이 필요할 때마다 다시 분해하고 모델을 수정해 재주문했습니다. 현재 어셈블리와 Klipper 설정, 가열 PID, 델타 기하학 보정과 베드 메쉬 생성을 완료했으며 출력 시험을 남겨두고 있습니다."
    ],
    problem: "조립 후 드러나는 간섭과 치수 오차를 해결하면서\n원형 베드·열팽창·24V 배선을 함께 고려해야 함.",
    approach: "6061 알루미늄 캐리어와 Ø310 베드 구조를 검토하고, 세 차례 조립·분해에서 발견한 간섭을 모델과 부품에 반영했습니다. 제어는 TMC2209·Klipper 기준으로 구성했습니다.",
    architectureFlow: false,
    architecture: [
      { title: "Delta Frame", subtitle: "Motion Structure", description: "3축 델타 운동" },
      { title: "Build Bed", subtitle: "Ø310 / Heater Ø300", description: "출력면 가열·지지" },
      { title: "MKS Gen V2.1", subtitle: "Control Board", description: "구동 신호 제어" },
      { title: "TMC2209", subtitle: "Motor Driver", description: "스테퍼 모터 구동" },
      { title: "Klipper / Mainsail", subtitle: "Firmware & UI", description: "보정·출력 관리" }
    ],
    challenges: ["6점 지지 구조에서 베드 평면과 열팽창을 함께 관리.","실물 조립 결과를 CAD와 부품 재제작에 빠르게 반영해야 했음."],
    result: "하부 시스템과 주요 부품 배치를 확정하고 어셈블리 완료.\n베드 및 툴헤드 가열 PID 적용, Klipper config 작성 완료\n델타 기하학 보정 (레벨링) 완료, 베드 메쉬 생성 완료",
    lesson: "실물 조립 결과를 CAD에 되돌리는 반복 설계의 중요성을 확인했습니다. 설정과 보정을 완료했으며 다음 단계는 출력 시험입니다.",
    media: [
      { type: "image", label: "Modeling", src: "assets/delta3Dprinter/delta-modeling-1.PNG", alt: "DIY Delta 3D Printer CAD 모델링 전체 모습" },
      { type: "image", label: "Modeling 2", src: "assets/delta3Dprinter/delta-modeling-2.PNG", alt: "DIY Delta 3D Printer CAD 모델링 상세" },
      { type: "video", label: "Assembly Video", src: "assets/delta3Dprinter/delta-assem-proto-1.mp4" },
      { type: "image", label: "Electrical Assembly", src: "assets/delta3Dprinter/delta-elecassem.PNG", alt: "DIY Delta 3D Printer 하부 전장부 조립 모습" },
      { type: "video", label: "Parts Video", src: "assets/delta3Dprinter/delta-parts.mp4", poster: "assets/delta3Dprinter/delta-parts.png" },
      { type: "image", label: "Parts", src: "assets/delta3Dprinter/delta-parts.png", alt: "DIY Delta 3D Printer 제작 부품" },
      { type: "image", label: "Toolhead", src: "assets/delta3Dprinter/delta-toolhead.png", alt: "DIY Delta 3D Printer 툴헤드와 핫엔드 마운트" },
      { type: "image", label: "Toolhead PCB", src: "assets/delta3Dprinter/delta-toolhead-pcb.PNG", alt: "DIY Delta 3D Printer 툴헤드 배선 정리용 PCB" },
      { type: "video", label: "Calibration", src: "assets/delta3Dprinter/delta-calibrate-web.mp4", thumbnail: "assets/delta3Dprinter/delta-calibrate-web-thumb.jpg", poster: "assets/delta3Dprinter/delta-calibrate-web-thumb.jpg" }
    ]
  }
];
