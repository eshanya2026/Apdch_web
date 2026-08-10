import PublicationPage from '@/components/research/PublicationPage'

export default function Newsletter() {
  return (
    <PublicationPage
      eyebrow="Research · Newsletter"
      title="APDCH Newsletter"
      description="College updates, academic activities, research milestones, events, achievements, and community initiatives from APDCH."
      editionLabel="Newsletter"
      editions={[
        {
          year: '2025',
          title: 'Volume 8 Issue 2',
          pdf: 'https://apdch.in/wp-content/uploads/2025/05/05-APDCH-Times-December-2025.pdf',
        },
        {
          year: '2024',
          title: 'Volume 8 Issue 1',
          pdf: 'https://apdch.in/wp-content/uploads/2024/07/vol8-issue1_compressed.pdf',
        },
        {
          year: '2024',
          title: 'Volume 7 Issue 2',
          pdf: 'https://apdch.in/wp-content/uploads/2024/04/APDCH-TIMES_-Volume-7-issue-2.pdf',
        },
        {
          year: '2024',
          title: 'Volume 7 Issue 1',
          pdf: 'https://apdch.in/wp-content/uploads/2024/04/APDCH-TIMES_-Volume-7-issue-1.pdf',
        },
        {
          year: '2023',
          title: 'Volume 6 Issue 2',
          pdf: 'https://apdch.in/wp-content/uploads/2023/08/Times-APDCH-26-x38.pdf',
        },
      ]}
    />
  )
}
