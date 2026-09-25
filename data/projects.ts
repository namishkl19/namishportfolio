export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  futureScope: string;
  github?: string;
  demo?: string;
  documentation?: string;
};

export const projects: Project[] = [
  {
    slug: 'automated-traction-motor-inductance-measurement-system',
    title: 'Automated Traction Motor Inductance Measurement System',
    summary: 'ESP32-based automation system for traction motor inductance measurement and phase selection.',
    problem: 'Manual inductance measurement was slow, inconsistent, and required repetitive operator intervention.',
    solution: 'A relay-switched automated workflow coordinates LCR metering and phase selection to standardize verification.',
    architecture: 'ESP32 orchestrates relays, measurement logic, and operator feedback while the LCR meter performs the core electrical measurement.',
    technologies: ['ESP32', 'Relay Modules', 'LCR Meter', 'Embedded C'],
    features: ['Automated phase selection', 'Reduced manual verification', 'Testing consistency improvements'],
    challenges: ['Noise isolation during switching', 'Relay timing coordination', 'Measurement repeatability'],
    futureScope: 'Add calibration tracking, data logging, and dashboard visualization for repeated plant use.',
    github: 'https://github.com/namishkl19',
    documentation: '/documents/traction-system.pdf',
  },
  {
    slug: 'glof-early-warning-system',
    title: 'GLOF Early Warning System',
    summary: 'A glacier-lake monitoring concept that combines environmental sensing with predictive flood analysis.',
    problem: 'Glacial lake outburst floods need earlier detection and better local monitoring for disaster response.',
    solution: 'Sensor streams are combined with an ML model to estimate flood risk and communicate warning signals.',
    architecture: 'ESP32, DHT11, water level sensing, and a predictive ML layer for alert classification.',
    technologies: ['ESP32', 'Arduino', 'DHT11', 'Water Level Sensors'],
    features: ['Risk monitoring', 'Sensor fusion', 'ML-based flood classification'],
    challenges: ['Environmental variability', 'Sensor stability', 'Alert threshold tuning'],
    futureScope: 'Add satellite-data input, cloud telemetry, and region-specific alert policies.',
    github: 'https://github.com/namishkl19',
    demo: '/projects/glof-early-warning-system',
  },
  {
    slug: 'ai-based-eye-strain-detection',
    title: 'AI Based Eye Strain Detection',
    summary: 'Wearable blink-rate and ambient-light monitoring system for eye fatigue awareness.',
    problem: 'Long screen sessions cause eye strain, but users rarely get timely, actionable feedback.',
    solution: 'A wearable device measures blink rate and light exposure and processes the data on an ESP32.',
    architecture: 'ESP32 with IR sensor and LDR tracks blink behavior and ambient light to estimate eye strain conditions.',
    technologies: ['ESP32', 'IR Sensor', 'LDR', 'Embedded C'],
    features: ['Wearable form factor', 'Real-time monitoring', 'Symptom estimation'],
    challenges: ['Signal noise', 'Comfort constraints', 'Calibration consistency'],
    futureScope: 'Connect to mobile notifications and adaptive break reminders.',
    github: 'https://github.com/namishkl19',
  },
];
