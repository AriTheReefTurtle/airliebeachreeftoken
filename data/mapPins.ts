export type PinType = "business" | "beach" | "reef" | "event" | "poi";

export type Pin = {
  id: string;
  name: string;
  type: PinType;
  coordinates: [number, number];
  description: string;
};

export const MAP_PINS: Pin[] = [
  {
    id: "airlie-reef",
    name: "Airlie Beach Reef",
    type: "reef",
    coordinates: [148.7185, -20.2676],
    description: "A vibrant reef near Airlie Beach, home to rich marine life.",
  },
  {
    id: "lagoon",
    name: "Airlie Beach Lagoon",
    type: "poi",
    coordinates: [148.7180, -20.2670],
    description: "A popular swimming spot with clear water and great views.",
  },
  {
    id: "dive-shop",
    name: "Coral Coast Dive Shop",
    type: "business",
    coordinates: [148.7201, -20.2655],
    description: "Local dive shop offering reef tours and equipment rentals.",
  },
  {
    id: "reef-cleanup",
    name: "Reef Cleanup Mission",
    type: "event",
    coordinates: [148.7250, -20.2700],
    description: "Help clean debris from the reef and earn XP + AIRLIE.",
  },
];
