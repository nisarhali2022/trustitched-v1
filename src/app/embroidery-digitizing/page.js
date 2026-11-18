import { ServiceDetailPage, serviceMetadata } from "@/components/service-detail-page";
import { getServicePage } from "@/data/services-content";

const service = getServicePage("embroidery-digitizing");

export const metadata = serviceMetadata(service);

export default function EmbroideryDigitizingPage() {
  return <ServiceDetailPage service={service} />;
}
