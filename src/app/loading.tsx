import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading({ className }: { className?: string }) {
  // You can add any UI inside Loading, including a Skeleton.
  return <Skeleton className={className} />;
}
