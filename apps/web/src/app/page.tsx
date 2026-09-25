import { CreateOpportunityForm } from "@/components/opportunities/create-opportunity-form";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
          <span>🚀 Next.js 16 App Router</span>
          <span>•</span>
          <span>Turbopack</span>
          <span>•</span>
          <span>Tailwind v4</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Job Hunt OS
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Hệ thống quản lý ứng tuyển cá nhân hóa — lưu trữ JD snapshots, theo dõi
          pipeline với chi phí 0 USD và tự chủ dữ liệu 100%.
        </p>
      </div>

      <CreateOpportunityForm />
    </main>
  );
}
