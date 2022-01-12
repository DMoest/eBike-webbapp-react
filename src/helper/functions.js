export function getBikeStatusColor(bike) {
  return bike.status === "available"
    ? "#28C941"
    : bike.status === "in_service"
    ? "#F4D25E"
    : bike.status === "broken"
    ? "#EE6A6A"
    : "#EE6A6A";
}
