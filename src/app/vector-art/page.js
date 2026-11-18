import { ServiceDetailPage, serviceMetadata } from "@/components/service-detail-page";
import { getServicePage } from "@/data/services-content";

const service = getServicePage("vector-art");

export const metadata = serviceMetadata(service);

export default function VectorArtPage() {
  return <ServiceDetailPage service={service} />;
}
