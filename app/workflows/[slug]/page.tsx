import { notFound } from "next/navigation";
import { WorkflowDetail } from "@/components/workflow-detail";
import { workflows } from "@/lib/data";

export function generateStaticParams() {
  return workflows.map((workflow) => ({ slug: workflow.slug }));
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workflow = workflows.find((item) => item.slug === slug);

  if (!workflow) {
    notFound();
  }

  return <WorkflowDetail workflow={workflow} />;
}
