export type Project = {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  demoUrl?: string
  videoUrl?: string
  imageUrl?: string
  githubUrl: string
  languages: string[]
  date: string
  category?: string
  categoryEn?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Ứng dụng tìm trọ",
    titleEn: "Room Finding Application",
    description: "Giải quyết vấn đề tìm phòng trọ, giúp người dùng tìm phòng ở gần mình và giá tốt, cải thiện nhu cầu nơi ở.",
    descriptionEn: "Solve the problem of finding boarding rooms, help users find rooms near them and at good prices, improve housing needs.",
    demoUrl: "",
    videoUrl: "",
    imageUrl: "/hinhapp.jpg",
    githubUrl: "https://github.com/quochuy1012/app_tim_tro.git",
    languages: ["Flutter", "Firebase", "Dart"],
    date: "2024-12-01",
    category: "Mobile App",
    categoryEn: "Mobile App",
  },
  {
    id: "2",
    title: "Website quản lý thư viện",
    titleEn: "Library Management Website",
    description: "Hệ thống quản lý thư viện được xây dựng bằng ASP.NET Core, hỗ trợ quản lý sách, độc giả, mượn trả sách một cách hiệu quả.",
    descriptionEn: "Library management system built with ASP.NET Core, supporting efficient book, reader, and loan management.",
    demoUrl: "",
    videoUrl: "",
    imageUrl: "/thuvien.jpg",
    githubUrl: "",
    languages: ["ASP.NET Core", "C#", "SQL Server"],
    date: "2024-11-15",
    category: "Web Application",
    categoryEn: "Web Application",
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

