import React from 'react';

// Define type for each card
type CardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const cards: CardProps[] = [
  {
    icon: (
      <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-2xl">🔍</span>
      </div>
    ),
    title: 'Strategi Kerja Remote',
    description:
      'Membantu kamu mencari, melamar, dan sukses dalam pekerjaan remote di berbagai platform.',
  },
  {
    icon: (
      <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-2xl">💼</span>
      </div>
    ),
    title: 'Optimasi LinkedIn',
    description:
      'Membantu kamu mengelola LinkedIn agar lebih professional dan menarik perhatian recruiter.',
  },
  {
    icon: (
      <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-2xl">📄</span>
      </div>
    ),
    title: 'Tips Membuat CV',
    description:
      'Rahasia membuat CV dan surat lamaran yang membuat kamu diterima kerja remote!',
  },
  {
    icon: (
      <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-2xl">🔎</span>
      </div>
    ),
    title: 'Analisis Diri',
    description:
      'Mengidentifikasi kekuatan dan kelemahan kamu, membantu fokus pada skill terbaik yang siap dijual.',
  },
  {
    icon: (
      <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-2xl">🛍️</span>
      </div>
    ),
    title: 'Kelas Marketplace',
    description:
      'Membantu kamu untuk mengelola profil freelancer di platform yang tersedia, nasional maupun internasional.',
  },
  {
    icon: (
      <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-2xl">✉️</span>
      </div>
    ),
    title: 'Melamar Pekerjaan Via Email',
    description:
      'Tips membuat lamaran kerja yang menarik perhatian dan dipanggil untuk wawancara.',
  },
];

const SoftSkillsProficiency: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Softskill Proficiency
        </h1>
        <p className="text-xl text-center text-gray-600 mb-10">
          Tingkatkan Kemampuan Interpersonal
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-blue-300 shadow-md rounded-[24px] p-6 flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h2 className="text-lg font-bold mb-2 text-gray-900">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsProficiency;
