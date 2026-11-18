import { ServiceDetailPage, serviceMetadata } from "@/components/service-detail-page";
import { getServicePage } from "@/data/services-content";

const service = getServicePage("custom-patches");

export const metadata = serviceMetadata(service);

export default function CustomPatchesPage() {
  return <ServiceDetailPage service={service} />;
}
