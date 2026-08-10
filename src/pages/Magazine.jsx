import PublicationPage from '@/components/research/PublicationPage'

export default function Magazine() {
  return (
    <PublicationPage
      eyebrow="Research · Magazine"
      title="APDCH Magazine"
      description="A curated publication showcasing academic life, student creativity, institutional achievements, clinical learning, and campus stories."
      editionLabel="Magazine"
      editions={[
        {
          year: '2026',
          title: 'Revista 2026',
          pdf: 'https://apdch.in/wp-content/uploads/2026/07/Revista-2k26.pdf',
        },
        {
          year: '2025',
          title: 'Revista 2025',
          pdf: 'https://apdch.in/wp-content/uploads/2025/07/revista-2025.pdf',
        },
        {
          year: '2024',
          title: 'Revista 2024',
          pdf: 'https://apdch.in/wp-content/uploads/2025/07/Rivista-2024.pdf',
        },
        {
          year: '2023',
          title: 'Revista 2023',
          pdf: 'https://apdch.in/wp-content/uploads/2025/07/Revista-2023.pdf',
        },
      ]}
    />
  )
}
