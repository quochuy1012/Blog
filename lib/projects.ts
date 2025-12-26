export type Project = {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  videoUrl?: string
  imageUrl?: string
  githubUrl: string
  languages: string[]
  date: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Hệ thống Quản lý Blog",
    titleEn: "Blog Management System",
    description: "Hệ thống quản lý blog với đầy đủ tính năng CRUD, authentication, và markdown editor.",
    descriptionEn: "Blog management system with full CRUD features, authentication, and markdown editor.",
    videoUrl: "",
    imageUrl: "",
    githubUrl: "https://github.com/quochuy1012/Blog",
    languages: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2024-12-01",
  },
  // Thêm các dự án khác ở đây khi cần
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

