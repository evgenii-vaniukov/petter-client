export const filters = [
  {
    id: "adoptionStatus",
    name: "Adoption Status",
    options: [
      { value: "true", label: "Adopted" },
      { value: "false", label: "Available" },
    ],
  },
  {
    id: "type",
    name: "Type",
    options: [
      { value: "DOG", label: "Dog" },
      { value: "CAT", label: "Cat" },
      { value: "FISH", label: "Fish" },
      { value: "BIRD", label: "Bird" },
      { value: "OTHER", label: "Other" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "mini", label: "Mini" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
];
