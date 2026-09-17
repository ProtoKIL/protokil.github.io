// Company-facing engineering evidence. Selection notes describe fit to the
// documented requirements; they do not imply a recorded comparison study.
const projectEngineering = {
  mountain: {
    role: "기구 설계 · 센서 배치 · 배선 및 하드웨어 통합 · 발표",
    decisions: "전체 부품을 CAD에서 사전 배치해 중량·공간 간섭을 검토.\nLiDAR에는 우천 유입을 줄이는 하우징을 설계. (방수 성능은 검증 X)",
    system: [
      ["MECHANICAL", "무한궤도 플랫폼 · 센서 마운트 · 하우징"],
      ["DRIVE", "DC 주행 모터 · 카메라 추적용 서보"],
      ["ELECTRICAL", "24V 배터리 → 전압 변환 → Jetson·복수 센서"]
    ],
    components: [
      ["LiDAR + Depth / Thermal", "지형 매핑·인체/장애물 탐지·열원 감지로 센서 역할을 분리."],
      ["24V Battery + Converter", "구동계와 센서의 전원을 분리 배분하고 전압 조건에 맞춰 연결."],
      ["Custom Sensor Housing", "좁은 플랫폼에 센서를 배치하고 우천 유입을 줄이는 기구를 직접 설계."]
    ],
    tools: [["Inventor", "어셈블리·센서 배치·간섭 검토"], ["ROS / LiDAR", "매핑 환경과 하드웨어 연동"], ["AI Depth CAM", "인체 추적·장애물 탐지 센서 연동"], ["Thermal CAM", "열원 감지 센서 연동"]],
    improvement: "센서 추가로 커진 중량·배치 제약을 사전 어셈블리로 검토.\n개별 탐지 기능은 확보했지만 센서 간 완전 연동과 자율 주행 검증 진행 필요."
  },
  basketball: {
    role: "팀장 · 슈팅 기구 및 로봇 시스템 설계 · OpenCV 비전 · 제어 통합",
    decisions: "제한된 모터 출력: 슈팅 기구의 기계적 이득을 보정하기 위해\n링크 길이 및 이펙터 반복 재설계.\n단안 거리 추정을 보정: 골대 형상의 세로 길이와 초점거리를 활용.\n슈팅 신호: 중심 좌표가 20프레임 연속 안정될 때.",
    system: [
      ["MECHANICAL", "슈팅 메커니즘 · 카메라/구동부 배치"],
      ["DRIVE", "이동·슈팅 모터 · 엔코더/PID · 서보"],
      ["ELECTRICAL", "카메라 → Raspberry Pi → Arduino → 모터 드라이버"]
    ],
    components: [
      ["Raspberry Pi + USB Camera", "임베디드 영상 입력·처리 담당. 연산 제약에 맞춰 경량 OpenCV로 전환."],
      ["Encoder Motor", "회전 속도 피드백을 PID 슈팅 제어에 사용해 발사 조건을 조정."],
      ["Custom Shooting Mechanism", "작은 모터의 출력 제약을 기구적 이득 조정으로 보완. 직접 설계·조립."]
    ],
    tools: [["Inventor", "기구 설계·어셈블리"], ["Python / OpenCV", "형상·거리·정렬 판단"], ["Arduino", "모터·서보·PID 제어"]],
    improvement: "YOLOv5 추론 지연 → HSV·Canny·contour 처리로 전환. 좌표 흔들림 → 20프레임 연속 안정 조건 추가."
  },
  printer: {
    role: "기구 설계 · 부품 선정 · 툴헤드 PCB · 외주 제작 및 조립",
    decisions: "Ø310 베드의 지지·열팽창과 24V 배선을 함께 검토.\nPETG 브라켓, ABS 툴헤드 마운트와 배선 정리용 PCB를 직접 설계해 외주 제작.",
    system: [
      ["MECHANICAL", "델타 프레임 · 6점 베드 지지 · 툴헤드"],
      ["DRIVE", "스테퍼 모터 · TMC2209"],
      ["ELECTRICAL", "24V 전원 · MKS Gen V2.1 · 툴헤드 PCB"]
    ],
    components: [
      ["TMC2209 + Klipper", "스테퍼 구동·델타 기구 보정에 적용. 설정·레벨링 완료, 출력 시험 전."],
      ["6061 Carrier / Ø310 Bed", "원형 출력면의 지지와 가열 조건을 함께 검토한 베드 구조."],
      ["PETG / ABS Custom Parts", "브라켓·툴헤드/핫엔드 마운트 직접 설계. 외주 3D 프린팅 후 조립."]
    ],
    tools: [["Inventor", "부품·전체 어셈블리 설계"], ["EasyEDA", "툴헤드 PCB·제작 데이터"], ["Klipper / Mainsail", "보정·출력 관리 구성"]],
    improvement: "세 차례 조립·분해에서 발견한 간섭을 CAD에 반영하고 부품을 재제작.\n출력 시험만 남겨두고 있음."
  },
  cleaning: {
    role: "프로그래밍 · 경로/흡입 제어 · 센서 구조 개선 · 시스템 통합",
    decisions: "5단계 위치 오차와 이탈 시간을 PID에 반영.\n센서 높이를 낮추는 홀더 추가, 흡입관은 내부 서포트에 먼지가 걸리지 않도록 분할 출력·접합.",
    system: [
      ["MECHANICAL", "센서 홀더 · 분할 흡입관 · 하부 먼지함"],
      ["DRIVE", "엔코더 주행 모터 · 고전력 흡입 모터"],
      ["ELECTRICAL", "컬러 센서 → I2C MUX → Arduino → 구동/SSR"]
    ],
    components: [
      ["TCA9548A + TCS34725 ×3", "동일 I2C 주소를 채널로 분리해 세 센서를 개별 취득."],
      ["SSR + 6S6P Battery", "24V·13A 이상 흡입 모터의 전력 공급과 별도 스위칭을 구성."],
      ["Custom Holder / Duct", "센서 감지 거리와 흡입관 내부 장애물을 줄이도록 구조 변경·제작."]
    ],
    tools: [["Inventor", "배터리, 센서 등 홀더 및 흡입관 설계"], ["Arduino", "상태 흐름·PID·흡입 제어"], ["CAD / Laser Cutting", "로봇 플랫폼 제작"]],
    improvement: "인식 오류에 따른 경로 이탈 → 센서 홀더로 바닥 간격 축소. U턴 중 바퀴 분리 → 체결 구조 보완."
  },
  ros: {
    role: "커스텀 플랫폼 기구 설계·조립 · ROS 2 환경 구축 · LiDAR 시각화",
    decisions: "LiDAR·컴퓨팅 보드·엔코더 모터를 탑재하는 커스텀 플랫폼을 설계·조립하였음.\nROS 명령을 내장 MCU로 전달하는 제어 구조.",
    system: [
      ["MECHANICAL", "커스텀 이동 플랫폼 · LiDAR/보드 마운트"],
      ["DRIVE", "엔코더 모터 · L298N · 내장 Arduino"],
      ["ELECTRICAL", "LattePanda / ROS 2 ↔ LiDAR · MCU 연결 검토"]
    ],
    components: [
      ["YDLidar X4 Pro", "LaserScan 데이터를 RViz2에서 시각화해 매핑 입력을 확인."],
      ["LattePanda Alpha", "ROS 환경과 내장 MCU 구동 연동 검토에 사용. 모터 연동은 미완료."],
      ["Custom Mobile Platform", "센서·보드·구동계를 한 플랫폼에 배치하도록 직접 모델링·조립."]
    ],
    tools: [["Inventor", "플랫폼 모델링·부품 배치"], ["Ubuntu 24.04 / ROS 2 Jazzy", "실행 환경 구축"], ["RViz2", "LaserScan 시각화"]],
    improvement: "rosserial의 ROS 2 직접 연동 제약을 확인, 환경 전환은 기간 내 완료하지 못했음.\n후속 연결 방식으로 micro-ROS 또는 별도 시리얼 브릿지를 검토."
  },
  lockin: {
    role: "전체 회로·PCB 배선·Gerber 설계 · 제작 외주·납땜 · 보드 실험 · 논문 제1저자",
    decisions: "교수님과 논의한 블록도를 전체 회로와 PCB로 구현했음.\nPSD1·3의 피드백으로 TPS/QPS 위상을 조절하고, PSD2·LP2에서 DC 측정 출력을 얻도록 구성.",
    system: [
      ["SIGNAL", "센서 → LIA → DC 출력"],
      ["PHASE", "TPS/QPS · PSD · LP · 피드백 루프"],
      ["HARDWARE", "아날로그 PCB · Comparator 기준 사각파 · 센서 모듈"]
    ],
    components: [
      ["LF411CP · Op Amp", "FET 입력의 높은 입력 임피던스·낮은 바이어스 전류가 미약 신호 증폭과 능동 필터 구성에 적합.", "https://www.ti.com/product/LF411"],
      ["AD633ANZ · Multiplier", "4상한 아날로그 곱셈으로 센서·기준 신호의 부호를 유지. PSD의 DC·2f 성분 중 LP로 DC를 추출.", "https://www.analog.com/en/products/ad633.html"],
      ["Comparator / Tunable RC", "위상 정렬용 사각파를 생성하고 저항·커패시터 조정으로 필터와 위상 천이 회로를 튜닝."]
    ],
    tools: [["EasyEDA", "회로·PCB 배선·Gerber"], ["Hand Soldering", "부품 실장·보드 제작"], ["Oscilloscope", "구간별 파형·위상 측정"], ["Function / Arbitrary Waveform Generator", "시험 입력 신호 생성"], ["PSU / Multimeter", "전원 공급·전압/연결 확인"]],
    improvement: "Passive HP의 비정상 위상 천이 구간을 바이패스했음.\nActive BP 후 19.63° 지연은 RC를 반복 조정해 직교 위상(90°)과 안정적인 PSD 신호를 확보.\nTPS의 미세 전압 변화 민감성도 확인하였음."
  }
};

portfolioProjects.push({
  id: "lockin",
  number: "Project 06",
  title: "Lock-in Amplifier PCB",
  categories: ["analog circuit", "research"],
  thumbnail: { src: "assets/lockInAmplifier/pags-assem.png", alt: "직접 설계·납땜한 Photo-Acoustic Gas Sensor 락인앰프 PCB 완성본" },
  lead: "광음향 가스센서의 미약 신호 검출을 위한 아날로그 락인앰프 PCB 설계·제작·시험",
  info: [
    { label: "Period", value: "2025.01 - 2025.10" },
    { label: "Team", value: "Faculty-supervised Research" },
    { label: "Role", value: "Circuit / PCB Design · Board Test · First Author" },
    { label: "Type", value: "Undergraduate Research" }
  ],
  problem: "센서와 기준 신호의 위상을 정렬하고 필터·전원 변화 속에서도 PSD 출력을 안정적으로 확보.",
  challenges: ["필터 통과 후 위상 지연과 TPS의 전압 민감성","설계값과 실측 파형 차이를 구간별로 추적"],
  result: "RC 튜닝으로 90° 위상차와 안정적인 PSD 신호를 확보.\n매주 실험 결과를 보고하고 제1저자로 논문을 완성.\n2024, 2025 추계 학술대회에서 포스터 부문 발표 진행.",
  publication: { url: "https://www.dcollection.net/handler/chains/200000975334", label: "논문 · 상세 파형/주파수 응답 ↗" },
  relatedBuild: "연계 제작: Helmholtz 공진 셀 도안·외주, 스프링강 Optical Chopper 경량화·특수 가공, 전체 센서 모듈 하우징 설계.",
  media: [
    { type: "image", label: "Overview", caption: "PCB Assembly · 부품 실장 완성본", src: "assets/lockInAmplifier/pags-assem.png", alt: "PAGS(Photo-Acoustic Gas Sensor)용 락인앰프 PCB 부품 실장 완성본" },
    { type: "image", label: "Bare PCB", caption: "Bare PCB · 소자 실장 전 기판", src: "assets/lockInAmplifier/pags-pcb.PNG", alt: "소자가 납땜되지 않은 PAGS 신호 처리 PCB" },
    { type: "image", label: "Testing", caption: "Testing · 입력 신호·파형 계측", src: "assets/lockInAmplifier/pags-testing.PNG", alt: "오실로스코프·파형발생기·파워서플라이를 연결한 신호 처리 보드 시험" },
    { type: "image", label: "Cell CAD", src: "assets/lockInAmplifier/pags-CAD.PNG", alt: "공진 셀 금형 외주 제작 당시 업체에 발송한 CAD 도면 모음" },
    { type: "image", label: "Cell", caption: "Cell · 외주 제작 공진 셀", src: "assets/lockInAmplifier/pags-cell.PNG", alt: "직접 설계한 도면을 바탕으로 외주 제작된 Helmholtz 공진 셀" },
    { type: "image", label: "Chopper", caption: "Chopper · 스프링강 제작본", src: "assets/lockInAmplifier/pags-chopper.PNG", alt: "스프링강 소재로 제작한 광학 초퍼" },
    { type: "image", label: "Module Modeling", src: "assets/lockInAmplifier/pags-module-modeling.png", alt: "초퍼와 공진 셀이 어셈블리된 PAGS 센서 모듈 모델링" },
    { type: "image", label: "Signal Flow", caption: "Signal Flow · 셀·신호 처리 체계", src: "assets/lockInAmplifier/pags-signal-flow.png", alt: "PAGS 셀 구조와 위상 정렬·측정·신호 처리 체계를 보여주는 모식도" }
  ]
});
